import heroLeft from "./heroLeft";
import heroRight from "./heroRight";

const hero = (()=>{
    const section = document.createElement('section');
    section.id = "hero";
    section.appendChild(heroLeft);
    section.appendChild(heroRight);
    return section;
})();

export default hero;