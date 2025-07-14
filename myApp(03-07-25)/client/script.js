let dataPara;
fetch('http://localhost:8080/')
  .then(res => res.json())
  .then((data) => {
    console.log("Fetched message:", data);
    dataPara = data;
  })
  .catch((error) => {
    console.log("Data fetching failed");
    console.log("this is the error", error);
  });

function addFunction(){
    const para = document.createElement("p");
    para.textContent = dataPara;
    document.body.appendChild(para);
}
