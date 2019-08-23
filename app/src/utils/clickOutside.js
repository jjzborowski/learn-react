import PropTypes from 'prop-types';
import React, {
    useEffect,
    useRef,
} from 'react';

const useClickOutside = (elementReference, clickOutsideHandler) => {
    const eventHandler = (event) => {
        if (elementReference.current && !elementReference.current.contains(event.target)) {
            clickOutsideHandler();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', eventHandler);
        return () => {
            document.removeEventListener('mousedown', eventHandler);
        };
    });
};

const ClickOutside = props => {
    const elementReference = useRef(null);
    useClickOutside(elementReference, props.clickOutsideHandler);

    return <div ref={ elementReference }>{ props.children }</div>;
};

ClickOutside.propTypes = {
    children: PropTypes.element.isRequired,
    clickOutsideHandler: PropTypes.func.isRequired,
};

export default ClickOutside;
