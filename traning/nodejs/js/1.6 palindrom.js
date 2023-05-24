var a='kaushik'
var b=''
for(var i=0;i<a.length;i++){
    b+=a[a.length-i-1]
}
if(a==b){
    console.log('palindrome')
}
else{
    console.log('not a plaindrome')
}