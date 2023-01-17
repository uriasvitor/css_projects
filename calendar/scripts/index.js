(function(){
    const days = document.querySelector(".days")
    const choiceDays = document.querySelector(".choices")
    const calendarTitle = document.querySelector(".title")
    let choices = []
    
    const getDays = function(year,months){
        return new Date(year,months,0).getDate()
    }
    
    function createCalendar(){
        getMonthDays = getDays(new Date().getFullYear(), 0)
        getYears = new Date().getFullYear()
        getMonths = new Date().getDate()

        console.log(getMonths)

        calendarTitle.innerHTML = ` ${getMonths} ${getYears}`

        for(let i = 0, max = getMonthDays; i < max; i+= 1){
            let newDiv = document.createElement("div");
            newDiv.classList.add("day");
            days.appendChild(newDiv).innerHTML = i + 1;
        }
        
        handlerClick()

    }

    function handlerClick(date){
        const getAllDays = document.querySelectorAll(".day")

        for(let i = 0, max = getAllDays.length; i < max; i += 1){
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
                choiceDays.innerHTML = choices.sort((a,b)=>a-b)
            })  
        }
    }

    createCalendar()
})()


