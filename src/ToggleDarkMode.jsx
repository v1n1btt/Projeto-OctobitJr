export default function (props) {
    return (
        <button className="toggle" style={{backgroundColor: props.darkMode ? '#2b2b2b' : '#dbdad9', backgroundImage: props.darkMode ? "url('src/assets/img/day-and-night-white.png')" : "url('src/assets/img/day-and-night.png')"}} onClick={function () {props.setDarkMode(!props.darkMode); document.getElementById("body").classList.add("light")}}></button>
    )
}