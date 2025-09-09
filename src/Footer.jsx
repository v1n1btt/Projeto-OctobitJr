import { useEffect, useRef } from "react"
import octobitLogo from "./assets/img/octobit-logo-white.png"
import octobitLogoBlack from "./assets/img/octobit-logo-black.png"

export default function (props) {
    const footerRef = useRef(null);

    useEffect(() => {
        const footer = footerRef.current;

        footer.style.backgroundColor = props.darkMode ? '#080808' : '#b6b5b4';
    }, [props.darkMode]);

    return (
        <footer className="index_footer" ref={footerRef} style={{color: props.darkMode ? '#dbdad9' : '#080808'}}>
            <div className="index_footer_logo">
                <img src={props.darkMode === true ? octobitLogo : octobitLogoBlack}/>
            </div>
            <div className="copyright">
                © Copyright 2025 Octobit Jr.
            </div>
        </footer>
    )
}