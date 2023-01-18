import Zombie from '../zombie';

test('Проверка класса Zombie', () => {
  const received = new Zombie('Hero');
  const expected = {
    name: 'Hero',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
