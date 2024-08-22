let image = document.getElementById("main_image")
let head_one = document.getElementById("main_heading")
let head_two = document.getElementById("secondary_heading")
let yes = document.getElementById("button_yes")
let no = document.getElementById("button_no")

let count = 0;

no.addEventListener('click',()=>{

    count+=1;

    if(count == 1){
        head_one.innerText="Please Maan jao cutie 😭😭"
        image.src="sad_one.gif"
    }

    if(count ==2){
        head_one.innerText="Soch lo.. 😤"
        head_two.innerText="itni jaldi na mt bolo!!"
        image.src="sad_two.gif"
    }

    if(count ==3){
        head_one.innerText="Kya burai hai tum me?"
        head_two.innerText="bohot galat baat hai ye!!"
        image.src="sad_three.gif"
    }

    if(count ==4){
        head_one.innerText="last time puch rha"
        head_two.innerText="soch lena !"
        no.style.visibility="hidden"
        image.src="sad_four.gif"
    }
   

})

yes.addEventListener('click',()=>{
    image.src="yes.gif"
    head_one.innerText="Hehehehe 😊😊"
    head_two.innerText="mujhe to pata tha!!"
    yes.style.visibility="hidden"
    no.style.visibility="hidden"
})
