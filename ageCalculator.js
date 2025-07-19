btn1 = document.querySelector(".cli");
span = document.querySelector(".cal");
birthday = document.querySelector(".date");

function calculateAge(){
  const birthdayValue = birthday.value;
  if(birthdayValue==="")
    {
      alert("please enter your birthday");
    }
    else{
      const age=getAge(birthdayValue);
      span.innerText=` ${age} `;
    }
}
function getAge(birthdayValue){
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear()-birthdayDate.getFullYear();
  return age;
}

btn1.addEventListener("click",calculateAge);