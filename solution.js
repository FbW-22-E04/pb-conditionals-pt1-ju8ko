const int1 = 60;
const int2 = 10;
const int3 = 60;
//ex.1
if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log("the if statement is true");
} else {
  console.log("the if statement is false");
}
//ex.2
if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log("the if statement is true");
} else {
  console.log("the if statement is false");
}
//ex.3
const a = 35;
const b = 150;
const c = 66;
if (a > b && a > c) {
  console.log(a, "is the larges number");
} else if (b > a && b > c) {
  console.log(b, "is the larges number");
} else {
  console.log(c, "is the larges number");
}

if (int1 > int2 && int1 > int3) {
  console.log(int1, "is the larges number");
} else if (int2 > int1 && int2 > int3) {
  console.log(int2, "is the larges number");
} else {
  console.log(int3, "is the larges number");
}
//4
const str = "thon";
if (str.includes("Py")) {
  console.log(str);
} else {
  console.log("Py" + str);
}
//5 ???????????
if (int1 + int2 >= 50 && int1 + int2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}
//6
const int4 = 11;
const int5 = 3;
if (int4 + int5 === 8 || int4 - int5 === 8) {
  console.log(true);
} else {
  console.log(false);
}
//7
if (int4 === 15 || int5 === 15 || int4 + int5 === 15) {
  console.log(true);
} else {
  console.log(false);
}
//8
if (int4 % 7 === 0 || int5 % 7 === 0 || int4 % 11 === 0 || int5 % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
}
//9
if (int4 === int5) {
  console.log((int4 + int5) * 3);
} else {
  console.log(int4 + int5);
}
//10
if (int5 > 19) {
  console.log((int5 - 19) * 2);
} else {
  console.log(int5 - 19);
}
//11
const firstName = "Anne";
const age = 32;
if (age < 13) {
  console.log(firstName, "is a child");
} else if (age >= 13 && age < 20) {
  console.log(firstName, "is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName, "is an young adult");
} else {
  console.log(firstName, "is an adult");
}
