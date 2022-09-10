/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

  const output = document.getElementById('output'); 
  
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const kg = Number(document.getElementById("search").value);
    const kgToLb = kg * 2.2046;

    output.textContent = kgToLb;
  });

  const output2 = document.getElementById('output2'); 
  
  document.querySelector("form2").addEventListener("submit", (e) => {
    e.preventDefault();
    const kg = Number(document.getElementById("search2").value);
    const kgToGrams = kg * 0.0010000;

    output.textContent = kgToGrams;
  });

  const output3 = document.getElementById('output3'); 
  
  document.querySelector("form3").addEventListener("submit", (e) => {
    e.preventDefault();
    const kg = Number(document.getElementById("search3").value);
    const kgToOz = kg * 35.274;

    output.textContent = kgToOz;
  });

