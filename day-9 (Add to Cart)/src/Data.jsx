import React from 'react'
import Card from './Card'

const Data = ({addToCart}) => {

    const cardData = [
        {
            name: "Spaghetti",
            price: 12.05,
            rating: 4,
            category: "Dinner",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/Spaghetti.png",
        },
        {
            name: "Gnocchi",
            price: 12.05,
            rating: 5,
            category: "Lunch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/Gnocchi.png",
        },
        {
            name: "Rovioli",
            price: 12.05,
            rating: 5,
            category: "Dinner",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/Rovioli.png",
        },
        {
            name: "Penne Alla Vodak",
            price: 12.05,
            rating: 4,
            category: "Lunch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/Penne Alla Vodak.png",
        },
        {
            name: "Risoto",
            price: 12.05,
            rating: 4,
            category: "Dinner",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/Risoto.png",
        },
        {
            name: "Splitza Signature",
            price: 12.05,
            rating: 5,
            category: "Lunch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/Splitza Signature.png",
        },
        {
            name: "Chockalet Dount",
            price: 10.05,
            rating: 4,
            category: "Dessert",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/ChockaletDount.png",
        },
        {
            name: "Classic Tiramisu",
            price: 10.05,
            rating: 5,
            category: "Dessert",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/ClassicTiramisu.png",
        },
        {
            name: "Frosted Donut",
            price: 10.05,
            rating: 4,
            category: "Dessert",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/FrostedDonut.png",
        },
        {
            name: "Sweet Cupcake",
            price: 10.05,
            rating: 5,
            category: "Dessert",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/SweetCupcake.png",
        },
        {
            name: "Sprite",
            price: 7.05,
            rating: 4,
            category: "Drink",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/sprite.png",
        },
        {
            name: "Fanta",
            price: 7.05,
            rating: 5,
            category: "Drink",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/fanta.png",
        },
        {
            name: "Pepsi",
            price: 7.05,
            rating: 4,
            category: "Drink",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/pepsi.png",
        },
        {
            name: "Cocacola",
            price: 7.05,
            rating: 5,
            category: "Drink",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/cocacola.png",
        },
        {
            name: "Thums Up",
            price: 7.05,
            rating: 4,
            category: "Drink",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "/thumsUp.png",
        },
    ];


    return (
        <div className="container mx-auto px-4 py-8 pt-24">
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cardData.map((e, i) => (
                    <Card key={i} data={e} addToCart={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default Data
