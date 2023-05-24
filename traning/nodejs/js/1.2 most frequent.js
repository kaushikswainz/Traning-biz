var a=[3,4,6,4,3,4,7,8,7,10];
var item=0;
var max=0;
for(let i=0;i<=a.length;i++){
    var count=0;
    for(let j=i;j<=a.length;j++){
        if(a[i]==a[j]){
           count++;
        }
        if(max<count){
           max=count;
           item=a[i];
        }
   }
}
console.log(item);