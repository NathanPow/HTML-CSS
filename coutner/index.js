/*Pseudocode
#declare and initialize variables for counter
# add fucntionality for btn increase, decrease and reset 
#Use query selector for quicker impletations of the different buttons
*/

let count = 0;
//Selecting value and query selectors
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
    const styles= e.currentTarget.classList;
    
    if(styles.contains('increase')){
        count++;
    } else if(styles.contains('decrease')){
        count--;
    } else{
     count = 0;
    }
    value.textContent = count;
    //The code is always wrong but i am, Sometimes i just cant spell.
    // Using the value of count to solely determine the value text colour
    if(count > 0){
     value.style.color = "green"
    }
    if(count < 0){
        value.style.color= "red"
    }
    if(count === 0)
        value.style.color = "skyblue"    
    });
});
