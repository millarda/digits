import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='background_image'>
          <Grid verticalAlign='middle' textAlign='center' columns={3} container inverted>

            <Grid.Column width={4} textAlign='center'>
              <Icon name="microphone" size='huge'/>
              <Header as="h1" inverted>Microphones</Header>
              <Header as="h2" inverted>
                  microphones sure are something. they let you record your voice and also clean your phones all in one.
              </Header>
            </Grid.Column>

            <Grid.Column width={4} textAlign='center'>
              <Icon name="globe" size='huge'/>
              <Header as="h1" inverted>The World</Header>
              <Header as="h2" inverted>
                The world sure is important, it has you and me in it.
                It also has water and plants and boy o boy are those things cool.
              </Header>
            </Grid.Column>

            <Grid.Column width={4} textAlign='center'>
              <Icon name="bell outline" size='huge'/>
              <Header as="h1" inverted>Bells</Header>
              <Header as="h2" inverted>
                Bells are pretty cool they make noise. You could record that
                noise with a microphone. crazy how objects can interact like that.
              </Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
