import React from "react";
interface IProps {
    pointer?: boolean;
    radius?: string;
    color?: string;
    endWidth?: string;
    endHeight?: string;
    animationEasing?: string;
    animationDuration?: number;
    onClick?: () => void;
    children: string | JSX.Element | JSX.Element[] | React.ReactChild | React.ReactChildren | React.ReactChildren[];
}
declare const Ripple: ({ pointer, radius, color, endWidth, endHeight, animationEasing, animationDuration, onClick, children, }: IProps) => JSX.Element;
export default Ripple;
//# sourceMappingURL=index.d.ts.map