let z = document.querySelector('.sidebar');
let button = document.querySelector('.open');

button.addEventListener("click", function(evt)
{
	evt.preventDefault();
	z.classList.toggle("sidebar-hidden");
})