const userItems = document.getElementById("user-items");
const refresh = document.getElementById("refresh");

function getData() {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let userItem = "";
      let data = JSON.parse(request.responseText);
      for (let i = 0; i < data.results.length; i++) {
        userItem = `
          <div class="user_item">
              <div class="userItem_image">
                  <img src="${data.results[i].picture.large}" alt="Image" />
              </div>

              <div class="userItem_name">
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
        userItems.innerHTML += userItem;
      }
    } else if (request.readyState === 4) {
      console.log("Ma'lumotni olish imkoni bo'lmadi");
    }
  });

  request.open("GET", "https://randomuser.me/api/?results=3");
  request.send();
}
getData();

refresh.addEventListener("click", () => {
  userItems.innerHTML = "";
  getData();
});
