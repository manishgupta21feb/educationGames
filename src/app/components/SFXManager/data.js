import primaryClick from "../../assets/audios/primary_click.mp3";
import infoPopupOpen from "../../assets/audios/info_popup_open.mp3";
import secondaryClick from "../../assets/audios/secondary_click.mp3";
import positiveFeedback from "../../assets/audios/positive_feedback.mp3";
import negativeFeedback from "../../assets/audios/negative_feedback.mp3";
import moveToNextScreen from "../../assets/audios/move_to_next_screen.mp3";
import incorrectDragRevert from "../../assets/audios/incorrect_drag_revert.mp3";
import completionScreen from "../../assets/audios/completion_reward_screen.mp3";

const sfxArray = [
  {
    src: primaryClick,
    id: "PRIMARY_CLICK",
  },
  {
    src: infoPopupOpen,
    id: "INFO_POPUP_OPEN",
  },
  {
    src: secondaryClick,
    id: "SECONDARY_CLICK",
  },
  {
    src: positiveFeedback,
    id: "POSITIVE_FEEDBACK",
  },
  {
    src: negativeFeedback,
    id: "NEGATIVE_FEEDBACK",
  },
  {
    src: completionScreen,
    id: "COMPLETION_SCREEN",
  },
  {
    src: moveToNextScreen,
    id: "MOVE_TO_NEXT_SCREEN",
  },
  {
    src: incorrectDragRevert,
    id: "INCORRECT_DRAG_REVERT",
  },
];

export { sfxArray };
