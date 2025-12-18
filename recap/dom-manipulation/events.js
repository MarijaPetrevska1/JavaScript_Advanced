console.log("===================== EVENTS =====================");

const buttonOne = document.getElementById("btnOne");
const buttonTwo = document.getElementById("btnTwo");
const buttonThree = document.getElementById("btnThree");

buttonOne.addEventListener("click", function () {
    console.log("Button 1 has been clicked!");    
});

buttonTwo.addEventListener("click", function(event) {
    console.log("Button 2 has been clicked.");
    console.log("This is the event: ");
    console.log(event);
    console.log(event.target);
    console.log(event.target.dataset);
    console.log(event.target.dataset.somedata);    
    console.log(`The id of the clicked element is '${event.target.id}'`);

});

function handleClick(e) {
    console.log(e);
    console.log("Button 3 has been clicked!");    
}

buttonThree.addEventListener("click", handleClick);