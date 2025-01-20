import logo from './logo.svg';
import './App.css';
import './Common.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap';

import NavigationBar from './Components/NavBar.js';
import HeroSection from './Components/Hero.js';
import InfoBlock from './Components/InfoBlock.js';
import ScreenshotSliderBlock from './Components/ScreenshotBlock.js';
import TeamInfo from './Components/TeamInfoSection.js';
import Footer from './Components/Footer.js';


const gameplay_SS_Images = [
  { src: '/Images/Screenshots/Titans_1.png', alt: 'Image 1', text: 'Description for Image 1' },
  { src: '/Images/Screenshots/Titans_2.png', alt: 'Image 2', text: 'Description for Image 2' },
  { src: '/Images/Screenshots/Titans_3.png', alt: 'Image 3', text: 'Description for Image 3' },
];

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>

      <HeroSection />

      <InfoBlock
        order='0'
        imagePath={'/Images/Screenshots/Titans_1.png'}
        title='Ki ache jibone??'
        description={[
          "Kooonooo laav nai bhaiya...thikase??",
          "Give up now...or give up later....one day, you'll have to give up, jodi raat pohale shona jeto. Bongobandhu more naaii.....Jodi raaj pothe aaj michil hotoooo",
          "Let's see if this shit works now."
        ]}
      />
      <InfoBlock
        order='1'
        imagePath={'/Images/Screenshots/Titans_2.png'}
        title='Ki ache jibone??'
        description={[
          "Kooonooo laav nai bhaiya...thikase??",
          "Give up now...or give up later....one day, you'll have to give up, jodi raat pohale shona jeto. Bongobandhu more naaii.....Jodi raaj pothe aaj michil hotoooo",
          "Let's see if this shit works now."
        ]}
      />

      <ScreenshotSliderBlock images={gameplay_SS_Images} />

      <TeamInfo />

      <Footer />
    </div>
  );
}