'use client'
import Tecnologia from "@/classes/Tecnologia";
import Footer from "@/components/Footer/Footer";
import PageSection from "@/components/PageSection/PageSection";
import Technologies from "@/components/Technologies/Technologies";
import { getTecnologies } from "@/service/fetch";
import { useEffect, useMemo, useState } from "react";

function SkillsResume(){
    const [tier0, setTier0] = useState<Tecnologia[]>([]);
    const [tier1, setTier1] = useState<Tecnologia[]>([]);
    const [tier2, setTier2] = useState<Tecnologia[]>([]);
    const [tier3, setTier3] = useState<Tecnologia[]>([]);
    const [tier4, setTier4] = useState<Tecnologia[]>([]);

    const allTecnologias = useMemo(() => {
        return [
            ...tier1,
            ...tier2,
            ...tier3,
            ...tier4,
            ...tier0
        ];
    }, [tier1, tier2, tier3, tier4, tier0]);
    
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
                    <h1>Tecnologias até o momento:</h1>
                    <Technologies 
                        tecnologias={allTecnologias}
                    />

                </>
                } 
                colorClass="bgDark"
                toLeft={false}
            />
        
            <Footer 
                bgColor="bgwhite"      
            /> 
        </>
    )
}

export default SkillsResume;