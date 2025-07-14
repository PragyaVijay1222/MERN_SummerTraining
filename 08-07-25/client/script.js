function submitFunction(){
    let form = document.getElementById("form");

    const formData = new  FormData(form);
    const userData = {};
    for(let data of formData.entries()){
        userData[data[0]] = data[1];
    }

    console.log(userData);

    fetch("http://localhost:3000/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then((res) => {
        if (!res.ok) throw new Error("Failed to sign up!");
        return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));
};

const form = document.getElementById("form");

form.addEventListener("submit", submitFunction);