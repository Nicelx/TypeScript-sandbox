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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedtObj = merge({ name: 'Max' }, { age: 30 });
function countAndDescribe(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'got 1 elem';
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + ' elements';
    }
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    return obj[key];
}
