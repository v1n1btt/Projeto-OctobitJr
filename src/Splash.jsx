import octobitLogo from "./assets/img/Logo_OCTOBIT_Logo_Branco_HORIZONTAL.png"
import octobitLogoBlack from "./assets/img/Logo_OCTOBIT_Logo_Preto_HORIZONTAL.png"
import instagramLogo from "./assets/img/icon-instagram-white.png"
import instagramLogoBlack from "./assets/img/icon-instagram-black.png"
import linkedinLogo from "./assets/img/icon-linkedin-white.png"
import linkedinLogoBlack from "./assets/img/icon-linkedin-black.png"

export default function (props) {
    return (
        <>
            <div className="main_wrapper">
                <img src={props.darkMode === true ? octobitLogo : octobitLogoBlack} alt="Logo branco horizontal da Octobit Jr." id="main_octobit_logo" />
                
                <ul className="main_container">
                    <li className="main___container___icon">
                        <a className="main___container___icon___instagram" target="_blank" href="https://www.instagram.com/octobitjr?igsh=MWp5M2t0bnJlajRyeQ=="><img src={props.darkMode === true ? instagramLogo : instagramLogoBlack} /></a>
                    </li>
                    
                    <li className="main___container___icon">
                        <a className="main___container___icon___linkedin" target="_blank" href="https://www.linkedin.com/company/octobit-empresa-j%C3%BAnior-usp/"><img src={props.darkMode === true ? linkedinLogo : linkedinLogoBlack} /></a>
                    </li>
                </ul>
            </div>
        </>
    )
}