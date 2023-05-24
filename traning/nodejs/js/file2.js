var Student = [
    {
        id: "101",
        name: "John",
        dob: 1994,
        mark: 300
    },
    {
        id: "102",
        name: "Alex",
        dob: 1998,
        mark: 270
    },
    {
        id: "103",
        name: "Manu",
        dob: 1995,
        mark: 290
    }
 ]

 
 for(let i=0;i<=Student.length;i++){
    if(Student[i].name=='Manu'){
        console.log(Student[i].id)
    }
 }