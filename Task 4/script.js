/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json'


// fetch(ENDPOINT)                          Fetchas skirtas for information only
//     .then((response) => response.json())
//     .then((data) => console.log(data)); 

getCars();

function getCars() {
  const myRequest = fetch(ENDPOINT);
  myRequest
    .then((res) => res.json())
    .then((data) => {
      const ulElement = document.getElementById('cars-list');
      ulElement.innerHTML = '';
      
      data.forEach((carsInfo) => {
        const liElement1 = document.createElement('li');

        ulElement.setAttribute(
          'style',
          'padding-top: 20px'
        );

        liElement1.setAttribute(
          'style',
          'color: red;'
        );

       

        const brElement = document.createElement('br');

        const liElement2 = document.createElement('li');

        const brElement2 = document.createElement('br');

        liElement1.textContent = `${carsInfo.brand}:`;
        liElement2.textContent = `${carsInfo.models}.`;

        ulElement.appendChild(liElement1);
        ulElement.appendChild(brElement);
        ulElement.appendChild(liElement2);
        ulElement.appendChild(brElement2);
      });
      
    });
    function myFunction(x) {
      if (x.matches) { 
        document.body.style.backgroundColor = "yellow";
      } else {
       document.body.style.backgroundColor = "pink";
      }
    }
    
    const x = window.matchMedia("(max-width: 700px)")
    myFunction(x)
    x.addListener(myFunction)
};
