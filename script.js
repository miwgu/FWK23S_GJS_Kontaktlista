let contactList =[];
let inputName = document.getElementById("inputName");
let inputPhone = document.getElementById("inputPhone");
let createBtn = document.getElementById("create");
let errorMessage= document.querySelector(".invalid-feedback");
let contact = document.getElementById("contact");

let deleteListBtn = document.getElementById("deleteList");


/**
 * Function: addList
 * Input values, name and phone and add them an one object to an array
 * If user do not give values in both name and phone input fields
 * you need to show error message.
 *   
 * This includes two functions
 * 1.displayErrorMessage
 * 2.displayValues
 */

let addList =()=>{
    let name= inputName.value;
    let phone= inputPhone.value;

    if(inputName.value!==''&&inputPhone.value!==''){
    let newRow = {name, phone};//Create a object with two variables
    contactList.push(newRow)
    inputName.value= '';// Clear the field
    inputPhone.value='';
    console.log(contactList.length)
    console.log(contactList)
   
    displayErrorMessage("none")
    displayValues () 
  } else {

    displayErrorMessage("block")
    
  }
}


 /**
  * Function: displayErrorMessage 
  * @param {*} block_or_none 
  * @returns 
  */
function displayErrorMessage (block_or_none){
 return errorMessage.style.display =block_or_none;
}

/**
 * Function:displayValues
 * printout contact values as a row which user inputed
 * printout both Ändra button and radera button 
 */

function displayValues () {

  contact.innerHTML= ''; // Clear all contacts in the list
  contactList.forEach((newRow, index)=>  {
    
    let listItem = document.createElement("li"); // this create each row
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

    contact.appendChild(listItem);

    //###############Ändra button###########################
/**
 * Function:changeValues
 * 1. input fields has attribute, disabled. default value is true and it should be changed  to false  
 *    So user can edit values in the fields
 * 2. When disabled is false user can change values then the values should be saved to array
 *    You need to change disabled to be true  
 */
    
    let updateBtn = listItem.querySelector(".update-button");
    let inputedName =listItem.querySelector(".contact-input-name");
    let inputedPhone = listItem.querySelector(".contact-input-phone");

    let changeValues =()=>{
      if (inputedName.disabled || inputPhone.disabled){
      // 1.First clisk -> change disabled -> false and Button´s text should be change to Spara (button color)
      inputedName.disabled =false;
      inputedPhone.disabled=false;
      updateBtn.innerHTML="Spara";
      updateBtn.className="btn btn-success update-button"
    } else {
      // 2.Second click -> change values and disabled -> true again and Button´s text should changed to Ändra(button color)
      newRow.name = inputedName.value;
      newRow.phone= inputedPhone.value;
      inputedName.disabled =true;
      inputedPhone.disabled=true;
      updateBtn.innerHTML="Ändra";
      updateBtn.className="btn btn-secondary update-button"
    }

    };

    updateBtn.addEventListener('click',changeValues);

    //###############Radera button###########################
/**
 * Function:deleteRow
 * remove each row(<li> ...</li>) as child from <ol>----</ol> id = contact
 * find index which you want to delete  
 * delete object from array
 */
    let deleteBtn = listItem.querySelector('.delete-button');
    
    let deleteRow =()=>{

      let index= contactList.findIndex(item=> item === newRow);// find index to match object which want to be delete
      console.log("INDEX here:"+ index)
      contact.removeChild(listItem); // delete <li>...</li> i html
      console.log(listItem)
      console.log("index"+index)

      // Need to delete object to match this index which you find before
      if(index!==-1){
      contactList.splice(index,1); // delete object in your array 
      console.log(contactList.length);
      console.log(contactList);
     } else{
      console.log("Error! Your caluculation of index do not match your array ")
     }

  }

    deleteBtn.addEventListener('click', deleteRow);

    
    
  })

}

createBtn.addEventListener('click', addList);


/**
 * Function: deleteAllFromList
 * Delete all contacts in the list
 * Delete between <li>...</li> tag in html
 * Delete object
 */

let deleteAllFromList =() => {

  contact.innerHTML= '';
  contactList =[];
}

deleteListBtn.addEventListener('click',deleteAllFromList);


