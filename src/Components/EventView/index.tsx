import React, { useContext } from 'react';
import EventDetailsView from '../EventDetailsView';
import { store } from '../../Store';

function EventView(props: any) {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const addSelection = (name: string) => {
    const markets = props.events?.markets;
    const newMarkets = markets.map((market: any) => {
      const newSelections = market.selections.reduce((initialValue: any, selection: any) => {
        if (selection.name === name) {
          selection.add = true;
        }
        initialValue.push(selection);
        return initialValue;
      }, []);
      return { ...market, selections: newSelections };
    });

    const newEventList = state.eventList.reduce((initialValue: any, events: any) => {
      if (events.id === props.events.id) {
        events.markets = [...newMarkets];
      }
      initialValue.push(events);
      return initialValue;
    }, []);
    dispatch({ type: 'UPDATE_EVENT_LIST', value: newEventList });
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>{props.events.name}</div>
      <hr />
      {props.events?.markets.map((market: any, index: number) => (
        <React.Fragment key={index}>
          <EventDetailsView market={market} addSelection={addSelection} />
          <hr />
          <br style={{ marginTop: '20px' }} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default React.memo(EventView);
