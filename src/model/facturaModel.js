const facturaModel = {
  id_factura: {
    label: "ID Factura",
    type: "number",
    maxLength: 10,
    required: true,
    description: "Identificador único de la factura (10 dígitos)",
  },
  id_paciente: {
    label: "ID Paciente",
    type: "number",
    maxLength: 6,
    required: true,
    description: "Paciente facturado (clave foránea > Paciente)",
  },
  id_turno: {
    label: "ID Turno",
    type: "number",
    maxLength: 8,
    required: true,
    description: "Turno facturado (clave foránea > Turno)",
  },
  fecha: {
    label: "Fecha de emisión",
    type: "date", // 👈 calendar picker nativo
    required: true,
    description: "Fecha de emisión de la factura (YYYY-MM-DD)",
  },
  monto: {
    label: "Monto total",
    type: "number",
    step: "0.01", // 👈 permite decimales
    required: true,
    description: "Monto total de la factura en formato Decimal(10,2)",
  },
  medio_pago: {
    label: "Medio de pago",
    type: "text",
    maxLength: 30,
    required: true,
    description: "Forma de pago (ej: efectivo, tarjeta, OS)",
  },
};

export default facturaModel;
