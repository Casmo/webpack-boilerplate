import React from 'react';
import Logo from '@/images/webpack-logo.svg';

class Scene extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
    }
  
    render() {
      return <div ref="page">
         <img src={Logo} />
          Welcome
        </div>;
    }
  }
  export default Scene;