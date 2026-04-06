import { ReactNode } from "react";
import styles from "./ParagraphLined.module.css"

type Props = {
  children: React.ReactNode
}

function VerticalParagraphLined({ children }: Props){
    return (
        <div className={styles.verticalParagraphLined}>
            {children}
        </div>
    )
}

export default VerticalParagraphLined;