import { StaticImageData } from "next/image";

class Tecnologia {
    private imagem : StaticImageData;
    private nome : string;
    private alt : string;

    constructor(imagem : StaticImageData, nome : string, alt : string){
        this.imagem = imagem;
        this.nome = nome;
        this.alt = alt;
    }

    public getImagem(){
        return this.imagem;
    }

    public getnome(){
        return this.nome;
    }

    public getAlt(){
        return this.alt;
    }
}