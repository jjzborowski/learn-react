import React, {
    useContext,
    useState,
} from 'react';
import { connect } from 'react-redux';
import PartsList from 'src/components/PartsList/PartsList';
import PartsTiles from 'src/components/PartsTiles/PartsTiles';
import {
    displayAmountOptions,
    inventoryOrderOptions,
    viewModeOptions,
} from 'src/constants/viewMode';
import { ModalContext } from 'src/context/modal.context';
import { getPartsData } from 'src/redux/selectors/parts.selectors';
import Button from 'src/ui/Button/Button';
import ControlPanel from 'src/ui/ControlPanel/ControlPanel';
import Pagination from 'src/ui/Pagination/Pagination';
import Select from 'src/ui/Select/Select';
import compare from 'src/utils/compare';
import styles from './Inventory.scss';

const Inventory = ({ parts }) => {
    const { showModal } = useContext(ModalContext);
    const [ orderBySelected, setOrderBySelected ] = useState('info.name:desc');
    const [ viewModeSelected, setViewModeSelected ] = useState('list');
    const [ displayAmountSelected, setDisplayAmountSelected ] = useState(10);
    const [ pageSelected, setPageSelected ] = useState(0);
    const order = inventoryOrderOptions[orderBySelected].value;
    const displayAmount = displayAmountOptions[displayAmountSelected].value;
    const viewMode = viewModeOptions[viewModeSelected].value;
    const indexStart = pageSelected * displayAmount;
    const indexEnd = pageSelected * displayAmount + displayAmount;
    const partsPerPage = parts
        .sort((a, b) => compare(a, b, order))
        .slice(indexStart, indexEnd);
    const viewModeTemplates = {
        list: <PartsList parts={ partsPerPage } />,
        tiles: <PartsTiles parts={ partsPerPage } />,
    };

    const onShowModalClickHandler = () => showModal('ModalAddPart');

    const onOrderSelectHandler = index => {
        setOrderBySelected(index);
    };

    const onViewModeSelectHandler = index => {
        setViewModeSelected(index);
    };

    const onDisplayAmountSelectHandler = index => {
        setDisplayAmountSelected(index);
    };

    const onPageSelectHandler = index => {
        setPageSelected(index);
    };

    return (
        <div className={ styles.inventory }>
            <ControlPanel>
                <Select
                    options={ inventoryOrderOptions }
                    selected={ orderBySelected }
                    onSelectHandler={ onOrderSelectHandler }
                />
                <Select
                    options={ viewModeOptions }
                    selected={ viewModeSelected }
                    onSelectHandler={ onViewModeSelectHandler }
                />
                <Select
                    options={ displayAmountOptions }
                    selected={ displayAmountSelected }
                    onSelectHandler={ onDisplayAmountSelectHandler }
                />
                <Button
                    onClickHandler={ onShowModalClickHandler }
                    label="Add new element"
                />
            </ControlPanel>
            <Pagination
                onClickHandler={ onPageSelectHandler }
                listLength={ parts.length }
                perPage={ displayAmount }
            />
            { viewModeTemplates[viewMode] }
        </div>
    );
};

const mapStateToProps = state => (
    {
        parts: Object.values(getPartsData(state)),
    }
);

export default connect(mapStateToProps)(Inventory);