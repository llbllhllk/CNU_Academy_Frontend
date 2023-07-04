const prev = document.querySelector(".cal-previous-preview");
const current = document.querySelector(".cal-current-preview");

const numberElem = document.querySelectorAll("#number");
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");
const divide = document.querySelector("#divide");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiple = document.querySelector("#multiple");
const result = document.querySelector("#result");
const dot = document.querySelector("#dot");

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  minus() {
    return this.a - this.b;
  }

  multiple() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
}

let input = [];
let total = 0;

const numberElementsHandler = () => {
  numberElem.forEach((elem) =>
    elem.addEventListener("click", clickedNumberHandler)
  );
};

const deleteElementsHandler = () => {
  ac.addEventListener("click", () => {
    input = [];
    while (current.firstChild) {
      current.removeChild(current.firstChild);
    }
    console.log(input);
  });
  del.addEventListener("click", () => {
    input.pop();
    while (current.firstChild) {
      current.removeChild(current.firstChild);
    }
    const text = document.createTextNode(input.join(""));
    current.appendChild(text);
    console.log(input);
  });
};

const clickedNumberHandler = (e) => {
  const { textContent } = e.target;
  input.push(parseInt(textContent));
  while (current.firstChild) {
    current.removeChild(current.firstChild);
  }
  const text = document.createTextNode(input.join(""));
  current.appendChild(text);
  console.log(input);
};

const clickedOperatorHandler = (e) => {
  const { textContent } = e.target;
  input.push(textContent);
  while (current.firstChild) {
    current.removeChild(current.firstChild);
  }
  const text = document.createTextNode(input.join(""));
  current.appendChild(text);
  console.log(input);
};

const operatorsHandler = () => {
  const operators = [plus, minus, multiple, divide];
  operators.forEach((operator) =>
    operator.addEventListener("click", clickedOperatorHandler)
  );
};

let cnt = 0;

const clickedResultHandler = () => {
  // 숫자와 연산자를 고려하여 값을 구한다.
  input.map((item) => {
    if (typeof item === "number") {
      total += item * 10 ** cnt;
      cnt++;
    } else {
      input = [];
      input.push(total);
      total = 0;
      cnt = 0;
    }
  });
  console.log(input);
  // 해당 값을 current에 출력한다.
  // 해당 값을 current에 출력한 이력이 있으면 prev에 출력한다.
};

const init = () => {
  const cal = new Calculator(13, 2);
  numberElementsHandler();
  deleteElementsHandler();
  operatorsHandler();
  result.addEventListener("click", clickedResultHandler);
  // result.addEventListener("click");
};

init();
