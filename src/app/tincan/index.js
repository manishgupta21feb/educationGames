import TincanManager from "./manager";

let initializeApp = null;
let initializeAppTimeout = null;

export const init = (tincanData, callback) => {
  initializeApp = callback;
  TincanManager.setTincanData(tincanData);
  let iframeData = TincanService.getFrameId();

  TincanService.addSetCurrentStateEventListener(
    addSetCurrentStateEventListenerCallback
  );
  TincanService.addGetCurrentStateEventListener(
    addGetCurrentStateEventListenerCallback
  );

  if (Object.keys(iframeData).length) {
    TincanManager.iframeId = iframeData.iframeId;
    TincanManager.lang = iframeData.lang || ACTIVITY_CONFIG.lang;
  } else {
    TincanManager.iframeId = "frameone";
    TincanManager.lang = ACTIVITY_CONFIG.lang;
  }

  if (Object.keys(iframeData).length) {
    window.parent.postMessage(
      {
        eventName: "onReady",
        iframeId: TincanManager.iframeId,
      },
      "*"
    );

    initializeAppTimeout = setTimeout(() => {
      initializeApp();
    }, 5000);
  } else {
    initializeApp();
  }
};

const addSetCurrentStateEventListenerCallback = (data) => {
  clearTimeout(initializeAppTimeout);
  if (Object.keys(data).length) {
    TincanManager.setTincanData(data);
  }
  initializeApp();
};

const addGetCurrentStateEventListenerCallback = () => {
  TincanManager.saveTincanData();
};
