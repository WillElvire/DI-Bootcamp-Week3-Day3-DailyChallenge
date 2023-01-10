/**
 * @author : Wilfried koua
 * @description : The purpose of this code is to check if the value entered by the user is number or not
 * @param  : form : HTMLElement
 * @param  : input : HTMLElement
 */


//start setting up variables
let form  = createElement('form');
let input = document.createElement('input');
let userEntries;

//append element to de dom
document.body.appendChild(form)
input.setAttribute("type","text")
input.setAttribute("id","userEntries")
input.setAttribute("placeholder","let put letter only")
form.appendChild(createInput);

//check the input event
userEntries = document.getElementById('userEntries')
userEntries.addEventListener('keydown',verificationThingTypedByUser)

//verify the value entered
function verificationThingTypedByUser(e){
    if(!(e.keyCode >= 65 && e.keyCode <=90) )
        return e.preventDefault()
}

//create DOM eleemnt
function createElement(element) {
    return document.createElement(element);
}