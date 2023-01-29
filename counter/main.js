// Include CSS
import './style.css'

// Include HTML
document.querySelector('#app').innerHTML = `
    <main>
        <div class="container">
            <h1>counter</h1>
            <span id="value">0</span>
            <div class="button-container">
                <button class="btn decrease">decrease</button>
                <button class="btn reset">reset</button>
                <button class="btn increase">increase</button>
            </div>
        </div>
    </main>
`

// Include JS

// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        styles.contains('decrease') ? count-- :
        styles.contains('increase') ? count++ :
        count = 0

        count > 0 ? value.style.color = 'green' :
        count < 0 ? value.style.color = 'red' :
        value.style.color = 'black';

        value.textContent = count;
    });
});
