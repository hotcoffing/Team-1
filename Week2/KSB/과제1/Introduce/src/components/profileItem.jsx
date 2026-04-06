import "./profileItem.scss";

function ProfileItem({img, imgText, text}) {
    return (
        <div className="infoItem">
            <img src={img} className="icon" alt={imgText}/>
            <p>{text}</p>
        </div>
    )
}

export default ProfileItem;