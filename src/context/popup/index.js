import App from './Popup.svelte'

const app = new App({
	target: document.body,
	props: {
		name: 'Hello world'
	}
})

window.app = app

export default app
