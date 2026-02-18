import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  RadioGroup,
  Radio,
  FormLabel,
  Paper,
  Stack,
} from "@mui/material";
import { Formik, Form, Field, FieldProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../redux/selectors/cartSelectors";
import { clearCart } from "../redux/cartSlice";
import TermsDialog from "./TermsDialog";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  dni: string;
  phone: string;
  address: string;
  city: string;
  acceptTerms: boolean;
  deliveryMethod: "local" | "domicilio" | "";
}
const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string().required("El nombre es obligatorio"),
  lastName: Yup.string().required("El apellido es obligatorio"),
  dni: Yup.string()
    .matches(/^\d+$/, "Solo se permiten números")
    .length(8, "Debe tener 8 dígitos")
    .required("El DNI es obligatorio"),
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  phone: Yup.string()
    .matches(/^\d+$/, "Solo se permiten números")
    .min(9, "Debe tener al menos 9 dígitos")
    .required("El teléfono es obligatorio"),
  deliveryMethod: Yup.string()
    .oneOf(["local", "domicilio"], "Debes seleccionar un método de entrega")
    .required("Debes seleccionar un método de entrega"),
  address: Yup.string().when("deliveryMethod", {
    is: "domicilio",
    then: (schema) => schema.required("La dirección es obligatoria"),
  }),
  city: Yup.string().when("deliveryMethod", {
    is: "domicilio",
    then: (schema) => schema.required("La ciudad es obligatoria"),
  }),
  acceptTerms: Yup.boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones")
    .required(),
});
const CheckoutForm: React.FC = () => {
  const dispatch = useDispatch();
  const [openTerms, setOpenTerms] = React.useState(false);

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalPrice);

  const initialValues: UserData = {
    firstName: "",
    lastName: "",
    dni: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    acceptTerms: false,
    deliveryMethod: "",
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(price);

  const buildOrderItems = () => {
    return cartItems.map(({ item, quantity }) => ({
      productId: item.id,
      title: item.title,
      price: item.price,
      quantity,
      type: item.type,
    }));
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <Stack spacing={2} mb={3}>
        {cartItems.map(({ item, quantity }) => (
          <Paper
            key={item.id}
            sx={{ p: 2, borderRadius: 2, display: "flex", gap: 2 }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: 80,
                height: 80,
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
            <Box>
              <Typography fontWeight="bold">{item.title}</Typography>
              <Typography variant="body2">
                Cantidad: {quantity} | Subtotal:{" "}
                {formatPrice(item.price * quantity)}
              </Typography>
            </Box>
          </Paper>
        ))}

        <Typography variant="h6" textAlign="right" fontWeight="bold">
          Total: {formatPrice(total)}
        </Typography>
      </Stack>
      <Formik
        initialValues={initialValues}
        validationSchema={CheckoutSchema}
        onSubmit={async (
          values: UserData,
          actions: FormikHelpers<UserData>,
        ) => {
          try {
            const items = buildOrderItems();

            const response = await axios.post(
              `${import.meta.env.VITE_API_URL}/api/orders`,
              {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phone: values.phone,
                dni: values.dni,
                deliveryMethod: values.deliveryMethod,
                address: values.address,
                city: values.city,
                items,
              },
            );

            const { orderNumber } = response.data;
            alert(`Orden ${orderNumber} creada. Redirigiendo a MercadoPago...`);
            dispatch(clearCart());
            actions.resetForm();
          } catch (error) {
            console.error("Error al procesar la compra:", error);
            alert("Hubo un error al procesar la compra");
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {({ errors, touched, isSubmitting, values, setFieldValue }) => {
          const isDomicilio = values.deliveryMethod === "domicilio";

          return (
            <>
              <Form>
                <Grid container spacing={2}>
                  {[
                    { name: "firstName", label: "Nombre" },
                    { name: "lastName", label: "Apellido" },
                    { name: "dni", label: "DNI" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "phone", label: "Teléfono" },
                  ].map((fieldConfig) => (
                    <Grid item xs={12} key={fieldConfig.name}>
                      <Field name={fieldConfig.name}>
                        {({ field }: FieldProps) => (
                          <TextField
                            {...field}
                            label={fieldConfig.label}
                            type={fieldConfig.type || "text"}
                            fullWidth
                            size="small"
                            error={
                              touched[fieldConfig.name as keyof UserData] &&
                              !!errors[fieldConfig.name as keyof UserData]
                            }
                            helperText={
                              touched[fieldConfig.name as keyof UserData] &&
                              errors[fieldConfig.name as keyof UserData]
                            }
                          />
                        )}
                      </Field>
                    </Grid>
                  ))}

                  <Grid item xs={12}>
                    <FormLabel>Método de entrega</FormLabel>
                    <RadioGroup
                      row
                      value={values.deliveryMethod}
                      onChange={(e) =>
                        setFieldValue("deliveryMethod", e.target.value)
                      }
                    >
                      <FormControlLabel
                        value="local"
                        control={<Radio />}
                        label="Retiro en local"
                      />
                      <FormControlLabel
                        value="domicilio"
                        control={<Radio />}
                        label="Envío a domicilio"
                      />
                    </RadioGroup>
                    {touched.deliveryMethod && errors.deliveryMethod && (
                      <FormHelperText error>
                        {errors.deliveryMethod}
                      </FormHelperText>
                    )}
                  </Grid>
                  {isDomicilio && (
                    <>
                      <Grid item xs={12}>
                        <Field name="address">
                          {({ field }: FieldProps) => (
                            <TextField
                              {...field}
                              label="Dirección"
                              fullWidth
                              error={touched.address && !!errors.address}
                              helperText={touched.address && errors.address}
                            />
                          )}
                        </Field>
                      </Grid>

                      <Grid item xs={12}>
                        <Field name="city">
                          {({ field }: FieldProps) => (
                            <TextField
                              {...field}
                              label="Ciudad"
                              fullWidth
                              error={touched.city && !!errors.city}
                              helperText={touched.city && errors.city}
                            />
                          )}
                        </Field>
                      </Grid>

                      {/* ===== Mostrar costo de envío ===== */}
                      <Grid item xs={12}>
                        <Typography variant="body2" fontWeight="bold">
                          Envío:{" "}
                          {total < 1000
                            ? "Gratis"
                            : new Intl.NumberFormat("es-AR", {
                                style: "currency",
                                currency: "ARS",
                              }).format(25000)}
                        </Typography>
                      </Grid>
                    </>
                  )}

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.acceptTerms}
                          onChange={(e) =>
                            setFieldValue("acceptTerms", e.target.checked)
                          }
                        />
                      }
                      label={
                        <>
                          Acepto los{" "}
                          <Button
                            variant="text"
                            size="small"
                            onClick={() => setOpenTerms(true)}
                            sx={{ textTransform: "none", p: 0 }}
                          >
                            Términos y Condiciones
                          </Button>
                        </>
                      }
                    />
                    {touched.acceptTerms && errors.acceptTerms && (
                      <FormHelperText error>
                        {errors.acceptTerms}
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      disabled={isSubmitting || cartItems.length === 0}
                      variant="contained"
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        background:
                          "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",
                      }}
                    >
                      Finalizar Compra
                    </Button>
                  </Grid>
                </Grid>
              </Form>

              <TermsDialog
                open={openTerms}
                onClose={() => setOpenTerms(false)}
                onAccept={() => {
                  setFieldValue("acceptTerms", true);
                  setOpenTerms(false);
                }}
              />
            </>
          );
        }}
      </Formik>
    </Box>
  );
};

export default CheckoutForm;
