Vue.createApp({
	data: () => ({
		myHtml: '<h1>Vue 3 App</h1>',
		title: 'i am Cool',
		person: {
			firstName: 'Dmitry',
			lastName: 'Ratnikov',
			age: 39,
		},
		items: [1, 2]
	}),

	methods: {
		addItem(event) {
			this.items.unshift(this.$refs.myInput.value)
			this.$refs.myInput.value = ''
			console.log(event.key)
		}
	},

	computed: {
		evenItems() {
			return this.items.filter(i => i % 2 === 0)
		}
	}

}).mount('#app')