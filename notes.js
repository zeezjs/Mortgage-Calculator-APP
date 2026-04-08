//Formatting input
mtgAmount.addEventListener('input', e=>{
    let value =  e.target.value.replace(/\D/g, "");//strips off all non digits
    if(!value){
     e.target.value = "";
     return;
    }//since value keeps getting changed over time, if user enters nothing(letters and non digits are treated like this as well) we display an empty string
    e.target.value = Number(value).toLocaleString();//this converts the value in memory to a well formtted number and makes sure the user can't input letters
    console.log(value);
 });