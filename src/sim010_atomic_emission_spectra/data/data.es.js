import globalConfig from "../../app/data";

const dataSet = {
  datalist: [
    {
      value: 1,
      id: "datalist-item1",
      label: "<span>10<sup>3</sup></span>",
    },
    {
      value: 2,
      id: "datalist-item2",
      label: "<span>10<sup></sup></span>",
    },
    {
      value: 3,
      id: "datalist-item3",
      label: "<span>10<sup>-1</sup></span>",
    },
    {
      value: 4,
      id: "datalist-item4",
      label: "<span>10<sup>-3</sup></span>",
    },
    {
      value: 5,
      id: "datalist-item5",
      label: "<span>10<sup>-5</sup></span>",
    },
    {
      value: 6,
      id: "datalist-item6",
      label: "<span>10<sup>-7</sup></span>",
    },
    {
      value: 7,
      id: "datalist-item7",
      label: "<span>10<sup>-9</sup></span>",
    },
    {
      value: 8,
      id: "datalist-item8",
      label: "<span>10<sup>-11</sup></span>",
    },
    {
      value: 9,
      id: "datalist-item9",
      label: "<span>10<sup>-13</sup></span>",
    },
    {
      value: 10,
      id: "datalist-item10",
      label: "<span>10<sup>-15</sup></span>",
    },
  ],
  valuetextArray: {
    1: "10 elevado a la potencia 3",
    2: "10",
    3: "10 elevado a la potencia menos 1",
    4: "10 elevado a la potencia menos 3",
    5: "10 elevado a la potencia menos 5",
    6: "10 elevado a la potencia menos 7",
    7: "10 elevado a la potencia menos 9",
    8: "10 elevado a la potencia menos 11",
    9: "10 elevado a la potencia menos 13",
    10: "10 elevado a la potencia menos 15",
  },
  answerValues: [
    {
      waveName: "Onda de radio",
      wavelength: "10<sup>3</sup>",
      wavelengthLabel: "10 elevado a la potencia 3",
      frequency: "3 × 10<sup>5</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 5",
      energy: "1.24 × 10<sup>-9</sup>",
      energyLabel: "1.2 multiplicado por 10 elevado a la potencia menos 9",
      waveLabel:
        "Una onda de radio comienza en la línea de equilibrio. Tiene un valle y termina después de la cresta.",
    },
    {
      waveName: "Onda de radio",
      wavelength: "10",
      wavelengthLabel: "10",
      frequency: "3 × 10<sup>7</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 7",
      energy: "1.24 × 10<sup>-7</sup>",
      energyLabel: "1.2 multiplicado por 10 elevado a la potencia menos 7",
      waveLabel:
        "Una onda de radio comienza en la línea de equilibrio. Tiene un valle y termina después de la cresta, a medida que se acerca a la línea de equilibrio.",
    },
    {
      waveName: "Microonda",
      wavelength: "10<sup>-1</sup>",
      wavelengthLabel: "10 elevado a la potencia menos 1",
      frequency: "3 × 10<sup>9</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 9",
      energy: "1.24 × 10<sup>-5</sup>",
      energyLabel: "1.2 multiplicado por 10 elevado a la potencia menos 5",
      waveLabel:
        "Una microonda comienza en la línea de equilibrio. Tiene un valle y una cresta, y termina justo después de la línea de equilibrio.",
    },
    {
      waveName: "Onda infrarroja",
      wavelength: "10<sup>-3</sup>",
      wavelengthLabel: "10 elevado a la potencia menos 3",
      frequency: "3 × 10<sup>11</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 11",
      energy: "1.24 × 10<sup>-3</sup>",
      energyLabel: "1.2 multiplicado por 10 elevado a la potencia menos 3",
      waveLabel:
        "Una onda infrarroja comienza en la línea de equilibrio. Tiene un valle y una cresta, y termina en el segundo valle.",
    },
    {
      waveName: "Onda infrarroja",
      wavelength: "10<sup>-5</sup>",
      wavelengthLabel: "10 elevado a la potencia menos 5",
      frequency: "3 × 10<sup>13</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 13",
      energy: "0.1240",
      energyLabel: "0.1240",
      waveLabel:
        "Una onda infrarroja comienza en la línea de equilibrio. Tiene un valle y una cresta, y termina en el segundo valle.",
    },
    {
      waveName: "Onda ultravioleta",
      wavelength: "10<sup>-7</sup>",
      wavelengthLabel: "10 elevado a la potencia menos 7",
      frequency: "3 × 10<sup>15</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 15",
      energy: "12.3980",
      energyLabel: "12.3980",
      waveLabel:
        "Una onda ultravioleta comienza en la línea de equilibrio. Tiene un valle, una cresta, un segundo valle y termina al comenzar la segunda cresta.",
    },
    {
      waveName: "Onda de rayos X",
      wavelength: "10<sup>-9</sup>",
      wavelengthLabel: "10 elevado a la potencia menos 9",
      frequency: "3 × 10<sup>17</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 17",
      energy: "1.24 × 10<sup>3</sup>",
      energyLabel: "1.2 multiplicado por 10 elevado a la potencia 3",
      waveLabel:
        "Una onda de rayos X comienza en la línea de equilibrio. Tiene 2 valles y 2 crestas, y termina al comenzar el tercer valle.",
    },
    {
      waveName: "Onda de rayos X",
      wavelength: "10<sup>-11</sup>",
      wavelengthLabel: "10 elevado a la potencia menos 11",
      frequency: "3 × 10<sup>19</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 19",
      energy: "1.24 × 10<sup>5</sup>",
      energyLabel: "1.2 multiplicado por 10 elevado a la potencia 5",
      waveLabel:
        "Una onda de rayos X comienza en la línea de equilibrio. Tiene 3 valles y 3 crestas, y termina debajo de la línea de equilibrio.",
    },
    {
      waveName: "Onda de rayos gamma",
      wavelength: "10<sup>-13</sup>",
      wavelengthLabel: "10 elevado a la potencia menos 13",
      frequency: "3 × 10<sup>21</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 21",
      energy: "1.24 × 10<sup>7</sup>",
      energyLabel: "1.2 multiplicado por 10 elevado a la potencia 7",
      waveLabel:
        "Una onda de rayos gamma comienza un poco más arriba de la línea de equilibrio. Tiene 5 valles y 5 crestas, y termina justo antes del sexto valle.",
    },
    {
      waveName: "Onda de rayos gamma",
      wavelength: "10<sup>-15</sup>",
      wavelengthLabel: "10 elevado a la potencia menos 15",
      frequency: "3 × 10<sup>23</sup>",
      frequencyLabel: "3 multiplicado por 10 elevado a la potencia 23",
      energy: "1.24 × 10<sup>9</sup>",
      energyLabel: "1.2 multiplicado por 10 elevado a la potencia 9",
      waveLabel:
        "Una onda de rayos gamma comienza como una cresta que regresa a la línea de equilibrio. Tiene 16 valles y 15 crestas, y termina en la línea de equilibrio.",
    },
  ],
  playWave: "Reproducir la onda",
  stopWave: "Detener la onda",
  energyLabel: "Energía (eV)",
  frequencyAlt: "Frecuencia en Hertz",
  frequencyLabel: "Frecuencia (Hz)",
  energyAlt: "Energía en electronvoltios",
  wavelengthAlt: "medidor de longitud de onda",
  wavelengthLabel: "Longitud de onda (m)",
  waveControlLabel: "Control de la onda",
  wavelengthSliderTitle: "Longitud de onda",
  resetLiveText: globalConfig.resetLiveText,
  resetPopupText: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  initialPopupText:
    "¡Mueve el deslizador en el espectro electromagnético para ver qué ocurre!",
  helpPopupText:
    "Usa el deslizador para cambiar la longitud de onda de la onda electromagnética. Puedes usar los botones «Reproducir la onda» y «Detener la onda» para reproducir y detener la onda, respectivamente.",
  liveTextWhenWavesStart:
    "El modelo de la onda sube y baja para representar el movimiento de la energía de izquierda a derecha.",
  liveTextWhenWavesPaused: "El modelo de la onda dejó de moverse.",
  instructionText:
    "Usa el deslizador para cambiar la longitud de onda de la onda electromagnética y observa la relación entre la energía, la frecuencia y la longitud de onda.",
};

export default dataSet;
