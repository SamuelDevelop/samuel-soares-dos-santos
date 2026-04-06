import PageSection from "./PageSection";
import imagem from "../../assets/images/scssCode.jpg";
import hello from "../../assets/images/hello.gif";
import ApresentationOptions from "../ApresentationOptions/ApresentationOptions";
import VerticalParagraphLined from "../ParagraphLined/VerticalParagraphLined";
import HorizontalParagraphLined from "../ParagraphLined/HorizontalParagraphLined";

function HomePageSections(){
    return (
        <>
            <PageSection 
                children = {
                <>
                    <h1>Olá Mundo! 👋</h1>
                    
                    <p>Eu Sou o Samuel,</p>
                    <p>Tenho 17 anos e para mim é incrivel essa possibilidade de estar aqui, num site, interagindo com vocês.</p>
                    <p>Eu diria que agora é um ótimo momento para me apresentar para aqueles que não me conhecem e acho que é exatamente isso que vou fazer.</p>
                    
                </>
                } 
                colorClass="bgDark"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Correndo na pista...</h1>
                    
                    <p>Nasci em Minas Gerais, estado do Brasil, em 2008</p>
                    <p>E desde pequeno fui apaixonado pelo mundo da tecnologia.</p>
                    <p>
                        Foi então que em 2024, após passar em processo seletivo para estudar no CEFET-MG,
                        fazendo o curso de técnico em informática que este gosto aflorou e transformou em uma
                        oportunidade de desenvolver habilidades para entrar profissionalmente nesse mercado.
                    </p>    
                    <button>Saiba Mais...</button>
                </>
                } 
                colorClass="bgDark"
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>Meus Projetos</h1>
                    <p>Conheça Agora Tudo que eu desenvolvi até aqui.</p>
                </>
                } 
                colorClass="bgWhite"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Minha Prateleira de Habilidades</h1>
                    <p>Conheça Agora Tudo que aprendi para que eu pudesse estar aqui e fazendo esses projetos</p>
                </>
                } 
                colorClass="bgDark"
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>O que você pode Encontrar Aqui?</h1>
                    <p>Comece a explorar:</p>
                    <ApresentationOptions />
                    
                </>
                } 
                colorClass="bgWhite"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Meu nome é Samuel...</h1>
                    <p>...e eu preciso de um textinho muito bacana pra colocar nessa parte.</p>                    
                </>
                } 
                colorClass="bgWhite"
                toLeft={true}
            />
        </>
    )
}

export default HomePageSections;