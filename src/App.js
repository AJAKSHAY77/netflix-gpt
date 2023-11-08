

import { Provider } from 'react-redux';
import Body from './Components/Body';
import Store from './utils/Store';


function App() {
  return (
    <Provider store={Store}>
      <Body />
    </Provider>
  );
}

export default App;
