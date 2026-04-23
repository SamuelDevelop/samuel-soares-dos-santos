import { StaticImageData } from "next/image";

class Tecnologia {
    private imagem : StaticImageData | string;
    private nome : string;
    private alt : string;

    constructor(imagem : StaticImageData | string, nome : string, alt : string){
        this.imagem = imagem;
        this.nome = nome;
        this.alt = alt;
    }

    public getImagem(){
        return this.imagem;
    }

    public getNome(){
        return this.nome;
    }

    public getAlt(){
        return this.alt;
    }
}

export default Tecnologia;