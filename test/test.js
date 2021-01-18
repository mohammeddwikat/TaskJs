const csv=require('csvtojson')


class Employee{
    set Name(Name){
        this._Name=Name;
    }
    set Title(Title){
        this._Title=Title;
    }
    set Salary(Salary){
        this._Salary=Salary;
    }
    get Name(){
        return this._Name;
    }
    get Title(){
        return this._Title;
    }
    get Salary(){
        return this._Salary;
    }
    constructor(){
    }
}
var emp=[];

const converter = csv()
.fromFile('./Data.csv')
.then((json)=>{
    let e;
    json.forEach((row)=>{
        e = new Employee();
        Object.assign(e,row);
        emp.push(e);
    });
}).then(()=>{
    console.log(emp);

    emp.forEach((em)=>{
        console.log(em);
    });

});


console.log(converter);
