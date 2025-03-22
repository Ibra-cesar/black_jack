import { newButton, startButton } from './counter';
import './style.css'


document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <div id="nav">
        <nav>
                <h1>BlackJack</h1>
                <p id="message-el">Wanna Play a Round ?</p>
        </nav>
    </div>
    <main>
            <div id="main">
                <p id="cards-el">Cards:</p>
                <p id="sum-el">Sum: </p>
                <button class="newButton">New Card</button>
                <button class="startButton">Start Game</button>
            </div>
    </main>
  </div>
`;

const messageEl = document.getElementById("message-el") as HTMLParagraphElement;
const sumEl = document.querySelector<HTMLParagraphElement>("#sum-el")!;
const cardsEl = document.querySelector<HTMLParagraphElement>("#cards-el")!;
const startBtn = document.querySelector<HTMLButtonElement>(".startButton")!;
const newBtn = document.querySelector<HTMLButtonElement>(".newButton")!;

startButton(startBtn, {messageEl, sumEl, cardsEl})
newButton(newBtn, {messageEl, sumEl, cardsEl})

