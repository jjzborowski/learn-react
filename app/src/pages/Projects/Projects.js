import React, {
    useContext,
    useState,
} from 'react';
import { connect } from 'react-redux';
import ProjectsList from 'src/components/ProjectsList/ProjectsList';
import ProjectsTiles from 'src/components/ProjectsTiles/ProjectsTiles';
import {
    displayAmountOptions,
    projectsOrderOptions,
    viewModeOptions,
} from 'src/constants/viewMode';
import { ModalContext } from 'src/context/modal.context';
import { getProjectsData } from 'src/selectors/projects.selectors';
import Button from 'src/ui/Button/Button';
import Pagination from 'src/ui/Pagination/Pagination';
import Select from 'src/ui/Select/Select';
import compare from 'src/utils/compare';
import styles from './Projects.scss';

const Projects = ({ projects }) => {
    const { showModal } = useContext(ModalContext);
    const [ orderBySelected, setOrderBySelected ] = useState(0);
    const [ viewModeSelected, setViewModeSelected ] = useState(0);
    const [ displayAmountSelected, setDisplayAmountSelected ] = useState(0);
    const [ pageSelected, setPageSelected ] = useState(0);

    const indexStart = pageSelected * displayAmountOptions[displayAmountSelected].value;
    const indexEnd = pageSelected
        * displayAmountOptions[displayAmountSelected].value
        + displayAmountOptions[displayAmountSelected].value;
    const projectsPerPage = projects.sort((a, b) => compare(a, b, projectsOrderOptions[orderBySelected].value))
        .slice(indexStart, indexEnd);
    console.log(projectsPerPage);
    console.log(indexStart);
    console.log(indexEnd);
    const viewModeTemplates = {
        list: <ProjectsList projects={ projectsPerPage } />,
        tiles: <ProjectsTiles projects={ projectsPerPage } />,
    };

    const onShowModalClickHandler = () => showModal('ModalAddProject');

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
        <div className={ styles.projects }>
            <div>
                <Select
                    options={ projectsOrderOptions }
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
            </div>
            <Pagination
                onClickHandler={ onPageSelectHandler }
                listLength={ projects.length }
                perPage={ displayAmountOptions[displayAmountSelected].value }
            />
            { viewModeTemplates[viewModeOptions[viewModeSelected].value] }
            <Button
                onClickHandler={ onShowModalClickHandler }
                label="Add new project"
            />
        </div>
    );
};

const mapStateToProps = state => (
    {
        projects: Object.values(getProjectsData(state)),
    }
);

export default connect(mapStateToProps)(Projects);
