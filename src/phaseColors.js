
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
 let orange =  '#e95608';
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

 /**
 * Debug
 */

// frontColor[0] = blue;
// frontColor[1] = green;
// frontColor[2] = orange;
// frontColor[3] = blue;
// frontColor[4] = white;
// frontColor[5] = white;
// frontColor[6] = orange;
// frontColor[7] = red;
// frontColor[8] = white;

// backColor[0] = blue;
// backColor[1] = red;
// backColor[2] = orange;
// backColor[3] = white;
// backColor[4] = yellow;
// backColor[5] = blue;
// backColor[6] = red;
// backColor[7] = orange;
// backColor[8] = green;


// leftColor[0] = yellow;
// leftColor[1] = green;
// leftColor[2] = yellow;
// leftColor[3] = orange;
// leftColor[4] = orange;
// leftColor[5] = yellow;
// leftColor[6] = red;
// leftColor[7] = green;
// leftColor[8] = green;

// rightColor[0] = blue;
// rightColor[1] = red;
// rightColor[2] = white;
// rightColor[3] = orange;
// rightColor[4] = red;
// rightColor[5] = blue;
// rightColor[6] = red;
// rightColor[7] = orange;
// rightColor[8] = blue;

// upperColor[0] = green;
// upperColor[1] = yellow;
// upperColor[2] = orange;
// upperColor[3] = yellow;
// upperColor[4] = blue;
// upperColor[5] = white;
// upperColor[6] = red;
// upperColor[7] = red;
// upperColor[8] = yellow;

// downColor[0] = white;
// downColor[1] = blue;
// downColor[2] = green;
// downColor[3] = white;
// downColor[4] = green;
// downColor[5] = green;
// downColor[6] = yellow;
// downColor[7] = yellow;
// downColor[8] = white;


 export {frontColor , upperColor, downColor , rightColor,leftColor , backColor} ; 