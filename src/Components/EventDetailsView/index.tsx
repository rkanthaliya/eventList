import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    boxContainer: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    box: {
      border: '1px solid',
      padding: '15px',
    },
    boxBg: {
      backgroundColor: 'green',
      border: '1px solid',
      padding: '15px',
    },
  })
);

function EventDetailsView(props: any) {
  const classes = useStyles();
  return (
    <div>
      <h4>{props.market.name}</h4>
      <div className={classes.boxContainer}>
        {props.market?.selections.map((selection: any, index: number) => (
          <div
            className={selection.add ? classes.boxBg : classes.box}
            onClick={() => props.addSelection(selection.name)}
            key={index}
          >
            {selection.name}
            {selection.price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(EventDetailsView);
