import Tecnologia from "@/classes/Tecnologia";

import tecHTML from "@/assets/images/technologies/html.svg"
import tecCSS from "@/assets/images/technologies/css.svg"
import tecJS from "@/assets/images/technologies/javascript.svg"
import tecJava from "@/assets/images/technologies/java.svg"

import tecTypescript from "@/assets/images/technologies/typescript.svg"
import tecSpring from "@/assets/images/technologies/spring-boot.svg"
import tecReact from "@/assets/images/technologies/react.svg"
import tecPG from "@/assets/images/technologies/pgsql.svg"

import tecPython from "@/assets/images/technologies/python.svg"
import tecMySql from "@/assets/images/technologies/mysql.svg"
import tecFlask from "@/assets/images/technologies/flask.svg"

import tecPhp from "@/assets/images/technologies/php.svg"

import tecWindows from "@/assets/images/technologies/windows.svg"
import tecLinux from "@/assets/images/technologies/linux-mint.svg"
import tecTrello from "@/assets/images/technologies/trello.svg"
import tecCanva from "@/assets/images/technologies/canva.svg"

export const tecnologiasTier1 = [
    new Tecnologia(tecHTML, "html", "imagem html"),
    new Tecnologia(tecCSS, "css", "imagem css"),
    new Tecnologia(tecJS, "Javascript", "imagem Javascript"),
    new Tecnologia(tecJava, "Java", "imagem Java"),
];

export const tecnologiasTier2 = [
    new Tecnologia(tecTypescript, "Typescript", "imagem Typescript"),
    new Tecnologia(tecSpring, "Spring", "imagem Spring Boot"),
    new Tecnologia(tecReact, "Spring", "imagem Spring Boot"),
    new Tecnologia(tecPG, "Postgres", "imagem Postgres"),
];

export const tecnologiasTier3 = [
    new Tecnologia(tecPython, "Python", "imagem Python"),
    new Tecnologia(tecMySql, "MySql", "imagem MySql"),
    new Tecnologia(tecFlask, "Flask", "imagem Flask"),
];

export const tecnologiasTier4 = [
    new Tecnologia(tecPhp, "PHP", "imagem php"),
];

export const outrasTecnologias = [
    new Tecnologia(tecWindows, "PHP", "imagem php"),
    new Tecnologia(tecLinux, "PHP", "imagem php"),
    new Tecnologia(tecTrello, "PHP", "imagem php"),
    new Tecnologia(tecCanva, "PHP", "imagem php"),
]