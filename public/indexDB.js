let db;
// create a new db request for a "budget" database.
const request = indexedDB.open('budget', 1);

request.onupgradeneeded = function (event) {
	// create object store called "pending" and set autoIncrement to true
	const db = event.target.result;
	db.createObjectStore('pending', { autoIncrement: true });
};

request.onsuccess = function (event) {
	db = event.target.result;

	if (navigator.onLine) {
		checkDatabase();
	}
};

request.onerror = function (event) {
	// log error here
	console.log('Error: ' + event.target.errorCode);
};