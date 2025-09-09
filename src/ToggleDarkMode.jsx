import dayAndNightWhite from "./assets/img/day-and-night-white.png"
import dayAndNight from "./assets/img/day-and-night.png"

export default function (props) {
    return (
        <button className="toggle" style={{backgroundColor: props.darkMode ? '#2b2b2b' : '#dbdad9', backgroundImage: props.darkMode ? `url(${dayAndNightWhite})` : `url(${dayAndNight})`}} onClick={function () {props.setDarkMode(!props.darkMode); document.getElementById("body").classList.add("light")}}></button>
    )
}