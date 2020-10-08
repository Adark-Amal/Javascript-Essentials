function change(){
  // get the various dropdown menus
  let dropdowns = document.getElementsByName("dropdown");
  
  // iterate to view name of each dropdown and each value in dropdown menu
  for(let i = 0; i < dropdowns; i++)
  {
    console.log(dropdowns[i].getAttribute("id"));   // displays each id name
    console.log(dropdowns[i].value);                // displays each dropdown value
  };
};
