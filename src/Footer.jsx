import octobitLogo from "./assets/img/octobit-logo-white.png"

export default function () {
    return (
        <footer className="index_footer">
            <div className="index_footer_logo">
                <img src={octobitLogo}/>
            </div>
            <div className="copyright">
                © Copyright 2025 Octobit Jr.
            </div>
        </footer>
    )
}