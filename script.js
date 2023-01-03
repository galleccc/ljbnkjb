let div2 = document.getElementById ("div2")
let div3 = document.getElementById ("div3")
const bib = ["https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpghttps://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w=1340",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn757idvlsDekXNVkaVQ5mFkY8C2JOmS8og&usqp=CAU",
             "https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1200&q=88&f=ee2b0e8d2fcaeb2fb7313f07712a2440",
             "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"]
let counter = 0
div2.addEventListener ("click", imm);
div3.addEventListener ("click", iml);
function imm (){
    counter++
    let image = document.getElementById ("image").src = bib[counter];
    if (counter >= bib.length){
        counter = 0
    }
}
function imm (){
    counter++
    let image = document.getElementById ("image").src = bib[counter];
    if (counter >= bib.length){
        counter = 0
    }
}
function iml (){
    counter--
    let image = document.getElementById ("image").src = bib[counter];
    if (counter == -1){
        counter = bib.length - 1;
    }
    image.src == bib[counter];
    console.log (counter)
}