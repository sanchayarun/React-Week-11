import React, { useState } from "react";

const Car = () => {

    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Focus");
    const [colour, setColour] = useState("Black");
    const [year, setYear] = useState("2015");

    const submitHandler = (event) => {event.preventDefault();}

    return(
    <>
    
        <h2>My Car Details</h2>

        <form onSubmit = {submitHandler}>
        <label htmlFor = "brand"> Brand: &nbsp;</label>
        <input type = "text" placeholder ="Enter Brand " name = "brand" value = {brand} onChange = {event => setBrand(event.target.value) } />
       
        <label htmlFor = "model"> Model: &nbsp;</label>
        <input type = "text" placeholder="Enter Model" name = "model" value = {model} onChange = {event => setModel(event.target.value)} />        
       
        <label htmlFor = "colour"> Colour: &nbsp;</label>
        <input type = "text" placeholder ="Enter Colour " name = "colour" value = {colour} onChange = {event => setColour(event.target.value) } />
       
        <label htmlFor = "year"> Year: &nbsp;</label>
        <input type = "text" placeholder="Enter Year" name = "year" value = {year} onChange = {event => setYear(event.target.value)} />         
       
        <br/>
        <input type = "submit" value = "Enter"/>

        </form>
   
        <p>
            [Brand: &nbsp; {brand} &nbsp;&nbsp;&nbsp;
            Model: &nbsp; {model} &nbsp;&nbsp;&nbsp;
            Colour: &nbsp; {colour} &nbsp;&nbsp;&nbsp;
            Year: &nbsp; {year}]  
        </p>
    </>
    )

}


export default Car;