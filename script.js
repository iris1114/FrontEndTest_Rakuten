function openDelBox(){
    userId = event.srcElement.id;
    document.getElementById('del-box').style.display = "block";
    document.getElementById('del-ok-btn').onclick=function(){
        let user = document.getElementById(`${userId}`);
        user.remove();
        document.getElementById('del-box').style.display = "none";
    }
    document.getElementById('del-cancel-btn').onclick =function(){
        document.getElementById('del-box').style.display = "none";
    }
 }



function editInfo(){ 
    var editNoErr = editNameErr = editMailErr = editPhoneErr = true;

    // Validate edit no.
    let uniqueNo =[];
    let noList = document.getElementsByClassName("no");
    for(i=0; i<noList.length; i++){
        if(noList[i].innerHTML !== userNo.textContent) {
            uniqueNo.push(noList[i].innerHTML);
        }
    }

    if(editNo.value ==""){
    printError("edit-noErr", "Please enter a serial number");
    }else{
        var regex = /[0-9]$/;
        if (regex.test(editNo.value) === false){
            printError("edit-noErr","Please enter digit number");
        }else if(uniqueNo.includes(editNo.value)){
            printError("edit-noErr","Sorry, this no. already exists");
        }else if (editNo.value.length > 4){
            printError("edit-noErr","Sorry, can't exceed 4 number");
        }else{
            printError("edit-noErr", "");
            editNoErr = false;
        }   
    }

    // Validate edit name
    let uniqueName = [];
    let nameList = document.getElementsByClassName("name");
    for(i=0; i<nameList.length; i++) {
        if(nameList[i].innerHTML !== userName.textContent) {
            uniqueName.push(nameList[i].innerHTML);
        }
    }

    if(editName.value == "") {
        printError("edit-nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z0-9\s]+$/;                
        if(regex.test(editName.value) === false) {
            printError("edit-nameErr", "Please enter a valid name");
        } else if(uniqueName.includes(editName.value)) {
            printError("edit-nameErr", "Sorry, this name already exists");
        } 
        else {
            printError("edit-nameErr", "");
            editNameErr = false;
        }
    }

    // Validate edit phone number
    if(editPhone.value == "") {
        printError("edit-phoneErr", "Please enter your phone number");
    } else {
        var regex = /^(02|03|037|04|049|05|06|07|08|082|0826|0836|089)-[0-9]{8}$/;
        if(regex.test(editPhone.value) === false) {
            printError("edit-phoneErr", "not a valid number. (ex.02-12345678)");
        } else{
            printError("edit-phoneErr", "");
            editPhoneErr = false;
        }
    }
    
    // Validate edit email 
    if(editMail.value == "") {
        printError("edit-emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(editMail.value) === false) {
            printError("edit-emailErr", "Please enter a valid email address");
        } else{
            printError("edit-emailErr", "");
            editMailErr = false;
        }
    }
       
    if((editNoErr || editNameErr || editMailErr || editPhoneErr) == true) {
        return false;
    } else{
    userNo.innerHTML =  editNo.value;
    userName.innerHTML = editName.value;
    userPhone.innerHTML =  editPhone.value;
    userMail.innerHTML = editMail.value;

    document.getElementById('edit-box').style.display = "none";
    hiddenUserId.value = "";
    }
}



function openEditBox(){
    document.getElementById('edit-box').style.display = "block";

     editNo = document.getElementById("edit-no");
     editName = document.getElementById('edit-name');
     editPhone = document.getElementById('edit-phone');
     editMail = document.getElementById('edit-mail');
     hiddenUserId = document.getElementById('hidden-user-id');
     userId = event.srcElement.id;

     userNo = document.querySelector(`#${userId} .no`);
     userName  = document.querySelector(`#${userId} .name`);
     userPhone = document.querySelector(`#${userId} .phone`);
     userMail = document.querySelector(`#${userId} .mail`); 

    editNo.value = userNo.textContent;
    editName.value =  userName.textContent;
    editPhone.value =  userPhone.textContent;
    editMail.value = userMail.textContent;
    hiddenUserId.value = userId;

    document.getElementById('edit-cancel-btn').onclick = function(){
        document.getElementById('edit-box').style.display = "none";
    }
}


// print error (in addbox and editbox)
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function addInfo(){
    let addNo = document.getElementById("add-no");
    let addName = document.getElementById('add-name');
    let addPhone = document.getElementById('add-phone');
    let addMail = document.getElementById('add-mail');
    let randomId = Math.random().toString(36).replace('.','');

    let noErr = nameErr = emailErr = phoneErr = true;

    // Validate no
    let uniqueNo =[];
    let noList = document.getElementsByClassName("no");
    for(i=0; i<noList.length; i++){
        uniqueNo.push(noList[i].innerHTML);
    }

    
    if(addNo.value ==""){
    printError("noErr", "Please enter a serial number");
    }else{
        var regex = /[0-9]$/;
        if (regex.test(addNo.value) === false){
            printError("noErr","Please enter digit number");
        }else if(uniqueNo.includes(addNo.value)){
            printError("noErr","Sorry, this no. already exists");
        }else if (addNo.value.length > 4){
            printError("noErr","Sorry, can't exceed 4 number");
        }
        else{
            printError("noErr", "*");
            noErr = false;
        }   
    }

    // Validate name
    let uniqueName = [];
    let nameList = document.getElementsByClassName("name");
    for(i=0; i<nameList.length; i++) {
        uniqueName.push(nameList[i].innerHTML);
    }

    if(addName.value == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z0-9\s]+$/;                
        if(regex.test(addName.value) === false) {
            printError("nameErr", "Please enter a valid name");
        } else if(uniqueName.includes(addName.value)) {
            printError("nameErr", "Sorry, this name already exists");
        } 
        else {
            printError("nameErr", "*");
            nameErr = false;
        }
    }

    // Validate phone number
    if(addPhone.value == "") {
        printError("phoneErr", "Please enter your phone number");
    } else {
        var regex =/^(02|03|037|04|049|05|06|07|08|082|0826|0836|089)-[0-9]{8}$/;
        if(regex.test(addPhone.value) === false) {
            printError("phoneErr",  "not a valid number. (ex.02-12345678)");
        } else{
            printError("phoneErr", "*");
            phoneErr = false;
        }
    }
    
    // Validate email 
    if(addMail.value == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(addMail.value) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "*");
            emailErr = false;
        }
    }
       
    // Prevent the form from being submitted if there are any errors
    if((noErr || nameErr || emailErr || phoneErr) == true) {
        return false;
    } else {
    let newInfo="";
        
        newInfo += 
        `<table>
            <tr id="user${randomId}" class="user-tr" >
                <td data-label="No." class="no">${addNo.value}</td>
                <td data-label="Name"  class="name">${addName.value}</td>
                <td data-label="Phone" class="phone">${addPhone.value}</td>
                <td data-label="Email" class="mail">${addMail.value}</td>
                <td data-label="edit"><i class="fas fa-edit edit-btn" id="user${randomId}"  onclick=openEditBox();></i></td>
                <td data-label="delete"><i class="fas fa-trash-alt del-btn" id="user${randomId}" onclick=openDelBox();></i></td>
            </tr>
        </table>`

        //convert string to document and get nodes
        let element = new DOMParser().parseFromString(newInfo, 'text/html').getElementsByClassName("user-tr")[0];   
        tbody = document.getElementsByTagName("tbody");
        tbody[0].insertBefore(element, tbody[0].childNodes[0]);

    }
    addNo.value = addName.value = addMail.value = addPhone.value = "";    
    document.getElementById('add-box').style.display = "none";
}


function openAddBox(){
    document.getElementById('add-box').style.display = "block";
    document.getElementById('add-cancel-btn').onclick = function(){
        document.getElementById('add-box').style.display = "none";
    }
}

function doFirst(){
    document.getElementById("add-btn").onclick = openAddBox ;
    document.getElementById("add-save-btn").onclick = addInfo;
    document.getElementsByClassName("edit-btn").onclick = openEditBox;
    document.getElementById('edit-save-btn').onclick = editInfo;
}

window.addEventListener('load',doFirst);