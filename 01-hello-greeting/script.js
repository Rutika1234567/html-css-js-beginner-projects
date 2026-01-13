const btnElement=document.querySelector('button');
const spanElement=document.getElementById('updatecontent');

btnElement.onclick= function(){
 const yourname=prompt("Please Enter Your Name:");
 spanElement.textContent=yourname;
}
