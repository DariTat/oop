import Daemon from '../daemon';

test('Проверка класса Daeman', () => {
  const received = new Daemon('Hero');
  const expected = {
    name: 'Hero',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
