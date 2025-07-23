const doSection = document.getElementById('doSection');
const doneSection = document.getElementById('doneSection');

const checkboxes = doSection.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(checkbox =>{
    checkbox.addEventListener("change",function(){
        if(this.checked){
            const taskdiv = this.parentElement;
            taskdiv.classList.add('strike');
            const clone = taskdiv.cloneNode(true);
             const cloneCheckbox = clone.querySelector("input[type='checkbox']");
                if (cloneCheckbox) {
                    cloneCheckbox.remove();
                }
            doneSection.appendChild(clone);
        }

    });
});