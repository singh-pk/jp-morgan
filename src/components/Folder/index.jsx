import { useEffect, useState } from 'react';

import { Show } from 'hoc';
import { Child, FolderName } from 'components';

import { getFolderMeta } from 'utils';

import { data } from 'assets';

import classes from './Folder.module.scss';

const _memoizeExpand = {};

const Folder = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState(_memoizeExpand[name] ?? true);

  const { isExpandable, child } = getFolderMeta(data[name]);

  useEffect(() => {
    if (_memoizeExpand[name] !== isExpanded) {
      _memoizeExpand[name] = isExpanded;
    }
  }, [isExpanded]);

  return (
    <div className={classes.container}>
      <FolderName
        isExpandable={isExpandable}
        isExpanded={isExpanded}
        name={name}
        onClick={() => setIsExpanded(d => !d)}
      />

      <Show when={isExpanded && isExpandable}>
        <Child child={child} />
      </Show>
    </div>
  );
};

export default Folder;
