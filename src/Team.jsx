import Card from './Card'
import CaioUehara from './assets/equipe_files/Caio Uehara Martins.jpeg'
import VictorKikuti from './assets/equipe_files/Victor Kikuti.jpeg'
import GabrielCarvalho from './assets/equipe_files/Gabriel Carvalho Silva.jpeg'
import ErickOda from './assets/equipe_files/Erick Oda Coulter.jpeg'
import Cadu from './assets/equipe_files/Cadu.jpg'
import AnnaBeatriz from './assets/equipe_files/Anna Beatriz.jpg'
import FelipeMiotto from './assets/equipe_files/Felipe Miotto.jpg'
import FilipeAccorsi from './assets/equipe_files/Filipe Accorsi.jpg'
import IgorPio from './assets/equipe_files/Igor Pio.jpg'
import IsabelaSuemi from './assets/equipe_files/Isabela Suemi.jpg'
import JoaoRoberto from './assets/equipe_files/João Roberto.jpg'
import NataliaPrata from './assets/equipe_files/NatáliaPrata.jpeg'
import RodrigoLigeiro from './assets/equipe_files/Rodrigo Ligeiro.jpg'
import TaianeLopes from './assets/equipe_files/Taiane Lopes.jpg'
import TaysaGuiral from './assets/equipe_files/Taysa Guiral.jpg'

export default function () {
    return (
        <div className="equipe_content">
            <div className="equipe_title"><h1>Nossa equipe</h1></div>

            <div className="equipe_container">

                <Card src={CaioUehara} alt="Caio Uehara" name="Caio Uehara" role="Presidente, Diretor Financeiro"/>
                <Card src={VictorKikuti} alt="Victor Kikuti" name="Victor Kikuti" role="Vice-Presidente"/>
                <Card src={GabrielCarvalho} alt="Gabriel Carvalho" name="Gabriel Carvalho" role="Diretor de Projetos, Diretor Comercial"/>
                <Card src={ErickOda} alt="Erick Oda Coulter" name="Erick Oda Coulter" role="Diretor Marketing"/>
                <Card src={Cadu} alt="Carlos Eduardo Santos" name="Carlos Eduardo Santos" role="Diretor Recursos Humanos"/>
                <Card src={AnnaBeatriz} alt="Anna Beatriz" name="Anna Beatriz" role="Membro Projetos e Marketing"/>
                <Card src={FelipeMiotto} alt="Felipe Miotto" name="Felipe Miotto" role="Membro Projetos e Financeiro"/>
                <Card src={FilipeAccorsi} alt="Filipe Accorsi" name="Filipe Accorsi" role="Membro Projetos e Comercial"/>
                <Card src={IgorPio} alt="Igor Pio" name="Igor Pio" role="Membro de Projetos e Recursos Humanos"/>
                <Card src={IsabelaSuemi} alt="Isabela Suemi Aoki" name="Isabela Suemi Aoki" role="Membro Projetos e Marketing"/>
                <Card src={JoaoRoberto} alt="João Roberto Neto" name="João Roberto Neto" role="Membro Projetos e Marketing"/>
                <Card src={NataliaPrata} alt="Natália Prata" name="Natália Prata" role="Membro Projetos e Marketing"/>
                <Card src={RodrigoLigeiro} alt="Rodrigo Ligeiro" name="Rodrigo Ligeiro" role="Membro Projetos"/>
                <Card src={TaianeLopes} alt="Taiane Lopes" name="Taiane Lopes" role="Membro Projetos e Recursos Humanos"/>
                <Card src={TaysaGuiral} alt="Taysa Guiral" name="Taysa Guiral" role="Membro Projetos e Marketing"/>
            </div>
        </div>
    )
}