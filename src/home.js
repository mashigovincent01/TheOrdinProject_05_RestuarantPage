import hero from './hero';
import menu from './menu';

const home = ()=>{
    const content = document.querySelector("#content");
    content.appendChild(hero);
    content.appendChild(menu);
}

export default home;