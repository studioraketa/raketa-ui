import React from 'react'

import {
  RaketaUIProvider,
  Title,
  Text,
} from 'raketa-ui';
import 'raketa-ui/dist/index.css'

const App = () => {
  return (
    <RaketaUIProvider>
      <Title>It works!</Title>
      <Text>Try it yourself. </Text>
    </RaketaUIProvider>
  )
}

export default App
