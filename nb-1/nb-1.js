(async function () {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) console.log('Trojka & Petka');
		else if (i % 3 == 0) console.log('Trojka');
		else if (i % 5 == 0) console.log('Petka');
		else console.log(i);
	}
})();
