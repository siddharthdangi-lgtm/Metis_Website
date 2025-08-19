const openDialogBtn = document.getElementById('openDialog');
const closeDialogBtn = document.getElementById('closeDialog');
const dialog = document.getElementById('myDialog');
const img = document.getElementById('img1');
const bg = document.getElementById('bg');

openDialogBtn.addEventListener('click', () => {
    img.style.display = 'block'; // show the image
    dialog.showModal();
    bg.classList.toggle("blur"); // open dialog

});

closeDialogBtn.addEventListener('click', () => {
    dialog.close(); // close dialog
    img.style.display = 'none';
    bg.classList.toggle("blur"); // hide image again
});

const marquee = document.getElementsByClassName('marquee');


document.addEventListener("mousedown", function(event) {
    if (event.button === 0) {
        console.log("Left mouse down at:", event.clientX, event.clientY);
    }
});