
function clickFunction(){
    // let name = document.getElementById("name");
    // let email = document.getElementById("email");

    let formData = document.getElementById("form")
    const UserData = {};
    
    for(let data of formData.entries()){
        UserData[data[0]] = data[1];
    }

    fetch("http://localhost:8080/signup", {
        method: "POST",
        body: JSON.stringify(UserData),
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}