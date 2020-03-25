import React from 'react';
import Content from './components/Content';
import WindowDimensonsProvider from './components/WindowDimensionsProvider';

const App = () => (
  <WindowDimensonsProvider>
    <Content />
  </WindowDimensonsProvider >
)
export default App;
