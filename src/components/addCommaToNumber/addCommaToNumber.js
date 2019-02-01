/**
 * @des 传入一个数字，将返回带有 ',' 的字符串类型数字
 * @param { Number|String } number - 传入的数字，字符串类型或数字类型
 * @return { String } strNumber - 返回字符串类型的数字，加逗号
 * @example
 *   const parseNumber = addCommaToNumber(12345); // 12,345
*/
const addCommaToNumber = (number) => {
  if (typeof number === 'number') number = number.toString();

  let numberArr = number.split('').reverse();
  let tmp = [];

  numberArr.forEach((item, index) => {
    if ((index + 1) % 3 === 0 && (index + 1) !== numberArr.length) {
      tmp += item + ',';
    } else {
      tmp += item;
    }
  })

  numberArr = null;  // 解除引用

  return tmp.split('').reverse().join('');
};

export default addCommaToNumber;
