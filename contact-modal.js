// Get modal element
var modal = document.getElementById("toModal");

// Get the button that opens the modal
var openModalBtn = document.getElementById("openModal");

// Get the close button (X)
var closeBtn = document.querySelector(".close-btn");

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the close button (X), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}