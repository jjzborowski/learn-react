import React, { useState } from 'react';

export const ModalContext = React.createContext({
    // isModalDisplay: false,
    // modalTitle: '',
    // modalContent: null,
    // modalConfirmButtonLabel: '',
    // modalCancelButtonLabel: '',
    // modalCallback: () => {},
    // showModal: () => {},
    // hideModal: () => {},
});

const ModalContextProvider = ({ children }) => {
    const [ providerIsDisplay, setProviderIsDisplay ] = useState(false);
    const [ providerTitle, setProviderTitle ] = useState('');
    const [ providerContent, setProviderContent ] = useState(null);
    const [ providerCallback, setProviderCallback ] = useState(null);
    const [ providerModalConfirmButtonLabel, setProviderModalConfirmButtonLabel ] = useState(null);
    const [ providerModalCancelButtonLabel, setProviderModalCancelButtonLabel ] = useState(null);

    const providerShowModal = ({ title, content, confirmButtonLabel, cancelButtonLabel, callback }) => {
        setProviderTitle(title);
        setProviderContent(content);
        setProviderModalConfirmButtonLabel(confirmButtonLabel || 'Save');
        setProviderModalCancelButtonLabel(cancelButtonLabel || 'Cancel');
        setProviderCallback(() => callback);
        setProviderIsDisplay(true);
    };

    const providerHideModal = () => {
        setProviderIsDisplay(false);
    };

    return (
        <ModalContext.Provider
            value={ {
                isModalDisplay: providerIsDisplay,
                modalTitle: providerTitle,
                modalContent: providerContent,
                modalConfirmButtonLabel: providerModalConfirmButtonLabel,
                modalCancelButtonLabel: providerModalCancelButtonLabel,
                modalCallback: providerCallback,
                showModal: providerShowModal,
                hideModal: providerHideModal,
            } }
        >
            { children }
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
