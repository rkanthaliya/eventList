import React from 'react';
import EventView from '../EventView';

function EventList(props: any) {
  return (
    <React.Fragment>
      {props.eventList.map((events: any, index: number) =>
        events?.markets.length ? <EventView events={events} key={index} /> : null
      )}
    </React.Fragment>
  );
}

export default React.memo(EventList);
