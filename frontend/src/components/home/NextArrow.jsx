import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../styles/Slider.css";

export default function NextArrow() {
    return (
        <div className="next-arrow">
            <FontAwesomeIcon icon={faChevronRight} size="2xl" style={{ color: "#ffffff", cursor: "pointer"}} />
        </div>
    )
}
