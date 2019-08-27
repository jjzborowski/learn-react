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

const ClickOutside = ({className, clickOutsideHandler, children}) => {
    const elementReference = useRef(null);
    useClickOutside(elementReference, clickOutsideHandler);

    return <div className={className} ref={ elementReference }>{ children }</div>;
};

ClickOutside.propTypes = {
    children: PropTypes.element.isRequired,
    clickOutsideHandler: PropTypes.func.isRequired,
};

export default ClickOutside;
