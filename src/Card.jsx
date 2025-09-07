export default function (props) {
    return (
        <div className="equipe_card">
            <div className="equipe_photo_wrapper">
                <div className="equipe_photo">
                    <img src={props.src} alt={props.alt} />
                </div>
            </div>
            <div className="equipe_info">
                <h2 className="equipe_name">{props.name}</h2>
                <p className="equipe_role">{props.role}</p>
            </div>
        </div>
    )
}