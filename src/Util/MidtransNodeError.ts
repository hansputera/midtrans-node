export default class MidtransNodeError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'MidtransNodeError';
	}
}
