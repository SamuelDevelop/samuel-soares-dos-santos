import Footer from "@/components/Footer/Footer";
import PageSection from "@/components/PageSection/PageSection";
import Technologies from "@/components/Technologies/Technologies";



function Skills(){
    
    return (
        <>
            <PageSection 
                children = {
                <>
                    <h1>Quando falamos em habilidades...</h1>
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinha da históra de como achegamos até ali.</p>
                </>
                } 
                colorClass="bgDark"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 1:</h1>
                    
                    <p>São as tecnologias que mais utilizei durante meu processo de aprendizado, que julgo possuir um maior conhecimento comparadas as demais e muito dificilmente deixarei de usar.</p>
                </>
                } 
                colorClass="bgDark"
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 2:</h1>
                    
                    <p>São as tecnologias que mais estou utilizando recentemente, que mais tenho dedicado esforços, que pretendo trabalhar fututamente mas que ainda estou em processo de aprendizagem.</p>
                </>
                } 
                colorClass="bgPurple"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 3:</h1>
                    
                    <p>São tecnologias que utilizo ou já utilizei em alguns contextos, seja para aprendizado, seja para algum projeto, mas sem nenhuma grande pretenção futura aparente.</p>
                </>
                } 
                colorClass="bgDark"
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 4:</h1>
                   
                    <p>São tecnologias que eu aprendi, já tive que estudar e até fazer projetos, mas que já faz algum tempo que não utilizei mais.</p>
                </>
                } 
                colorClass="bgPurple"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Outras Tecnologias:</h1>
                    
                </>
                } 
                colorClass="bgWhite"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>...E pronto para conhecer o novo!</h1>
                    
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinha da históra de como achegamos até ali.</p>
                </>
                } 
                colorClass="bgWhite"
                toLeft={false}
            />
            

            <Footer 
                bgColor="bgWhite"      
            /> 
        </>
    )
}

export default Skills;