import { useState } from "react";

const Car = () => {

    const [Brand, setBrand] = useState("Ford");
    const [Model, setModel] = useState("Focus");
    const [Colour, setColour] = useState("Black");
    const [Year, setYear] = useState("2015");


    return(
        
   
        <p>
        <h2>Car Details</h2>
            [Brand: &nbsp; {Brand} &nbsp;&nbsp;&nbsp;
            Model: &nbsp; {Model} &nbsp;&nbsp;&nbsp;
            Colour: &nbsp; {Colour} &nbsp;&nbsp;&nbsp;
            Year: &nbsp; {Year}]  
        </p>
    
    )

}


export default Car;