import logo from "./assets/img/Logo_OCTOBIT_Logo_Branco_VERTICAL.png"

export default function () {
    return (
        <header className="header" id="nav_bar">
            <a href="./index.html" className="nav_logo_a"><img src={logo} alt="Logo branco vertical da Octobit Jr." className="nav_logo"/></a>

            <nav className="nav_bar">
                <ul className="nav_bar_desktop">
                    <li className="nav_bar_li"><a href="./index.html">Início</a></li>
                    <li className="nav_bar_li"><a href="#sobre">Sobre nós</a></li>
                    <li className="nav_bar_li"><a href="#equipe">Equipe</a></li>
                    <li className="nav_bar_li"><a href="#projetos">Projetos</a></li>
                    <li className="nav_bar_li"><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}