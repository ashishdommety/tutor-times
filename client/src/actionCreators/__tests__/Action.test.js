import * as actions from '../index';

test('start login action', () => {
  expect(actions.startLogin().type).toBe("start");
});

test('login error action', () => {
  expect(actions.errLogin().type).toBe("error");
});

test('login success action', () => {
  expect(actions.finLogin().type).toBe("end");
});

