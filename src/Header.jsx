import logo from "./assets/img/Logo_OCTOBIT_Logo_Branco_VERTICAL.png"

export default function (props) {
    return (
        <header className="header" id="nav_bar">
            <a onClick={() => props.setActiveTab(props.tabs.index)} className="nav_logo_a"><img src={logo} alt="Logo branco vertical da Octobit Jr." className="nav_logo"/></a>

            <nav className="nav_bar">
                <ul className="nav_bar_desktop">
                    <li className="nav_bar_li"><a onClick={() => props.setActiveTab(props.tabs.index)}>Início</a></li>
                    <li className="nav_bar_li"><a onClick={() => props.setActiveTab(props.tabs.about)}>Sobre nós</a></li>
                    <li className="nav_bar_li"><a onClick={() => props.setActiveTab(props.tabs.team)}>Equipe</a></li>
                    <li className="nav_bar_li"><a onClick={() => props.setActiveTab(props.tabs.projects)}>Projetos</a></li>
                    <li className="nav_bar_li"><a onClick={() => props.setActiveTab(props.tabs.contact)}>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}