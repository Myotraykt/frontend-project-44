// ЗДЕСЬ БУДЕТ УТИЛИТА ДЛЯ ГЕНЕРАЦИИ СЛУЧАЙНЫХ ЦЕЛЫХ ЧИСЛЕ ДЛЯ ЗАДАЧ
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;
