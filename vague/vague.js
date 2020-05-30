const max = 100; //nombre de rectangles bleus
let numMonte = numDescend = null;//variables globales qui vont contenir la position du rectangle (dé)sélectionné
let vague = [];//tableau pour manipuler les rectangles qui vont monter et descendre plus facilement
//calcul des hauteurs des rectangles bleus
let h, x;
let hauteurs = [];//tableau pour contenir les hauteurs des rectangles dans la vague
const sigma=0.45;
for (let i = 0; i < 26; i++) {
    x = i / 24;
    h = (1 / (sigma * Math.sqrt(2* Math.PI))) * Math.exp(-1 * (x ** 2) / (2 * (sigma ** 2)));
    hauteurs[i]=h*100;
}
//création des rectangles bleus qui sont des div:
for (let i = 0; i < max; i++) {
    vague[i] = document.createElement('div');
    vague[i].style.height = '5%';
    vague[i].style.width = (100/max) + '%';
    vague[i].style.borderRadius=0;
    console.log(i);
    console.log(document.getElementById('cadre'));
    document.getElementById('cadre').appendChild(vague[i]);
    document.getElementById('cadre').lastChild.setAttribute('class', 'barre');
}
//fixe la hauteur du rectangle n° index à sommet, puis arrondit ses angles:
function monte(index, sommet) {
    if((index>=0) && (index<max)){
        vague[index].style.height= sommet + '%';
        let ecart = (105- sommet) / 5;
        let rx = '90%';
        let ry = ecart + '%';
        if (index<numMonte){vague[index].style.borderTopLeftRadius=  rx + " " + ry}
        if (index>numMonte){vague[index].style.borderTopRightRadius= rx + " " + ry}
        if(index=numMonte){vague[index].style.borderTopLeftRadius=vague[index].style.borderTopRightRadius= rx + ' 1%'}
    } 
}
//fixe la hauteur du rectangle n°index à la valeur basale de 5% et annule les angles arrondis:
function descend(index) {
    if((index>=0) && (index<max)){
    vague[index].style.height= '5%';  
    vague[index].style.borderRadius=0;
    }  
}
//détection du rectangle sur lequel la souris passe: met sa position dans numMonte puis lance la procédure monte() 51 fois, selon une courbe gaussienne centrée
document.onmouseover = function(e) {
    vague.every(function (item, indice){
        if (item == e.target){
            numMonte=indice;
            return false;
        } else {return true}
    });
    if (numMonte != null){
        hauteurs.forEach(function(item, i){
            monte(numMonte-i, item);
            if (i!=0){monte(numMonte+i, item)};
        });
    }    
    numMonte= null;
}
//détection du rectangle lorsque la souris le quitte: met sa position dans numDescend puis lance la procédure descend() 51 fois
document.onmouseout = function(e) {
    vague.every(function (item, indice){
        if (item == e.target){
            numDescend=indice;
            return false;
        } else {return true}
    });
    if (numDescend != null){
    for (let i = -25; i < 26; i++) {descend(numDescend+i)}	
    }
    numDescend= null;
}