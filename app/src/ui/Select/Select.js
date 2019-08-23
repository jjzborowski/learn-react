import React, { useState } from 'react';
import ClickOutside from 'src/utils/clickOutside';
import styles from './Select.scss';

const Select = ({ options, selected, onSelectHandler }) => {
    const [ open, setOpen ] = useState(false);

    return (
        <ClickOutside clickOutsideHandler={ () => setOpen(false) }>
            <div className={ styles.select }>
                <div className={ styles.container }>
                    <div className={ styles.selected }>
                        { options[selected] ? options[selected].label : 'placeholder' }
                    </div>
                    <div
                        className={ styles.icon }
                        onClick={ () => setOpen(!open) }
                    >
                        { open ? <i className="fa fa-chevron-down" /> : <i className="fa fa-chevron-up" /> }
                    </div>
                </div>
                { open && <div className={ styles.options }>
                    { Object.values(options)
                        .map((option, index) => (
                            <div
                                key={ index }
                                className={ styles.option }
                                onClick={ () => {
                                    onSelectHandler(option.value);
                                    setOpen(false);
                                } }
                            >
                                { option.label }
                            </div>
                        )) }
                </div> }
            </div>
        </ClickOutside>
    );
};

export default Select;