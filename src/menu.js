import image from './assets/images/hero.jpg';
const menu = (()=>{
    const section = document.createElement('section');
    section.id = 'menu';
    section.innerHTML = `
    
            <h2>Our Menu</h2>
            <div id="menu-container">
                <div class="menu-card">
                    <img src=${image} alt="" width="200">
                    <h3>Burger</h3>
                </div>
                <div class="menu-card">
                    <img src=${image} alt="" width="200">
                    <h3>Burger</h3>
                </div>
                <div class="menu-card">
                    <img src=${image} alt="" width="200">
                    <h3>Burger</h3>
                </div>
                <div class="menu-card">
                    <img src=${image} alt="" width="200">
                    <h3>Burger</h3>
                </div>
                <div class="menu-card">
                    <img src=${image} alt="" width="200">
                    <h3>Burger</h3>
                </div>
                <div class="menu-card">
                    <img src=${image} alt="" width="200">
                    <h3>Burger</h3>
                </div>
                <div class="menu-card">
                    <img src=${image} alt="" width="200">
                    <h3>Burger</h3>
                </div>
            </div>
       
    `;

    return section;
})();

export default menu;