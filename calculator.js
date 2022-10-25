const num = document.getElementsByName("btn");
console.log(num);
for (let elem of num) {
    elem.addEventListener('click', () => {
    const disp = document.getElementById("display");
    if (elem.id == 'equal')
        disp.value = eval(disp.value);
    else if (elem.id == "ac")
        disp.value = "";
    else if (elem.id == "back")
        disp.value = disp.value.slice(0, -1);
    else
        disp.value += elem.value;
    });
}