
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let equals = document.querySelector("#equals");

function calculate(exp) {
  let result = eval(exp);
  return result;
}

    buttons.forEach(button => {
     button.addEventListener("click", ()=>{
      if (button.id !== "reset" && button.id !== "equals" && button.id !== "delleft") {
        input.value += button.value;
      } else if (button.id === "reset") {
        input.value = "";
      }else if(button.id === "delleft"){
         let currentValue = input.value;
         input.value = currentValue.slice(0, -1);
      }else if(button.id === "plusminus"){
        input.value = button.value;
      }
      else if(button.id === "equals"){
        input.value = calculate(input.value);
      }
     })   
    });

    

 

