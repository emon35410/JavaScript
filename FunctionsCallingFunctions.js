const isPassing = (marks)=> marks<=40;

function reportCard(name,marks){
    const result = isPassing ? "Passed":"Failed";

    return `${name}: ${result} ${marks}`
}

console.log(reportCard("Emon",80));