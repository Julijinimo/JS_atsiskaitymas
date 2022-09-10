/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

  function lbToKg(event) {
    event.preventDefault();
    const kgInputValue = event.target.value;
    const outputElement = document.getElementById('output');
    if (kgInputValue) {
      const kg = Number(kgInputValue);
      const lb = (kg / 2.2046).toFixed(1);
      outputElement.innerText = lb;
    } else {
      outputElement.innerText = '';
    }
    event.preventDefault();
  }
  
  document.getElementById('search').addEventListener('click', lbToKg)

  //Neįveikiau užduoties
  