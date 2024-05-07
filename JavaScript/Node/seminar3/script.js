let a = prompt('num: ');

if ((a % 2 == 0 && a % 100 == 0) || (a % 2 != 0 && a % 1000 == 0)) {
    console.log(true);
} else {
    console.log(false);
}