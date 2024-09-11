const toggle = () => {
    console.log("working");
    var nav = document.getElementById("list");
    nav.classList.toggle("show");
}

document.getElementById("toggle-btn").addEventListener("click",toggle);
