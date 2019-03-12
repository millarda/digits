import React from 'react';
import { Grid, Icon, Header} from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="background_image">
          <Grid verticalAlign='middle' textAlign='center' container>

            <Grid.Column width={5} textAlign='center'>
              <Icon name="home" size="huge"/>
              <Header as="h1" inverted>House</Header>
              <Header as="h2" color='white' inverted>woohoo houses ya i like houses otherwise
                i would get all wet when it rained unless I had an umbrella</Header>
            </Grid.Column>

            <Grid.Column width={5} textAlign='center'>
              <Icon name="blind" size="huge"/>
              <Header as="h1" inverted>Old People</Header>
              <Header as="h2" inverted>as time goes by people get old that sure is something maybe one day old people will not be old who knows</Header>
            </Grid.Column>

            <Grid.Column width={5} textAlign='center' inverted>
              <Icon name="question circle" size="huge"/>
              <Header white as="h1" color='white' inverted>Questions</Header>
              <Header as="h2" color='white' inverted>Questions are for figuring things out. I should ask more questions since I have nothing figured out woweee</Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
