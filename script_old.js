let contactList =[];
let inputName = document.getElementById("inputName");
let inputPhone = document.getElementById("inputPhone");
let createBtn = document.getElementById("create");
let errorMessageDiv= document.querySelector(".invalid");
let contact = document.getElementById("contact");
let deleteListBtn = document.getElementById("deleteList");

/**
 * Function: disableDeleteListBtn
 * If 0 "Radiera lista" buttan is disable
 */

let disableDeleteListBtn=()=>{
  if(contactList.length==0){
    deleteListBtn.disabled=true; //// When you delete all list the button become inactive 
  }
}
disableDeleteListBtn();
console.log(deleteListBtn)

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

    console.log(validatePhone (phone))

    if(inputName.value==''&&inputPhone.value!==''){
      displayErrorMessage("namn krävs",errorMessageDiv)
    }
    else if(inputName.value!==''&&validatePhone (phone)==false){
      displayErrorMessage("Du måste ange ett giltigt telefonnummer med 10 siffror",errorMessageDiv)
    
    } 
    else if(inputName.value!==''&&inputPhone.value!==''&&validatePhone (phone)==true){
      let newRow = {name, phone};//Create a object with two variables
      contactList.push(newRow);
      inputName.value= '';// Clear the field
      inputPhone.value='';
      console.log(contactList.length)
      console.log(contactList)

      deleteListBtn.disabled=false;// active delete list button
      displayErrorMessage("",errorMessageDiv); // There is no error so no message
      displayValues () ;
  } else {
      displayErrorMessage("Får ej skapa tom kontakt", errorMessageDiv);
  }
}

 /**
  * Function: displayErrorMessage 
  * @param {*} message 
  * @param {*} targetTag 
  * @returns 
  */
 function displayErrorMessage (message, targetTag){
  //errorMessage.style.visibility =visible_or_hidden;// Use visibility insted of display(none, block)
  //let errorMessageDiv= document.querySelector(".invalid");
  return targetTag.innerHTML=message;
 }


/**
 * Function: validatePhone
 * @param {*} phone 
 * @returns 
 */
function validatePhone (phone) {
  var regex = /^\d{10}$/;
  if(!regex.test(phone)){
    return false; // You need to enter an valid phone number with 10 digits
   }
   return true;
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
    <div class="invalid2" style="visibility:visible; color: rgb(226, 43, 58);"></div>
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
    let errorMessageDiv2= document.querySelector(".invalid2");

    let changeValues =()=>{
      if (inputedName.disabled || inputPhone.disabled){
      // 1.First clisk -> change disabled -> false and Button´s text should be change to Spara (button color)
      inputedName.disabled =false;
      inputedPhone.disabled=false;
      updateBtn.innerHTML="Spara";
      updateBtn.className="btn btn-success update-button"
    } else {
      // 2.Second click -> change values and disabled -> true again and Button´s text should changed to Ändra(button color)

      if(inputedName.value==''&&inputedPhone.value!==''){
        displayErrorMessage("namn krävs",errorMessageDiv2)
      }
      else if(inputedName.value!==''&&validatePhone (inputedPhone.value)==false){
        displayErrorMessage("Du måste ange ett giltigt telefonnummer med 10 siffror",errorMessageDiv2)
      
      } 
      else if(inputedName.value!==''&&inputedPhone.value!==''&&validatePhone (inputedPhone.value)==true){
      
      newRow.name = inputedName.value;
      newRow.phone= inputedPhone.value;
      inputedName.disabled =true;
      inputedPhone.disabled=true;
      updateBtn.innerHTML="Ändra";
      updateBtn.className="btn btn-secondary update-button"
      displayErrorMessage("", errorMessageDiv2);
  } else {
    displayErrorMessage("Får ej skapa tom kontakt", errorMessageDiv2);
   }
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
      disableDeleteListBtn();
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
  displayErrorMessage ("",errorMessageDiv);
  disableDeleteListBtn();
}

deleteListBtn.addEventListener('click',deleteAllFromList);


