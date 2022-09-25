function modifyStyleSheet() {
    let modified = 0;
    for(let i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets.item(i);
        if (sheet instanceof CSSStyleSheet) {
            for(let j = 0; j < sheet.cssRules.length; j++) {
                var rule = sheet.cssRules.item(j);
                if (rule instanceof CSSStyleRule) {
                    if (rule.selectorText == ".jyeSuy") {
                        // rule.style.marginLeft = "2.5rem";
                        // rule.style.marginRight = "2.5rem";
                        rule.style.maxWidth = "100%";
                        console.log("Found and patched jyeSuy CSSStyleRule");
                        console.log(rule);
                        modified++;
                    }
                }
                else if (rule instanceof CSSMediaRule) {
                    if (rule.cssRules.length == 1 && rule.cssRules.item(0).selectorText == ".jyeSuy") {
                        rule.cssRules.item(0).style.marginLeft = "2.5rem";
                        rule.cssRules.item(0).style.marginRight = "2.5rem";
                        console.log("Found and patched jyeSuy CSSMediaRule");
                        console.log(rule);
                        modified++;
                    }
                }
            }
        }
    }

    return modified == 2;
}

const sleepFor = (t) => new Promise(resolve => setTimeout(resolve, t));

const getData = async (resolve, reject) => {
    console.log("Trying to modify");
    if (modifyStyleSheet() == true) {
        console.log("Modified!");
        return resolve();
    } else {
        console.log("Failed to modify! Trying again in 1000ms...");
        await sleepFor(500);
        getData(resolve, reject);
    }
}

const runScript = async () => {
    console.log("Starting patch...");
    await new Promise((resolve, reject) => getData(resolve, reject));
    console.log("Patched!");
};

runScript();