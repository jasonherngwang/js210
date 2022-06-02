// false
console.log(false || (true && false));
// true
console.log(true || (1 + 2));
// 3; returns first truthy value
console.log((1 + 2) || true);
// 3; returns last evaluated expression
console.log(true && (1 + 2));
// false
console.log(false && (1 + 2));
// true
console.log((1 + 2) && true);
// false
console.log((32 * 4) >= 129);
// false
console.log(false !== !true);
// false
console.log(true === 4);
// true
console.log(false === (847 === '847'));
// false
console.log(false === (847 == '847'));
//
//          (false || (!(20)      === 20) || ((82)      === 82)) || false
//          (false || (false      === 20) || (true            )) || false
//          (false || (false            ) || (true            )) || false
//          (true) || false
//          short-circuit
// true
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);