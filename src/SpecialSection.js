import React from "react";
import Card from "./Components/Card";

const SpecialSection = () => {
    const cardData = [
        {
            image: require("./assets/greek salad.jpg"),
            heading: "Greek Salad",
            text: "The secret of success in life is to eat what you like and let the food fight it out inside. - Mark Twain",
            price:"12.00"
        },
        {
            image: require("./assets/food3.jpeg"),
            heading: "Lemon Desert ",
            text: "The secret of success in life is to eat what you like and let the food fight it out inside. - Mark Twain",
            price:"10.00"
        },
        {
            image: require("./assets/food2.jpeg"),
            heading: "Pizza",
            text: "The secret of success in life is to eat what you like and let the food fight it out inside. - Mark Twain",
            price:"13.00"
        },
    ];
    return (
    <section id="menu">
            <div className="container-fluid special-items">
            <div className="row ">
                <h2 className="text-center">This Week Special Items</h2>
            </div>

            <div className="container">
                <div className="row">
                    {cardData.map((card, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <Card
                                image={card.image}
                                heading={card.heading}
                                text={card.text}
                                price={card.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};

export default SpecialSection;
