import whiteOctobitLogo from "./assets/img/Logo_OCTOBIT_Logo_Branco_SIMBOLO.png"

export default function () {
    return (
        <section id="sobre">        
            <div className="sobre_content">
                <div className="sobre_body">
                    <div className="sobre_title"><h1>Sobre nós</h1></div>
                    
                    <p id="sobre_text">
                        A OctoBit Jr. é uma empresa júnior fundada em 2023 e composta majoritariamente por alunos do
                        curso de Bacharelado em Ciência da Computação, da USP Ribeirão Preto. Seu trabalho é realizar
                        serviços sem fins lucrativos, a fim de promover a capacitação técnica e profisional de seus membros
                        com aplicações práticas dos conhecimentos adquiridos durante a graduação. Alguns dos objetivos da Octobit Jr.:
                    </p>
                    <ul id="objetivos">
                        <li>A capacitação profissional de seus integrantes;</li>
                        <li>Fornecer aos membros uma oportunidade para entenderem como o mercado de trabalho de computação funciona;</li>
                        <li>Solucionar problemas no mercado de tecnologia;</li>
                        <li>Contribuir com empresas de pequeno ou grande porte, microempreendedores ou qualquer entidade que
                            necessite de uma solução tecnológica para um problema encontrado.</li>
                    </ul>
                </div>
            </div>
            <div id="sobre_logo">
                <img src={whiteOctobitLogo} alt="Simbolo branco da Octobit Jr." />
            </div>
        </section>
    )
}