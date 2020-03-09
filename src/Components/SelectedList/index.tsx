import React from 'react';

function EventList(props: any) {
  return (
    <React.Fragment>
      {props.selectedList.map((list: any, index: number) => (
        <div key={index}>
          <div>{list.name}</div>
          <div>{list.price}</div>
          <button onClick={() => props.removeSelection(list.name)}>Delete</button>
        </div>
      ))}
    </React.Fragment>
  );
}

export default React.memo(EventList);
