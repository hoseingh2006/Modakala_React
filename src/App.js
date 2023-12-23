import './App.css';
import Topheaderimg from './header/Topheaderimg';
import Headermain from './header/Headermain';
import Sliderimg from './carousel/Sliderimg'
import Categories from './categories/Categories';
import Slidershop from './carousel/Slider-shop';
import Imagebox from './imagebox/Imagebox';
import Brands from './brands/Brands';
import Footer from './fooetr/Footer';

function App() {
  return (
    <div>
      <Topheaderimg ></Topheaderimg>
      <Headermain></Headermain>
      <Sliderimg url="https://modakala.com/images/thumbs/0075117_%D8%A8%D9%86%D8%B1%203.jpeg"></Sliderimg>
      <Categories></Categories>
      <Slidershop ></Slidershop>
      <Slidershop></Slidershop>
      <Imagebox url1="https://modakala.com/images/thumbs/0071880_%D8%A8%D9%86%D8%B1%20%D9%88%D8%B3%D8%B7%20002.webp" url2="	https://modakala.com/images/thumbs/0071880_%D8%A8%D9%86%D8%B1%20%D9%88%D8%B3%D8%B7%20002.webp" url3="https://modakala.com/images/thumbs/0071884_%D8%A8%D9%86%D8%B1%20%D9%88%D8%B3%D8%B7%20001.webp"></Imagebox>
      <Slidershop></Slidershop>
      <Slidershop></Slidershop>
      <Imagebox url1="https://modakala.com/images/thumbs/0068363_0068001_dfhfghf.webp"></Imagebox>
      <Slidershop></Slidershop>
      <Slidershop></Slidershop>
      <Imagebox url1="https://modakala.com/images/thumbs/0071880_%D8%A8%D9%86%D8%B1%20%D9%88%D8%B3%D8%B7%20002.webp" url2="	https://modakala.com/images/thumbs/0071880_%D8%A8%D9%86%D8%B1%20%D9%88%D8%B3%D8%B7%20002.webp" url3="https://modakala.com/images/thumbs/0071884_%D8%A8%D9%86%D8%B1%20%D9%88%D8%B3%D8%B7%20001.webp" url4="https://modakala.com/images/thumbs/0071884_%D8%A8%D9%86%D8%B1%20%D9%88%D8%B3%D8%B7%20001.webp"></Imagebox>
      <Slidershop></Slidershop>
      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
}

export default App;
