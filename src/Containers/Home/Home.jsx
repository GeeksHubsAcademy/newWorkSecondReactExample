
import React from 'react';

import "./Home.css";

const Home = () => {

    //Variables
    let arrayDrinks = ["mojito","coke","water","lemonade","vodka"];

    let mapList = arrayDrinks.map(diogoDrink => 
        <div className="drinkShowroom">{diogoDrink}</div>
    );

    return (
        <div className="homeDesign">{mapList}</div>
    )
};

export default Home;