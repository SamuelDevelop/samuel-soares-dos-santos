import { ProjetoProps } from "@/types/typeProjeto";

export class Projeto {
    public nome: string;
    public descricao: string;
    public tecnologias: string[];
    public linkRepo: string;
    public temTeste: boolean;
    public linkTeste: string | null;
    public aproxData: string;
    public temImagem: boolean;
    public imagemLink: string | null;
    public tipo: "game" | "site" | "other";

    constructor(props: ProjetoProps) {
        this.nome = props.nome;
        this.descricao = props.descricao;
        this.tecnologias = props.tecnologias;
        this.linkRepo = props.linkRepo;
        this.temTeste = props.temTeste ?? false;
        this.linkTeste = props.linkTeste ?? null;
        this.aproxData = props.aproxData;
        this.temImagem = props.temImagem ?? false;
        this.imagemLink = props.imagemLink ?? null;
        this.tipo = props.tipo;
    }
}