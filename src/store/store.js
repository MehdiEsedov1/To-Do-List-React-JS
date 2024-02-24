import reducer from "./tasks";
import { legacy_createStore as createStore } from 'redux';

export const store = createStore(reducer);