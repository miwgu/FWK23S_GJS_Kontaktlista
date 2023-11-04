let namePhoneList =[];
let inputName = document.getElementById("inputName");
let inputPhone = document.getElementById("inputPhone");
let createButton = document.getElementById("create");

//let nameInList = document.getElementById("nameInList1");
//let phoneInList = document.getElementById("phoneInList1");

let contact = document.getElementById("contact");


let addList =()=>{

    let newRow = [inputName.value, inputPhone.value];
    namePhoneList.push(newRow)
    console.log(namePhoneList.length)

    contact.innerHTML += `<li class="list-group-item" style="border: none;">
    <div class="input-group row g-2">
      <input id="nameInList1" type="text" aria-label="name" class="form-control col-md-4 " disabled>
      <input id="phoneInList1" type="text" aria-label="phone" class="form-control col-md-4" disabled>
      <div class="col-md-4">
      <button id="update1" type="submit" class="btn btn-secondary" >Ändra</button>
      <button id="delete1" type="submit" class="btn btn-danger" >Radera</button>
    </div>
    </div>
  </li>`


    for(let i=0; i<namePhoneList.length;i++){
     
    console.log("Name_00: "+namePhoneList[i][0])
    console.log("Phone_01: "+namePhoneList[i][1])
    let nameInList = document.getElementById("nameInList1");
    let phoneInList = document.getElementById("phoneInList1");
   
      nameInList.value=namePhoneList[i][0];//1 0,2 0 ,
      phoneInList.value=namePhoneList[i][1];//1 1,2 1
 }
   //console.log(document.getElementById("nameInList1").innerHTML=namePhoneList[0][0]) ;
   //console.log(document.getElementById("phoneInList1").innerHTML=namePhoneList[0][1]);

 


   //for loop use i

    //return namePhoneList;
}


createButton.addEventListener('click', addList);



