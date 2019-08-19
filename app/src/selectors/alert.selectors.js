export const getAlert = state => state.alert;
export const getAlertDisplay = state => getAlert(state).display;
export const getAlertContent = state => getAlert(state).content;
export const getAlertType = state => getAlert(state).type;