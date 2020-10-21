const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {

    console.log(this.classList.value);
    e.stopPropagation;
}

divs.forEach(div => div.addEventListener(
    'click', 
    logText, 
    {//capture: true, 
     //once: true}));

button.addEventListener('click' () => {
    console.log('Click!!!');
}, {
    once: true
});

//Bubbling
//capture is false by default
//when it is set to true, it fires events in the order in which the DOM observes them
//which is from top to bottom, macro to micro

//Propagation
//e.stopPropagation stops bubbling from triggering events
//on the parent elements as it goes back up the chain

//Once
//this "unbinds" the element
//so after it registers the 'click' it removes the event listener
//so it can't be clicked again