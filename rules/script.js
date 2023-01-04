                       //  Javascript for the message on the terms of use's button

// Get a reference to the accept and decline buttons
const acceptButton = document.getElementById('accept-button');
const declineButton = document.getElementById('decline-button');

// Get a reference to the message element
const message = document.getElementById('message');

function init() {
  // Add event listeners to the buttons
  acceptButton.addEventListener('click', function() {
    // This function will be executed when the Accept button is clicked
    message.innerHTML = 'Thank you for accepting';
    message.style.padding = '1.5rem';
  });

  declineButton.addEventListener('click', function() {
    // This function will be executed when the Decline button is clicked
    message.innerHTML = "That's Sad";
    message.style.padding = '1.5rem';
  });
}

// Call the init function when the DOM is ready
document.addEventListener('DOMContentLoaded', init);




                        // Javascript for the carousel
                        
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carousel__nav">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});



