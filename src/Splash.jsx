import octobitLogo from "./assets/img/Logo_OCTOBIT_Logo_Branco_HORIZONTAL.png"
import instagramLogo from "./assets/img/icon-instagram-white.png"
import linkedinLogo from "./assets/img/icon-linkedin-white.png"

export default function () {
    return (
        <>
            <div className="main_wrapper">
                <img src={octobitLogo} alt="Logo branco horizontal da Octobit Jr." id="main_octobit_logo" />
                
                <ul className="main_container">
                    <li className="main___container___icon">
                        <a className="main___container___icon___instagram" target="_blank" href="https://www.instagram.com/octobitjr?igsh=MWp5M2t0bnJlajRyeQ=="><img src={instagramLogo} /></a>
                    </li>
                    
                    <li className="main___container___icon">
                        <a className="main___container___icon___linkedin" target="_blank" href="https://www.linkedin.com/company/octobit-empresa-j%C3%BAnior-usp/"><img src={linkedinLogo} /></a>
                    </li>
                </ul>
            </div>
        </>
    )
}