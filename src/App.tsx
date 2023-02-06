import React from 'react';
import Grid from './components/grid/Grid';
import Button from './components/button/Button';
import Layout from './components/layout/Layout';
import Title from './components/title/Title';

function App() {
  return (
    <Layout>
      <Title />
      <Grid />
      <Button />
    </Layout>
  );
}

export default App;
