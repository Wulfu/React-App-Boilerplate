import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  login,
  logout
} from "../../actions/auth";

const createMockStore = configureMockStore([thunk]);
const uid = 'testuidstring123';

test('should setup LOGIN action object correctly', () => {
  const store = createMockStore({});
  store.dispatch(login(uid));
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup LOGOUT action object correctly', () => {
  const store = createMockStore({});
  store.dispatch(logout());
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'LOGOUT'
  });
});