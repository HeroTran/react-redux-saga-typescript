import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../functionals/Home/messages';
type HomeProps = {
}
type HomeStates = {}
class Home extends React.Component<HomeProps, HomeStates> {
  constructor(props: HomeProps) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <FormattedMessage {...messages.homeTitle} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;