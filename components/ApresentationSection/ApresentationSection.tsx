'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import imagem from "../../assets/images/selfImage.jpg";
import styles from "./ApresentationSection.module.css"
import ApresentationOptions from "../ApresentationOptions/ApresentationOptions";

import { useRouter } from "next/navigation";
import { useTheme } from "../Theme/ThemeProvider";

function ApresentationSection(){
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const activeTheme = mounted ? theme : "dark";
    
    return (
        <section className={styles.apresentationSection}>
            <Image
                src={imagem}    
                alt="minha foto"
                className={styles.selfImage}
                onClick={() => router.push("/stories")}        
            />

            <div className={styles.about}>
                <h1>Samuel Soares</h1>
                <p>Estudando: FullStack Developer</p>
            </div>

            <div className={styles.themeSwitcher}>
                <span>Visual do site</span>
                <div className={styles.themeSwitcherButtons}>
                    <button
                        type="button"
                        className={activeTheme === "dark" ? styles.activeThemeButton : styles.themeButton}
                        onClick={() => setTheme("dark")}
                        aria-pressed={activeTheme === "dark"}
                    >
                        Escuro
                    </button>
                    <button
                        type="button"
                        className={activeTheme === "light" ? styles.activeThemeButton : styles.themeButton}
                        onClick={() => setTheme("light")}
                        aria-pressed={activeTheme === "light"}
                    >
                        Branco
                    </button>
                </div>
            </div>
            
            <ApresentationOptions />
        </section>
    )
}

export default ApresentationSection;