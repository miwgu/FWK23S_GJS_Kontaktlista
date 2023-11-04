let namePhoneList =[];
let inputName = document.getElementById("inputName");
let inputPhone = document.getElementById("inputPhone");
let createButton = document.getElementById("create");

let nameInList = document.getElementById("nameInList1")
let phoneInList = document.getElementById("phoneInList1")


let addList =()=>{

    let newRow = [inputName.value, inputPhone.value];
    namePhoneList.push(newRow)
    console.log(namePhoneList.length)

    for(let i=0; i<namePhoneList.length;i++){
    console.log("Name_00: "+namePhoneList[i][0])
    console.log("Phone_01: "+namePhoneList[i][1])
 }
   //console.log(document.getElementById("nameInList1").innerHTML=namePhoneList[0][0]) ;
   //console.log(document.getElementById("phoneInList1").innerHTML=namePhoneList[0][1]);
   nameInList.value=namePhoneList[0][0];//1 0,2 0 ,
   phoneInList.value=namePhoneList[0][1];//1 1,2 1
   

   //for loop use i

    //return namePhoneList;
}


createButton.addEventListener('click', addList);



