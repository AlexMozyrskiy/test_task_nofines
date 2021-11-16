/**
 * Функция вычисляет контрольный разряд УИН и возвращает его
 *
 * @param {string} value - 19 или 24 цифры
 * @returns
 */
export const calculateControlCategory = (value) => {
  const splited = value.split("");

  let remainder = getRemainder(splited, 0);

  if (remainder !== 10) {
    return remainder;
  } else {
    remainder = getRemainder(splited, 2);

    if (remainder !== 10) {
      return remainder;
    }
  }

  return "0";

  /* ----------------- Вспомогательные функции -------------------- */
  function myReduce(arr) {
    return arr.reduce((prevVal, val) => {
      return prevVal + val.product;
    }, 0);
  }

  /* Массив из цифр соответствущий доступным весам */
  function getWeights(count = 27) {
    let weights = [];

    for (let i = 1; i <= count; i++) {
      if (i <= 10) {
        weights.push(i);
      } else {
        const iString = String(i);
        const secondNum = +iString[1];
        if (secondNum === 0) {
          weights.push(10);
        } else {
          weights.push(secondNum);
        }
      }
    }

    return weights;
  }

  /**
   * Получим вес исходя из индекса числа в УИН
   *
   * @param {number} index
   * @param {number} shift - сдвиг веса. Указывается в случае получения после первого вычисления остатка 10
   */
  function getWeight(index, shift = 0) {
    const weights = getWeights();

    return weights[index + shift];
  }

  /**
   * Вычисляем остаток
   *
   * @param {string[]} splited
   * @returns
   */
  function getRemainder(splited, shift = 0) {
    let arr = [];

    splited.forEach((item, index) => {
      const weight = getWeight(index, shift);

      arr.push({
        number: +item,
        weight,
        product: +item * weight,
      });
    });

    const sum = myReduce(arr);

    return sum % 11;
  }
};
