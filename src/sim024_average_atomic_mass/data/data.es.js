import commonData from "../../app/data/data.es";

const data = {
  buttonLabels: { ...commonData.buttonLabels, calculate: "Calcular", show: "Mostrar" },

  completionPopup: { ...commonData.completionPopup },
  completionPopupText: "Has calculado la masa atómica promedio del carbono.",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,

  instructionText: `Arrastra cada isótopo de carbono a la balanza para determinar su masa. 
  Usa la masa y el porcentaje de abundancia para calcular la masa atómica promedio del carbono.`,

  carbon: [
    {
      id:"carbon-12",
      name: "Carbono 12",
      electron: 6,
      nutron: 6,
      proton: 6,
      state: "Stable",
      mass: "12.0",
      percentageAbundance: "98.89 %",
      massAbundance: "11.8668",
      massUnit: "u",
      altText: `Sobre la balanza hay un átomo de carbono 12. La balanza indica una masa de 12.0 u.`,
    },
    {
      id:"carbon-13",
      name: "Carbono 13",
      electron: 6,
      nutron: 7,
      proton: 6,
      state: "Stable",
      mass: "13.0",
      percentageAbundance: "1.1 %",
      massAbundance: "0.143",
      massUnit: "u",
      altText: `Sobre la balanza hay un átomo de carbono 13. La balanza indica una masa de 13.0 u.`,
    },
    {
      id:"carbon-14",
      name: "Carbono 14",
      electron: 6,
      nutron: 8,
      proton: 6,
      state: "Radioactive",
      mass: "14.0",
      percentageAbundance: "<.01 %",
      massAbundance: "0.0014",
      massUnit: "u",
      altText: `Sobre la balanza hay un átomo de carbono 14. La balanza indica una masa de 14.0 u`,
    },
  ],
  averageMassAbudance: "12.011 u",
  massUnit: "u",
  labels: {
    tableTitle: "Masa y % de abundancia",
    mass: "Masa (u)",
    abundance: "% de abundancia",
    massAbundance: "Masa x % de abundancia",
    showBtnLabel: "-1-, masa x % de abundancia, botón «Mostrar»",
    electrons:"Electrones",
    neutrons: "Neutrones",
    protons: "Protones",
    avgAtomicMass: "Masa atómica promedio del carbono",
    avgAtomicMassLiveTxt: "La masa atómica promedio del carbono es de 12.011 u."
  },

  startUpInfoText: `En la tabla periódica, la masa atómica de un elemento es un promedio de todos los isótopos de 
  ese mismo elemento según sus masas y porcentajes de abundancia. Vamos a buscar la masa atómica promedio del carbono.`,

  infoText: `Arrastra cada isótopo a la balanza para determinar su masa en gramos y registrarla en la tabla de datos. 
  Cuando tengas la masa y el porcentaje de abundancia de cada isótopo, calcula la masa atómica promedio del carbono. 
  Selecciona «Mostrar» o «Calcular» para comprobar tus respuestas y registrar el valor en la tabla de datos.`,

  droppable: { id: "drop", text: "área para colocar" },
  accessibilityList : [{ id: "1", text: "", label: "Área para colocar los isótopos, balanza" }],

  initialScaleAltText: `Una balanza electrónica con la base verde y la pantalla en blanco. Sobre la base hay una plataforma gris que está vacía.`,

  onDroppedLiveText: "Se coloca el -1- en el espacio correspondiente de la balanza.",
  onShowLiveText: "Masa x % de abundancia de -1- es igual a -2-. ",
};

export default data;
