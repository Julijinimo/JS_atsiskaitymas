/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => console.log(data));

    const state = {};

    const searchButton = document.createElement('button');
      searchButton.innerHTML = 'Search for name';
      searchButton.setAttribute('id', 'searchButton');
       
    const createTableSkeleton = () => {
      const id = document.createElement('th');
      id.innerText = 'ID';
    
      const image = document.createElement('th');
      image.innerText = 'Image';
    
      const firstName = document.createElement('th');
      firstName.innerText = 'First name';
    
      const lastName = document.createElement('th');
      lastName.innerText = 'Last name';
    
      const city = document.createElement('th');
      city.innerText = 'City ';
    
      const favColor = document.createElement('th');
      favColor.innerText = 'Fav color';
    
      const tr = document.createElement('tr');
      tr.append(id, image, firstName, lastName, city, favColor);
    
      const thead = document.createElement('thead');
      thead.append(tr);
    
      const table = document.createElement('table');
      table.append(thead, document.createElement('tbody'));
      document.body.append(table);
    }
    
    function populateTable(robots) {
      const tbody = document.querySelector('tbody');
      tbody.innerHTML = '';
    
      robots.forEach(robot => {
        const id = document.createElement('td');
        id.innerText = robot.id
    
        const img = document.createElement('img');
        img.src = robot.image;
        img.setAttribute('alt', 'UserPicture');
        const image = document.createElement('td');
        image.append(img);
    
        const [name, surname] = robot.name.split(' ');
    
        const firstName = document.createElement('td');
        firstName.innerText = name;
    
        const lastName = document.createElement('td');
        lastName.innerText = surname;
    
        const city = document.createElement('td');
        city.innerText = robot.city;
    
        const favColor = document.createElement('td');
        favColor.innerText = robot.fav_color;
    
        const tr = document.createElement('tr')
        tr.append(id, image, firstName, lastName, city, favColor);
        tbody.append(tr);
      });
    }
    
    createTableSkeleton();
    
    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      const searchString = document.getElementById('search').value.toLowerCase();
      renderTable(state.robots.filter(robot => robot.name.toLowerCase().includes(searchString)));
    })
    
    document.getElementById('isVipCheckbox').addEventListener('change', (event) => {
      populateTable(event.target.checked ? state.robots.filter(robot => robot.vip) : state.robots);
    });
    
    async function fetchData() {
      try {
        let response = await fetch('https://magnetic-melon-yam.glitch.me');
        if (response.ok) {
          state.robots = await response.json();
          populateTable(state.robots);
        }
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData();
  