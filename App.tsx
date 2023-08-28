import React from 'react';
import {SWRConfig} from 'swr';

import NavigatorStack from './src/navigation/Stack';

function App(): JSX.Element {
  return (
    <SWRConfig>
      <NavigatorStack />
    </SWRConfig>
  );
}

export default App;
