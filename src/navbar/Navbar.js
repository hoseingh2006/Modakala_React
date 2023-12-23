import './Navbar.css'
export default function Navbar() {
    return (
        <nav class="stroke">
            <ul>
                <li><a href="#">
                    <i class="fa fa-bars" aria-hidden="true"></i>دسته بندی کالاها</a></li>
                    <div class="hr-vertical"></div>
                <li><a href="#"> تاريخ كم ها با قيمت كمتر</a></li>
                <li><a href="#">بلاگ</a></li>
                <li><a href="#">برند ها</a></li>
                <li><a href="#">همکاری در فروش</a></li>
            </ul>

        </nav>
    )
}