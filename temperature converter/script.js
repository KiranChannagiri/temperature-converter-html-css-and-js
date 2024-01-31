let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
cel.addEventListener("input",()=>
{
    var c = parseFloat(cel.value) ;
    var f = (c * 9/5) + 32;
    if(!Number.isInteger(f))
    {
        f=parseFloat(f.toFixed(4));
    }
    fah.value=f;

});
fah.addEventListener("input",()=>
{
    var f = parseFloat(fah.value);
    var c = (f - 32) * 5/9;
    if(!Number.isInteger(c))
    {
        c=parseFloat(c.toFixed(4));
    }
    cel.value = c;
});
// toFixed() returns a string representation of the number with the specified number of decimal places. So, after this operation, f becomes a string, and subsequent arithmetic operations may not behave as expected.
// Then input field always return the string? Yes, that's correct. In JavaScript, the value property of an input field always returns a string. This is why, when working with numerical input, it's common to use functions like parseFloat() or parseInt() to convert the string representation of a number into an actual numerical value that can be used for calculations.
// this.value  refers to the value of the input element (cel or fah) that triggered the input event. 
// In the event listeners, you are trying to access the value of the input fields using this.value, but inside arrow functions, this does not refer to the element that triggered the event.    