const max = 200;
let numMonte, numDescend;
let vague = [];
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

function monte(index, sommet) {
    if((index>=0) && (index<max)){
        vague[index].style.height= sommet + '%';
        if (index<numMonte){vague[index].style.borderTopLeftRadius= '90% 10%'}
        if (index>numMonte){vague[index].style.borderTopRightRadius= '90% 10%'}
        if(index=numMonte){vague[index].style.borderTopLeftRadius=vague[index].style.borderTopRightRadius= '90% 10%'}
    }
        
}1
function descend(index) {
    if((index>=0) && (index<max)){
    vague[index].style.height= '5%';  
    vague[index].style.borderRadius=0;
    }  
}

/*
for (let i = 0; i < max; i++) {
    vague[i].style.height = 5 % ;
    vague[i].addEventListener('mouseover', () => {
        monte(i);
    });
}
*/

document.onmouseover = function(e) {
    let i = 0;
    while (i < max){
        if (vague[i] == e.target){numMonte=i}
        i++;
    }
	// les lignes ci-dessous peuvent etre ameliorees
    //certes
    console.log(numMonte);
    console.log(e.target);
    monte(numMonte, 90);
    monte(numMonte-1, 85);
    monte(numMonte+1, 85);
    monte(numMonte-2, 80);
    monte(numMonte+2, 80);
    monte(numMonte-3, 75);
    monte(numMonte+3, 75);
    monte(numMonte-4, 65);
    monte(numMonte+4, 65);
    monte(numMonte-5, 60);
    monte(numMonte+5, 60);
    monte(numMonte-6, 50);
    monte(numMonte+6, 50);
    monte(numMonte-7, 45);
    monte(numMonte+7, 45);
    monte(numMonte-8, 41);
    monte(numMonte+8, 41);
    monte(numMonte-9, 37);
    monte(numMonte+9, 37);
    monte(numMonte-10, 33);
    monte(numMonte+10, 33);
    monte(numMonte-11, 30);
    monte(numMonte+11, 30);
    monte(numMonte-12, 27);
    monte(numMonte+12, 27);
    monte(numMonte-13, 24);
    monte(numMonte+13, 24);
    monte(numMonte-14, 22);
    monte(numMonte+14, 22);
    monte(numMonte-15, 20);
    monte(numMonte+15, 20);
    monte(numMonte-16, 18);
    monte(numMonte+16, 18);
    monte(numMonte-17, 16);
    monte(numMonte+17, 16);
    monte(numMonte-18, 14);
    monte(numMonte+18, 14);
    monte(numMonte-19, 12);
    monte(numMonte+19, 12);
    monte(numMonte-20, 10);
    monte(numMonte+20, 10);
    monte(numMonte-21, 9);
    monte(numMonte+21, 9);
    monte(numMonte-22, 8);
    monte(numMonte+22, 8);
    monte(numMonte-23, 7);
    monte(numMonte+23, 7);
    monte(numMonte-24, 6);
    monte(numMonte+24, 6);
    numMonte= null;
}

document.onmouseout = function(e) {
    let i = 0;
    while (i < max){
        if (vague[i] == e.target){numDescend=i}
        i++;
    }
    console.log(numDescend);
    console.log(e.target);
    descend(numDescend);
    descend(numDescend-1);
    descend(numDescend-2);
    descend(numDescend-3);
    descend(numDescend-4);
    descend(numDescend-5);
    descend(numDescend-6);
    descend(numDescend-7);
    descend(numDescend-8);
    descend(numDescend-9);
    descend(numDescend-10);
    descend(numDescend-11);
    descend(numDescend-12);
    descend(numDescend-13);
    descend(numDescend-14);
    descend(numDescend-15);
    descend(numDescend-16);
    descend(numDescend-17);
    descend(numDescend-18);
    descend(numDescend-19);
    descend(numDescend-20);
    descend(numDescend-21);
    descend(numDescend-22);
    descend(numDescend-23);
    descend(numDescend-24);
    descend(numDescend+1);
    descend(numDescend+2);
    descend(numDescend+3);
    descend(numDescend+4);
    descend(numDescend+5);
    descend(numDescend+6);
    descend(numDescend+7);
    descend(numDescend+8);
    descend(numDescend+9);
    descend(numDescend+10);
    descend(numDescend+11);
    descend(numDescend+12);
    descend(numDescend+13);
    descend(numDescend+14);
    descend(numDescend+15);
    descend(numDescend+16);
    descend(numDescend+17);
    descend(numDescend+18);
    descend(numDescend+19);
    descend(numDescend+20);
    descend(numDescend+21);
    descend(numDescend+22);
    descend(numDescend+23);
    descend(numDescend+24);
    numDescend= null;
}
