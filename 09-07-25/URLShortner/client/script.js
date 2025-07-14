const form = document.getElementById("form");

const urlInput = document.getElementById("longURL");
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    fetch("http://localhost:8080/",{
        method: "POST",
        body: JSON.stringify({longURL: urlInput.value}),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
         const generatedURL = document.getElementById("shortURL");
         generatedURL.textContent = data.shortURL;
         generatedURL.href = data.shortURL;
    })
    .catch(error => console.error("URL generating error: ", error));
})