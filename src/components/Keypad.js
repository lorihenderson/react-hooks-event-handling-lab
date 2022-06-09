// Code Keypad Component Here

function Keypad() {
    function handleKeyPad(e) {
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={handleKeyPad}></input>
        
    )
}

export default Keypad