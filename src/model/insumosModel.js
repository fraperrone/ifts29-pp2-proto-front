const insumoModel = {
  id_insumo: {
    label: "ID Insumo",
    type: "number",
    maxLength: 6,
    required: true,
    description: "Identificador único del insumo",
  },
  nombre: {
    label: "Nombre del insumo",
    type: "text",
    maxLength: 100,
    required: true,
    description: "Nombre del insumo",
  },
  stock: {
    label: "Stock actual",
    type: "number",
    required: true,
    description: "Cantidad actual en inventario",
  },
  stock_minimo: {
    label: "Stock mínimo",
    type: "number",
    required: true,
    description: "Nivel mínimo de alerta para reposición",
  },
};

export default insumoModel;
