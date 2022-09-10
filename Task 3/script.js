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


showUsers();

const showUsersButton = document.getElementById('btn');
const p = document.getElementById('message');
const ulElement = document.getElementById('users-list');

function showUsers() {
  const myRequest = fetch(ENDPOINT);
  myRequest
    .then((res) => res.json())
    .then((data) => {
      ulElement.innerHTML = '';
      
      data.forEach((usersInfo) => {
        const liElement = document.createElement('li');
        const liElement2 = document.createElement('li');
        
        showUsersButton.addEventListener('click', () => {
          liElement.textContent = `Login info: ${usersInfo.login}`;
          liElement2.textContent = `Avatar url info: ${usersInfo.avatar_url}`;
          const brElement = document.createElement('br')
          ulElement.appendChild(liElement);
          ulElement.appendChild(liElement2);
          ulElement.appendChild(brElement);
          showUsersButton.remove();
          p.remove();
        });
      });
    });
};
  