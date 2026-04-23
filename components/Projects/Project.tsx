import { Projeto } from "@/classes/Projeto";
import Image from "next/image";

function Project({ projeto }: { projeto: Projeto }){
    const limiteCaracteresDesc = 20;

    return (
        <section>
            {
                projeto.temImagem ?
                <Image 
                    src={projeto.imagemLink || "/project-image.svg"}
                    alt="Imagem do Projeto"
                    width={1000}
                    height={1000}
                />
                :
                <Image 
                    src={"/project-image.svg"}
                    alt="Imagem do Projeto"
                    width={1000}
                    height={1000}
                />
            }
            <p>{projeto.nome}</p>
            <p>{projeto.descricao.slice(0, limiteCaracteresDesc)}</p>
        </section>
    )
}

export default Project;