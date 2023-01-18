import Character from '../character';
import Bowerman from '../bowerman';
import Zombie from '../zombie';

test('тест класса Character', () => {
  const received = new Character('Hero', 'Undead');
  const expected = {
    name: 'Hero',
    type: 'Undead',
    health: 100,
    level: 1,
  };
  expect(received).toEqual(expected);
});
test('Проверка длины имени', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const received = new Character('H', 'Undead');
  }).toThrowError('Имя не соответствует заданной длине');
});
test('Проверка типа', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const received = new Character('Hero', 'Hero');
  }).toThrowError('Некорректный тип данных');
});
test('Проверка levelUP', () => {
  const received = new Bowerman('Hero');
  received.levelUp();
  const expected = {
    name: 'Hero',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});
test('Пооверка на ошибку levelUp', () => {
  expect(() => {
    const received = new Bowerman('Hero');
    received.health = 0;
    received.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего');
});
test('Проверка damage', () => {
  const received = new Zombie('Nik');
  received.damage(10);
  const expected = {
    name: 'Nik',
    type: 'Zombie',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
test('Проверка на ошибку damage', () => {
  expect(() => {
    const received = new Zombie('Nik');
    received.health = -10;
    received.damage(10);
  }).toThrowError('Игрок мертв');
});
