import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface TermsDialogProps {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const termsText = `
1. Información General
Este sitio web se dedica a la venta de accesorios y  teléfonos celulares nuevos y usados. 
La empresa responsable de este sitio web es La clínica del celular, Empresa con 19 años de trayectoria  desde 2007 hasta la fecha en el rubro de reparación y venta de teléfonos celulares y accesorios. 
siempre brindando la mejor honestidad calidad y servicio a nuestros clientes. 
2. Uso del Sitio Web
El sitio web es de La clínica del celular está destinado para usuarios mayores de 18 años. El
uso del sitio web implica la aceptación de estos términos y condiciones.
El usuario se compromete a utilizar el sitio de manera responsable.
Respetando las leyes vigentes. Y no realizar actividades fraudulentas o ilegales.
3. Productos
Los productos están sujetos a disponibilidad de stock. Al momento de la compra.
Las imágenes son ilustrativas. Pueden variar en color o diseño según el fabricante.
Los precios y promociones pueden cambiar sin previo aviso.
La empresa se reserva el derecho de modificar o discontinuar productos sin previo aviso.
Las devoluciones y Reembolsos tienen un Plazo de 10 días corridos desde la recepción para arrepentirse de la compra aplicable únicamente en accesorios (según Ley de Defensa del Consumidor). Condición: El producto debe estar sellado, sin uso y con su embalaje original. Costos: Los gastos de envío por devolución corren por cuenta del comprador, salvo que el producto presente una falla de fábrica inicial. Reembolso: Se realizará por el mismo medio de pago utilizado, una vez que hayamos verificado el estado del producto devuelto.

4. Precios y Pagos
Los precios están expresados en pesos argentinos (ARS). Sujetos a cambios sin previo aviso. Y pueden variar según promociones vigentes.
Sujeto a impuestos aplicables. Al cambio de moneda extranjera (USD).
Los pagos se pueden realizar mediante tarjetas de crédito tienen recargo del 12% aplicables. Débito Tiene recargo del 5% aplicables.
Transferencias desde billeteras o bancarias sin recargos los pagos en efectivo solo de manera presencial en nuestros locales habilitados.
Los pagos se gestionan a través de plataformas seguras como mercado pago o transferencia bancaria.

5. Envíos y Retiro 
Solo en los horarios acordados previamente con el vendedor en cualquuiera de nuestros canales de comunicacion via (telefonica o redes sociales).    
El usuario se responsabiliza y compromete por el correcto envío de datos (DNI + dirección) para el adecuado envío del producto Si el dato es erróneo, el costo de reenvío corre por cuenta del comprador. 
Cualquier dato mal enviado en el formulario no es responsabilidad de la empresa.Envíos a domicilio sujeto a costos adicionales según la zona.
El tiempo de entrega puede variar según la ubicación y disponibilidad del producto. Empaques especiales o urgentes tienen costos adicionales.
Todos los  envíos se realiza una vez confirmado el pago.
Empresas de envío externas no son responsabilidad del comercio.
El seguimiento del envío es responsabilidad del comprador.El comercio no se responsabiliza por demoras o pérdidas ocasionadas por la empresa de envío.
El comprador debe revisar el estado del paquete al momento de la entrega.Cualquier daño o irregularidad debe ser reportada inmediatamente. A la empresa de envío.
Los envíos solo se realizan a direcciones dentro de la república argentina.

6. Garantía
los Accesorios tienen un plazo de 48 horas desde la entrega sin daños en el producto o caja.
En caso de productos electrónicos como teléfonos celulares tienen una garantía de 6 meses por fallas de señal y batería.
Hacer un video o fotos del producto al momento de la apertura del paquete para evitar inconvenientes.
En ambos casos la garantía no cubre daños por mal uso o accidentes.
Anulación: La garantía queda sin efecto por golpes, humedad, pantalla rota o software alterado.

7. Responsabilidad
No se responsabiliza por uso indebido del producto adquirido.
El comprador es responsable de cumplir con las leyes locales relacionadas con el uso del producto.
El comercio no se hace responsable por daños directos o indirectos derivados del uso del producto.
El comprador acepta indemnizar y mantener indemne al comercio por cualquier reclamo derivado del uso del producto.
El comercio no se hace responsable por interrupciones del servicio o errores técnicos en el sitio web.
El usuario se responsabiliza por el uso del sitio web y cualquier consecuencia derivada de dicho uso.

8. Protección de Datos 
Solo para procesar la compra No se comparten con terceros.
Las cookies se utilizan para mejorar la experiencia del usuario.
El usuario puede gestionar sus preferencias de cookies en su navegador.
El comercio cumple con las leyes de protección de datos vigentes.
9. Modificaciones de los Términos
El comercio se reserva el derecho de modificar estos términos y condiciones en cualquier momento.
Las modificaciones serán efectivas inmediatamente después de su publicación en el sitio web.
El usuario es responsable de revisar periódicamente los términos y condiciones para estar informado de cualquier cambio.

Al aceptar estos términos y condiciones. El usuario reconoce haber leído y comprendido todas las cláusulas aquí expuestas. 
Y acepta cumplirlas en su totalidad. 

`;

const TermsDialog: React.FC<TermsDialogProps> = ({
  open,
  onClose,
  onAccept,
}) => {
  const [canAccept, setCanAccept] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) setCanAccept(false);
  }, [open]);

  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;

    const reachedBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
    if (reachedBottom) setCanAccept(true);
  };

  // 👉 Divide el texto y detecta títulos numerados
  const renderTerms = () => {
    return termsText.split("\n").map((line, index) => {
      const isTitle = /^\d+\./.test(line.trim());

      return (
        <Typography
          key={index}
          variant={isTitle ? "h6" : "body2"}
          sx={{
            fontWeight: isTitle ? "bold" : "normal",
            mt: isTitle ? 2 : 0.5,
            textAlign: "justify",
          }}
        >
          {line}
        </Typography>
      );
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper"
      maxWidth="md"
      fullWidth
      disableRestoreFocus
    >
      <Box sx={{ position: "relative" }}>
        <DialogTitle>Términos y Condiciones</DialogTitle>

        <IconButton
          onClick={onClose}
          aria-label="cerrar"
          sx={{ position: "absolute", top: 8, right: 8, color: "error.main" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent
        ref={contentRef}
        onScroll={handleScroll}
        dividers
        sx={{ maxHeight: 420 }}
      >
        {renderTerms()}
        <Divider sx={{ mt: 3, mb: 2 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle2" fontWeight={600}>
            La clínica del celular © 2007
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Todos los derechos reservados © 2026 La clínica del celular.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" disabled={!canAccept} onClick={onAccept}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TermsDialog;
