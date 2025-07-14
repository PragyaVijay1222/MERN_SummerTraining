function submitForm(){

    const form = document.getElementById("login-form");

    const formData = new FormData(form);

    const userData = {};

    for(const data of formData.entries()){
        userData[data[0]] = data[1];
    }

    fetch("http://localhost:8080/submit", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-type" : "application/json"
        }
    });
}