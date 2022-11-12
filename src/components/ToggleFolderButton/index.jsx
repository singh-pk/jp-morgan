import { WithCondition } from 'hoc';

import classes from './ToggleFolderButton.module.scss';

const ToggleFolderButton = ({ isExpanded }) => {
  return (
    <div className={classes.toggleFolderButton}>
      <WithCondition when={!isExpanded} then='&#10133;' or='&#10134;' />
    </div>
  );
};

export default ToggleFolderButton;
