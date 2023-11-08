
let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');
let tabContainer = document.querySelector('.tab-filter-item-container');

function setActiveTab(select_tab) {
  for (let t = 0; t < tab_items.length; t++) {
    tabContainer.style.height = tab_items[t].scrollHeight + 'px';
    if (tab_items[t].classList.contains(select_tab)) {
      tab_items[t].classList.add('select_tab');
    } else {
      tab_items[t].classList.remove('select_tab');
    }
  }
}

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    setActiveTab(select_tab);
  });
}

for (let th = 0; th < tab_items.length; th++) {
  tabContainer.style.height = tab_items[th].scrollHeight + 'px';
}

// Set the default tab when the page loads (if needed)
// For example: setActiveTab('default-tab');









var slider = document.getElementById("myRange"); 
        var output = document.getElementById("length");
        output.value = slider.value; 
        function myFunction(x) {
        output.value = x.value;
    }
           function setSlider(x) {
         slider.value= x.value;
            }

document.addEventListener("DOMContentLoaded", function () {
    const lengthInput = document.getElementById("length");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");
    const generateButton = document.getElementById("generate");
    const passwordOutput = document.getElementById("password");

    generateButton.addEventListener("click", () => {
        const length = parseInt(lengthInput.value);
        const useUppercase = uppercaseCheckbox.checked;
        const useLowercase = lowercaseCheckbox.checked;
        const useNumbers = numbersCheckbox.checked;
        const useSymbols = symbolsCheckbox.checked;

        const password = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
        passwordOutput.setAttribute('value', password);
    });

    function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
        
        const uppercaseChars = useUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
        const lowercaseChars = useLowercase?"abcdefghijklmnopqrstuvwxyz" : "";
        const numberChars = useNumbers ? "0123456789" : "";
        const symbolChars = useSymbols ? "!@#$%^&*()_+-=[]{}|;:,.<>?/" : "";

        const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }

        return password;
    }
});

function copyPassword(){
    password.select();
    document.execCommand('copy');
}

const generateButton = document.getElementById("generateButton");
                const passwordBox = document.getElementById("passwordBox");

                generateButton.addEventListener("click", generatePassword);

                function generatePassword() {
                    const words = [
                        "apple", "banana", "cherry", "dog", "elephant", "flower",
                        "guitar", "happiness", "island", "jazz", "kiwi", "lemon"
                    ];

                    // Choose random words and add a random character for uppercase and lowercase
                    const password = getRandomWord(words) +
                        getRandomWord(words).toUpperCase() +
                        getRandomWord(words) +
                        getRandomWord(words).toUpperCase();

                    // Set the generated password in the textbox
                    passwordBox.setAttribute("value", password);
                }

                function getRandomWord(wordArray) {
                    const randomIndex = Math.floor(Math.random() * wordArray.length);
                    return wordArray[randomIndex];
                }
    
function copyPassword2(){
    passwordBox.select();
    document.execCommand('copy');
    }