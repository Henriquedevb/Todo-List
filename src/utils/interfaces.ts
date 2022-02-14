import { ReactNode } from "react";

export interface ITitleProps {
    children: ReactNode;
}

export interface IItemProps {
    onClick: () => void;
    children: ReactNode;
    className: string;
}

export interface ITodoListProps {
    className: string;
    children: ReactNode;
}
