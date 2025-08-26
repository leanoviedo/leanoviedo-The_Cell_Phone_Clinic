// src/components/CheckoutForm.tsx
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
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../redux/selectors/cartSelectors";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  acceptTerms: boolean;
  deliveryMethod: "local" | "domicilio" | "";
}

const CheckoutSchema = Yup.object().shape({
  firstName: Yup.string().required("El nombre es obligatorio"),
  lastName: Yup.string().required("El apellido es obligatorio"),
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  phone: Yup.string()
    .matches(/^[0-9]{7,15}$/, "Teléfono inválido")
    .required("El teléfono es obligatorio"),
  deliveryMethod: Yup.string()
    .oneOf(["local", "domicilio"], "Debes seleccionar un método de entrega")
    .required("Debes seleccionar un método de entrega"),
  address: Yup.string().when("deliveryMethod", (deliveryMethod, schema) =>
    (Array.isArray(deliveryMethod) ? deliveryMethod[0] : deliveryMethod) ===
    "domicilio"
      ? schema.required("La dirección es obligatoria")
      : schema
  ),
  city: Yup.string().when("deliveryMethod", (deliveryMethod, schema) =>
    (Array.isArray(deliveryMethod) ? deliveryMethod[0] : deliveryMethod) ===
    "domicilio"
      ? schema.required("La ciudad es obligatoria")
      : schema
  ),
  acceptTerms: Yup.boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones")
    .required("Debes aceptar los términos y condiciones"),
});

const CheckoutForm: React.FC<{ onSubmit?: (data: UserData) => void }> = ({
  onSubmit,
}) => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalPrice);

  const initialValues: UserData = {
    firstName: "",
    lastName: "",
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

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Checkout - Resumen del pedido
      </Typography>

      {/* Resumen del carrito */}
      <Stack spacing={2} mb={3}>
        {cartItems.map(({ item, quantity }) => (
          <Paper key={item.id} sx={{ p: 2, borderRadius: 2 }}>
            <Typography fontWeight="bold">{item.title}</Typography>
            <Typography>
              Cantidad: {quantity} | Subtotal:{" "}
              {formatPrice((item.price ?? 0) * quantity)}
            </Typography>
          </Paper>
        ))}
        <Typography variant="h6" textAlign="right" fontWeight="bold">
          Total: {formatPrice(total)}
        </Typography>
      </Stack>

      {/* Formulario */}
      <Formik
        initialValues={initialValues}
        validationSchema={CheckoutSchema}
        onSubmit={(values: UserData, actions: FormikHelpers<UserData>) => {
          if (onSubmit) onSubmit(values);
          console.log("Datos enviados:", values);
          actions.setSubmitting(false);
          alert("Compra finalizada con éxito!");
        }}
      >
        {({ errors, touched, isSubmitting, values, setFieldValue }) => {
          const isDomicilio = values.deliveryMethod === "domicilio";

          return (
            <Form>
              <Grid container spacing={2}>
                {/* Nombre y Apellido */}
                <Grid item xs={12} sm={6}>
                  <Field name="firstName">
                    {({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label="Nombre"
                        fullWidth
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="lastName">
                    {({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label="Apellido"
                        fullWidth
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    )}
                  </Field>
                </Grid>

                {/* Email y Teléfono */}
                <Grid item xs={12} sm={6}>
                  <Field name="email">
                    {({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label="Email"
                        type="email"
                        fullWidth
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field name="phone">
                    {({ field }: FieldProps) => (
                      <TextField
                        {...field}
                        label="Teléfono"
                        fullWidth
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    )}
                  </Field>
                </Grid>

                {/* Método de entrega */}
                <Grid item xs={12}>
                  <FormLabel>Seleccione método de entrega</FormLabel>
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

                {/* Dirección y Ciudad (solo si domicilio) */}
                {isDomicilio && (
                  <>
                    <Grid item xs={12}>
                      <Field name="address">
                        {({ field }: FieldProps) => (
                          <TextField
                            {...field}
                            label="Dirección"
                            fullWidth
                            error={touched.address && Boolean(errors.address)}
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
                            error={touched.city && Boolean(errors.city)}
                            helperText={touched.city && errors.city}
                          />
                        )}
                      </Field>
                    </Grid>
                  </>
                )}

                {/* Términos y condiciones */}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.acceptTerms}
                        onChange={() =>
                          setFieldValue("acceptTerms", !values.acceptTerms)
                        }
                      />
                    }
                    label="Acepto los términos y condiciones"
                  />
                  {touched.acceptTerms && errors.acceptTerms && (
                    <FormHelperText error>{errors.acceptTerms}</FormHelperText>
                  )}
                </Grid>

                {/* Botón Finalizar */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      background:
                        "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
                      },
                    }}
                  >
                    Finalizar Compra
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default CheckoutForm;
