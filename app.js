const userItemFirstRow = document.getElementById("user-item-first-row");
const userItemSecondRow = document.getElementById("user-item-second-row");
const userItemThreethRow = document.getElementById("user-item-threeth-row");
const refresh = document.getElementById("refresh");
const search = document.getElementById("search");
const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");
const body = document.querySelector("body");
const loader = document.getElementById("loader");

function getData() {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let userItem = "";
      let data = JSON.parse(request.responseText);
      for (let i = 0; i < 3; i++) {
        userItem = `
            <div class="user_item">
              <div class="userItem_image">
                  <img src="${data.results[i].picture.large}" alt="Image" />
              </div>

              <div class="userItem_name" id="user-item-name">
                  <h1>${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</h1>
              </div>

              <div class="userItem_age">
                  <h1><i class="fa-solid fa-calendar-days"></i>${data.results[i].dob.age} years old</h1>
              </div>

              <div class="userItem_addres">
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <h1>${data.results[i].location.country}, ${data.results[i].location.city}</h1>
              </div>

              <div class="userItem_email">
                  <i class="fa-solid fa-envelope"></i>
                  <a href="#">
                      <h1>${data.results[i].email}</h1>
                  </a>
              </div>
          </div>  
        `;
        userItemFirstRow.innerHTML += userItem;
      }
      for (let i = 3; i < 6; i++) {
        userItem = `
            <div class="user_item">
              <div class="userItem_image">
                  <img src="${data.results[i].picture.large}" alt="Image" />
              </div>

              <div class="userItem_name" id="user-item-name">
                  <h1>${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</h1>
              </div>

              <div class="userItem_age">
                  <h1><i class="fa-solid fa-calendar-days"></i>${data.results[i].dob.age} years old</h1>
              </div>

              <div class="userItem_addres">
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <h1>${data.results[i].location.country}, ${data.results[i].location.city}</h1>
              </div>

              <div class="userItem_email">
                  <i class="fa-solid fa-envelope"></i>
                  <a href="#">
                      <h1>${data.results[i].email}</h1>
                  </a>
              </div>
          </div>  
        `;
        userItemSecondRow.innerHTML += userItem;
      }
      for (let i = 6; i < 9; i++) {
        userItem = `
            <div class="user_item">
              <div class="userItem_image">
                  <img src="${data.results[i].picture.large}" alt="Image" />
              </div>

              <div class="userItem_name" id="user-item-name">
                  <h1>${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}</h1>
              </div>

              <div class="userItem_age">
                  <h1><i class="fa-solid fa-calendar-days"></i>${data.results[i].dob.age} years old</h1>
              </div>

              <div class="userItem_addres">
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <h1>${data.results[i].location.country}, ${data.results[i].location.city}</h1>
              </div>

              <div class="userItem_email">
                  <i class="fa-solid fa-envelope"></i>
                  <a href="#">
                      <h1>${data.results[i].email}</h1>
                  </a>
              </div>
          </div>  
        `;
        userItemThreethRow.innerHTML += userItem;
      }
    } else if (request.readyState === 4) {
      console.log("Ma'lumotni olish imkoni bo'lmadi");
    }

    if (request.readyState === 4) {
      loader.style.display = "none";
    } else {
      loader.style.display = "flex";
    }
  });

  request.open("GET", "https://randomuser.me/api/?results=9");
  request.send();
}
getData();

refresh.addEventListener("click", () => {
  userItemFirstRow.innerHTML = "";
  userItemSecondRow.innerHTML = "";
  userItemThreethRow.innerHTML = "";
  getData();
});

search.addEventListener("input", () => {
  let inputValue = search.value.toLowerCase();
  const userItemName = document.querySelectorAll("#user-item-name");

  userItemName.forEach((itemName) => {
    if (itemName.textContent.toLowerCase().includes(inputValue)) {
      itemName.parentElement.style.display = "flex";
    } else {
      itemName.parentElement.style.display = "none";
    }
  });
});

// Mode
let storageMode = JSON.parse(localStorage.getItem("mode"));

if (storageMode) mode();

function mode() {
  body.classList.toggle("dark-mode");
  lightMode.classList.toggle("hidden");
  darkMode.classList.toggle("hidden");
}

darkMode.addEventListener("click", () => {
  mode();
  localStorage.setItem("mode", JSON.stringify("dark-mode"));
});
lightMode.addEventListener("click", () => {
  mode();
  localStorage.setItem("mode", JSON.stringify(""));
});
