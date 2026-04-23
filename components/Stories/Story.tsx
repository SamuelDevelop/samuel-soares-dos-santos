'use client'
import { useEffect, useState } from "react";
import styles from "./Stories.module.css";
import Image from "next/image";

function Story() {
    const stories = [
        {
            titulo: "🔥 Tecnologia mais usada:",
            descricao: "Typescript vem sendo a tecnologia que eu mais utilizei nos ultimos dias, principalmente por conta do react. Logo atrás vem o Java ♨️.",
            imagem: "/technologies/typescript.svg"
        },
        {
            titulo: "E o Back?",
            descricao: "Tenho focado bastante em Java com Spring Boot para construção de APIs e trabalhar com backend.",
            imagem: "/technologies/spring-boot.svg"
        },
        {
            titulo: "🐍 Explorando Python:",
            descricao: "Python tem sido útil para tanto testes rápidos quanto para alguns projetos em que eu trabalho com Flask.",
            imagem: "/technologies/python.svg"
        }
    ];

    const duration = 5000;

    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0);

        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const percent = (elapsed / duration) * 100;

            if (percent >= 100) {
                setIndex((prev) => (prev + 1) % stories.length);
            } else {
                setProgress(percent);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [index]);

    const story = stories[index];

    return (
        <section className={styles.story}>
            <div className={styles.progressBar}>
                <div
                    className={styles.progress}
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className={styles.storybody}>
                <h1>{story.titulo}</h1>

                <Image
                    src={story.imagem}
                    alt={story.titulo}
                    width={100}
                    height={100}
                />

                <p>{story.descricao}</p>

                <button>Voltar</button>
            </div>
        </section>
    );
}

export default Story;