let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
On line 1 we use the `let` keyword to declare the variable `foo`, and provide an initial value of `'bar'` which is a string. Within the block spanning lines 2-4, we declare a variable `foo` and provide an initial string value `'qux'`. From with a block, we can access variables declared outside the block, such as `foo` declared on line 1. However, in this code we are declaring a new variable `foo` which is unrelated to `foo` declared on line 1. This is an example of variable shadowing. The scope of `foo` declared on line 3 is limited to inside the block only. Therefore, no exception is raised regarding declaration of a variable that already exists. Variables declared inside a block are not accessible from outside the block, so line 6 logs `'bar'`.
*/