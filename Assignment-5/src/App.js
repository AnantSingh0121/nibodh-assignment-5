import './App.css';
import Header from './header/index';
import Navbar from './Navbar/index';
import Institute from './hero-div/index';
import Banner1 from './Banners/banner1';
import OurServices from './Our_Services/index';
import Donation from './donation/index';
import MiscHd1 from './misc_component/header1';
import Card1 from './card1/index.jsx'
import Information from './misc_component/listing_react';
import Card2 from './card2/index.jsx';
import Form from './contactus/index';
import Slider from './misc_component/teamslider';
import Scholarship from './Banners/banner2';
import Footer from './footer/index.jsx';

  function App() {
    return (
      <div className="App">
        <Header className="hahaha" />
        <Navbar />
        <Institute />
        <Banner1 />
        <OurServices />
        <Donation />
        <MiscHd1 />
        <Card1 />
        <Information />
        <Card2 />
        <Form />
        <Slider/>
        <Scholarship/>
        <Footer />
      </div>
    );
  }

export default App;
