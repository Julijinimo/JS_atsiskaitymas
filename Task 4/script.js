/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json'

fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => console.log(data));

    const showCars = (cars) => {  
        output.innerText = `${cars.brand}`;
      
      
        const card = document.createElement('div');
        card.append(cars);
        document.body.append(card);
      };

      const fetchRandomUser = async () => {
        try {
          const response = await fetch(ENDPOINT);
          if (response.ok) {
            const data = await response.json();
            showCars(data);
          }
        } catch(error) {
          console.error(error);
        }
      };
      
      fetchRandomUser();