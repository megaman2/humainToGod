const max = 200; //nombre de rectangles bleus
let numMonte = numDescend = null;//variables globales qui vont contenir la position du rectangle (dé)sélectionné
let vague = [];//tableau pour manipuler les rectangles qui vont monter et descendre plus facilement
//création des rectangles bleus qui sont des div:
for (let i = 0; i < max; i++) {
    vague[i] = document.createElement('div');
    vague[i].style.height = '5%';
    vague[i].style.width = (max/100) + '%';
    vague[i].style.borderRadius=0;
    console.log(i);
    console.log(document.getElementById('cadre'));
    document.getElementById('cadre').appendChild(vague[i]);
    document.getElementById('cadre').lastChild.setAttribute('class', 'barre');
}
//monte fixe la hauteur du rectangle n° index à sommet, puis arrondit ses angles:
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
//descend fixe la hauteur du rectangle n°index à la valeur basale de 5% et annule les angles arrondis:
function descend(index) {
    if((index>=0) && (index<max)){
    vague[index].style.height= '5%';  
    vague[index].style.borderRadius=0;
    }  
}
//détection du rectangle sur lequel la souris passe: met sa position dans numMonte puis lance la procédure monte 53 fois, selon une courbe gaussienne centrée
document.onmouseover = function(e) {
    let i = 0;
    while (i < max){
        if (vague[i] == e.target){numMonte=i}
        i++;
    }	
    console.log(numMonte);
    console.log(e.target);
    if (numMonte != null){
        let h, sigma, x;
        sigma=0.45;
    for (i = -26; i < 27; i++) {
        x = i / 25;
        h = (1 / (sigma * Math.sqrt(2* Math.PI))) * Math.exp(-1 * (x ** 2) / (2 * (sigma ** 2)));
        delta = Math.ceil(5 - i / 7);
        monte(numMonte+i, h * 100);}
    }    
    numMonte= null;
}
//détection du rectangle lorsque la souris le quitte: met sa position dans numDescend puis lance la procédure descend 53 fois
document.onmouseout = function(e) {
    let i = 0;
    while (i < max){
        if (vague[i] == e.target){numDescend=i}
        i++;
    }
    if (numDescend != null){
    for (i = -26; i < 27; i++) {descend(numDescend+i)}	
    }
    numDescend= null;
}
