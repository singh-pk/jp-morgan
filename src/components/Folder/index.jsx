import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Show } from 'hoc';
import { Child, ToggleFolderButton } from 'components';

import { data } from 'assets';

import classes from './Folder.module.scss';

const _memoizeExpand = {};

const Folder = ({ name }) => {
  const [expand, setExpand] = useState(_memoizeExpand[name] ?? true);

  const { type, child } = data[name] ?? {};

  const isFolder = type === 'folder';
  const isExpandable = isFolder && !!child?.length;

  useEffect(() => {
    if (_memoizeExpand[name] !== expand) {
      _memoizeExpand[name] = expand;
    }
  }, [expand]);

  return (
    <div className={clsx({ [classes.folder]: isFolder })}>
      <div
        className={clsx({ [classes.name]: isExpandable })}
        onClick={() => isExpandable && setExpand(d => !d)}
      >
        <Show when={isExpandable}>
          <ToggleFolderButton expand={expand} />
        </Show>
        <div>{name}</div>
      </div>

      <Show when={expand && isExpandable}>
        <Child child={child} />
      </Show>
    </div>
  );
};

export default Folder;
