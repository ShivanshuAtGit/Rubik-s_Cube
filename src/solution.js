import {
    uRotation, dRotation, fRotation, bRotation, lRotation, rRotation,
    urRotation, drRotation, frRotation, brRotation, lrRotation, rRRotation,
    uuRotation, ddRotation, ffRotation, bbRotation, llRotation, rrRotation
} from './rotation'

let U= document.getElementById('U')
let D= document.getElementById('D')
let F= document.getElementById('F')
let B= document.getElementById('B')
let L= document.getElementById('L')
let R= document.getElementById('R')

let Ur= document.getElementById('Ur')
let Dr= document.getElementById('Dr')
let Fr= document.getElementById('Fr')
let Br= document.getElementById('Br')
let Lr= document.getElementById('Lr')
let Rr= document.getElementById('Rr')

let U2= document.getElementById('U-2')
let D2= document.getElementById('D-2')
let F2= document.getElementById('F-2')
let B2= document.getElementById('B-2')
let L2= document.getElementById('L-2')
let R2= document.getElementById('R-2')

let allIds= [U,D,F,B,L,R,Ur,Dr,Fr,Br,Lr,Rr,U2,D2,F2,B2,L2,R2];

let solveGuide = document.querySelector('.solve_guidance');
let solveCube = [];
let str = ''
let moveString = ['U', 'D', 'F', 'B', 'L', 'R',
    "U'", "D'", "F'", "B'", "L'", "R'",
    "U2", "D2", "F2", "B2", "L2", "R2"]

let allRotation = [uRotation, dRotation, fRotation, bRotation, lRotation, rRotation,
    urRotation, drRotation, frRotation, brRotation, lrRotation, rRRotation,
    uuRotation, ddRotation, ffRotation, bbRotation, llRotation, rrRotation];

let passSolution = (sol) => {
    for (let i = 0; i < sol.length; i++) {

        if (sol[i] === ' ') {
            solveCube.push(str)
            str = ''
        }
        else {
            str += sol[i];
        }
    }
    solveCube.push(str)
    str = ''
}

let btns = document.getElementsByClassName('button')

let handleSolve = () => {
    for(let btn of btns){
        btn.disabled = true;
    }

    for (let i = 0; i < solveCube.length; i++) {
        let index;
        index = moveString.indexOf(solveCube[i])
  
        setTimeout(() => {
            solveGuide.classList.remove('none')
            solveGuide.textContent = `Move ${solveCube[i]}`
            allIds[index].classList.remove('normal')
            allIds[index].classList.add('highlight')
            if(index <=11){
             
             setTimeout(() => {
                allIds[index].classList.remove('highlight')
                allIds[index].classList.add('normal')
             }, 700);
              allRotation[index](.5,600);
            }
            else {

                setTimeout(() => {
                    allIds[index].classList.remove('highlight')
                    allIds[index].classList.add('normal')
                 }, 1200);
              allRotation[index](1,1100);
            }

             if(i === solveCube.length -1) {
                solveGuide.textContent = `Congratulations Puzzle Solved`
                for(let btn of btns){
                    btn.disabled = false;
                }
             }
        }, 1500*i);
    }
}

export { passSolution,handleSolve }