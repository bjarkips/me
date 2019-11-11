import React from 'react';
import { Typography } from '@material-ui/core';
import Layout from '../components/layout';

const Design = () => (
  <div>
    <Layout
      title="Design"
      next="bootstrapping"
    >
      <Typography variant="body1">
        For rapid prototyping, I use Figma. The prototype acts as a roadmap, speeding up development and avoiding unnecessary features. It is a living document, allowing me to continue testing and refining additional layout elements before implementing them.
      </Typography>
      <iframe
        title="Figma design prototype"
        style={{
          border: 'none',
          marginTop: '24px',
        }}
        width="550"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9DNoQZvUQzZ5p9E1858Kta%2FMe%3Fscaling%3Dscale-down-width%26node-id%3D4%253A2"
      />
    </Layout>
  </div>
);

export default Design;
