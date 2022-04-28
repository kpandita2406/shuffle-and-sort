var shuffled_array = [] //global variable declared for sorting the shuffled array

const color = ['#6F98A8','#2B8EAD','#2F454E','#2B8EAD','#2F454E','#BFBFBF','#BFBFBF','#6F98A8','#2F454E']

document.addEventListener("DOMContentLoaded", function() {
    let array = [1,2,3,4,5,6,7,8,9]
    createNewElement(array)

});

window.addEventListener("resize", changeStyle); // not required if opened directly on mobile or desktop . Added this just to make it work in 
                                                // case browser is resized

function changeStyle(){
    let getLi = document.getElementsByTagName("li")
    for(let i=0; i<getLi.length; i++){
        if(window.innerWidth <=  960){
            getLi[i].style.backgroundColor= "#EFEFEF"
            getLi[i].style.borderLeft = color[i]+' 5px solid';
        }else{
            getLi[i].style.backgroundColor = color[i]
            getLi[i].style.removeProperty('border')
        }
    }
}

function createNewElement (array){
    let element = document.getElementById('cards');
    element.innerHTML = '';
    for(let i=0; i<array.length; i++){
        let createLi = document.createElement("li");
        createLi.textContent = array[i];
        if(window.innerWidth <=  960){
            createLi.style.borderLeft= color[array[i]-1]+' 5px solid';
        }else{
            createLi.style.backgroundColor = color[array[i]-1]
        }
        element.appendChild(createLi);
    }
}

function shuffle(){
    let arr = [];
    while(arr.length <= 8){
        let random = Math.floor(Math.random() * 10);
        if(arr.indexOf(random) === -1 && random !== 0) arr.push(random);
    }
    shuffled_array = arr;
    createNewElement(arr)
    

}

function sort(){
    shuffled_array.sort(function(a, b) {
        return a - b;
    });
    createNewElement(shuffled_array)
}
