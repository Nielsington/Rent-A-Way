

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

