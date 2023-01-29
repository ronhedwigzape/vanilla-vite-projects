// Include CSS
import './style.css'

// Include HTML
document.querySelector('#app').innerHTML = `
  <div>
     <nav>
      <div class="nav-center">
        <h4>color flipper</h4>
        <ul class="nav-links">
          <li><a href="index.html">simple</a></li>
          <li><a href="hex.html">hex</a></li>
        </ul>
      </div>
    </nav>
    <main>
      <div class="container">
        <h2>background color : <span class="color">#f1f5f8</span></h2>
        <button class="btn btn-hero" id="btn">click me</button>
      </div>
    </main>
  </div>
`

// Include JS
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

const getRandomNumber = () => Math.floor(Math.random() * hex.length)