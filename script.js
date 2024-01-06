//your JS code here. If required.
function updateSize(){
	let width =  window.innerWidth;
	let height =  window.innerHeight;

	let text = document.querySelector('h1') ;
	text.textContent = `Width: ${width} and Height: ${height}`;
	
}
window.addEventListener('resize' , updateSize )
updateSize()