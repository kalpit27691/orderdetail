import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import './App.css';
import Page1 from './page/page1'
import Page2 from "./page/page2";
import Page3 from './page/page3';
function App() {
  return (
    <div className="flex flex-col">
      <AppProvider i18n={enTranslations}>
       <Page1 />
       <Page2 />
       <Page3 />
      </AppProvider>
    </div>
  );
}

export default App;
