let arr = [5, 1, 6, 2, 3, 4, 1, 9, 100, 57, 76, 64];

const quickSort = (arr) => {
	if (arr.length < 2) {
		return arr;
	}

	let pivot = arr[Math.floor(arr.length / 2)];
	let equalArr = [];
	let lessArr = [];
	let greaterArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === pivot) {
			equalArr.push(arr[i]);
		} else if (arr[i] < pivot) {
			lessArr.push(arr[i]);
		} else {
			greaterArr.push(arr[i]);
		}
	}
	return quickSort(lessArr)
		.concat(equalArr)
		.concat(quickSort(greaterArr));
};

console.log(arr);
console.log(quickSort(arr));
