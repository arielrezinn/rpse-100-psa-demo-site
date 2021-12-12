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
        Please visit <Anchor href='https://arielrezin.com/resources/' label='arielrezin.com/resources' /> to learn more!
      </Heading>
    </div >
  </Grommet>,
  document.getElementById('root')
);
