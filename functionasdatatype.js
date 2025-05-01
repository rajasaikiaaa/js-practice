// we can use function itself as datatypes and inject the whole function in a new variable.
const announceThatIAmDoingImportantWork = () => {
    console.log("I'm doing very important work!");
}
// here, we can see the function name impacts the programs readability. so we can use the function itself as datatype .
// we are assigning a new varible
const busy = announceThatIAmDoingImportantWork;

busy(); // the long function is injected in the busy variable which functions the same.