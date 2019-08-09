export const getAlert = state => state.alert;
export const getAlertDisplay = state => getAlert(state).display;
export const getAlertMessage = state => getAlert(state).message;
export const getAlertType = state => getAlert(state).type;