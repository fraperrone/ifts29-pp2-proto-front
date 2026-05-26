const facturaModel = {
  id_paciente: {
    label: "ID Paciente",
    type: "number",
    maxLength: 6,
    required: true,
    description: "Paciente facturado (clave foránea > Paciente)",
  },
  fecha: {
    label: "Fecha de emisión",
    type: "date",
    required: true,
    description: "Fecha de emisión de la factura (YYYY-MM-DD)",
  },
  monto: {
    label: "Monto total",
    type: "number",
    step: "0.01",
    required: true,
    description: "Monto total de la factura en formato Decimal(10,2)",
  },
  medio_pago: {
    label: "Medio de pago",
    type: "text",
    maxLength: 30,
    required: true,
    description: "Forma de pago (ej: efectivo, tarjeta, transferencia)",
  },
  tipo_pago: {
    label: "Tipo de pago",
    type: "select",
    options: ["Particular", "Obra Social"],
    required: true,
    description: "Indica si el pago es particular o mediante obra social",
  },
  nro_carnet: {
    label: "Número de carnet de obra social",
    type: "text",
    maxLength: 20,
    required: false, // 👈 se vuelve obligatorio solo si se elige Obra Social
    description: "Número de carnet asociado a la obra social",
    conditional: { field: "tipo_pago", value: "Obra Social" }, // 👈 regla condicional
  },
};

export default facturaModel;

