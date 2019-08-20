import React from 'react';
import { connect } from 'react-redux';
import { alertDisplayAction } from 'src/actions/alert.actions';
import Button from 'src/ui/Button/Button';

const Home = ({ alertDisplayMessage }) => {
    const onClickHandler = () => alertDisplayMessage('info', 'test message');
    const onClickHandler2 = () => alertDisplayMessage('warning', 'test message 2');
    return (
        <div>
            <h1>Home</h1>
            <Button
                onClickHandler={ onClickHandler }
                label="test alert"
            />
            <Button
                onClickHandler={ onClickHandler2 }
                label="test alert"
            />
        </div>
    );
};

const mapDispatchToProps = {
    alertDisplayMessage: alertDisplayAction,
};

export default connect(null, mapDispatchToProps)(Home);