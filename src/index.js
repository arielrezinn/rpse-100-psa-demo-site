import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FillerText from './fillerText';
import { Anchor, Box, Button, Grommet, grommet, Heading, Paragraph, Text } from 'grommet';

ReactDOM.render(
  <Grommet theme={grommet}>
    <div style={{ height: "100vh" }} >
      <div id='box1' className='quarterbox'>
        <div style={{ height: "99%", width: "99.5%" }}>
          <Box overflow={"scroll"} fill={true}>
            <Heading level={1} size='small' textAlign='center' margin={{ vertical: "small" }}>What is this?</Heading>
            <Paragraph textAlign='center' size='large' fill={true} margin={{ vertical: "small", horizontal: "medium" }}>
              This is a website created by Ariel Rezin for use in <Anchor href="https://youtu.be/uVDxSZiQc3I" label="an assignment" /> for RPSE 100 at the University of Wisconsin-Madison.
            </Paragraph>
            <Paragraph textAlign='center' size='large' fill={true} margin={{ vertical: "small", horizontal: "medium" }}>
              Due to time constraints, the site has not been fully tested for accessibility errors and is not WCAG 2.1 AA compliant.
              That said, some errors (such as low contrast) are intentional and are used for demonstration purposes.
            </Paragraph>
            <Paragraph textAlign='center' size='large' fill={true} margin={{ vertical: "small", horizontal: "medium" }}>
              Please visit Ariel's <Anchor href="https://arielrezin.com" label="personal website" /> for a11y resourcces or to get in touch with them.
              Otherwise, if you're interested, you can view this code behind this project on <Anchor href="https://github.com/arielrezinn/rpse-100-psa-demo-site" label="Github" />.
            </Paragraph>
          </Box>
        </div>
      </div>
      <div id='box2' className='quarterbox'>
        <Box
          width={"50%"}
          height={"50%"}
          id='no-cursor'
          align='center'
          justify='center'
        >
          <Button primary label="submit" margin="xlarge" id='unreachable' size={"large"} />
        </Box>
      </div>
      <div id='box3' className='quarterbox'>
        <Box width={"35%"}>
          <Paragraph textAlign='end' size='small'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Review the image to the right for further details.
          </Paragraph>
        </Box>
        <Box
          width={"35%"}
          height={"50%"}
          pad={"small"}
          margin={"small"}
          align='end'
          justify='end'
          round='medium'
          background="#d8d8d8"
          border={{ color: 'brand', size: 'medium' }}>
          <Text>image 327386.jpg</Text>
        </Box>
      </div>
      <div id='box4' className='quarterbox'>
        <div style={{ height: "99%", width: "99%" }}>
          <Box
            fill={true}
            overflow={"scroll"}
            pad={"large"}
          >
            <FillerText />
          </Box>
        </div>
      </div>
    </div >
  </Grommet>,
  document.getElementById('root')
);
