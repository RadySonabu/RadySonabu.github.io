import React from 'react';
import NavigationBar from './components/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Content from './components/Content';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar/>
      <Container maxWidth="m">
        <Content />
      </Container>
    </React.Fragment>
   
  );
}

export default App;
