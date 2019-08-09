import React from 'react';
import { connect } from 'react-redux';

import { alertDisplayMessageAction } from 'src/actions/alert.actions';

const Home = ({
    alertDisplayMessage,
}) => {
    const onClickHandler = () => alertDisplayMessage('info', 'test message');
    const onClickHandler2 = () => alertDisplayMessage('warning', 'test message 2');
    return (
        <div>
            <h1>Home</h1>
            <button onClick={onClickHandler}>test alert</button>
            <button onClick={onClickHandler2}>test alert</button>
        </div>
    );
};

Home.propTypes = {};

const mapDispatchToProps = {
    alertDisplayMessage: alertDisplayMessageAction,
};

export default connect(null, mapDispatchToProps)(Home);