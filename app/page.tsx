import PageSection from "@/components/PageSection/PageSection";
import imagem from "../assets/images/scssCode.jpg";
import ApresentationSection from "@/components/ApresentationSection/ApresentationSection";
import ApresentationOptions from "@/components/ApresentationOptions/ApresentationOptions";

export default function Home() {
  return (
    <>
      <ApresentationSection />
      <PageSection 
        children = {
          <>
            <h1>Um pouco sobre mim</h1>
            <p>Conheça Agora Tudo que aprendi para que eu pudesse estar aqui e fazendo esses projetos</p>
          </>
        } 
        colorClass="bgDark"
        image={imagem}
        toLeft={false}
      />
      <PageSection 
        children = {
          <>
            <h1>Meus Projetos</h1>
            <p>Conheça Agora Tudo que eu desenvolvi até aqui</p>
          </>
        } 
        colorClass="bgWhite"
        image={imagem}
        toLeft={true}
      />
      <PageSection 
        children = {
          <>
            <h1>Minha Prateleira de Habilidades</h1>
            <p>Conheça Agora Tudo que aprendi para que eu pudesse estar aqui e fazendo esses projetos</p>
          </>
        } 
        colorClass="bgDark"
        image={imagem}
        toLeft={false}
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
        image={imagem}
        toLeft={true}
      />      
    </>
    

  );
}
