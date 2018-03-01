import authReducer from '../../reducers/auth';

test('should return uid upon login', () => {
  const uid = 123456;
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({ uid });
});

test('should return empty object upon logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({ });
});