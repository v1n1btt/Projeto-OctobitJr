import { useEffect } from "react";
import Fsolar from "./assets/projetos_files/fsolar.png";
import CadastroFsolar from "./assets/projetos_files/cadastro_FSolar.png";
import ImoveisFsolar from "./assets/projetos_files/Imoveis_FSolar.png";
import CadastroFsolar2 from "./assets/projetos_files/Cadastro_FSolar_2.png";
import Abba1 from "./assets/projetos_files/ABBA_1.png";
import Abba2 from "./assets/projetos_files/ABBA_2.png";
import Abba3 from "./assets/projetos_files/ABBA_3.png"

export default function () {
    useEffect(() => {
        document.querySelectorAll('.projeto_slider').forEach(slider => {
            let currentSlide = 0;
            const list = slider.querySelector('.projeto_list');
            const slides = slider.querySelectorAll('.slide');
            const prevButton = slider.querySelector('.prev');
            const nextButton = slider.querySelector('.next');
            const dots = slider.querySelectorAll('.projeto_dots li');

            function updateSlide() {
                const slideWidth = slider.clientWidth;
                list.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[currentSlide]) {
                    dots[currentSlide].classList.add('active');
                }
            }

            prevButton.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateSlide();
            });

            nextButton.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlide();
            });

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentSlide = index;
                    updateSlide();
                });
            });

            window.addEventListener('resize', updateSlide);

            updateSlide(currentSlide);
        });
    }, []);

    return (
        <div className="projetos_content">
            <div className="projetos_title"><h1>Nossos projetos</h1></div>

            <div className="projetos_container">
                <div className="fsolar">
                    <div className="projeto_slider" id="slider1">
                        <div className="projeto_list">
                            <img src={Fsolar} alt="Página inicial FSolar" className="slide"/>
                            <img src={CadastroFsolar} alt="Página de perfil FSolar" className="slide"/>
                            <img src={ImoveisFsolar} alt="Página de imóveis FSolar" className="slide"/>
                            <img src={CadastroFsolar2} alt="Página de cadastro FSolar" className="slide"/>
                        </div>
                        <button className="prev">❮</button>
                        <button className="next">❯</button>
                        <ul className="projeto_dots">
                            <li className=""></li>
                            <li className=""></li>
                            <li className="active"></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="projeto_text">
                        <h2>Website FSolar</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et quam eu lacus tristique imperdiet.</p>
                    </div>
                </div>
                <div className="abba">
                    <div className="projeto_slider" id="slider2">
                        <div className="projeto_list">
                            <img src={Abba1} alt="Home ABBA" className="slide"/>
                            <img src={Abba2} alt="Notícias ABBA" className="slide"/>
                            <img src={Abba3} alt="Acadêmicos ABBA" className="slide"/>
                        </div>
                        <button className="prev">❮</button>
                        <button className="next">❯</button>
                        <ul className="projeto_dots">
                            <li className=""></li>
                            <li className=""></li>
                            <li className="active"></li>
                        </ul>
                    </div>
                    <div className="projeto_text">
                        <h2>Website ABBA</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et quam eu lacus tristique imperdiet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}