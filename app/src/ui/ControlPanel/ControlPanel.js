import React from 'react';
import styles from './ControlPanel.scss';

const ControlPanel = ({ children }) => (
    <div className={ styles['control-panel'] }>
        { children }
    </div>
);

export default ControlPanel;