import Tecnologia from "@/classes/Tecnologia";

import tecHTML from "/technologies/html.svg"
import tecCSS from "/technologies/css.svg"
import tecJS from "/technologies/javascript.svg"
import tecJava from "/technologies/java.svg"

import tecTypescript from "/technologies/typescript.svg"
import tecSpring from "/technologies/spring-boot.svg"
import tecReact from "/technologies/react.svg"
import tecPG from "/technologies/pgsql.svg"

import tecPython from "/technologies/python.svg"
import tecMySql from "/technologies/mysql.svg"
import tecFlask from "/technologies/flask.svg"

import tecPhp from "/technologies/php.svg"

import tecWindows from "/technologies/windows.svg"
import tecLinux from "/technologies/linux-mint.svg"
import tecTrello from "/technologies/trello.svg"
import tecCanva from "/technologies/canva.svg"

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