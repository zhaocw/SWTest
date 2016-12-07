if ('serviceWorker' in window.navigator) {
	const sw = '/sw.js';
	navigator.serviceWorker.register(sw, { insecure: true }).then((reg) => {
		console.log('service worker 注册成功');
	}).catch((err) => {
		console.log('servcie worker 注册失败', err)
	});
}
