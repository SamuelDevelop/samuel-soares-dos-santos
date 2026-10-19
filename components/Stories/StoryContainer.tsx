 'use client'

import styles from "./Stories.module.css"
import Story from "./Story";
import { useRevealOnView } from "../useRevealOnView";

function StoryContainer(){
    const { ref, isVisible } = useRevealOnView({ threshold: 0.22 });

    return(
        <section className={`${styles.storyContainer} ${isVisible ? styles.revealed : styles.hidden}`} ref={ref}>
            <Story></Story>
        </section>
    )
}

export default StoryContainer;