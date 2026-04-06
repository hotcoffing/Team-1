import "./hobbyItem.scss";

function HobbyItem({title, img, imgText}) {
    return (
        <li className="hobbyList">
            <div className="hobbyTitle">{title}</div>
            <div className="hobbyContent">
                <img src={img} alt={imgText}/>
            </div>
        </li>
    )
}

export default HobbyItem;