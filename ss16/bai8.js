let a= +prompt("moi ban nhap so thu nhat");
let b= +prompt("moi ban nhap so thu hai");
let c= +prompt("moi ban nhap so thu ba");
let max;
if(a>b){
    max=a;
}else{
    max=b;
}
if(max>c){
    alert("so lon nhat la" +max);
}else{
    max=c;
    alert("so lon nhat la" +max);
}