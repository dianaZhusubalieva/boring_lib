import React from "react";
import "./styles.scss";

const Animations = () => {
    return (
        <>
            <div className={"animations"}>
                <h1 className="animated-title">Animated title</h1>
            </div>
            <>
                <div id={"target"} />
                <div className={"animated_box"} />
            </>
        </>
    );
};

export default Animations;
