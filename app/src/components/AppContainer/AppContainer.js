import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Alert from 'src/components/Alert/Alert';
import Routes from 'src/components/Routes/Routes';
import { getAlertDisplay } from 'src/selectors/alert.selectors';

const AppContainer = ({
    display,
}) => {
    return (
        <div>
            { display && <Alert /> }
            <Routes />
        </div>
    );
};

AppContainer.propTypes = {
    display: PropTypes.bool,
};

const mapStateToProps = state => ({
    display: getAlertDisplay(state),
});

export default connect(mapStateToProps)(AppContainer);