let TincanService = {};
let addSetCurrentStateEventListenerCallback = null;
let addGetCurrentStateEventListenerCallback = null;

TincanService.addSetCurrentStateEventListener = (callback) => {
  addSetCurrentStateEventListenerCallback = callback;
};

TincanService.addGetCurrentStateEventListener = (callback) => {
  addGetCurrentStateEventListenerCallback = callback;
};

TincanService.receiveTCConfig = (event) => {
  let data = event.data;
  switch (data.eventName) {
    case "getCurrentState": // send iframe's state to the page
      addGetCurrentStateEventListenerCallback();
      break;
    case "setCurrentState": // set current state to iframe
      console.log("Data recieved from platform: ", data.state);
      addSetCurrentStateEventListenerCallback(data.state);
      break;
    case "setGrade":
      TincanService.setGrade(data);
      break;
    case "getGrade":
      TincanService.getGrade(data);
      break;
  }
};

TincanService.getFrameId = () => {
  let url = window.location.href;
  let data = {};
  let hashes = url.split("?")[1];
  if (hashes == undefined) {
    return data;
  }

  let hash = hashes.split("&");

  for (let i = 0; i < hash.length; i++) {
    let params = hash[i].split("=");
    data[params[0]] = params[1];
  }

  return data;
};

TincanService.handleGetState = (iframeId, data) => {
  let postData = {};

  postData = {
    eventName: "currentState",
    iframeId: iframeId,
    state: data,
  };
  console.log("data current state:", { ...data });
  window.parent.postMessage(postData, "*");
};

TincanService.handleSetState = (tincanData) => {
  console.log("handleSetState", tincanData);
};

window.addEventListener("message", TincanService.receiveTCConfig);

module.exports = TincanService;
