import photo1 from '../Assets/restauranfood.jpg'
import photo2 from '../Assets/bruchetta.svg'
import photo3 from '../Assets/lemondessert.jpg'
import Card from './Card';

import React from "react";
import Swal from "sweetalert2";

const Highlights = () => {
    const link = [photo1, photo2, photo3];
    const title = ["Greek Saalad", "Brushetta", "Lemon Dessert"];
    const price = ["$12.99", "$5.99", "$5.00"];
    const content = ["The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ", "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."];
    const handleOrder = (id) => {
        console.log(id);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Do you want to confirm order?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Yes, order it!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Orderd!',
                'Your order has been confirmed.',
                'success'
            )
            }
        })
    }
    const comp = [...Array(3).keys()].map((_, i) => <Card key={i} class = {"card card" + i} link = {link[i]} title = {title[i]} price = {price[i]} content = {content[i]} func = {handleOrder}/>)

    return (
        <div className="container">
            <div className="highlight">
                <h1 id="high">This Week specials!</h1>
                <button id="menu"> <a href="#menu">Online Menu</a></button>
                {comp}
            </div>
        </div>
    );
}

export default Highlights;