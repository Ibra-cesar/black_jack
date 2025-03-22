let isAlive = false;
let cards: number[] = [];
let sum: number = 0;
let isBlackjack = false;
let message: string = "";

interface UIElements {
  messageEl: HTMLParagraphElement;
  sumEl: HTMLParagraphElement;
  cardsEl: HTMLParagraphElement;
}

function generateRandomNumber() {
  const card = Math.floor(Math.random() * 13) + 1;

  if (card > 10) {
    return 10;
  } else if (card === 1) {
    return 11;
  } else {
    return card;
  }
}

export function startButton(element: HTMLButtonElement, ui: UIElements) {
  element.addEventListener("click", () => {
    isAlive = true;
    isBlackjack = false;
    const firstCd = generateRandomNumber();
    const seconCd = generateRandomNumber();
    cards = [firstCd, seconCd];
    sum = firstCd + seconCd;
    cheked();
    renderSum(ui.sumEl);
    renderMessage(ui.messageEl);
    renderCards(ui.cardsEl);
  });
}

function cheked() {
  if (sum <= 20) {
    message = "want to draw a new card";
    isAlive = true;
  } else if (sum === 21) {
    message = "You got Black jack :)";
    isBlackjack = true;
  } else {
    message = "Sorry you loss the game :(";
    isAlive = false;
  }
}

export function newButton(element: HTMLButtonElement, ui: UIElements) {
  element.addEventListener("click", () => {
    if (isAlive === true && isBlackjack === false) {
      const thirdCd = generateRandomNumber();
      cards.push(thirdCd);
      sum += thirdCd;
      console.log(sum, cards);
      cheked();
      renderSum(ui.sumEl);
      renderMessage(ui.messageEl);
      renderCards(ui.cardsEl);
    }
  });
}
function renderSum(element: HTMLParagraphElement) {
  element.textContent = `Sum: ${sum}`;
}

function renderMessage(element: HTMLParagraphElement) {
  element.textContent = message;
}

function renderCards(element: HTMLParagraphElement) {
  element.textContent = "Cards : " + cards.join(" ");
}
