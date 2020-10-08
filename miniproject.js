// get the various dropdown menus
let dropdowns = document.getElementsByName("dropdown");

let div = document.getElementById("modify");            // assign div element to variable

function change(){
  // iterate to view name of each dropdown and each value in dropdown menu
  for(let i = 0; i < dropdowns; i++)
  {
    let dropdownAttribute = dropdowns[i].getAttribute("id");   // assign dropdown property name to variable
    let dropdownValues = dropdowns[i].value;                // assign dropdown value to variable 
    div.style[dropdownAttribute] = dropdownValues;
  };
};

document.getElementById("change").addEventListener("click", change);
