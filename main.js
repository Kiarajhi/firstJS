const header =  document.querySelector("#header")
const image = document.querySelector("#image")
const credit =  document.querySelector("#credit")

document.querySelector("#chanterelle-button").addEventListener("click", function() {
    document.querySelector("#header").innerHTML = ("Chanterelle")
    document.querySelector("#image").src = "chanterelle.jpg"
    document.querySelector("#credit").innerHTML="© Neil Leclerc"
})

 document.querySelector("#oyster-button").addEventListener("click", function() {
       header.innerHTML = ("Oyster mushroom")
        image.src = "oyster.jpg"
        credit.innerHTML="© Robbie Sproule"  
 })

document.querySelector("#fly-agaric-button").addEventListener("click", function() {
            header.innerHTML = ("Fly agaric")
             image.src = "fly-agaric.jpg"
             credit.innerHTML="© Victoria Vasilieva"  

})