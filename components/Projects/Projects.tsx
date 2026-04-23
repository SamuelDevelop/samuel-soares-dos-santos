import { Projeto } from "@/classes/Projeto";
import Project from "./Project";

function Projects({ projetos }: { projetos: Projeto[] }){
    return(
        <section>
            {
                projetos.map(
                    (projeto, i) => (
                        <Project 
                            key={i}
                            projeto={projeto}
                        />
                    )
                )
            }
        </section>
    )
}

export default Projects;