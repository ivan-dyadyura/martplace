export function stopPreloader() {
	let preloader = document.querySelector('#preloader');
	preloader.style.opacity = 0;

	setTimeout(() => {
		preloader.style.display = 'none'
	}, 500);
}