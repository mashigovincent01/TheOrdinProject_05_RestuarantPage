
const heroLeft = (()=>{

    let hero = document.createElement('div');
    hero.id = "hero-left";
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = "Vince's Restuarant";
    let p = document.createElement('p');
    p.textContent = "Hungry? You've come to the right place. Enjoy our delicious, mouth-watering dishes.";
    let buttons = document.createElement('div');
    buttons.id = "buttons";
    buttons.innerHTML = `<button onclick="location.href='#menu'">Menu</button><button>Special</button>`;
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(buttons);
    hero.appendChild(div);

    return hero;

})();

export default heroLeft;

