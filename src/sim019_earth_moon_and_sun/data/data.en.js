import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have successfully completed the simulation Earth, Moon and Sun.",
  },
  initialDialogMessage:
    "Earth, the Sun, and the Moon move together as a system.",
  resetDialogMessage: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  infoDialogMessage:
    "Choose a day on the calendar and observe the phase of the moon.",
  earthLabel: "View from space",
  moonPhaseLabel: "View from Earth",
  calendarData: {
    days: 30,
    monthLabel: "January",
    daysLabel: [
      { id: "day1", label: "Su", alt: "Sunday" },
      { id: "day2", label: "Mo", alt: "Monday" },
      { id: "day3", label: "Tu", alt: "Tuesday" },
      { id: "day4", label: "We", alt: "Wednesday" },
      { id: "day5", label: "Th", alt: "Thursday" },
      { id: "day6", label: "Fr", alt: "Friday" },
      { id: "day7", label: "Sa", alt: "Saturday" },
    ],
    rightSectionHeading:
      "Select different days of the month to view the position and the phase of the moon.",
  },
  activityHeading:
    "In this simulation, the learner will investigate how the movements of Earth and the Moon in relation to the Sun causes day and night cycles, changes in moon phases, and seasons.",
  moonPhases: [
    {
      dates: [1, 30],
      phase: "New moon",
      alt: "The view of the new moon from Earth is of the moon in total shadow.",
    },
    {
      phase: "Waxing crescent",
      dates: [2, 3, 4, 5, 6, 7],
      alt: "The view from Earth of the waxing crescent moon is of the Moon in shadow except for a small sliver of light on the right side.",
    },
    {
      dates: [8],
      phase: "First quarter",
      alt: "The view from Earth of the first quarter moon is of the Moon in half shadow and half light.",
    },
    {
      phase: "Waxing gibbous",
      dates: [9, 10, 11, 12, 13, 14],
      alt: "The view from Earth of the waxing gibbous moon shows the Moon a little less than half in shadow and a little more lit by the Sun.",
    },
    {
      dates: [15],
      phase: "Full moon",
      alt: "The view from Earth of the full moon shows the side of the Moon facing Earth in total light.",
    },
    {
      phase: "Waning gibbous",
      dates: [16, 17, 18, 19, 20, 21],
      alt: "The view from Earth of the waning gibbous moon is of the Moon completely lit except for a small sliver of darkness on the right side.",
    },
    {
      dates: [22],
      phase: "Third quarter",
      alt: "The view from Earth of the third quarter moon is of the Moon in half shadow and half light.",
    },
    {
      phase: "Waning crescent",
      dates: [23, 24, 25, 26, 27, 28, 29],
      alt: "The view from Earth of the waning crescent moon shows the Moon a little more than half in shadow and a little less lit by the Sun.",
    },
  ],
  rotationLiveText:
    "The moon has rotated -1- degrees from its initial position around earth and current moon phase is -2-.",
  mainImageAlt:
    "A circle in upper left is a view of moon from Earth. Center is view from space with dark side of Moon facing Earth and lit side facing Sun.",
  moonAroundEarthAltText: {
    1: "Earth is center with left half shadowed. Dashed circle around Earth shows Moon’s path. Moon is directly right at day 1 and side facing Earth is dark.",
    2: "Now the Moon has moved up and is at day 2, which is 2/30 of its cycle. The side of the Moon facing Earth is dark, but a small edge is lit.",
    3: "The Moon continues to move in the same direction and is at day 3, which is 3/30 of its cycle.The lit edge of the Moon facing Earth is slightly larger.",
    4: "Now the Moon is at day 4, which is 4/30 of its cycle. The dark part is slightly smaller and the lit part is slightly larger.",
    5: "Now the Moon is at day 5, which is 5/30 of its cycle. The dark part continues to get smaller and the lit part continues to get larger.",
    6: "Now the Moon is at day 6, which is 6/30 of its cycle. The dark part continues to get smaller and the lit part continues to get larger.",
    7: "Now the Moon is at day 7, which is 7/30 of its cycle. The dark part continues to get smaller and the lit part continues to get larger.",
    8: "Now the Moon is at day 8, which is 8/30 of its cycle. It is directly above the Earth image. Half of the side facing Earth is dark and half is lit.",
    9: "Now the Moon is at day 9, which is 9/30 of its cycle. The dark part is slightly less than half the Moon and the lit part is a little more than half.",
    10: "Now the Moon is at day 10, which is 10/30 of its cycle. The dark part continues to get smaller and the lit continues to get larger.",
    11: "Now the Moon is at day 11, which is 11/30 of its cycle. The dark part continues to get smaller and the lit continues to get larger.",
    12: "Now the Moon is at day 12, which is 12/30 of its cycle. The dark part continues to get smaller and the lit continues to get larger.",
    13: "Now the Moon is at day 13, which is 13/30 of its cycle. The dark part continues to get smaller and the lit continues to get larger.",
    14: "Now the Moon is at day 14, which is 14/30 of its cycle. The dark part continues to get smaller and the lit continues to get larger.",
    15: "Now the Moon is at day 15, which is half its cycle. It is directly left of the Earth image. The side facing Earth is fully lit and away side is dark.",
    16: "Now the Moon has moved down and is at day 16, which is 16/30 of its cycle. The side of the Moon facing Earth is lit, but a small edge is dark.",
    17: "The Moon continues to move in the same direction and is at day 17, which is 17/30 of its cycle.The dark edge is slightly larger.",
    18: "Now the Moon is at day 18, which is 18/30 of its cycle. The lit part is slightly smaller and the dark part is slightly larger.",
    19: "Now the Moon is at day 19, which is 19/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    20: "Now the Moon is at day 20, which is 20/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    21: "Now the Moon is at day 21, which is 21/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    22: "Now the Moon is at day 22, which is 22/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    23: "Now the Moon is at day 23, which is 23/30 of its cycle. Less than half of the side facing Earth is lit and more than half is dark.",
    24: "Now the Moon is at day 24, which is 24/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    25: "Now the Moon is at day 25, which is 25/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    26: "Now the Moon is at day 26, which is 26/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    27: "Now the Moon is at day 27, which is 27/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    28: "Now the Moon is at day 28, which is 28/30 of its cycle. The lit part continues to get smaller and the dark part continues to get larger.",
    29: "Now the Moon is at day 29, which is 29/30 of its cycle. Most of the side of the Moon facing Earth is dark. Only a small part is lit.",
    30: "Now the Moon is at day 30, which is 30/30 of its cycle. Its cycle is complete. The side facing Earth is completely dark. The side facing away is lit.",
  },
};

export default data;
