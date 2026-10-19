'use client'
import Tecnologia from "@/classes/Tecnologia";
import Footer from "@/components/Footer/Footer";
import PageSection from "@/components/PageSection/PageSection";
import Technologies from "@/components/Technologies/Technologies";
import { getTecnologies } from "@/service/fetch";
import { useEffect, useMemo, useState } from "react";

function SkillsResume(){
    const [frontend, setFrontend] = useState<Tecnologia[]>([]);
    const [backend, setBackend] = useState<Tecnologia[]>([]);
    const [tools, setTools] = useState<Tecnologia[]>([]);
    const [os, setOs] = useState<Tecnologia[]>([]);
    const [basics, setBasics] = useState<Tecnologia[]>([]);

    const allTecnologias = useMemo(() => {
        return [
            ...frontend,
            ...backend,
            ...tools,
            ...os,
            ...basics
        ];
    }, [frontend, backend, tools, os, basics]);
    
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
                    <h1>Stack completo até o momento</h1>
                    <Technologies 
                        tecnologias={allTecnologias}
                    />
                    <p>Uma visão consolidada de tudo que tenho estudado e usado, agrupado por área.</p>

                </>
                } 
                centered
                toLeft={false}
            />
        
            <Footer /> 
        </>
    )
}

export default SkillsResume;