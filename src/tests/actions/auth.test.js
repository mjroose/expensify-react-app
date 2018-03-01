import { login, logout } from '../../actions/auth';

const uid = 123456;

test('should receive login action object from login action creator', () => {
  const result = login(uid);
  expect(result).toEqual({ 
    type: 'LOGIN',
    uid
  });
});

test('should receive logout action object from logout action creator', () => {
  const result = logout();
  expect(result).toEqual({
    type: 'LOGOUT'
  });
});