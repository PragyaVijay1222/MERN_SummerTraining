
function Timer(){

    return(
        <>
        <div class="main" className="align-center">
        <div class="timer" className="flex m-5 ">
        <h3 id="hour">00</h3><p>:</p><h3 id="minute">00</h3><p>:</p><h3 id="second">00</h3>
        </div>
        <div class="btn">
        <button id="button1" type="button" className="m-10">Start</button>
        <button id="button3" type="reset" className="m-10">Reset</button>
        <button id="button2" type="button" className="m-10">Stop</button>
        </div>
        </div>
        </>
    );
}

export default Timer;