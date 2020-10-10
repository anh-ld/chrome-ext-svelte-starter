import App from './Popup.svelte'

const app = new App({
	target: document.body,
	props: {
		name: 'Duy Anh 123 HA HA'
	}
})

window.app = app

export default app