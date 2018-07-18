import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

window.localStorage = () => {
  store = {};
  setItem = (key, val) => (store[key] = val);
  getItem = key => store[key];
  removeItem = key => {
    delete store[key];
  };
  clear = () => (store = {});
};
