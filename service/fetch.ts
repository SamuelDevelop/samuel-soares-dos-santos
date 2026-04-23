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
