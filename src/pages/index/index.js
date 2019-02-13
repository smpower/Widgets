import {addCommaToNumber} from '../../components/addCommaToNumber/';
import {cube} from '../../components/math/';
import './index.css';

(function() {  // 格式化数字，加逗号
  const number = 12345;
  const parseNumber = addCommaToNumber(number);
  console.log(`格式化数字加逗号: ${parseNumber}`);
}());

(function() {
  const myCube = cube(5);
  console.log(myCube);
}());

if (module.hot) module.hot.accept();
