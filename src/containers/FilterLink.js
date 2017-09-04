import {connect} from 'react-redux';
import {changeArticlesFilter} from '../actions/index';
import {Link} from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.articlesFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(changeArticlesFilter(ownProps.filter))
    }

});

export const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);