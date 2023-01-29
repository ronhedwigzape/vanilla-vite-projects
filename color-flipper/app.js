// Include CSS
import './style.css'

// Include HTML
document.querySelector('#app').innerHTML = `
    <nav>
        <div class="nav-center">
            <h4>color flipper</h4>
            <ul class="nav-links">
                <li>
                    <a href="index.html">simple</a>
                </li>
                <li>
                    <a href="hex.html">hex</a>
                </li>
            </ul>
        </div>
    </nav>
    <main>
        <div class="container">
            <h2>background color : <span class="color">#f1f5f8</span></h2>
            <button class="btn btn-hero" id="btn">click me</button>
        </div>
    </main>
`

// Include JS
const colors = [
    "green",
    "red",
    "rgba(133,122,200)",
    "#f15025"
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {

    // Get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
});

const getRandomNumber = () => Math.floor(Math.random() * colors.length)