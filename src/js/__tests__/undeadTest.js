import Undead from '../undead';

test('Проверка класса Undead', () => {
  const received = new Undead('Hero');
  const expected = {
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
