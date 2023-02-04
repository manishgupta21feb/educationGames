let events = [];

const EventManager = {
  events: [],
  init: (name, callback) => {
    if (events[name] == undefined) {
      events[name] = [];
    }
    events[name].push(callback);
    if (EventManager.events.indexOf(name) == -1) {
      EventManager.events.push(name);
    }
  },
  broadcast: (name, data) => {
    if (events[name] != undefined) {
      events[name].map((callback) => {
        callback(data);
      });
    }
  },
  deregister: (name) => {
    if (events[name] != undefined) {
      let index = events.indexOf(name);
      let index2 = EventManager.events.indexOf(name);
      events.splice(index, 1);
      EventManager.events.splice(index2, 1);
    }
  },
};

module.exports = EventManager;

// export default EventManager;
