import { WithCondition } from 'hoc';

import classes from './ToggleFolderButton.module.scss';

const ToggleFolderButton = ({ expand }) => {
  return (
    <div className={classes.toggleFolderButton}>
      <WithCondition when={!expand} then='&#10133;' or='&#10134;' />
    </div>
  );
};

export default ToggleFolderButton;
