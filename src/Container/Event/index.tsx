import React, { useEffect, useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, CircularProgress } from '@material-ui/core';
import { getEventLIST } from '../../Services/getEventList';
import { store } from '../../Store';
import EventList from '../../Components/EventList';
import SelectedList from '../../Components/SelectedList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
    loader: {
      width: '100%',
      height: '100%',
      position: 'fixed',
      backgroundColor: 'white',
      opacity: '0.7',
      zIndex: 999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    hide: {
      display: 'none',
    },
    buildGuide: {
      backgroundColor: '#f2f2f2',
      position: 'relative',
      left: '24px',
    },
  })
);

export default function Event() {
  const classes = useStyles();
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const loading = state.loading;
  const endPoint: string = 'http://www.mocky.io/v2/59f08692310000b4130e9f71';
  const eventList = state?.eventList;
  useEffect(() => {
    (async (endPoint: string) => {
      const response: any = await getEventLIST(endPoint);
      dispatch({ type: 'UPDATE_EVENT_LIST', value: response.data });
      dispatch({ type: 'UPDATE_LOADING_STATE', value: false });
    })(endPoint);
  }, [dispatch, endPoint]);

  const getSelectedList = (events: any) => {
    const selectedList = events.reduce((initVal: any, event: any) => {
      if (event.markets.length) {
        const markets = event.markets;
        markets.map((market: any) => {
          market.selections.map((selection: any) => {
            if (selection.add) {
              initVal.push(selection);
            }
            return selection;
          });
          return market;
        });
      }
      return initVal;
    }, []);
    return selectedList;
  };

  const removeSelection = (name: any) => {
    const newEventList = eventList.reduce((initVal: any, events: any) => {
      const newMarkets = events.markets.map((market: any) => {
        const newSelections = market.selections.reduce((initialValue: any, selection: any) => {
          if (selection.name === name) {
            selection.add = false;
          }
          initialValue.push(selection);
          return initialValue;
        }, []);
        return { ...market, selections: newSelections };
      });
      events.markets = [...newMarkets];
      initVal.push(events);
      return initVal;
    }, []);
    dispatch({ type: 'UPDATE_EVENT_LIST', value: newEventList });
  };

  const selectedList = eventList && getSelectedList(eventList);

  return (
    <React.Fragment>
      <div className={loading ? classes.loader : classes.hide}>
        <CircularProgress />
      </div>
      <Container className={classes.root} maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div>
              <h2>Event </h2>
            </div>
            {eventList && <EventList eventList={eventList} />}
          </Grid>
          <Grid item xs={4} className={classes.buildGuide}>
            {selectedList && <SelectedList removeSelection={removeSelection} selectedList={selectedList} />}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
