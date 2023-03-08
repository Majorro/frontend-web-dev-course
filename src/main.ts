function setMainHeight() {
    let header: HTMLElement = document.getElementsByTagName("header")[0];

    document.getElementsByTagName("main")[0].style.height =
        window.innerHeight - header.offsetHeight - 1 + "px";
}

function main() {
    setMainHeight();

    onresize = function () {
        setMainHeight();
    };
}

main();
