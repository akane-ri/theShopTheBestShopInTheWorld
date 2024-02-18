const butS = document.getElementById('S');
const butM = document.getElementById('M');
const butL = document.getElementById('L');

const butW = document.getElementById('w');
const butY = document.getElementById('y');
const butG = document.getElementById('g');

const tsW = document.getElementById('wTs');
const tsY = document.getElementById('yTs');
const tsG = document.getElementById('gTs');

tsY.style.display = 'none';
tsG.style.display = 'none';

butS.addEventListener('click', () => {
    changeColorLet(butS)
    changeColorGrey(butM, butL)
});
butM.addEventListener('click', () => {
    changeColorLet(butM)
    changeColorGrey(butS, butL)
});
butL.addEventListener('click', () => {
    changeColorLet(butL)
    changeColorGrey(butS, butM)
});


butW.addEventListener('click', () => {
    changeColorLet(butW)
    changeColorGrey(butY, butG)
    tsVisible(tsW)
    tsInVisible(tsY, tsG)
});
butY.addEventListener('click', () => {
    changeColorLet(butY)
    changeColorGrey(butW, butG)
    tsVisible(tsY)
    tsInVisible(tsW, tsG)
});
butG.addEventListener('click', () => {
    changeColorLet(butG)
    changeColorGrey(butW, butY)
    tsVisible(tsG)
    tsInVisible(tsY, tsW)
});



function changeColorLet (e) {
    e.style.borderColor = 'rgb(199,3,15)';
}
function changeColorGrey (e, g) {
    e.style.borderColor = 'rgb(195,195,195)';
    g.style.borderColor = 'rgb(195,195,195)';
}

function tsVisible (e) {
    e.style.display = '';
}
function tsInVisible (e, g) {
    e.style.display = 'none';
    g.style.display = 'none';
}