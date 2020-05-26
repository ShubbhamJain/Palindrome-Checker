function palindrome(str) {
  let Str = str.replace(/[\W_]/g, "").toLowerCase();
  let arrFor = [...Str];
  let arrBack = [];
  for (let i = arrFor.length - 1; i >= 0; i--) {
    arrBack.push(arrFor[i]);
  }
  let len = Math.max(arrFor.length, arrBack.length);
  for (let i = 0; i < len; i++) {
    if (arrFor[i] !== arrBack[i]) {
      return false;
    }
  }
  return true;
}

function checker() {
  let word = document.querySelector('#word').value;
  let showArea = document.querySelector('#show');
  let h3 = document.createElement('h3');
  h3.style.margin = "1px";

  if (word === '') {
    message();
  }
  else {
    if (palindrome(word)) {
      while (showArea.hasChildNodes()) {
        showArea.removeChild(showArea.firstChild);
      }
      h3.innerHTML = "true";
    }
    else {
      while (showArea.hasChildNodes()) {
        showArea.removeChild(showArea.firstChild);
      }
      h3.innerHTML = "false";
    }
    showArea.appendChild(h3);
  }
}

function message() {
  let div = document.querySelector('#div');
  div.style.display = "inline-block";
  let h2 = document.createElement('h2');
  h2.textContent = "Enter word to check";
  h2.classList.add("#div");
  h2.style.margin = "1px";
  div.appendChild(h2);
  setTimeout(() => h2.style.display = 'none', 1000);
  setTimeout(() => div.style.display = 'none', 1000);
}

let checkbtn = document.querySelector('#checkbtn').addEventListener('click', checker);
