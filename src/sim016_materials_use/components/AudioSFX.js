import React, { useEffect, useRef } from "react";
import EventManager from "../../app/events/manager";
import SoundManager from "../../app/components/SoundManager";
import SequentialSoundManager from "../../app/components/SequentialSoundManager";

const sfx = (props) => {
  const audioRef = useRef({});
  const voiceOver = [
    "SCREEN_TEXT",
    "SCREEN_TEXT2",
    "NUCLEUS",
    "CELL_MEMBRANE_ANIMAL",
    "CELL_MEMBRANE_PLANT",
    "CELL_WALL",
    "CHLOROPLAST",
    "CYTOPLASM",
    "MITOCHONDRIA",
    "RIBOSOMES",
    "VACUOLES",
    "VACUOLE",
    "SCREEN_INTRO",
  ];
  const {
    sounds,
    audioStatePlay,
    resetDialogNoSelected,
    setResetDialogNoSelected,
  } = props;

  const setPreviousSound = (sound) => {
    props.setPreviousSound(sound);
  };

  useEffect(() => {
    EventManager.init("SCREEN_TEXT", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "SCREEN_TEXT"),
        () => {
          audioRef.current["SCREEN_TEXT"].play();
          setPreviousSound("SCREEN_TEXT");
        }
      );
    });
    EventManager.init("SCREEN_TEXT2", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "SCREEN_TEXT2"),
        () => {
          audioRef.current["SCREEN_TEXT2"].play();
          setPreviousSound("SCREEN_TEXT2");
        }
      );
    });
    EventManager.init("NUCLEUS", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "NUCLEUS"),
        () => {
          audioRef.current["NUCLEUS"].play();
          setPreviousSound("NUCLEUS");
        }
      );
    });
    EventManager.init("CELL_MEMBRANE_ANIMAL", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "CELL_MEMBRANE_ANIMAL"),
        () => {
          audioRef.current["CELL_MEMBRANE_ANIMAL"].play();
          setPreviousSound("CELL_MEMBRANE_ANIMAL");
        }
      );
    });
    EventManager.init("CELL_MEMBRANE_PLANT", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "CELL_MEMBRANE_PLANT"),
        () => {
          audioRef.current["CELL_MEMBRANE_PLANT"].play();
          setPreviousSound("CELL_MEMBRANE_PLANT");
        }
      );
    });
    EventManager.init("CELL_WALL", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "CELL_WALL"),
        () => {
          audioRef.current["CELL_WALL"].play();
          setPreviousSound("CELL_WALL");
        }
      );
    });
    EventManager.init("CHLOROPLAST", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "CHLOROPLAST"),
        () => {
          audioRef.current["CHLOROPLAST"].play();
          setPreviousSound("CHLOROPLAST");
        }
      );
    });
    EventManager.init("CYTOPLASM", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "CYTOPLASM"),
        () => {
          audioRef.current["CYTOPLASM"].play();
          setPreviousSound("CYTOPLASM");
        }
      );
    });
    EventManager.init("MITOCHONDRIA", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "MITOCHONDRIA"),
        () => {
          audioRef.current["MITOCHONDRIA"].play();
          setPreviousSound("MITOCHONDRIA");
        }
      );
    });
    EventManager.init("RIBOSOMES", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "RIBOSOMES"),
        () => {
          audioRef.current["RIBOSOMES"].play();
          setPreviousSound("RIBOSOMES");
        }
      );
    });
    EventManager.init("VACUOLES", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "VACUOLES"),
        () => {
          audioRef.current["VACUOLES"].play();
          setPreviousSound("VACUOLES");
        }
      );
    });
    EventManager.init("VACUOLE", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "VACUOLE"),
        () => {
          audioRef.current["VACUOLE"].play();
          setPreviousSound("VACUOLE");
        }
      );
    });

    EventManager.init("SCREEN_INTRO", (data) => {
      stopAllAudioNarration(
        voiceOver.filter((v) => v !== "SCREEN_INTRO"),
        () => {
          audioRef.current["SCREEN_INTRO"].play();
          setPreviousSound("SCREEN_INTRO");
        }
      );
    });

    EventManager.init("PRIMARY_CLICK", (data) => {
      stopAllAudioNarration(voiceOver);
    });

    EventManager.init("SECONDARY_CLICK", (data) => {
      stopAllAudioNarration(voiceOver);
    });
    EventManager.init("NEGATIVE_FEEDBACK", (data) => {
      stopAllAudioNarration(voiceOver);
    });

    EventManager.init("POSITIVE_FEEDBACK", (data) => {
      stopAllAudioNarration(voiceOver);
    });

    EventManager.init("MOVE_TO_NEXT_SCREEN", (data) => {
      stopAllAudioNarration(voiceOver);
    });
  }, []);

  const setRef = (ref, type) => {
    audioRef.current[type] = ref;
  };
  const stopAllAudioNarration = (list, cb) => {
    for (let type of list) {
      if (audioRef.current[type].isPlaying()) {
        audioRef.current[type].stop();
      }
    }
    setTimeout(() => {
      if (cb && typeof cb == "function") {
        cb();
      }
    });
  };

  useEffect(() => {
    if (resetDialogNoSelected && audioStatePlay) {
      if (setResetDialogNoSelected) {
        setResetDialogNoSelected(false);
      }
    }
  }, [resetDialogNoSelected]);

  return (
    <>
      <SoundManager
        ref={(ref) => setRef(ref, "SCREEN_TEXT")}
        src={sounds.screenText}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "SCREEN_TEXT2")}
        src={sounds.screenText2}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "SCREEN_TEXT2")}
        src={sounds.screenText2}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "NUCLEUS")}
        src={sounds.nucleus}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "CELL_MEMBRANE_ANIMAL")}
        src={sounds.cellMembraneAnimal}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "CELL_MEMBRANE_PLANT")}
        src={sounds.cellMembranePlant}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "CELL_WALL")}
        src={sounds.cellWall}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "CHLOROPLAST")}
        src={sounds.chloroplast}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "CYTOPLASM")}
        src={sounds.cytoplasm}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "MITOCHONDRIA")}
        src={sounds.mitochondria}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "RIBOSOMES")}
        src={sounds.ribosomes}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "VACUOLES")}
        src={sounds.vacuoles}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "VACUOLE")}
        src={sounds.vacuole}
      />
      <SoundManager
        ref={(ref) => setRef(ref, "SCREEN_INTRO")}
        src={sounds.screen2}
      />
      <SequentialSoundManager />
    </>
  );
};

export default sfx;
