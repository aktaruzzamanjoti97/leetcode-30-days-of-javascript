function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	const result = [];
	for (let i in arr) {
		result.push(fn(arr[i], Number(i)));
	}
	return result;
}
