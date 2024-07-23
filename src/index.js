import style from './styles.css';
import home from './home';
import about from './about';
import contact from './contact';

home();
const homeButton = document.querySelector("#home");
homeButton.addEventListener('click', home);

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener('click', about);

const contactButton = document.querySelector("#contact");
contactButton.addEventListener('click', contact);