import styles from "./Stories.module.css"
import Story from "./Story";

function StoryContainer(){
    return(
        <section className={`${styles.storyContainer} bgDark`}>
            <Story></Story>
        </section>
    )
}

export default StoryContainer;