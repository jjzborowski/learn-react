import React, { useState } from 'react';

export const ModalContext = React.createContext({
    isModalDisplay: false,
    modalContent: null,
    showModal: () => {},
    hideModal: () => {},
});

const ModalContextProvider = ({ children }) => {
    const [providerIsDisplay, setProviderIsDisplay] = useState(false);
    const [providerContent, setProviderContent] = useState(null);

    const providerShowModal = content => {
        setProviderContent(content);
        setProviderIsDisplay(true);
    };

    const providerHideModal = () => {
        setProviderIsDisplay(false);
    };

    return (
        <ModalContext.Provider
            value={ {
                isModalDisplay: providerIsDisplay,
                modalContent: providerContent,
                showModal: providerShowModal,
                hideModal: providerHideModal
            } }
        >
            { children }
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
