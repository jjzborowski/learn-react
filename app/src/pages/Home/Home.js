import React, { useContext } from 'react';
import Button from 'src/ui/Button/Button';
import { AlertContext } from 'src/context/alert.context';

const Home = () => {
    const {showAlert} = useContext(AlertContext);
    const onClickHandler = () => showAlert('info', 'test message');
    const onClickHandler2 = () => showAlert('warning', 'test message 2');
    return (
        <>
            <h1>Home</h1>
            <Button
                onClickHandler={ onClickHandler }
                label="test alert"
            />
            <Button
                onClickHandler={ onClickHandler2 }
                label="test alert"
            />
        </>
    );
};

export default Home;