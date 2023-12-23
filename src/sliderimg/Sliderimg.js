import './Sliderimg.css'
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
export default function Sliderimg() {
    return (
        <div class="owl-carousel owl-theme">
            <div class="item"><img src="https://modakala.com/images/thumbs/0075117_%D8%A8%D9%86%D8%B1%203.jpeg" alt="" /></div>
            <div class="item"><img src="https://modakala.com/images/thumbs/0075117_%D8%A8%D9%86%D8%B1%203.jpeg" alt="" /></div>
            <div class="item"><img src="https://modakala.com/images/thumbs/0075117_%D8%A8%D9%86%D8%B1%203.jpeg" alt="" /></div>
        </div>
    )
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
