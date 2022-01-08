function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const unvalid_first= document.querySelector(".unvalid_first");
const unvalid_family= document.querySelector(".unvalid_family");
const unvalid_quantity= document.querySelector(".unvalid_quantity");
const unvalid_email= document.querySelector(".unvalid_email");
const unvalid_birth= document.querySelector(".unvalid_birth");
const unvalid_radio= document.querySelector(".unvalid_radio");
const unvalid_cond= document.querySelector(".unvalid_cond");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  unvalid_first.style.display="none";
  unvalid_family.style.display="none";
  unvalid_quantity.style.display="none";
  unvalid_email.style.display="none";
  unvalid_birth.style.display="none";
  unvalid_radio.style.display="none";
  unvalid_cond.style.display="none";

}
// close the modal form
function closemodal()
{
  modalbg.style.display = "none";
}

// validity check of the form on submit
function validate(){
  var firstname=document.forms["reserve"]["first"];
  var familyname=document.forms["reserve"]["last"];
  var e_mail=document.forms["reserve"]["email"];
  var birth_date=document.forms["reserve"]["birthdate"];
  var quantity=document.forms["reserve"]["quantity"];
  var radio=document.reserve.location;
  var cond=document.reserve.checkbox1;


  if ((checkfirst(firstname) & checkfam (familyname) & checkemail(e_mail) & checkbirth(birth_date) & checkquant(quantity) & checkradio(radio) & checkcond(cond))==false)
  {
    return false;
  }
  else
  {
    alert("Merci ! Votre réservation a été reçue.");
    return true;
  }
}

function checkfirst(arg)
{
  if (arg.value.length<2)
  {
    unvalid_first.style.display="block";
    return false;
  }
  else ((arg.value.length>2))
  {    
    unvalid_first.style.display="none";
    return true
  }
}

function checkfam(arg)
{
  if (arg.value.length<2)
  {
    unvalid_family.style.display="block";
    return false;

  }
  else ((arg.value.length>2))
  {    
    unvalid_family.style.display="none";
    return true
  }
}

function checkquant(arg)
{
  if (arg.value=="")
  {
    unvalid_quantity.style.display="block";
    return false;
  }
    else if (isNaN (arg.value)==true)
   {
      unvalid_quantity.style.display="block";
      return false;}
   else{
    unvalid_quantity.style.display="none";
    return true;
   }
}
function checkemail(arg){

  var reg=/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  if (reg.test(arg.value)==false)
  {
    unvalid_email.style.display="block";
    return false;
  }
  else{
    unvalid_email.style.display="none";
    return true;

   }
}
function checkbirth(arg){

  var regdate=/[0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4}/;

  if (regdate.test(arg.value)==false)
  {
  unvalid_birth.style.display="block";
    return false;
  }
  else{
    unvalid_birth.style.display="none";
    return true;
  }
}

function checkradio(arg)
{
  var detect=false;

  for(i=0;i<6;i++){
    if (arg[i].checked)
    {  
      detect=true
    }
  }
if (detect==false)
{
  unvalid_radio.style.display="block";
  return false;
}
else
{
  unvalid_radio.style.display="none";
  return true;
}
}
function checkcond(arg)
{
  if (arg.checked==false){

    unvalid_cond.style.display="block";
    return false;

  }
  else {
    unvalid_cond.style.display="none";
    return true;

  }

}