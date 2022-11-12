import { Folder } from 'components';

import classes from './Child.module.scss';

const Child = ({ child }) => {
  return (
    <div className={classes.child}>
      {child.map((d, idx) => {
        return <Folder key={idx} name={d} />;
      })}
    </div>
  );
};

export default Child;
