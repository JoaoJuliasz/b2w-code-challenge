import React from 'react';
import './App.scss';

import ProfileInfo from './components/ProfileInfos/ProfileInfos'
import WorkInfo from './components/WorkInfo/WorkInfo'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5a5e38f3330000b0261923a5')
      .then(res => res.json())
      .then(data => this.setState({
        profile: data.profile,
        isLoading: false,
      },
        () => console.warn(data.profile)
      ))
  }
  render() {
    const { isLoading, profile } = this.state
    if(isLoading){ 
    return(
      <div>
        Loading...
      </div>
    )
   }
     return (
      <div className='main'>
        <ProfileInfo profile={profile}/>
        <WorkInfo profile={profile}/>
      </div>
    )
  }
}

export default App;
