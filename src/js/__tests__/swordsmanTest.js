import Swordsman from '../swordsman';

test('Проверка класса Swordsman', () => {
  const received = new Swordsman('Hero');
  const expected = {
    name: 'Hero',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
