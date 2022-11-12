import clsx from 'clsx';

import { ToggleFolderButton } from 'components';
import { Show } from 'hoc';

import classes from './FolderName.module.scss';

const FolderName = ({ isExpandable, isExpanded, name, onClick }) => {
  return (
    <div
      className={clsx({
        [classes.folderName]: isExpandable,
        [classes.nonExpandable]: !isExpandable
      })}
      onClick={() => isExpandable && onClick()}
    >
      <Show when={isExpandable}>
        <ToggleFolderButton isExpanded={isExpanded} />
      </Show>
      <div>{name}</div>
    </div>
  );
};

export default FolderName;
