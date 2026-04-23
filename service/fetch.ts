import Tecnologia from "@/classes/Tecnologia";

export async function fetchJSONData(fileName : string){
    console.log(`/data/${fileName}.json`);
    const data = await fetch(`/data/${fileName}.json`);

    return data.json();
}

type Skill = {
    image: string;
    nome: string;
    alt: string;
};

export async function getPinnedSkills(){
    const data = await fetchJSONData("principais_habilidades");
    const skills: Skill[] = data.pinnedSkills;
    const tecnologiasArray : Tecnologia[] = [];

    skills.forEach(skill => {
        const newTecnologia = new Tecnologia(skill.image, skill.nome, skill.alt);
        tecnologiasArray.push(newTecnologia);
    });    

    return tecnologiasArray;
}

export async function getTecnologies(tier: number) {
    const data = await fetchJSONData("minhas_tecnologias");
    const tecnologiasArray: Tecnologia[] = [];

    let key = "";

    switch (tier) {
        case 0:
            key = "tier0";
            break;
        case 1:
            key = "tier1";
            break;
        case 2:
            key = "tier2";
            break;
        case 3:
            key = "tier3";
            break;
        case 4:
            key = "tier4";
            break;
        default:
            return [];
    }

    const tecnologias = data[key] || [];

    for (const tec of tecnologias) {
        tecnologiasArray.push(
            new Tecnologia(tec.image, tec.nome, tec.alt)
        );
    }

    return tecnologiasArray;
}

export async function getTecImage(nome: string) {
    const data = await fetchJSONData("imagens_tecnologias");

    const key = nome
        .toLowerCase()
        .replace(/\s+/g, "_");

    return data[key] ?? null;
}