function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

(async function () {
	var index,
		length = 20;
	for (index = 0; index < length; index++) {
		console.log(index);
		await sleep(200);
	}
})();

// function does not work because setTimeout does not return a promise that could be awaited.
// You will need to promisify it manually.
