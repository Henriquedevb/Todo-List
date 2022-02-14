import { IItemProps } from "../../utils/interfaces"

export default function TodoItem({ children, className, onClick }: IItemProps) {
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    )
}