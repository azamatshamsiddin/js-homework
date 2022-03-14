// Selected Form items
const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const formBtn = document.querySelector(".form-btn");

// Selected List items
const list = document.querySelector(".custom-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = formInput.value;

  if (!inputValue) {
    return alert("Iltimos bo'sh joyni to'ldiring!");
  }
  if (inputValue.length <= 3) {
    return alert("Iltimos 3 tadan ko'p belgi kiriting!");
  }
  let newListItem = document.createElement("Li");
  newListItem.classList.add(["list-group-item"], ["custom-list__item"]);
  newListItem.textContent = `${inputValue}`;
  list.appendChild(newListItem);
  formInput.value = null;
});
