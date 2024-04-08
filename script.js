const getButtonRun = () => document.querySelector("#buttons .run");
const getButtonCls = () => document.querySelector("#buttons .cls");
const getCodeOutput = () => document.querySelector("#viewOutput > #codeOutput");
const getCodeLines = () => document.querySelector("#viewOutput > #codeLines");
const makeP = (text = "") => {
    const p = document.createElement("p");
    p.textContent = text;

    return p;
};
const getCodeLastChild = (codeEl) => codeEl.lastElementChild;
const addCode = (codeEl, code) => {
    codeEl.appendChild(makeP(code));
}; 
const removeCode = (codeEl) => {
    codeEl.removeChild(getCodeLastChild(codeEl));
};


const buttonRun = getButtonRun();
buttonRun.onclick = function(e) {
    const codeOutput = getCodeOutput();
    const codeLines = getCodeLines();

    addCode(codeOutput, "1");
    addCode(codeLines, ">");

    setTimeout(() => {
        addCode(codeOutput, "3");
        addCode(codeLines, ">");
    }, 3000);

    addCode(codeOutput, "2");
    addCode(codeLines, ">");
}


const buttonCls = getButtonCls();
buttonCls.onclick = function(e) {
    const codeOutput = getCodeOutput();
    const codeLines = getCodeLines();
    
    let lastChild = getCodeLastChild(codeOutput);
    while (lastChild) {
        removeCode(codeOutput);
        removeCode(codeLines);

        lastChild = getCodeLastChild(codeOutput);
    }
}
