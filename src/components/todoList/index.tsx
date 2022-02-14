import { ITodoListProps } from "../../utils/interfaces"

export default function TodoList({ className, children }: ITodoListProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}