
function Header(){
    function onButtonClick(){
        console.log("You have clicked the button")
    }

    function mouseEnter(){
        console.log("Mouse entered!")
    }

    const arr = [1,2,3,4,5];
    let variable = "This is a variable";

   return (
  <>
    <h1>I am a header</h1>
    <h2>{variable}</h2>
    <ul>
      {arr.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
    <button type="button" onClick={onButtonClick} onMouseEnter={mouseEnter}>
      Click!
    </button>
  </>
);

}

export default Header