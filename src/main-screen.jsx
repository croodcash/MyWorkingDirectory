import React from 'react';
import {Route} from 'react-router';
import {Link, Switch} from 'react-router-dom';
import {Header, Button, Image, Grid, Icon, Menu} from 'semantic-ui-react';
import './index.css';
import NotFoundScreen from "./screens/404";
import HomeScreen from './screens/home';
import {connect} from 'react-redux';

const PageSwitcher = () => (
    <Switch>
      <Route exact path="/" component={HomeScreen}/>
     
      <Route path="*" component={NotFoundScreen}/>
    </Switch>
  );

class MainScreen extends React.Component{


    render(){
        return (
            <>
            <Header className="simply-header">
                <Menu.Menu position='right' size='tiny'>
                    <Menu.Item
                        name='Test'
                    />
                </Menu.Menu>
            </Header>
            <Grid className='main-container'>
                <Grid.Row>
                    <Grid.Column>
                        <PageSwitcher/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
        );
    }
}

export default MainScreen;