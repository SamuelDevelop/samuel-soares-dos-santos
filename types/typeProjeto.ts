export type ProjetoProps = {
    nome: string;
    descricao: string;
    tecnologias: string[];
    linkRepo: string;
    temTeste?: boolean;
    linkTeste?: string | null;
    aproxData: string;
    temImagem?: boolean;
    imagemLink?: string | null;
    tipo: "game" | "site" | "other";
};