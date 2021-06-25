import {f} from './rotation'
/**
 * Faces Color DataStructure
 */


let frontColor = []
let upperColor = []
let downColor = []
let rightColor = []
let leftColor = []
let backColor = []

let red = '#c01629';
let white = '#dae8e8';
let yellow = '#dbb60d';
let orange = '#e95608';
let green = '#027414';
let blue = '#053c99';

for (let k = 0; k < 9; k++) {
    frontColor.push(white)
    upperColor.push(blue)
    downColor.push(green)
    rightColor.push(red)
    leftColor.push(orange)
    backColor.push(yellow)
}

let imposeColor = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (i === 0)
            for (let j = 0; j < 9; j++)
                upperColor[j] = arr[i][j]
        else if (i === 1)
            for (let j = 0; j < 9; j++)
                rightColor[j] = arr[i][j]
        else if (i === 2)
            for (let j = 0; j < 9; j++)
                frontColor[j] = arr[i][j]
        else if (i === 3)
            for (let j = 0; j < 9; j++)
                downColor[j] = arr[i][j]
        else if (i === 4)
            for (let j = 0; j < 9; j++)
                leftColor[j] = arr[i][j]
        else if (i === 5)
            for (let j = 0; j < 9; j++)
                backColor[j] = arr[i][j]
    }
    
    setColor();
}

let setColor =()=>{
    /**
     * First Layer
     */

    // 1st Dice
    f[0].material[1].color.set(leftColor[2]);
    f[0].material[2].color.set(upperColor[6]);
    f[0].material[4].color.set(frontColor[0]);

    // 2nd Dice
    f[1].material[1].color.set(leftColor[1]);
    f[1].material[2].color.set(upperColor[3]);

    // 3nd Dice
    f[2].material[1].color.set(leftColor[0]);
    f[2].material[2].color.set(upperColor[0]);
    f[2].material[5].color.set(backColor[2]);

     // 4st Dice
     f[3].material[2].color.set(upperColor[7]);
     f[3].material[4].color.set(frontColor[1]);
 
     // 5nd Dice
     f[4].material[2].color.set(upperColor[4]);
 
     // 6nd Dice
     f[5].material[2].color.set(upperColor[1]);
     f[5].material[5].color.set(backColor[1]);

     // 7st Dice
    f[6].material[0].color.set(rightColor[0]);
    f[6].material[2].color.set(upperColor[8]);
    f[6].material[4].color.set(frontColor[2]);

    // 8nd Dice
    f[7].material[0].color.set(rightColor[1]);
    f[7].material[2].color.set(upperColor[5]);

    // 9nd Dice
    f[8].material[0].color.set(rightColor[2]);
    f[8].material[2].color.set(upperColor[2]);
    f[8].material[5].color.set(backColor[0]);

    /**
     * Second Layer
     */
    
    // 1st Dice
    f[9].material[1].color.set(leftColor[5]);
    f[9].material[4].color.set(frontColor[3]);

    // 2nd Dice
    f[10].material[1].color.set(leftColor[4]);

    // 3nd Dice
    f[11].material[1].color.set(leftColor[3]);
    f[11].material[5].color.set(backColor[5]);

     // 4st Dice
     f[12].material[4].color.set(frontColor[4]);
 
     // 5nd Dice
 
     // 6nd Dice
     f[14].material[5].color.set(backColor[4]);

     // 7st Dice
    f[15].material[0].color.set(rightColor[3]);
    f[15].material[4].color.set(frontColor[5]);

    // 8nd Dice
    f[16].material[0].color.set(rightColor[4]);

    // 9nd Dice
    f[17].material[0].color.set(rightColor[5]);
    f[17].material[5].color.set(backColor[3]);

    /**
     * Third Layer
     */
    
    // 1st Dice
    f[18].material[1].color.set(leftColor[8]);
    f[18].material[3].color.set(downColor[0]);
    f[18].material[4].color.set(frontColor[6]);

    // 2nd Dice
    f[19].material[1].color.set(leftColor[7]);
    f[19].material[3].color.set(downColor[3]);

    // 3nd Dice
    f[20].material[1].color.set(leftColor[6]);
    f[20].material[3].color.set(downColor[6]);
    f[20].material[5].color.set(backColor[8]);

     // 4st Dice
     f[21].material[3].color.set(downColor[1]);
     f[21].material[4].color.set(frontColor[7]);
 
     // 5nd Dice
     f[22].material[3].color.set(downColor[4]);
 
     // 6nd Dice
     f[23].material[3].color.set(downColor[7]);
     f[23].material[5].color.set(backColor[7]);

     // 7st Dice
    f[24].material[0].color.set(rightColor[6]);
    f[24].material[3].color.set(downColor[2]);
    f[24].material[4].color.set(frontColor[8]);

    // 8nd Dice
    f[25].material[0].color.set(rightColor[7]);
    f[25].material[3].color.set(downColor[5]);

    // 9nd Dice
    f[26].material[0].color.set(rightColor[8]);
    f[26].material[3].color.set(downColor[8]);
    f[26].material[5].color.set(backColor[6]);

}



export {imposeColor, frontColor, upperColor, downColor, rightColor, leftColor, backColor };