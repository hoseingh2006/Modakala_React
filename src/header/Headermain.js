import './Headermain.css';
import Navbar from '../navbar/Navbar';
export default function Headermain() {
    return (
        <div class="header">
            <div class="header-top">
                <div class='header-right'>
                    <img class="header-logo" src="https://modakala.com/images/thumbs/0073242_modakala.png" alt="" />
                    <div class="header-search-box">
                        <input class="header-search" type="text" placeholder='نام کالا، برند یا دسته بندی را وارد نمایید...' />
                        <i class="fa fa-search icon-search"></i>

                    </div>
                </div>
                <div class="header-left">
                    <a href="#" class="btn-sign">
                        <i class="fas fa-user-alt icon-user"></i>
                        ورود / ثبت نام
                    </a>
                    <a href='#' class=" btn-shop">
                        <i class="fas fa-cart-plus icon-shop"></i>
                        <span class='cunt-shop'>0</span>
                    </a>
                </div>
            </div>
            <Navbar></Navbar>
        </div>
    )
}