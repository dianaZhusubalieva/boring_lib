import React, { CSSProperties, ReactNode } from "react";

interface Props extends CSSProperties {
    children?: ReactNode;
}

const UiBox: React.FC<Props> = ({ children, ...rest }) => {
    const boxStyle = { ...rest };

    return <div style={boxStyle}>{children}</div>;
};

export default UiBox;
