import { useEffect, useRef } from "react";
import logo from "./assets/img/Logo_OCTOBIT_Logo_Branco_VERTICAL.png"
import logoWhite from "./assets/img/Logo_OCTOBIT_Logo_Preto_VERTICAL.png"

export default function (props) {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;

        if(props.activeTab !== "inicio"){
            header.style.backgroundColor = props.darkMode ? '#080808' : '#b6b5b4';
        } else{
            header.style.backgroundColor = 'transparent';
        }
    }, [props.activeTab, props.darkMode]);

    return (
        <header className="header" id="nav_bar" ref={headerRef}>
            <a onClick={() => props.setActiveTab(props.tabs.index)} className="nav_logo_a"><img src={props.darkMode === true ? logo : logoWhite} alt="Logo vertical da Octobit Jr." className="nav_logo"/></a>

            <nav className="nav_bar">
                <ul className="nav_bar_desktop">
                    <li className="nav_bar_li" style={{color: props.darkMode ? '#dbdad9' : '#080808'}}>
                        <a style={{color: props.darkMode ? '#dbdad9' : '#080808'}} onClick={function() {props.setActiveTab(props.tabs.index); window.scrollTo({ top: 0, behavior: "smooth" });}}>Início</a>
                    </li>
                    <li className="nav_bar_li" style={{color: props.darkMode ? '#dbdad9' : '#080808'}}>
                        <a style={{color: props.darkMode ? '#dbdad9' : '#080808'}} onClick={function() {props.setActiveTab(props.tabs.about); window.scrollTo({ top: 0, behavior: "smooth" });}}>Sobre nós</a>
                    </li>
                    <li className="nav_bar_li" style={{color: props.darkMode ? '#dbdad9' : '#080808'}}>
                        <a style={{color: props.darkMode ? '#dbdad9' : '#080808'}} onClick={function() {props.setActiveTab(props.tabs.team); window.scrollTo({ top: 0, behavior: "smooth" });}}>Equipe</a>
                    </li>
                    <li className="nav_bar_li" style={{color: props.darkMode ? '#dbdad9' : '#080808'}}>
                        <a style={{color: props.darkMode ? '#dbdad9' : '#080808'}} onClick={function() {props.setActiveTab(props.tabs.projects); window.scrollTo({ top: 0, behavior: "smooth" });}}>Projetos</a>
                    </li>
                    <li className="nav_bar_li" style={{color: props.darkMode ? '#dbdad9' : '#080808'}}>
                        <a style={{color: props.darkMode ? '#dbdad9' : '#080808'}} onClick={function() {props.setActiveTab(props.tabs.contact); window.scrollTo({ top: 0, behavior: "smooth" });}}>Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}