document.getElementById("submit").addEventListener('click', function addButton(e) {
    e.preventDefault();
    const num1 = document.add.goomba.value * 5;
    const num2 = document.add.bobomb.value * 7;
    const num3 = document.add.cheepcheep.value * 11;
    document.add.result.value = num1 + num2 + num3;
});

// document.getElementById("submit2").addEventListener('click', function subButton(e) {
//     e.preventDefault();
//     console.log(document.sub);
//     const num1 = document.sub.subNum1.value;
//     const num2 = document.sub.subNum2.value;
//     document.sub.result2.value = Number(num1) - Number(num2);
// });

// document.getElementById("submit3").addEventListener('click', function mulButton(e) {
//     e.preventDefault();
//     const num1 = document.mul.mulNum1.value;
//     const num2 = document.mul.mulNum2.value;
//     document.mul.result3.value = Number(num1) * Number(num2);
// });


