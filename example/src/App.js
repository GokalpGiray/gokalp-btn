import React from 'react'

import { ExampleComponent, Gbutton } from 'gokalp-btn'
import 'gokalp-btn/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Gbutton type="primary" text="Primary Button"/>
      <Gbutton type="secondary" text="Secondary Button"/>
      <Gbutton type="primary-o" text="Primary Outline Button"/>
      <Gbutton type="secondary-o" text="Secondary Outline Button"/>
      <Gbutton text="Default Button"/>
    </>
  );
}

export default App
