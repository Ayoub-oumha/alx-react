import './styles.css';
import image from './Holberton-logo.png';

const img = document.createElement('img');
img.src = image;
document.body.appendChild(img);

console.log('Hello, Webpack with CSS and Images!');
