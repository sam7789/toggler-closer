function toggler() {
  var arr = arguments;
  var index = -1;
  return function () {
    index = index + 1;
    if (index >= arr.length) {
      index = 0;
    }
    return arr[index];
  };
}

const toggle = toggler(1, 2, 3);

console.log(toggle()); // 1
console.log(toggle()); // 2
console.log(toggle()); // 3
console.log(toggle()); // 1
