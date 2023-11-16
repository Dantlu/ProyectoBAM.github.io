
const inputs = document.querySelectorAll(".formulario__input");
const formulario = document.getElementById("form");

function activarFormLabel(){
    inputs.forEach(input =>{
        input.addEventListener("focus",()=>{
            const label = document.querySelector(`label[for=${input.id}]`);
            label.classList.add("formulario__label_active");
        });

        input.addEventListener("blur",()=>{
            if(input.value.trim()==""){
            const label = document.querySelector(`label[for=${input.id}]`);
            label.classList.remove("formulario__label_active");
            }
        })
    })
}