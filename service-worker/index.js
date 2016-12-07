if ('serviceWorker' in window.navigator) {
	const sw = './sw.js';
	// , { insecure: true }
	navigator.serviceWorker.register(sw).then((reg) => {
		console.log('service worker 注册成功');
	}).catch((err) => {
		console.log('servcie worker 注册失败', err)
	});
}
