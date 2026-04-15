import TecnologiasProps from "@/types/typeTecnologias";
import Image from "next/image";

function Technologies({imagens, nomes} : TecnologiasProps){
    return(
        <section>
            {
                imagens.map((imagem) => (
                    <Image 
                        key={imagem.src} 
                        src={imagem}
                        alt={"tecnologia"}
                    />
                ))
            }
        </section>
    )
}

export default Technologies;