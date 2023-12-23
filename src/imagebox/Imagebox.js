import './Imagebox.css'
export default function Imagebox(props) {
    if (props.url4){
    return (
        <div className="imagebox">
            <div>
                <img src={props.url1} alt="" />
            </div>
            <div>
                <img src={props.url2} alt="" />
            </div>
            <div>
                <img src={props.url3} alt="" />
            </div>
            <div>
                <img src={props.url4} alt="" />
            </div>
        </div>
    )
    }
    if (props.url2){
    return (
        <div className="imagebox">
            <div>
                <img src={props.url1} alt="" />
            </div>
            <div>
                <img src={props.url2} alt="" />
            </div>
            <div>
                <img src={props.url3} alt="" />
            </div>
        </div>
    )
    }
    else{
        return (
        <div className="imagebox">
            <div>
                <img src={props.url1} alt="" />
            </div>
        </div>
    )
    }
}
