Vue.createApp({
	data: () => ({

		myHtml: '<h1>Vue 3 App</h1>',
		title: 'i am Cool',
		person: {
			firstName: 'Dmitry',
			lastName: 'Ratnikov',
			age: 39,
		}

	})
}).mount('#app')