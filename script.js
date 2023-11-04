let contactList =[];
let inputName = document.getElementById("inputName");
let inputPhone = document.getElementById("inputPhone");
let createButton = document.getElementById("create");

//let nameInList = document.getElementById("nameInList1");
//let phoneInList = document.getElementById("phoneInList1");

let contact = document.getElementById("contact");


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

createButton.addEventListener('click', addList);

function displayValues () {

  contact.innerHTML= ''; // Clear the contact list
  contactList.forEach((newRow, index)=>  {
    
    let listItem = document.createElement("li");
    listItem.className ="list-group-item";
    listItem.style.border="none";

    listItem.innerHTML = `
    <div class="input-group row g-2">
      <input type="text" aria-label="name" class="form-control col-md-4 " value="${newRow.name}" disabled>
      <input type="text" aria-label="phone" class="form-control col-md-4" value="${newRow.phone}" disabled>
      <div class="col-md-4">
      <button id="update1" type="submit" class="btn btn-secondary" >Ändra</button>
      <button id="delete1" type="submit" class="btn btn-danger" >Radera</button>
    </div>
    </div>
    `;

    contact.appendChild(listItem);
  })


}






