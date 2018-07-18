export default () => {
  store = {};
  setItem = (key, val) => (store[key] = val);
  getItem = key => store[key];
  removeItem = key => {
    delete store[key];
  };
  clear = () => (store = {});
};
