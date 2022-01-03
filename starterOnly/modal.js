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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
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
  var checkemail=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  if (firstname.value.lenght==""||firstname.value.lenght <= 2 )
  {
    alert("Mettez votre prenom.");
    firstname.focus();
    return false;
  }
  if (familyname.value.lenght==""||familyname.value.lenght <= 2)
  {
    alert("Mettez votre prenom.");
    familyname.focus();
    return false;
  }
  if (checkemail.test(e_mail.value))
  {

  }
}