import "./aboutItem.scss";

function AboutItem({title, text}) {
    return (
        <div className="gridItem">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default AboutItem;