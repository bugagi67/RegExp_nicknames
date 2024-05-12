import Validator from '../js/app';

test('A name that meets all the requirements', () => {
  const result = Validator.validateUsername('bowerman');
  const expected = 'Имя соответствует всем требованиям';
  expect(result).toEqual(expected);
});

test('The number at the beginning of the name', () => {
  const result = Validator.validateUsername('1bowerman');
  const expected = 'Имя не должно начинаться цифрами, символами подчёркивания или тире';
  expect(result).toEqual(expected);
});

test('underline at the beginning of the name', () => {
  const result = Validator.validateUsername('_bowerman');
  const expected = 'Имя не должно начинаться цифрами, символами подчёркивания или тире';
  expect(result).toEqual(expected);
});

test('dash at the beginning of the name', () => {
  const result = Validator.validateUsername('-bowerman');
  const expected = 'Имя не должно начинаться цифрами, символами подчёркивания или тире';
  expect(result).toEqual(expected);
});

test('the number at the end of the name', () => {
  const result = Validator.validateUsername('bowerman1');
  const expected = 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире';
  expect(result).toEqual(expected);
});

test('underline at the end of the name', () => {
  const result = Validator.validateUsername('bowerman_');
  const expected = 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире';
  expect(result).toEqual(expected);
});

test('dash at the end of the name', () => {
  const result = Validator.validateUsername('bowerman-');
  const expected = 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире';
  expect(result).toEqual(expected);
});

test('more than 3 digits in the name, in a row', () => {
  const result = Validator.validateUsername('bowe1234rman');
  const expected = 'Имя не должно содержать подряд более трёх цифр';
  expect(result).toEqual(expected);
});

test('using the Cyrillic alphabet in the name', () => {
  const result = Validator.validateUsername('Василий');
  const expected = 'Допустимы только латинские буквы, символы тире, подчёркивания и цифры (0-9)';
  expect(result).toEqual(expected);
});
