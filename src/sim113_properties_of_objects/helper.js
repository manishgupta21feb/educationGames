import _ from "lodash";
const randomizeItems = (items) => {
  const _items = _.cloneDeep(items);
  const specialItems = ["marble_green", "marble_yellow"];
  const result = [];
  while (_items.length) {
    const randomIndex = Math.floor(Math.random() * _items.length);
    if (
      result.length < 4 &&
      specialItems.indexOf(_items[randomIndex].id) != -1
    ) {
      continue;
    }
    result.push({ ..._items.splice(randomIndex, 1)[0] });
  }
  return result;
};

export { randomizeItems };
