window.addEventListener("load",init);


function ID(nev){
    return document.getElementById(nev);
}
function $(nev){
    return document.querySelectorAll(nev);
}


var kepObj1={
    kep:"kepek/gyűrűs-3-678x381.jpg",
    cim: "Cím 1",
    leiras:"1. Kép leírása"
};
var kepObj2={
    kep:"kepek/letöltés.jfif",
    cim: "Cím 2",      
    leiras:"2. Kép leírása"
};
var kepObj3={
    kep:"kepek/123.jpg",
    cim: "Cím 3",
    leiras:"3. Kép leírása"
};
var kepObjTomb = [kepObj1,kepObj2,kepObj3];
function init(){
    var elem = '<div id="1" class="keptarolo"> <img src="" alt=""/> <h2>Kép címe</h2> <p>Kép leírása</p> </div>';
    for (var i = 0; i < kepObjTomb.length; i++) {
        $("article")[0].innerHtml+=elem;
    }
    console.log("Betöltött");
    var kepElemcim = $(".keptarolo h2");
    var kepElem =$(".keptarolo");
    var kep=$(".keptarolo img");
    var kepElemTartalom = $(".keptarolo p");
    for (var i = 0; i < kep.length; i++) {
        
        
        kepElem[i].addEventListener("mouseover",formazFel);
        kepElem[i].addEventListener("mouseout",formazLe);
        kepElem[i].addEventListener("click",nagyKepBetolt);
        
}
    for (var i = 0; i < kep.length; i++) {
        $("article div")[i].id.i;
        kep[i].src=kepObjTomb[i].kep;
        kepElemcim[i].innerHTML = kepObjTomb[i].cim;
        kepElemTartalom[i].innerHTML = kepObjTomb[i].leiras;
        
    }
    
}
    
function formazFel(){
    this.classList.add("keptaroloAktiv");
}
function formazLe(){
    this.classList.remove("keptaroloAktiv");
}
function nagyKepBetolt(){
    var id = this.id;
    $("#nagykep img")[0].src = kepObjTomb[id].kep;
    $("#nagykep h2")[0].src = kepObjTomb[id].cim;
    $("#nagykep p")[0].src = kepObjTomb[id].leiras;
}
