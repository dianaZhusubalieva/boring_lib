import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import ForTests from "ForTests";

const ComponentPreviews = () => {
    return (
      <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/ForTests">
          <ForTests />
        </ComponentPreview>
      </Previews>
    );
};

export default ComponentPreviews;