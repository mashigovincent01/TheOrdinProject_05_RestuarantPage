import heroImage from './assets/images/hero.jpg';
const about = ()=>{
    const div = document.createElement('div');
    div.innerHTML = `
        <h1 id="about-h1">About</h1>
        <div id="about">
            <div>
                <h2>Our story</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cumque animi, odit voluptates expedita inventore distinctio tempore aspernatur est sed error vero placeat accusamus et. Quis repellendus libero perferendis asperiores!
                    Eius, ea iusto ipsum exercitationem at consectetur quas dicta hic natus nostrum molestias facere. Dolor dolores similique quasi ea, consequatur facere et debitis officiis dolorem tempore ipsam vitae facilis quod.
                </p>
            </div>
            <div id="about-img">
                <img src=${heroImage} alt="">
            </div>
        </div>
        <p id="quote">
            Note, this website was to built to apply WEBPACK SKILLS. that's why it looks bad in terms of presentation.
        </p>
    `
    document.querySelector("#content").innerHTML = "";
    document.querySelector("#content").appendChild(div);
}

export default about;