export const updateLoadingState = (globalState: any, value: any) => {
  return {
    ...globalState,
    loading: value,
  };
};

export const updateEventList = (globalState: any, value: any) => {
  return {
    ...globalState,
    eventList: [...value],
  };
};
