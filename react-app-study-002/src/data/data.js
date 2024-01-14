import componentsImage from '../assets/images/components.png';
import jsxImage from '../assets/images/jsx-ui.png';
import propsImage from '../assets/images/config.png';
import stateImage from '../assets/images/state-mgmt.png';

import CoreConceptModel from "../models/CoreConceptModel";

const CORE_CONCEPTS = [
  new CoreConceptModel(
    'Components',
    componentsImage,
    'The core UI building block - compose the user interface by combining multiple components.'
  ),
  new CoreConceptModel(
    'JSX',
    jsxImage,
    'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
  ),
  new CoreConceptModel(
    'Props',
    propsImage,
    'Make components configurable (and therefore reusable) by passing input data to them.'
  ),
  new CoreConceptModel(
    'State',
    stateImage,
    'React-managed data which, when changed, causes the component to re-render & the UI to update.'
  ),
];

export { CORE_CONCEPTS };