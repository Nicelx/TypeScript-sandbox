"use strict";
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
// function merge<T, U>(objA: T, objB: U) {
// 	return Object.assign(objA, objB)
// }
// const mergedtObj = merge({name: 'Max'} , {age: 30});
// interface Lengthy {
// 	length: number;
// }
// function countAndDescribe<T extends Lengthy>(element:T): [T, Lengthy] {
// 	let descriptionText = 'Got no value';
// 	if (element.length === 1) {
// 		descriptionText = 'got 1 elem'
// 	} else if (element.length > 1) {
// 		descriptionText = 'Got' + element.length + ' elements'
// 	}
// 	return [element,descriptionText]
// }
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
// 	return obj[key]
// }
// decorators
// function Logger(logString: string) {
// 	console.log('LOGGER FACTORY');
// 	return function(constructor: Function) {
// 	  console.log(logString);
// 	  console.log(constructor);
// 	};
//   }
//   function WithTemplate(template: string, hookId: string) {
// 	console.log('TEMPLATE FACTORY');
// 	return function(constructor: any) {
// 	  console.log('Rendering template');
// 	  const hookEl = document.getElementById(hookId);
// 	  const p = new constructor();
// 	  if (hookEl) {
// 		hookEl.innerHTML = template;
// 		hookEl.querySelector('h1')!.textContent = p.name;
// 	  }
// 	};
//   }
//   // @Logger('LOGGING - PERSON')
//   @Logger('LOGGING')
//   @WithTemplate('<h1>My Person Object</h1>', 'app')
//   class Person {
// 	name = 'Max';
// 	constructor() {
// 	  console.log('Creating person object...');
// 	}
//   }
//   const pers = new Person();
//   console.log(pers);
//   // ---
//   function Log(target: any, propertyName: string | Symbol) {
// 	console.log('Property decorator!');
// 	console.log(target, propertyName);
//   }
//   function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
// 	console.log('Accessor decorator!');
// 	console.log(target);
// 	console.log(name);
// 	console.log(descriptor);
//   }
//   function Log3(
// 	target: any,
// 	name: string | Symbol,
// 	descriptor: PropertyDescriptor
//   ) {
// 	console.log('Method decorator!');
// 	console.log(target);
// 	console.log(name);
// 	console.log(descriptor);
//   }
//   function Log4(target: any, name: string | Symbol, position: number) {
// 	console.log('Parameter decorator!');
// 	console.log(target);
// 	console.log(name);
// 	console.log(position);
//   }
//   class Product {
// 	@Log
// 	title: string;
// 	private _price: number;
// 	@Log2
// 	set price(val: number) {
// 	  if (val > 0) {
// 		this._price = val;
// 	  } else {
// 		throw new Error('Invalid price - should be positive!');
// 	  }
// 	}
// 	constructor(t: string, p: number) {
// 	  this.title = t;
// 	  this._price = p;
// 	}
// 	@Log3
// 	getPriceWithTax(@Log4 tax: number) {
// 	  return this._price * (1 + tax);
// 	}
//   }
//   const p1 = new Product('Book', 19);
//   const p2 = new Product('Book 2', 29);
