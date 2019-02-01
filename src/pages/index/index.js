import {addCommaToNumber} from '../../components/addCommaToNumber/';

(function() {  // 格式化数字，加逗号
  const number = 12345;
  const parseNumber = addCommaToNumber(number);
  console.log(`格式化数字加逗号: ${parseNumber}`);
})();

if (module.hot) module.hot.accept();
