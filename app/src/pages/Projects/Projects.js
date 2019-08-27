import React, {
    useContext,
    useEffect,
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
import { getProjectsData } from 'src/redux/selectors/projects.selectors';
import Button from 'src/ui/Button/Button';
import ControlPanel from 'src/ui/ControlPanel/ControlPanel';
import Pagination from 'src/ui/Pagination/Pagination';
import Select from 'src/ui/Select/Select';
import compare from 'src/utils/compare';
import ProjectAddModal from 'src/components/ProjectAddModal/ProjectAddModal';
import {
    addProjectAction,
    removeProjectAction,
} from 'src/redux/actions/projects.actions';
import styles from './Projects.scss';

const Projects = ({ projects, addProject, removeProject }) => {
    const { showModal } = useContext(ModalContext);
    const [ orderBySelected, setOrderBySelected ] = useState('info.added:desc');
    const [ viewModeSelected, setViewModeSelected ] = useState('list');
    const [ displayAmountSelected, setDisplayAmountSelected ] = useState(10);
    const [ pageSelected, setPageSelected ] = useState(0);
    const order = projectsOrderOptions[orderBySelected].value;
    const displayAmount = displayAmountOptions[displayAmountSelected].value;
    const viewMode = viewModeOptions[viewModeSelected].value;
    const indexStart = pageSelected * displayAmount;
    const indexEnd = pageSelected * displayAmount + displayAmount;
    const projectsPerPage = projects
        .sort((a, b) => compare(a, b, order))
        .slice(indexStart, indexEnd);
    const viewModeTemplates = {
        list: <ProjectsList projects={ projectsPerPage } onRemoveHandler={removeProject} />,
        tiles: <ProjectsTiles projects={ projectsPerPage } onRemoveHandler={() => {}} />,
    };

    useEffect(() => {
        onPageSelectHandler(0);
    }, [ displayAmountSelected ]);

    const onShowModalClickHandler = () => showModal('Add new project', <ProjectAddModal />, addProject);

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
            <ControlPanel>
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
                <Button
                    onClickHandler={ onShowModalClickHandler }
                    label="Add new project"
                />
            </ControlPanel>
            <Pagination
                onClickHandler={ onPageSelectHandler }
                listLength={ projects.length }
                perPage={ displayAmount }
            />
            { viewModeTemplates[viewMode] }
        </div>
    );
};

const mapStateToProps = state => (
    {
        projects: Object.values(getProjectsData(state)),
    }
);

const mapDispatchToProps = {
    addProject: addProjectAction,
    removeProject: removeProjectAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
