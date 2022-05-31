/*Store A-Z & a-z in utf number value into an array*/
const alphabet = Array.from(Array(58)).map((e, i) => i + 65);
/*Convert utf number values into alphabets and store in new Character array*/
let character = alphabet.map((x) => String.fromCharCode(x));
/*Remove random characters from array*/
character.splice(26, 6);
/*Loop numbers 0-9 and push into Character array*/
for (let i = 0; i < 10; i++) {
    character.push(i);
}
/*Add special characters into array*/
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
character.push(...specialChar);

let loop = () => {

    let passLength = document.querySelector("input").value;
    let output = document.querySelector("#output");
    let value = ""
    let password = [];

    if (passLength < 8 || passLength > 12) {
        
        output.textContent = "Password has to be between 8-12 characters long";
        document.querySelector("#pass1").value = "";
        document.querySelector("#pass2").value = "";
        document.querySelector("#pass3").value = "";
        document.querySelector("#pass4").value = ""; 
    
    } else {

        for (let h = 0; h < 4; h++) {
            for (let i = 0; i < passLength; i++) {
                let num = Math.floor(Math.random() * character.length);
                value += character[num];
            }        
            password.push(value);
            value = "";
        }

        output.textContent = "Enter password length: (8-12 characters)"; 
        
        document.querySelector("#pass1").value = password[0];
        document.querySelector("#pass2").value = password[1];
        document.querySelector("#pass3").value = password[2];
        document.querySelector("#pass4").value = password[3];
    }   
}

let copy1 = () => {
    let copy = document.querySelector("#pass1");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    alert("Password copied to clipboard: " + copy.value);
}

let copy2 = () => {
    let copy = document.querySelector("#pass2");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    alert("Password copied to clipboard: " + copy.value);
}

let copy3 = () => {
    let copy = document.querySelector("#pass3");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    alert("Password copied to clipboard: " + copy.value);
}

let copy4 = () => {
    let copy = document.querySelector("#pass4");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    alert("Password copied to clipboard: " + copy.value);
}
