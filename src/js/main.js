import App from './App.js';

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		window.app = new App();
	});
} else {
	window.app = new App();
}