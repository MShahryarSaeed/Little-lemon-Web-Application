import React from "react";
import Card from "./Components/Card";

const SpecialSection = () => {
    const cardData = [
        {
            image: require("./assets/greek salad.jpg"),
            heading: "Greek Salad",
            text: "The secret of success in life is to eat what you like and let the food fight it out inside. - Mark Twain",
        },
        {
            image: require("./assets/greek salad.jpg"),
            heading: "Lemon Desert ",
            text: "The secret of success in life is to eat what you like and let the food fight it out inside. - Mark Twain",
        },
        {
            image: require("./assets/greek salad.jpg"),
            heading: "Pizza",
            text: "The secret of success in life is to eat what you like and let the food fight it out inside. - Mark Twain",
        },
    ];
    return (
        <div className="container-fluid special-items">
            <div className="row ">
                <h2 className="text-center">Special Items</h2>
            </div>

            <div className="container">
                <div className="row">
                    {cardData.map((card, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <Card
                                image={card.image}
                                heading={card.heading}
                                text={card.text}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialSection;
