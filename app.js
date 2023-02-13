let header = document.getElementsByTagName("header")[0];
setMainHeight();

onresize = function() {
    setMainHeight();
}

function setMainHeight() {
    document.getElementsByTagName("main")[0].style.height = window.innerHeight - header.offsetHeight - 1 + "px";
}