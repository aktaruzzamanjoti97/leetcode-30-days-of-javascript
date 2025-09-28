type F = (n: number) => number;

function compose(functions: F[]): F {
	return function (x: number): number {
		const reservedFns = functions.reverse();
		for (let fn of reservedFns) {
			x = fn(x);
		}
		return x;
	};
}
