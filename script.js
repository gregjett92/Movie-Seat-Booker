const container = document.querySelector(".container");
// grabs all the seats in the row that aren't occupied
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// Update total count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row.seat.selected");

  // length of the array
  const selectedSeatsCount = selectedSeats.length;

  // ticket price plus ticket count
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// event listener
// toggles seat to highlight when selected
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
});
