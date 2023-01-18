import Magician from '../magician';

test('Проверка класса Magician', () => {
  const received = new Magician('Hero');
  const expected = {
    name: 'Hero',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
