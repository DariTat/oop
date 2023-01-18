import Bowerman from '../bowerman';

test('Проверка класса Bowerman', () => {
  const received = new Bowerman('Hero');
  const expected = {
    name: 'Hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
