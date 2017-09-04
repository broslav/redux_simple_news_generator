import {connect} from 'react-redux';
import {Sources} from '../components/Sources';
import {sourceVisibilityToggle} from '../actions';

const mapStateToProps = state => {
    return {
        sources: state.sources.items,
        isFetching: state.sources.isFetching,
        disabledSources: state.sourcesFilter
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => {
        dispatch(sourceVisibilityToggle(id))
    }

});


export const VisibleSourcesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sources);