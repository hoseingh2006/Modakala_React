import './Footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <p className='text-percent'>از آخرین تخفیف ها و جشنواره های ما مطلع شوید:</p>
                <div className='footer-search-box'>
                    <input className='footer-search' type="text" placeholder='ایمیل خود را وارد نمایید ...' />
                    <i class="fa fa-check icon-footer-search" aria-hidden="true"></i>
                </div>
                <div className='footer-box-app'>
                    <img src="https://modakala.com/images/content/footer_app_download_btns/iosAppDownloadBtn.png" alt="" />
                    <img src="	https://modakala.com/images/content/footer_app_download_btns/androidAppDownloadBtn.png" alt="" />
                    <img src="https://modakala.com/images/content/footer_app_download_btns/windowsAppDownloadBtn.png" alt="" />
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-phone'>
                    <p className='footer-phone-phone'>
                        <i class="fa fa-phone" aria-hidden="true"></i> تلفن تماس: </p>
                    <p>02191300192</p>
                    <p>02191300192</p>
                    <p>09373213701</p>
                    <p className='footer-phone-email'><i class="fa fa-envelope"></i>
                        info@modakala.com
                    </p>
                    <p className='footer-phone-address'><i class="fa fa-map-marker" aria-hidden="true"></i>
                        خیابان قدس ، بالاتر از شهرداری ، پلاک ۲۱۵
                    </p>
                </div>
                <div className='footer-link'>
                    <h3>لینک های کاربردی</h3>
                    <a href="">ارسال و مرجوعی</a>
                    <a href="">حریم خصوصی</a>
                    <a href="">شرایط استفاده</a>
                    <a href="">درباره ما</a>
                </div>
                <div className='footer-khadamat'>
                    <h3>خدمات بیشتر</h3>
                    <a href="">تور مجازی فروشگاه</a>
                    <a href="">بلاگ مقالات</a>
                    <a href="">همکاری در فروش</a>
                </div>
                <div className='footer-namad'>
                    <img src="enamad.png" alt="" />
                    <img src="rezayat.png" alt="" />
                    <img src="etehadieh.png" alt="" />
                </div>
                <div className='footer-info'>
                    <h3>فروشگاه لوازم آرایشی و بهداشتی مداکالا</h3>
                    <p>فروشگاه مدا کالا در سال ٨۴ در زمینه آرایشی بهداشتی تاسیس شد. نیاز روز افزون جامعه به اطلاعات صحیح در مورد محصولات بهداشتی آرایشی بر هیچ کس پوشیده نیست، کادر مجرب فروشگاه سنتی مدا کالا تجربیات یک دهه خود را با نیاز روز افزون جامعه گره زده اند و بعد از ده سال خوش نامی در این زمینه در سال ٩۴ وارد فضای مجازی شد به این ترتیب سایت فروشگاه اینترنتی مدا کالا راه اندازی شد.</p>
                </div>

            </div>
        </div>
    )
}