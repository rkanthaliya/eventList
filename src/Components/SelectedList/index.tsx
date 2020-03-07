import React from 'react';
import EventView from '../EventView';

function EventList(props: any) {
  return (
    <React.Fragment>
      {props.selectedList.map((list: any, index: number) => (
        <div>
          <div>{list.name}</div>
          <div>{list.price}</div>
          <button onClick={() => props.removeSelection(list.name)}>Delete</button>
        </div>
      ))}
    </React.Fragment>
  );
}

export default React.memo(EventList);
