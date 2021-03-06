import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import { RootStateType, Dispatch } from '../../constants/types';

interface StateProps {
}

interface DispatchProps {
}

// tslint:disable-next-line:no-any
function mapStateToProps(_state: RootStateType, ownProps: any): StateProps {
  return {
    ...ownProps
  };
}

function mapDispatchToProps(_dispatch: Dispatch): DispatchProps {
  return {};
}

// tslint:disable-next-line:no-any
export const withWrapper = (WrappedComponent: any) => {

  // tslint:disable-next-line:no-any
  class MainHoc extends React.Component<any, never> {

    render() {
      return (
        <Layout>
          <WrappedComponent match={this.props.match} />
        </Layout>
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(MainHoc);
};
