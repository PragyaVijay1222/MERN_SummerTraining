import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){

    const [colorLadies, setColorLadies] = useState("#747577")
    const [colorMen, setColorMen] = useState("#747577")
    const [colorKids, setColorKids] = useState("#747577")
    const [colorHome, setColorHome] = useState("#747577")
    
    return(
        <>
        <div className="flex justify-between m-4 "> <p className="text-red-500">STEALS OF THE SEASON | UNDER 699</p>
        <p>SHOP NOW +</p></div>
        <div className="flex justify-between m-4 mt-7" >
            <div className="flex justify-between ">
                <div className="bg-[url('/h-m-logo.svg')] w-18 h-13 bg-no-repeat bg-contain"></div>
                <div className="flex justify-between mt-2"></div>
                   <Link to="/Women" className="ml-4 mr-4"> <div style={{ color: colorLadies }} onClick={() => {
                    setColorLadies("#050506");
                    setColorKids("#747577");
                    setColorMen("#747577");
                    setColorHome("#747577");
                   }}>LADIES</div></Link>
                   <Link to="/Men" className="ml-4 mr-4"> <div style={{ color: colorMen }} onClick={() => {
                    setColorLadies("#747577");
                    setColorKids("#747577");
                    setColorMen("#050506");
                    setColorHome("#747577");
                   }}>MEN</div></Link>
                   <Link to="/Kids" className="ml-4 mr-4"> <div style={{ color: colorKids }} onClick={() => {
                    setColorLadies("#747577");
                    setColorKids("#050506");
                    setColorMen("#747577");
                    setColorHome("#747577");
                   }}>KIDS</div></Link>
                   <Link to="/Home" className="ml-4 mr-4"> <div style={{ color: colorHome }} onClick={() => {
                    setColorLadies("#747577");
                    setColorKids("#747577");
                    setColorMen("#747577");
                    setColorHome("#050506");
                   }}>HOME</div></Link>
                </div>
        </div>
        </>
    );
}

export default Header;
