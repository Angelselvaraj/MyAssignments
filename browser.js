function launchbrower(browsername) {
    if (browsername == "chrome") {
        console.log("This browser is ", browsername);
    }
        else
            console.log("this browser is ", browsername);               
    }
launchbrower("edge")
launchbrower("chrome")

function runTests(testType) {
    switch (testType) {
        case "sanity":
            console.log("This is Sanity");
            
            break;
            case "smoke":
                console.log("this is Smoke");
                break;
                case "regression":
                    console.log("This is regresssion");
                    break;
                    default:
                        console.log("This is smoke");
                        break;
    }
}
runTests("smoke")
runTests("regression")
runTests("sanity")
runTests("automate")