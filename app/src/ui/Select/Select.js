import {
    faSortDown,
    faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styles from './Select.scss';

const Select = ({ options, selected, onSelectHandler }) => {
    const [ open, setOpen ] = useState(false);

    return (
        <div className={ styles.select }>
            <div>
                <div>
                    { options[selected] ? options[selected].label : 'placeholder' }
                </div>
                <div onClick={ () => setOpen(!open) }>
                    { open ? <FontAwesomeIcon icon={ faSortDown } /> : <FontAwesomeIcon icon={ faSortUp } /> }
                </div>
            </div>
            { open && <div className={ styles.options }>
                { options.map((option, index) => (
                    <div
                        key={ index }
                        onClick={ () => {
                            onSelectHandler(index);
                            setOpen(false);
                        } }
                    >
                        { option.label }
                    </div>
                )) }
            </div> }
        </div>
    );
};

export default Select;