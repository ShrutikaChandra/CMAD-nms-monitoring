import React from 'react';
import Header from './Header.jsx';
import Grid from './Grid.jsx';
import Dashboard from './Dashboard.jsx';
import Footer from './Footer';

class MainComponent extends React.Component{
    render(){
        return <div>
                    <Header title={'NMS - Monitoring'}/>
                    <Dashboard/>
                    <Grid/>
                    <Footer/>
                </div>;
    }
}

export default MainComponent;