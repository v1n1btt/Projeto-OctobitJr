import { useState, useEffect, useRef } from "react"
import instagramLogo from "./assets/img/icon-instagram-white.png"
import instagramLogoBlack from "./assets/img/icon-instagram-black.png"
import linkedinLogo from "./assets/img/icon-linkedin-white.png"
import linkedinLogoBlack from "./assets/img/icon-linkedin-black.png"

export default function (props) {
    const contactRef = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const contact = contactRef.current;

        contact.style.background = props.darkMode ? '#080808' : '#dbdad9';
    }, [props.darkMode]);

    return (
        <div className="contato_content" ref={contactRef}>
            <div className="contato_title"><h1>Fale conosco</h1></div>

            <div className="contato_container" style={{color: props.darkMode ? '#dbdad9' : '#080808'}}>
                <p>Preencha o formulário abaixo e entraremos em contato.</p>
                <div className="contato_box">
                    <form className="contato_form" style={{background: props.darkMode ? '#2b2b2b' : '#d4d4d4'}}>
                        <div className="text_input" id="name">
                            <label htmlFor="name" className="contact_text">Nome:</label>
                            <input type="text" name="fullname" required className="contact_input_name" placeholder="Seu nome completo" style={{background: props.darkMode ? '#444444' : '#bbbbbb', color: props.darkMode ? '#ffffff' : '#000000'}}/>
                        </div>
                        <div className="text_input" id="email">
                            <label htmlFor="email" className="contact_text">E-mail:</label>
                            <input type="email" name="email" required className="contact_input_email" placeholder="email@exemplo.com" style={{background: props.darkMode ? '#444444' : '#bbbbbb', color: props.darkMode ? '#ffffff' : '#000000'}}/>
                        </div>
                        <div className="text_input" id="phone">
                            <label htmlFor="phone" className="contact_text">Telefone:</label>
                            <input type="tel" name="phone" required className="contact_input_phone" placeholder="(__) _____-____" style={{background: props.darkMode ? '#444444' : '#bbbbbb', color: props.darkMode ? '#ffffff' : '#000000'}}/>
                        </div>
                        <div className="text_input" id="subject">
                            <label htmlFor="subject" className="contact_text">Assunto:</label>
                            <textarea name="subject" rows="5" required placeholder="Como podemos te ajudar?" style={{background: props.darkMode ? '#444444' : '#bbbbbb', color: props.darkMode ? '#ffffff' : '#000000'}}/>
                        </div>
                        <br/>
                        <input type="submit" value="ENVIAR" id="contact_button" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{background: hovered ? 'linear-gradient(90deg, #4e12f9, #761bef)' : (props.darkMode ? '#444444' : '#bbbbbb'), color: props.darkMode ? '#ffffff' : '#000000'}}/>
                    </form> 
                </div>

                <div className="endereco">
                    <div className="contato_endereco">
                        <div className="contato_endereco_title"><h1 id="endereco_title">Endereço</h1></div>

                        <p>Av. Bandeirantes, 3900 - Monte Alegre</p>
                        <p>Ribeirão Preto - SP</p>
                        <p>CEP: 14040-901</p>
                    </div>

                    <div className="maps_iframe"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.639340176023!2d-47.85041272390852!3d-21.166746580517323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bdc299d0b773%3A0xb5bd25d961a34cd!2sDepartamento%20de%20Computa%C3%A7%C3%A3o%20e%20Matem%C3%A1tica%20da%20FFCLRP-USP!5e0!3m2!1spt-BR!2sbr!4v1748042071815!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                </div>

                <div className="contato_social_title"><h1 id="social_title">Acesse também nossas redes sociais:</h1></div>

                <div className="social_media">
                    <ul className="social_media_container">
                        <li className="contact___container___icon">
                            <a className="contact___container___icon___instagram" target="_blank" href="https://www.instagram.com/octobitjr?igsh=MWp5M2t0bnJlajRyeQ=="><img src={props.darkMode ? instagramLogo : instagramLogoBlack}/></a>
                        </li>
                        
                        <li className="contact___container___icon">
                            <a className="contact___container___icon___linkedin" target="_blank" href="https://www.linkedin.com/company/octobit-empresa-j%C3%BAnior-usp/"><img src={props.darkMode ? linkedinLogo : linkedinLogoBlack}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}