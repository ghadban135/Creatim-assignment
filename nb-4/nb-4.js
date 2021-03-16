var object = {
	init: (greetingText, alertText, confirmText) => {
		alert(greetingText);
		alert(alertText);
		confirm(confirmText);
	},
};
(function () {
	object.init(
		'Hello World',
		'Warning: you area bout to delete this item!',
		'Are you sure?'
	);
})();
