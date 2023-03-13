// let str1 = "lasagnas"
// console.log(str1.substring(1))

// if (str1.length === 7) {
//     console.log("buon appetito")
// }
// else {
//     console.log("what's a matta you")
// }


let path = window.prompt("pick something")

switch (path) {
    case "good":
        console.log("you have made a good choice")
        window.alert("you have made a good choice")
        break;
    case "bad":
        console.log("BAD, WRONG!")
    
    default:
        console.log("if you choose not to decide, you still have made a choice")
        break;
}