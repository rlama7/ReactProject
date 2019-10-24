import React from 'react';
import {translate} from 'react-i18next';
import i18n from './src/I18n/index';
import {createStackNavigator} from 'react-navigation';
import Home from './src/screens/Home';
import Page2 from './src/screens/Page2';

const Stack = createStackNavigator({
  Home: {screens: Home},
  Page2: {screens: Page2}
});

// Wrapping a stack with tranlation hoc assets we get new render on language 
// the hoc is set to only trigger render on languageChanged

const WrappedStack = ({t}) => {
  return <Stack screenProps={{t}} />
};

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false
}) (WrappedStack);

// The entry point using a react navigation stack navigation
// gets wrapped by I18nextProvider enabling use of translation

class App extends React.Component {
  render() {
    return (
      <ReloadAppOnLanguageChange />
      );
  }
}

export default App;
