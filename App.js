import React from 'react';
import StackScreen from './Route/stackNavigation';
import MyTabs from './Route/tabNavigation';
import AboutPage from './App/Screen/AboutPage'
import TimeLine from './TabViewScreens/timeline';
import TryScreen from './App/Components/TryScreen';
import GigView from './App/Screen/GigView';
import DigitalMarketing from './App/Screen/DigitalMarketing'
import GraphicsDesign from './App/Screen/GraphicsDesign'
import Signup from './App/Screen/SignUp'
import LoginScreen from './App/Screen/LogInScreen'
import BuyerDash from './App/Screen/BuyerDash';
import BuyerInfo from './App/Screen/BuyerInfo';
import RecentlyView from './App/Screen/RecentlyView';
import GigCreation from './App/Screen/GigCreation';
import ResultPage from './App/Screen/ResultPage';
import DropDown from './App/Components/DropDown';
import DropBox from './App/Components/DropBox';
import PicturePicker from './App/Components/PicturePicker';
import Profile from './components/profile';
import CetegoryBox from './App/Components/CategoryBox';
import BuyerRequest from './App/Screen/BuyerRequest';


import Notification from './components/notification';
import { Provider as StoreProvider } from 'react-redux';
import store from './REDUX/store';
import DropDownFilter from './App/Components/DropDownFilter';
import Boton from './App/Components/Boton';
import GigsAbout from './App/Components/GigAbout';
import Likeh from './App/Components/LikeButton';
import Gigswipper from './App/Components/Gigswipper';
import Report from './InnerScreens/Report';
 
const App = () => {
  return (
    // <Boton></Boton>
    <StoreProvider store={store}>
   <StackScreen/>
     
    </StoreProvider>
  // <Report></Report>
  // <Gigswipper></Gigswipper>
  // <Likeh></Likeh>
  // <GigsAbout></GigsAbout>
  // <Notification></Notification>
      // <DropDownFilter/>  
     )
    
  }
export default App;
