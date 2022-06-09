// Code EyesOnMe Component Here
/*
1. In the components/EyesOnMe.js file, create a EyesOnMe React component. DONE
2. In that component, render a button with the text 'Eyes on me'. DONE
3. On that button, add event handlers that listen for the focus and blur events.
4. When the focus event fires, use console.log to print out the text 'Good!'.
5. When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
*/
function EyesOnMe() {
    function handleFocus(e) {
        console.log('Good!')
    }

    function handleBlur(e) {
        console.log('Hey! Eyes on me!')
    }
    
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe