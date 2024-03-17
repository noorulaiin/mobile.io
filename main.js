let first= 1, second= 0, flg=0, operator;

function disp(v) {
   if(flg==0)
   {
       document.getElementById('display').value = v;
   flg=1;
   }
   else
   {
       document.getElementById('display').value += v;  
   }
}

//On Clicking Call Button
function onCall() {
    const input = document.getElementById('display');
    const inputValue = input.value;

    // Check if input value has five characters
    if (inputValue.length === 5) {
        // Display a popup or perform any action you want
        let a = prompt("Press: \n 1) For Call \n 2) For SMS \n 3) For Customer Service \n 3) For Balance");

        a = Number(a); // Convert input to number
        switch(a){
        case 1:
        alert("You have to go to the dial-pad to make a Call.");
        break;
        case 2:
        alert("If you want to send a message then why are you here?");
        break;
        case 3:
        alert("Thank you but what kind of Service do you want?");
        break;
        case 4:
        alert("You have an insufficient Balance.");
        break;
        default:
        alert("Sorry, But we do not take invalid requests.");
        }
        
    } else {
        // Do something else if the input value does not have five characters
        alert("Input value does not have five characters yet.");
    }
}

   // Function to handle delete button click (optional)
   function onDelete() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
