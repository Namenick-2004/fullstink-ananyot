const fullName = "ananayot saiwong";
const cleanedName = fullName.trim();
console.log( `Cleaned Name: "${cleanedName}" `);

const nameparts = cleanedName.split(" ");
console.log("Name parts:", nameparts);

const finalparts = nameparts.filter(Boolean);
console.log("Final parts:", finalparts);

const fistname = finalparts[0];
console.log("First name: `${firstname}`");{
    
}