// function itself in a new variable- no parenthesis
const announceThatIAmDoingImportantWork = () => {
    console.log("I'm doing very important work!");
}

const functionItself = announceThatIAmDoingImportantWork;
functionItself();


//functions data in the variable - parenthesis
const announceThatIAmDoingImportantWork1 = () => {
    console.log("I'm doing very important work! but I can manage.");
}
const busy = announceThatIAmDoingImportantWork1();