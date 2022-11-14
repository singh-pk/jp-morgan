import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { FolderName } from 'components';

import { createMatrix, getFolderMeta, setKeyVal } from 'utils';

import { data } from 'assets';

import classes from './Grid.module.scss';

const _memoizeExpand = {};

const Grid = () => {
  const [matrix, setMatrix] = useState(createMatrix());

  function handleClick(isExpanded, name) {
    _memoizeExpand[name] = !isExpanded;
    populateGrid();
  }

  function populateGrid() {
    const newMatrix = createMatrix();
    let row = 1;

    newMatrix[0][0].styles = classes.header;

    (function setGridValue(name = 'root', col = 0) {
      const { isExpandable, child } = getFolderMeta(data[name]);

      const isExpanded = _memoizeExpand[name] ?? true;

      if (!newMatrix[0][col].value) {
        if (name === 'root') {
          setKeyVal(newMatrix, 0, col, name);
        } else {
          setKeyVal(newMatrix, 0, col, `Dir ${col}`);
        }
      }

      setKeyVal(
        newMatrix,
        row,
        col,
        <FolderName
          isExpandable={isExpandable}
          isExpanded={isExpanded}
          name={name}
          onClick={() => handleClick(isExpanded, name)}
        />
      );

      if (isExpandable && (_memoizeExpand[name] ?? true)) {
        child.forEach(d => setGridValue(d, col + 1));
      } else {
        row += 1;
      }
    })();

    setMatrix(newMatrix);
  }

  useEffect(() => {
    populateGrid();
  }, []);

  return (
    <div className={classes.grid}>
      {matrix.map((row, i) => {
        return (
          <div key={i} className={classes.row}>
            {row.map((cell, j) => (
              <div key={j} className={clsx(classes.cell, cell.styles)}>
                {cell.value}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
