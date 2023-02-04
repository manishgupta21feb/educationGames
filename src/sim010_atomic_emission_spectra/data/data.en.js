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
    1: "10 exponent 3",
    2: "10",
    3: "10 exponent minus 1",
    4: "10 exponent minus 3",
    5: "10 exponent minus 5",
    6: "10 exponent minus 7",
    7: "10 exponent minus 9",
    8: "10 exponent minus 11",
    9: "10 exponent minus 13",
    10: "10 exponent minus 15",
  },
  answerValues: [
    {
      waveName: "Radio wave",
      wavelength: "10<sup>3</sup>",
      wavelengthLabel: "10 exponent 3",
      frequency: "3 × 10<sup>5</sup>",
      frequencyLabel: "3 into 10 exponent 5",
      energy: "1.24 × 10<sup>-9</sup>",
      energyLabel: "1.2 into 10 exponent minus 9",
      waveLabel:
        "A radio wave starts at equilibrium. It has one trough and ends after the crest.",
    },
    {
      waveName: "Radio wave",
      wavelength: "10",
      wavelengthLabel: "10",
      frequency: "3 × 10<sup>7</sup>",
      frequencyLabel: "3 into 10 exponent 7",
      energy: "1.24 × 10<sup>-7</sup>",
      energyLabel: "1.2 into 10 exponent minus 7",
      waveLabel:
        "A radio wave starts at equilibrium. It has one trough and ends after the crest as it approaches the equilibrium line.",
    },
    {
      waveName: "Microwave",
      wavelength: "10<sup>-1</sup>",
      wavelengthLabel: "10 exponent minus 1",
      frequency: "3 × 10<sup>9</sup>",
      frequencyLabel: "3 into 10 exponent 9",
      energy: "1.24 × 10<sup>-5</sup>",
      energyLabel: "1.2 into 10 exponent minus 5",
      waveLabel:
        "A microwave starts at equilibrium. It has one trough and one crest and ends just after the equilibrium line.",
    },
    {
      waveName: "Infrared",
      wavelength: "10<sup>-3</sup>",
      wavelengthLabel: "10 exponent minus 3",
      frequency: "3 × 10<sup>11</sup>",
      frequencyLabel: "3 into 10 exponent 11",
      energy: "1.24 × 10<sup>-3</sup>",
      energyLabel: "1.2 into 10 exponent minus 3",
      waveLabel:
        "An infrared wave starts at equilibrium. It has a trough and a crest and ends at the second trough.",
    },
    {
      waveName: "Infrared",
      wavelength: "10<sup>-5</sup>",
      wavelengthLabel: "10 exponent minus 5",
      frequency: "3 × 10<sup>13</sup>",
      frequencyLabel: "3 into 10 exponent 13",
      energy: "0.1240",
      energyLabel: "0.1240",
      waveLabel:
        "An infrared wave starts at equilibrium. It has a trough and a crest and ends after the second trough.",
    },
    {
      waveName: "Ultraviolet",
      wavelength: "10<sup>-7</sup>",
      wavelengthLabel: "10 exponent minus 7",
      frequency: "3 × 10<sup>15</sup>",
      frequencyLabel: "3 into 10 exponent 15",
      energy: "12.3980",
      energyLabel: "12.3980",
      waveLabel:
        "An ultraviolet wave starts at equilibrium. It has a trough, a crest, a second trough, and then ends at the start of the second crest.",
    },
    {
      waveName: "X-ray",
      wavelength: "10<sup>-9</sup>",
      wavelengthLabel: "10 exponent minus 9",
      frequency: "3 × 10<sup>17</sup>",
      frequencyLabel: "3 into 10 exponent 17",
      energy: "1.24 × 10<sup>3</sup>",
      energyLabel: "1.2 into 10 exponent 3",
      waveLabel:
        "An x-ray wave starts at equilibrium. It has 2 troughs and 2 crests and ends at the start of the third trough.",
    },
    {
      waveName: "X-ray",
      wavelength: "10<sup>-11</sup>",
      wavelengthLabel: "10 exponent minus 11",
      frequency: "3 × 10<sup>19</sup>",
      frequencyLabel: "3 into 10 exponent 19",
      energy: "1.24 × 10<sup>5</sup>",
      energyLabel: "1.2 into 10 exponent 5",
      waveLabel:
        "An x-ray wave starts at equilibrium. It has 3 troughs and 3 crests and ends below the equilibrium line.",
    },
    {
      waveName: "Gamma ray",
      wavelength: "10<sup>-13</sup>",
      wavelengthLabel: "10 exponent minus 13",
      frequency: "3 × 10<sup>21</sup>",
      frequencyLabel: "3 into 10 exponent 21",
      energy: "1.24 × 10<sup>7</sup>",
      energyLabel: "1.2 into 10 exponent 7",
      waveLabel:
        "A gamma ray wave starts just above equilibrium. It has 5 troughs and 5 crests and ends just before the 6th trough.",
    },
    {
      waveName: "Gamma ray",
      wavelength: "10<sup>-15</sup>",
      wavelengthLabel: "10 exponent minus 15",
      frequency: "3 × 10<sup>23</sup>",
      frequencyLabel: "3 into 10 exponent 23",
      energy: "1.24 × 10<sup>9</sup>",
      energyLabel: "1.2 into 10 exponent 9",
      waveLabel:
        "A gamma ray wave starts as a crest is returning to equilibrium. It has 16 troughs and 15 crests and ends at equilibrium.",
    },
  ],
  playWave: "Play Wave",
  stopWave: "Stop Wave",
  energyLabel: "Energy (eV)",
  frequencyAlt: "Frequency hertz",
  frequencyLabel: "Frequency (Hz)",
  energyAlt: "Energy electronvolts",
  wavelengthAlt: "wavelength meter",
  wavelengthLabel: "Wavelength (m)",
  waveControlLabel: "Wave Control",
  wavelengthSliderTitle: "Wavelength",
  resetLiveText: globalConfig.resetLiveText,
  resetPopupText: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  initialPopupText: "Move the slider on the EM spectrum to see what happens!",
  helpPopupText:
    "Use the slider to change the wavelength of the electromagnetic wave. You can use Play Wave/Stop Wave to play/stop the wave.",
  liveTextWhenWavesStart:
    "The wave model moves up and down to show energy moving from left to right.",
  liveTextWhenWavesPaused: "The wave model has stopped moving.",
  instructionText:
    "Use the slider to change the wavelength of the electromagnetic wave, and observe the relationship between energy, frequency, and wavelength.",
};

export default dataSet;
