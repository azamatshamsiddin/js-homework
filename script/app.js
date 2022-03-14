function reverseArr(item) {
  // ===== For Array =====
  if (Array.isArray(item)) {
    let newArr = [];
    for (let i of item) {
      newArr.unshift(i);
    }
    return newArr;
  }

  // ==== For String =====
  if (typeof item === "string") {
    let splitStr = item.split(" ");
    let newArr = [];
    for (let i of splitStr) {
      newArr.unshift(i);
    }
    return newArr;
  }
}

let arr = ["Bye", "Good"];
let str = "Bye Good";

console.log(reverseArr(arr));
console.log(reverseArr(str));

//****** Azamat Shamsiddinov *******
