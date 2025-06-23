const form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault();

    const fnameelement = document.getElementById("fname");
    const lnameelement = document.getElementById("lname");
    const ageelement = document.getElementById("age");

    const fname = fnameelement.value;
    const lname = lnameelement.value;
    const age = ageelement.value;

    const subject = document.querySelector('input[name="subject"]:checked')?.value;

    console.log(subject);

    document.getElementById("namef").textContent = "Give first name: "+ fname;
    document.getElementById("namel").textContent = "Give last name: "+ lname;
    document.getElementById("agee").textContent = "Give age: "+ age;
    document.getElementById("sub").textContent = "Subject prefered: "+ subject;

})