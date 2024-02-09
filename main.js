
const container = document.getElementById("container");
console.log(container);

//
function random(number) {
  return Math.floor(Math.random()*number +1);
}
// a function to have user input
function numOfDivs(row){
  let num = row * row;
  if(row >100){
    alert("maximum limit");
  }
    //square divs
    for(let i = 0; i < num ; i++){
      if(num >10000){
        break;
      }
      const content = document.createElement("div");
      content.classList.add("content");
      content.style.backgroundColor="black";
      content.style.width="3rem";
      content.style.height="3rem";
      // hover effect
      content.addEventListener("mouseover",(Event) =>{
        const rndCol="rgb("+random(255) + "," + random(255)+"," + random(255)+")";
        content.style.backgroundColor= rndCol;
      });
      /* container.style.display="grid"; */
      container.style.gridTemplateColumns=`repeat(${row},3rem)`;
      container.style.gridTemplateRows=`repeat(${row},3rem)`;
      /* container.style.justifyContent="center"; */
      
      container.append(content);  
    }
}
numOfDivs(16); 

// add button
const section= document.getElementById("btn");
console.log(section);
const button = document.createElement("button");
console.log(button); 
section.append(button);
button.style.width= "100%";
button.style.padding="10px";
button.innerText="click here!";
button.style.fontSize= "24px";
button.style.margin="0 3rem";

//userInput function to reload number of divs
 
const userInput = ()=>{
 //clears the container
 const input=prompt("enter number of squares");
 parseInt(input);
 if (0<input && input<=100) {
  numOfDivs(input);
 } else {
  numOfDivs(16);
  alert("Enter values between 1-100")
 };
};

button.addEventListener("click",userInput,false);
