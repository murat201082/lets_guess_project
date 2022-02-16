let sect1 = document.querySelector(".sect1");
let subm = document.querySelector(".subm");

let guess = document.getElementById("guess");

let foot2 = document.getElementById("foot2");

let number_limit1 = document.getElementById("number_guess");

let liste = [1];
let liste2 = [100];

let rand = Math.ceil(Math.random() * 100);
let count = 0;
subm.addEventListener("click", (e) => {
  count++;
  foot2.innerText = `Number of Attempts: ${count}`;
  console.log(rand);
  e.preventDefault();

  if (rand == sect1.value) {
    guess.innerText = "CONGRULATIONS THİS NUMBER İS RİGHT!!";
    setTimeout(() => {
      window.location.reload(true);
    }, 5000);
    setTimeout(() => {
      guess.innerText = "you can try again".toUpperCase();
    }, 3000);
  } else if (sect1.value > 100) {
    guess.innerText = "CHOOSE BETWEEN 1-100 NUMBERS!!";
    setTimeout(() => {
    //   window.location.reload(true);
    }, 3000);
  } else if (rand > sect1.value) {
    liste.push(sect1.value);
    guess.innerText = "PLEASE HIGHER";
    number_limit1.innerText = ` ${liste[liste.length - 1]} - ${
      liste2[liste2.length - 1]
    }  `;
  } else {
    liste2.push(sect1.value);

    guess.innerText = "PLEASE LOWER";
    number_limit1.innerText = ` ${liste[liste.length - 1]} - ${
      liste2[liste2.length - 1]
    }  `;
  }
});



