let TincanManager = {};
TincanManager.startTime = null;
TincanManager.endTime = null;
TincanManager.spentTime = 0;
TincanManager.iframeId = "";
TincanManager.lang = "en";
TincanManager.data = {};

TincanManager.recordElapsedTime = function (obj, blaunch) {
  if (blaunch) {
    TincanManager.startTime = new Date();
  } else {
    TincanManager.endTime = new Date();
    TincanManager.spentTime = TincanManager.endTime - TincanManager.startTime;
    TincanManager.startTime = TincanManager.endTime;
  }

  let prev_spent_time = obj.time_spent;
  obj.time_spent = prev_spent_time + TincanManager.spentTime / 1000;
};

TincanManager.resetTincanData = function () {
  TincanManager.startTime = null;
  TincanManager.endTime = null;
  TincanManager.spentTime = 0;

  TincanManager.data.time_spent = 0;
  TincanManager.data.completed = false;

  TincanService.handleGetState(TincanManager.iframeId, TincanManager.data);

  TincanManager.recordElapsedTime(TincanManager.data, true);
};

TincanManager.saveTincanData = function () {
  TincanManager.recordElapsedTime(TincanManager.data, false);
  TincanService.handleGetState(TincanManager.iframeId, TincanManager.data);
};

TincanManager.setTincanData = function (data) {
  TincanManager.data = data;
};

// TincanManager.updateDataInTincan = function (object) {
//   let dataIndex = -1;

//   for (let index = 0; index < TincanManager.data.data.length; index++) {
//     if (TincanManager.data.data[index].key === object.key) {
//       dataIndex = index;
//       break;
//     }
//   }

//   if (dataIndex === -1) {
//     TincanManager.data.data.push(object);
//   } else {
//     TincanManager.data.data[dataIndex] = object;
//   }

//   TincanManager.calculatePercentageCompleted();
// };

TincanManager.getDataFromTincan = function (key) {
  let data = "";

  for (let index = 0; index < TincanManager.data.data.length; index++) {
    if (TincanManager.data.data[index].key === key) {
      data = TincanManager.data.data[index];
      break;
    }
  }

  return data;
};

// TincanManager.calculatePercentageCompleted = function () {
//   let totalScore = 0;

//   for (let index = 0; index < TincanManager.data.data.length; index++) {
//     if ("score" in TincanManager.data.data[index]) {
//       totalScore += TincanManager.data.data[index].score;
//     }
//   }

//   TincanManager.data.total_score = totalScore;

//   let percentage =
//     (TincanManager.data.total_score / TincanManager.data.max_score) * 100;

//   if (percentage === 100) {
//     TincanManager.data.completed = true;
//   }

//   TincanManager.data.percentage = percentage;
// };

module.exports = TincanManager;
