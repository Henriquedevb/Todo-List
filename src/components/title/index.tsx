import { ITitleProps } from "../../utils/interfaces"
import styles from './style.module.css'

export default function TitleHeading({ children }: ITitleProps) {
    return (
        <h1 className={styles.titleHeading}>{children}</h1>
    )
}