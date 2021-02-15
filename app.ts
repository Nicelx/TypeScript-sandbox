// interface First {
// 	name: string;
// 	age: number;
// }
// type First{
// 	name: string,
// 	age: number,
// }

// const man:First = {
// 	name: 'Vasiliy',
// 	age: 22,
// 	sdf: 'some'
// }

function merge<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}
const mergedtObj = merge({name: 'Max'} , {age: 30});

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element:T): [T, Lengthy] {
	let descriptionText = 'Got no value';
	if (element.length === 1) {
		descriptionText = 'got 1 elem'
	} else if (element.length > 1) {
		descriptionText = 'Got' + element.length + ' elements'
	}
	return [element,descriptionText]
}

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key]
}