function save() {
    let user = document.getElementById("user").value;
    localStorage.setItem("Nome", user);
    window.location.href = "chat.html"
}