import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';

const notFoundPage = () => {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column textAlign="center" verticalAlign="middle" style={{height: '20%', marginTop: '10%'}}>
          <Icon color="red" size="massive" name="ban"/>
          <h1>404 Not Found</h1>
          <h2>Sorry, your page not found</h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default notFoundPage;
