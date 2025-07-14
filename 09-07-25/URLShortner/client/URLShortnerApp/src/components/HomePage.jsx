import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage =() =>{

    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuthenticationStatus(){
            const response = await fetch("http://localhost:8080/auth-check",{
                method: "GET",
                credentials: "include"
            });

            if (response.status !== 200){
                navigate("/signup");
            }
        }

        checkAuthenticationStatus();
    },[]);
    return(
        <h1 className="text-white">
            Home Page
        </h1>
    );
};