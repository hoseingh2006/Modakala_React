import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Sliderimg.css';
export class Sliderimg extends Component {
    render() {
        return (

            <div className='slider-mainbox'>

                <OwlCarousel items={1}
                    className="owl-theme sliderimg"
                    loop
                    nav
                    mouseDrag={false}
                    margin={8}
                    // responsiveClass={true}
                    navText={["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]}>

                    <div ><img className="img" src={this.props.url} /></div>
                    <div><img className="img" src={'https://modakala.com/images/thumbs/0073639_bd0.jpeg'} /></div>
                    <div><img className="img" src={'https://modakala.com/images/thumbs/0073639_bd0.jpeg'} /></div>
                    <div><img className="img" src={'https://modakala.com/images/thumbs/0073639_bd0.jpeg'} /></div>
                </OwlCarousel>

                <div className='imgbox-slider-main'>
                    <div className='imgbox-slider'>
                        <img src="https://modakala.com/images/thumbs/0073933_202002.jpeg" />
                    </div>
                    <div className='imgbox-slider'>
                        <img src="https://modakala.com/images/thumbs/0073933_202002.jpeg" />
                    </div>
                </div>
            </div>
        )

    }
}


export default Sliderimg  