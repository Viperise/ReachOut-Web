import { CSSProperties, ReactNode } from "react";

interface BoxProps {
    children: ReactNode;
    className: string;
    style?: CSSProperties;
}

const Box = ({children, className, style}: BoxProps) => {
    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}

export default Box;