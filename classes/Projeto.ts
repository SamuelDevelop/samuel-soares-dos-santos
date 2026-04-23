
export class Projeto{
    public nome : string;
    public descrição:  string;
    public tecnologia : string;
    public linkRepo  : string;
    public temTeste : boolean;
    public linkTeste : string | null;
    public aproxData : string;
    public temImagem: boolean;
    public imagemLink : string | null; 

    constructor(nome : string, descrição:  string, tecnologia : string, linkRepo  : string, temTeste : boolean, linkTeste : string | null, aproxData : string,temImagem: boolean,  imagemLink : string | null) {
        this.nome = nome;
        this.descrição = descrição;
        this.tecnologia = tecnologia;
        this.linkRepo = linkRepo;
        this.temTeste = temTeste;
        this.linkTeste = linkTeste;
        this.aproxData = aproxData;
        this.temImagem = temImagem;
        this.imagemLink = imagemLink;
    }
}