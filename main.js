/* 
    TASK: Make a PB&J sandwich

    Step 1: Get ingredients
        2 Slices of bread
        1 jar of jelly
        1 jar of peanut butter
    Step 2: Get knife
    Step 3: Put jelly on 1 slice of bread
    Step 3.5: clean knife
    Step 4: Put peanut butter on the other
    Step 5: Put the two slices of bread together

    I will start with an empty sandwich array
    First a bread string
    then the jelly
    put the peanut butter on
    then lastly another slice of bread
    and ill eat it
*/

const PBandJ = [];

const firstSlice = (sandwich) => {
    sandwich.push("Bread")
}

const applyJelly = (sandwich) => {
    sandwich.push("Jelly")
}

const applyPeanutbutter = (sandwich) => {
    sandwich.push("Peanutbutter");
}

const lastSlice = (sandwich) => {
    sandwich.push("Bread");
}

const eatSandwich = (sandwich) => {
    sandwich.splice(0, sandwich.length);
    console.log("Nom nom nom")
}

firstSlice(PBandJ);
applyJelly(PBandJ);
applyPeanutbutter(PBandJ);
lastSlice(PBandJ);

console.log(PBandJ);

eatSandwich(PBandJ);

console.log(PBandJ);