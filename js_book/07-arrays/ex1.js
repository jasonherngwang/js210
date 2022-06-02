let array1 = [1, 2, undefined, 4]; // length 4. undefined counts.

let array2 = [1];
array2.length = 5; // length 5. unset elements count.

let array3 = [];
array3[-1] = [1]; // length 0. -1 is a key for a property.

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // length 3. array was truncated.

let array5 = [];
array5[100] = 3; // length 101. 100 unset elements and one set element.