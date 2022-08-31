import './Filmkarten.css'


const Filmkarten = (props) => {
    return (
        <div className="flexCard">
            <div className="cardStyle">
                <p>{props.titel}</p>
                <p>{props.jahr}</p>
                <p>{props.direktor}</p>
                <p>{props.dauer}</p>
                <p>{props.Genre}</p>
                <p>{props.Rate}</p>
            </div>
        </div>
    )
}

export default Filmkarten;