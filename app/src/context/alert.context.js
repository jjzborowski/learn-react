import React, { useState } from 'react';

export const AlertContext = React.createContext({
    isAlertDisplay: false,
    alertType: 'info',
    alertContent: null,
    showAlert: () => {},
    hideAlert: () => {},
});

const AlertContextProvider = ({ children }) => {
    const [providerIsDisplay, setProviderIsDisplay] = useState(false);
    const [providerType, setProviderType] = useState(null);
    const [providerMessage, setProviderMessage] = useState(null);

    const providerShowAlert = (type, message) => {
        setProviderType(type);
        setProviderMessage(message);
        setProviderIsDisplay(true);
    };

    const providerHideAlert = () => {
        setProviderIsDisplay(false);
    };

    return (
        <AlertContext.Provider
            value={ {
                isAlertDisplay: providerIsDisplay,
                alertType: providerType,
                alertContent: providerMessage,
                showAlert: providerShowAlert,
                hideAlert: providerHideAlert
            } }
        >
            { children }
        </AlertContext.Provider>
    );
};

export default AlertContextProvider;
