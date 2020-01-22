import React from 'react';
import Route from './router';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setTopLevelNavigator} from './navigationService';
import {withLoading} from '../hoc/withLoading';

const mainRouter = () => {
  return (
    <Route
      ref={refs => {
        setTopLevelNavigator(refs);
      }}
    />
  );
};

mainRouter.propTypes = {
  loading: PropTypes.bool,
};

mainRouter.defaultProps = {
  loading: true,
};

const mapState = state => {
  const {loading} = state.app;
  return {
    loading,
  };
};

export default compose(
  connect(mapState, null),
  withLoading(['loading']),
)(mainRouter);
