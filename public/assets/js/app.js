

let int = document.createElement('div');
int.className = "number";
int.innerHTML = "0";

let div1 = document.createElement('div');

let dec = document.createElement('button');
dec.className = "decrement";
dec.innerHTML = "<img src='assets/img/remove.png'>";

let add = document.createElement('button');
add.className = "increment";
add.innerHTML = "<img src='assets/img/plus.png'>";

document.body.append(int);
document.body.append(div1);
div1.append(dec);
div1.append(add);

let integer = 0;

    add.addEventListener('click', () => {
    integer++;
    int.innerHTML = integer;
 })

    dec.addEventListener('click', () => {
     integer--;
     int.innerHTML = integer;
 })