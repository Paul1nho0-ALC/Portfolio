let chars = "abcdefghijklmnopqrstuvwxyz";
let UcChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "#$&@?";

let nums = document.getElementById("nums");
let sym = document.getElementById("symbols");
let upcase = document.getElementById("uppercase");
let range = document.getElementById("range");
let btn = document.getElementById("generate-btn");
let num_display = document.getElementById("num-display");
let pass_display = document.getElementById("pass");
let pass = "";
let type_pass = 0;

//Funções para checar o valor das ckeckboxes

function generate() {
  //Resetar o valor contido no Display
  pass_display.value = "";

  let length = range.value;

  //Checando se poderemos usar as variações
  if (nums.checked) {
    type_pass += 1;
  }
  if (sym.checked) {
    type_pass += 2;
  }
  if (upcase.checked) {
    type_pass += 4;
  }

  switch (type_pass) {
    case 0:
      for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(rand);
      }
      break;

    case 1:
      for (let i = 0; i < length; i++) {
        let choose = Math.ceil(Math.random() * 3);
        if (choose <= 2) {
          let rand = Math.floor(Math.random() * chars.length);
          pass += chars.charAt(rand);
        } else {
          let rand = Math.floor(Math.random() * numbers.length);
          pass += numbers.charAt(rand);
        }
      }
      break;

    case 2:
      for (let i = 0; i < length; i++) {
        let choose = Math.ceil(Math.random() * 5);
        if (choose <= 4) {
          let rand = Math.floor(Math.random() * chars.length);
          pass += chars.charAt(rand);
        } else {
          let rand = Math.floor(Math.random() * symbols.length);
          pass += symbols.charAt(rand);
        }
      }
      break;

    case 3:
      for (let i = 0; i < length; i++) {
        let choose = Math.ceil(Math.random() * 5);
        if (choose <= 3) {
          let rand = Math.floor(Math.random() * chars.length);
          pass += chars.charAt(rand);
        } else if (choose == 4) {
          let rand = Math.floor(Math.random() * numbers.length);
          pass += numbers.charAt(rand);
        } else {
          let rand = Math.floor(Math.random() * symbols.length);
          pass += symbols.charAt(rand);
        }
      }

    case 4:
      for (let i = 0; i < length; i++) {
        let choose = Math.ceil(Math.random() * 3);
        if (choose <= 2) {
          let rand = Math.floor(Math.random() * chars.length);
          pass += chars.charAt(rand);
        } else {
          let rand = Math.floor(Math.random() * UcChars.length);
          pass += UcChars.charAt(rand);
        }
      }
      break;

    case 5:
      for (let i = 0; i < length; i++) {
        let choose = Math.ceil(Math.random() * 5);
        if (choose <= 3) {
          let rand = Math.floor(Math.random() * chars.length);
          pass += chars.charAt(rand);
        } else if (choose == 4) {
          let rand = Math.floor(Math.random() * numbers.length);
          pass += numbers.charAt(rand);
        } else {
          let rand = Math.floor(Math.random() * UcChars.length);
          pass += UcChars.charAt(rand);
        }
      }
      break;

    case 6:
      for (let i = 0; i < length; i++) {
        let choose = Math.ceil(Math.random() * 5);
        if (choose <= 3) {
          let rand = Math.floor(Math.random() * chars.length);
          pass += chars.charAt(rand);
        } else if (choose == 4) {
          let rand = Math.floor(Math.random() * symbols.length);
          pass += symbols.charAt(rand);
        } else {
          let rand = Math.floor(Math.random() * UcChars.length);
          pass += UcChars.charAt(rand);
        }
      }
      break;

    case 7:
      for (let i = 0; i < length; i++) {
        let choose = Math.ceil(Math.random() * 5);
        if (choose <= 2) {
          let rand = Math.floor(Math.random() * chars.length);
          pass += chars.charAt(rand);
        } else if (choose == 3) {
          let rand = Math.floor(Math.random() * symbols.length);
          pass += symbols.charAt(rand);
        } else if (choose == 4) {
          let rand = Math.floor(Math.random() * numbers.length);
          pass += numbers.charAt(rand);
        } else {
          let rand = Math.floor(Math.random() * UcChars.length);
          pass += UcChars.charAt(rand);
        }
      }
      break;
  }

  //Mostrando a senha no display
  pass_display.value = pass;

  //Resetando os valores que precisam ser resetados
  type_pass = 0;
  pass = "";
}

btn.addEventListener("click", () => {
  generate();
});

//Display the length
num_display.innerHTML = range.value;

range.oninput = function () {
  num_display.innerHTML = this.value;
};
