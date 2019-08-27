import React, { useState } from 'react';

export const ModalContext = React.createContext({
    isModalDisplay: false,
    modalTitle: '',
    modalContent: null,
    modalCallback: () => {},
    showModal: () => {},
    hideModal: () => {},
});

const ModalContextProvider = ({ children }) => {
    const [ providerIsDisplay, setProviderIsDisplay ] = useState(false);
    const [ providerTitle, setProviderTitle ] = useState('');
    const [ providerContent, setProviderContent ] = useState(null);
    const [ providerCallback, setProviderCallback ] = useState(null);

    const providerShowModal = (title, content, callback) => {
        setProviderTitle(title);
        setProviderContent(content);
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
