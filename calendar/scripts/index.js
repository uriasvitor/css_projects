

(function(){
    let choices = []
    const getAllDays = document.querySelectorAll(".day")
    const choiceDays = document.querySelector(".choices")
    console.log('works')

    for(let i = 0; i < getAllDays.length; i++){
        getAllDays[i].addEventListener("click", function(){
            getAllDays[i].classList.toggle("selected");

            if(getAllDays[i].classList.contains("selected")){
                choices.push(getAllDays[i].innerHTML)
                choices = [...new Set(choices)]

            }else{
                var index = choices.indexOf(getAllDays[i].innerHTML);

                if (index > -1) {
                    choices.splice(index, 1);
                  }
            }


            choiceDays.innerHTML = choices
        })  
    }


})()


