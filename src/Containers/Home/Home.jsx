
import React from 'react';

import "./Home.css";

const Home = (props) => {

    //Variables
    let arrayDrinks = [{ id: 1, name: "mojito" }, { id: 2, name: "coke" },
    { id: 3, name: "water" }, { id: 4, name: "lemonade" }, { id: 5, name: "vodka" }];

    let mapList = arrayDrinks.map(diogoDrink =>
        //We usually put ids or values that are never to be repeated on the key property
        <div className="drinkShowroom" key={diogoDrink.id}
            onClick={() => talkMeDrink(diogoDrink)}>
            {diogoDrink.name}</div>
    );

    const talkMeDrink = (drink) => {
        console.log(drink.name);
    };

    return (
        <div className="homeDesign">{mapList}{props.company}</div>
    )
};

export default Home;