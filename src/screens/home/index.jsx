import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';

const homePage = () => {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column textAlign="center" verticalAlign="middle" style={{height: '20%', marginTop: '10%'}}>
          <Icon color="red" size="massive" name="ban"/>
          <h1>this is home</h1>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default homePage;
