//Variables

const modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");
//avoid the const with comma

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

//open modal

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}
//close modal
function closeModal() {
  //html entitiy no need to precent default
  modal.style.display = "none";
}
