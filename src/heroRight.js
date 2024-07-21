import heroImage from './assets/images/hero.jpg';
const heroRight = (()=>{
    let div = document.createElement('div');
    div.id = "hero-right";
    
    div.innerHTML = `<img src="${heroImage}" alt="Image"></img>`;
    return div;
})();
export default heroRight;