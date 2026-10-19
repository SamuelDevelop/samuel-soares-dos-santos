'use client'
import Tecnologia from "@/classes/Tecnologia";
import Footer from "@/components/Footer/Footer";
import PageSection from "@/components/PageSection/PageSection";
import Technologies from "@/components/Technologies/Technologies";
import { getTecnologies } from "@/service/fetch";
import { useEffect, useState } from "react";

function Skills(){
    const [frontend, setFrontend] = useState<Tecnologia[]>([]);
    const [backend, setBackend] = useState<Tecnologia[]>([]);
    const [tools, setTools] = useState<Tecnologia[]>([]);
    const [os, setOs] = useState<Tecnologia[]>([]);
    const [basics, setBasics] = useState<Tecnologia[]>([]);
    
    useEffect(() => {
        async function loadTecnologias() {
            const frontendStack = await getTecnologies(0);
            const backendStack = await getTecnologies(1);
            const toolsStack = await getTecnologies(2);
            const osStack = await getTecnologies(3);
            const basicsStack = await getTecnologies(4);

            setFrontend(frontendStack);
            setBackend(backendStack);
            setTools(toolsStack);
            setOs(osStack);
            setBasics(basicsStack);
        }

        loadTecnologias();
    }, []);
    
    return (
        <>
            <PageSection 
                children = {
                <>
                    <h1>Meu stack por área</h1>
                    <p>Organizei minhas tecnologias por contexto de uso, para ficar mais fácil entender onde cada uma entra no meu dia a dia.</p>
                    <p>As seções abaixo separam frontend, backend, ferramentas, sistemas operacionais e conhecimentos básicos.</p>
                </>
                } 
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Frontend</h1>
                    <Technologies 
                        tecnologias={frontend}
                    />
                    <p>
                        Tecnologias que uso para construir interfaces, componentes e experiências visuais.
                    </p>
                </>
                } 
                centered
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>Backend</h1>
                    <Technologies 
                        tecnologias={backend}
                    />
                    <p>
                        Tecnologias ligadas à lógica de negócio, APIs, banco de dados e execução do lado do servidor.
                    </p>
                </>
                } 
                centered
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Ferramentas</h1>
                    <Technologies 
                        tecnologias={tools}
                    />
                    <p>Ferramentas que me ajudam a organizar, versionar, publicar e desenvolver projetos.</p>
                </>
                } 
                centered
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>Sistemas Operacionais</h1>
                    <Technologies
                        tecnologias={os}
                    />
                    <p>Ambientes que uso para estudar, desenvolver e manter meu setup de trabalho.</p>
                </>
                } 
                centered
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Conhecimentos Básicos</h1>
                    <Technologies 
                        tecnologias={basics}
                    />
                    <p>Ferramentas e linguagens que conheço em um nível mais introdutório e que ainda estou consolidando.</p>
                </>
                } 
                centered
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>...e isso é o stack atual</h1>
                    <p>Essas categorias mostram como organizo meu conhecimento hoje e onde estou concentrando mais estudo e prática.</p>
                </>
                } 
                toLeft={false}
            />
            

            <Footer /> 
        </>
    )
}

export default Skills;