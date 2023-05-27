import React from 'react';
import useStyles from './CoreSmallBtnStyle';
import {Button} from '@material-ui/core';

const CoreSmallBtn = ({text}) => {
    const classes = useStyles();
  return (
    <Button className={classes.coreSmallBtn}>{text}</Button>
  );
}

export default CoreSmallBtn;