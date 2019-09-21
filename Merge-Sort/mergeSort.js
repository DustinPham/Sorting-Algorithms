let arr = [5, 1, 6, 2, 3, 4, 1, 9, 100, 57, 76];

const mergeSort = (arr, length) => {
	if (length < 2) {
		return arr;
	}
	let mid = Math.floor(length / 2);
	let leftArr = arr.slice(0, mid);
	let rightArr = arr.slice(mid);

	return merge(
		mergeSort(leftArr, leftArr.length),
		mergeSort(rightArr, rightArr.length),
		leftArr.length,
		rightArr.length
	);
};

const merge = (leftArr, rightArr, leftLen, rightLen) => {
	let i = 0;
	let j = 0;
	let newArr = [];

	while (i < leftLen && j < rightLen) {
		if (leftArr[i] <= rightArr[j]) {
			newArr.push(leftArr[i]);
			i++;
		} else {
			newArr.push(rightArr[j]);
			j++;
		}
	}

	return newArr.concat(leftArr.slice(i)).concat(rightArr.slice(j));
};

console.log(arr);
console.log(mergeSort(arr, arr.length));
