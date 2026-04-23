'use client'
import Tecnologia from "@/classes/Tecnologia";
import Footer from "@/components/Footer/Footer";
import PageSection from "@/components/PageSection/PageSection";
import Technologies from "@/components/Technologies/Technologies";
import { getTecnologies } from "@/service/fetch";
import { useEffect, useState } from "react";

function Skills(){
    const [tier0, setTier0] = useState<Tecnologia[]>([]);
    const [tier1, setTier1] = useState<Tecnologia[]>([]);
    const [tier2, setTier2] = useState<Tecnologia[]>([]);
    const [tier3, setTier3] = useState<Tecnologia[]>([]);
    const [tier4, setTier4] = useState<Tecnologia[]>([]);
    
    useEffect(() => {
        async function loadTecnologias() {
            const t0 = await getTecnologies(0);
            const t1 = await getTecnologies(1);
            const t2 = await getTecnologies(2);
            const t3 = await getTecnologies(3);
            const t4 = await getTecnologies(4);

            setTier0(t0);
            setTier1(t1);
            setTier2(t2);
            setTier3(t3);
            setTier4(t4);
        }

        loadTecnologias();
    }, []);
    
    return (
        <>
            <PageSection 
                children = {
                <>
                    <h1>Quando falamos em habilidades...</h1>
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinho da históra de como chegamos até ali.</p>
                </>
                } 
                colorClass="bgDark"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 1:</h1>
                    <Technologies 
                        tecnologias={tier1}
                    />
                    <p>
                        São as tecnologias que mais utilizei ao longo do meu processo de aprendizado. 
                        Considero que tenho maior domínio sobre elas em comparação às demais e é pouco 
                        provável que deixem de fazer parte do meu dia a dia.
                    </p>
                </>
                } 
                colorClass="bgDark"
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 2:</h1>
                    <Technologies 
                        tecnologias={tier2}
                    />
                    <p>
                        São as tecnologias que tenho utilizado com mais frequência recentemente
                        e às quais venho dedicando maior esforço. Pretendo trabalhar com elas no futuro, 
                        embora eu ainda esteja em processo de aprendizado, buscando aprofundar meus 
                        conhecimentos por meio de projetos práticos, estudos e acompanhamento do mercado.
                    </p>
                </>
                } 
                colorClass="bgPurple"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 3:</h1>
                    <Technologies 
                        tecnologias={tier3}
                    />
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
                    <Technologies
                        tecnologias={tier4}
                    />
                    <p>São tecnologias que eu aprendi, já tive que estudar e até fazer projetos, mas que já faz algum tempo que não utilizei mais.</p>
                </>
                } 
                colorClass="bgPurple"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <Technologies 
                        title="Outras Tecnologias:"
                        tecnologias={tier0}
                    />
                </>
                } 
                colorClass="bgPurple"
                toLeft={true}
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