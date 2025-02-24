import React, { ReactNode, useRef } from "react";
import "./styles.scss";
import clsx from "clsx";
import useOutsideClick from "hooks/hooks";
import MyTransition from "components/MyTransition/MyTransition";

interface Props {
    content: ReactNode;
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
    className?: string;
}

const SelectPopover = ({ content, children, setIsOpen, isOpen, className }: Props) => {
    const ref = useRef(null);
    useOutsideClick(ref, () => setIsOpen(false));

    return (
        <div className="popover-container" ref={ref}>
            <div
                className="popover-trigger"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {children}
            </div>
            {isOpen && (
                <div className={"transition-wrapper"}>
                    <MyTransition in={isOpen}>
                        <div className={clsx("popover-content", className)}>{content}</div>
                    </MyTransition>
                </div>
            )}
        </div>
    );
};

export default SelectPopover;
