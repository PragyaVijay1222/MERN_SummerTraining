import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Signup =() =>{
    const formRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuthenticationStatus(){
            const response = await fetch("http://localhost:8080/auth-check",{
                method: "GET",
                credentials: "include"
            });

            if (response.status === 200){
                navigate("/");
            }
        }

        checkAuthenticationStatus();
    }, []);

    async function handleFormSubmit(event){
        event.preventDefault();


        const formData = new FormData(formRef.current);

        const userPayload = {};

        for (const data of formData.entries()){
            userPayload[data[0]] = data[1];
        }
        
        const response = await fetch("http://localhost:8080/signup", {
            method: "POST",
            body: JSON.stringify(userPayload),
            headers:{
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        if(response.status === 201){
            navigate("/");
        }
        // const responseData = await response.json();
        console.log(response);
    }
    return(
       <form action="" method="post" className="flex flex-col gap-4" onSubmit={(event) => handleFormSubmit(event)} ref={formRef}>
        <input type="text" name="username" placeholder="username" className="border border-[#cdcdcd] px-4 py-2" />
        <input type="email" name="email" placeholder="email" className="border border-[#cdcdcd] px-4 py-2" />
        <input type="password" name="password" placeholder="password" className="border border-[#cdcdcd] px-4 py-2" />

        <button type="submit">Signup</button>
       </form>
    );
};