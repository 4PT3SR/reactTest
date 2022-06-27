
import './ColorCard.css'

const ColorCard = ({color}) => {
    return (
        <div className="box" style={{backgroundColor:color}}>
            {color}
        </div>
    )
}

export default ColorCard