import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Slider-shop.css'
export class Slidershop extends Component {
    render() {
        return (
            <div className='product-box'>
                <div className='product-header'>
                    <p>{this.props.title}</p>
                    <a href="">+ نمایش بیشتر</a>
                </div>
                <div className='product-content'>
                    <OwlCarousel items={6}
                        className="owl-theme slider-shop"
                        loop
                        nav
                        dots={false}
                        navText={["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]}
                        margin={20} >
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url1} />
                            <p>
                            {this.props.text1}
                            </p>
                            <span className='last-price'>{this.props.lastprice1}</span>
                            <span>{this.props.price1}</span>
                        </div>
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url2} />
                            <p>
                            {this.props.text2}
                            </p>
                            <span className='last-price'>{this.props.lastprice2}</span>
                            <span>{this.props.price2}</span>
                        </div>
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url3} />
                            <p>
                            {this.props.text3}
                            </p>
                            <span className='last-price'>{this.props.lastprice3}</span>
                            <span>{this.props.price3}</span>
                        </div>
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url4} />
                            <p>
                            {this.props.text4}
                            </p>
                            <span className='last-price'>{this.props.lastprice4}</span>
                            <span>{this.props.price4}</span>
                        </div>
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url5} />
                            <p>
                            {this.props.text5}
                            </p>
                            <span className='last-price'>{this.props.lastprice5}</span>
                            <span>{this.props.price5}</span>
                        </div>
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url6} />
                            <p>
                            {this.props.text6}
                            </p>
                            <span className='last-price'>{this.props.lastprice6}</span>
                            <span>{this.props.price6}</span>
                        </div>

                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url7} />
                            <p>
                            {this.props.text7}
                            </p>
                            <span className='last-price'>{this.props.lastprice7}</span>
                            <span>{this.props.price7}</span>
                        </div>

                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url8} />
                            <p>
                            {this.props.text8}
                            </p>
                            <span className='last-price'>{this.props.lastprice8}</span>
                            <span>{this.props.price8}</span>
                        </div>
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url9} />
                            <p>
                            {this.props.text9}
                            </p>
                            <span className='last-price'>{this.props.lastprice9}</span>
                            <span>{this.props.price9}</span>
                        </div>
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url10} />
                            <p>
                            {this.props.text10}
                            </p>
                            <span className='last-price'>{this.props.lastprice10}</span>
                            <span>{this.props.price10}</span>
                        </div>
                        <div className='slider-shop-box'>
                            <img className="img" src={this.props.url11} />
                            <p>
                            {this.props.text11}
                            </p>
                            <span className='last-price'>{this.props.lastprice11}</span>
                            <span>{this.props.price11}</span>
                        </div>
                    </OwlCarousel>
                </div>
            </div>


        )
    }
}
Slidershop.defaultProps = {
    title:"محصولات پوست",
    url1:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url2:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url3:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url4:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url5:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url6:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url7:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url8:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url9:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url10:"https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    url11: "https://modakala.com/images/thumbs/0066878_-4-_250.jpeg",
    text1:"ست براش 4 تکه رئال تکنیک",
    text2:"ست براش 4 تکه رئال تکنیک",
    text3:"ست براش 4 تکه رئال تکنیک",
    text4:"ست براش 4 تکه رئال تکنیک",
    text5:"ست براش 4 تکه رئال تکنیک",
    text6:"ست براش 4 تکه رئال تکنیک",
    text7:"ست براش 4 تکه رئال تکنیک",
    text8:"ست براش 4 تکه رئال تکنیک",
    text9:"ست براش 4 تکه رئال تکنیک",
    text10:"ست براش 4 تکه رئال تکنیک",
    text11:"ست براش 4 تکه رئال تکنیک",






    price1:"74٬520 تومان",
    price2:"74٬520 تومان",
    price3:"74٬520 تومان",
    price4:"74٬520 تومان",
    price5:"74٬520 تومان",
    price5:"74٬520 تومان",
    price6:"74٬520 تومان",
    price7:"74٬520 تومان",
    price8:"74٬520 تومان",
    price9:"74٬520 تومان",
    price10:"74٬520 تومان",
    price11:"74٬520 تومان",

    lastprice1:"340٬000 تومان",
    lastprice2:"340٬000 تومان",
    lastprice3:"340٬000 تومان",
    lastprice4:"340٬000 تومان",
    lastprice5:"340٬000 تومان",
    lastprice6:"340٬000 تومان",
    lastprice7:"340٬000 تومان",
    lastprice8:"340٬000 تومان",
    lastprice9:"340٬000 تومان",
    lastprice10:"340٬000 تومان",
    lastprice11:"340٬000 تومان",
    
};


export default Slidershop  