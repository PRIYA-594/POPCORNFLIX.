function validateForm() {
var fname = document.myForm.fname.value;
var num= document.myForm.num.value;


if(fname=="") {
    alert("Name must be filled out");
    return false;}
else if(isNaN(num))
{
    alert("please enter the mobile number correctly");
    return false;
  }
else if(num.length>10)
{
alert("your mobile number exceeds 10 digits");
    return false;
}
else if(pass="")

{
alert("please enter your password");
return false;

}
}