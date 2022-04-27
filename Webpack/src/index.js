import hello from './hello.js';
import imgpng from './assets/01-太宰治.png';
import imgsvg from './assets/灯.svg';
import imgjpg from './assets/02-太宰.jpg';
import testTXT from './assets/test.txt';
import './style.css';
import './style.less';
import Data from './assets/data.xml';
import Notes from './assets/data.csv';
import _ from 'lodash';
hello();

const img1 = document.createElement('img');
img1.src = imgpng;
document.body.appendChild(img1);
const img2 = document.createElement('img');
img2.src = imgsvg;
document.body.appendChild(img2);
const img3 = document.createElement('img');
img3.src = imgjpg;
document.body.appendChild(img3);

const block = document.createElement('div');
block.classList.add('box1');
block.textContent = testTXT;
document.body.appendChild(block);

console.log(Data);
console.log(Notes);

console.log(_.join(['Another', 'module', 'loaded!'], ' '));
