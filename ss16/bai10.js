let a=+prompt("moi ban nhap vao so thu nhat")
let b=+prompt("moi ban nhap vao so thu 2")
let min, max;
if(a>b){
    min= b;
    max= a;
}else{
    min= a;
    max=b;
}
let c= (max-min) +1;
let d=Math.floor( ((c* Math.random())+min));
alert(d);