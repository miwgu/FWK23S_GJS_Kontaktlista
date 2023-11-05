let contactList =[];
let inputName = document.getElementById("inputName");
let inputPhone = document.getElementById("inputPhone");
let createBtn = document.getElementById("create");

let contact = document.getElementById("contact");

let deleteListBtn = document.getElementById("deleteList");





//let updateBtn = document.getElementById("update");
let deleteBtn = document.getElementById("delete");

let addList =()=>{
    let name= inputName.value;
    let phone= inputPhone.value;

    if(inputName.value!==''&&inputPhone.value!==''){
    let newRow = {name, phone};//Create a object with two variables
    contactList.push(newRow)
    inputName.value= '';// Clear the field
    inputPhone.value='';
    console.log(contactList.length)

    displayValues () 
  } else {
    console.log("Får ej skapa tom kontakt")
  }
}


function displayValues () {

  contact.innerHTML= ''; // Clear the contact list
  contactList.forEach((newRow, index)=>  {
    
    let listItem = document.createElement("li");
    listItem.className ="list-group-item";
    listItem.style.border="none";

    listItem.innerHTML = `
    <div class="input-group row g-2">
      <input type="text"  class="form-control col-md-4 contact-input-name" value="${newRow.name}" disabled>
      <input type="text"  class="form-control col-md-4 contact-input-phone" value="${newRow.phone}" disabled>
    <div class="col-md-4">
      <button  type="submit" class="btn btn-secondary update-button" >Ändra</button>
      <button  type="submit" class="btn btn-danger delete-button" >Radera</button>
    </div>
    </div>
    `;
    // Ändra buttan should change disabled->false in input tag 

    let updateBtn = listItem.querySelector(".update-button");
    let inputedName =listItem.querySelector(".contact-input-name");
    let inputedPhone = listItem.querySelector(".contact-input-phone");

    updateBtn.addEventListener('click',()=>{
      inputedName.disabled =false;
      inputedPhone.disabled=false;
    });

    contact.appendChild(listItem);
  })

}

createBtn.addEventListener('click', addList);


/**
 * Delete List
 */

let deleteAllFromList =() => {

  contact.innerHTML= '';
  contactList =[];
}

deleteListBtn.addEventListener('click',deleteAllFromList);


/**
 * Change values an added contact
 */
//let inputTag = document.getElementsByTagName("input");

//row: <li class="list-group-item" style="border: none;"><div>...  <input....><input>....</li>
// row

/*
function changeValues (row){
  let inputFields = row.querySelectorAll(".contact-input");
  console.log(inputFields)
  inputFields.forEach((e)=>{
    e.removeAttribute('disabled');
  })
  
}

function buttons (){
  let updateBtns = document.querySelectorAll(".update-button");
  updateBtns.forEach((e)=>{
   e.addEventListener('click', function(){
   let row = e.closest(".list-group-item");
   console.log(row);
  changeValues(row);
   });
  
});
}

buttons();
*/


