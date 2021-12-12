import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Anchor, Box, Button, Grommet, grommet, Heading, Paragraph, Text } from 'grommet';

ReactDOM.render(
  <Grommet theme={grommet}>
    <div style={{
      height: "100vh",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Heading level={1} size='xlarge' textAlign='center' margin={{ vertical: 'xsmall', horizontal: 'large' }}>
        Web A11y Issues
      </Heading>
      <Heading level={1} size='xlarge' textAlign='center' margin={{ vertical: 'xsmall', horizontal: 'large' }} color={'brand'}>
        DEMONSTRATED
      </Heading>
    </div >
  </Grommet>,
  document.getElementById('root')
);
