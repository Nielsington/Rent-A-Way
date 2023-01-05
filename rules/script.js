                       //  Javascript for the message on the terms of use's button


const acceptButton = document.getElementById('accept-button');
const declineButton = document.getElementById('decline-button');

const message = document.getElementById('message');

function init() {  
  acceptButton.addEventListener('click', function() {
    message.innerHTML = 'Thank you en enjoy !';
    message.style.padding = '1.5rem';
  });

  declineButton.addEventListener('click', function() {
    message.innerHTML = "That's sad";
    message.style.padding = '1.5rem';
  });
}

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

  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});



