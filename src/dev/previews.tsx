import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import ForTests from "ForTests";
import Animations from "styling/animations/Animations";

const ComponentPreviews = () => {
    return (
      <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/ForTests">
          <ForTests />
        </ComponentPreview>
        <ComponentPreview path="/Animations">
          <Animations />
        </ComponentPreview>
      </Previews>
    );
};

export default ComponentPreviews;