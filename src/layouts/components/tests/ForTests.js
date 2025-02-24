import React from 'react';
import HoverPopover from "../../../components/popover/HoverPopover";

const ForTests = () => {
    return (
        <div>
            <HoverPopover>
                <div style={{margin: "20px"}}>
                    <h4>popover on hover</h4>
                </div>
            </HoverPopover>
        </div>
    );
};

export default ForTests;