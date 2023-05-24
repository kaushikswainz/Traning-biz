var a=[10,2,3,5,7,9]
min=a[0];
max=0;
for(let i=0;i<=a.length;i++){
    if(min>a[i]){
        min=a[i]
    }
    else{
        min=min
    }
    if(max<a[i]){
        max=a[i]
    }
}
console.log(min)
console.log(max)