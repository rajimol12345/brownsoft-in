import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import VideoAnimation from './pages/VideoAnimation';
import WebDesign from './pages/WebDesign';
import GraphicsDesign from './pages/GraphicsDesign';
import SEOMarketing from './pages/SEOMarketing';
import AdminSupport from './pages/AdminSupport';
import CivilArchitectural from './pages/CivilArchitectural';
import Careers from './pages/Careers';
import ShortsReels from './pages/VideoServices/ShortsReels';
import YouTubeVlogs from './pages/VideoServices/YouTubeVlogs';
import Documentary from './pages/VideoServices/Documentary';
import Corporate from './pages/VideoServices/Corporate';
import FilmTrailer from './pages/VideoServices/FilmTrailer';
import MusicVideo from './pages/VideoServices/MusicVideo';
import WeddingsEvents from './pages/VideoServices/WeddingsEvents';
import ColorGrading from './pages/VideoServices/ColorGrading';
import EducationTraining from './pages/VideoServices/EducationTraining';
import ProductDemo from './pages/VideoServices/ProductDemo';
import Podcast from './pages/VideoServices/Podcast';
import ShortFilm from './pages/VideoServices/ShortFilm';
import Travel from './pages/VideoServices/Travel';
import SocialMediaAds from './pages/VideoServices/SocialMediaAds';
import Infographic from './pages/VideoServices/Infographic';
import ProfessionalWebDesign from './pages/WebServices/ProfessionalWebDesign';
import CustomWebsiteDesign from './pages/WebServices/CustomWebsiteDesign';
import CorporateWebsites from './pages/WebServices/CorporateWebsites';
import LandingPages from './pages/WebServices/LandingPages';
import SmallBusinessWebsites from './pages/WebServices/SmallBusinessWebsites';
import WebsiteRedesign from './pages/WebServices/WebsiteRedesign';
import EcommerceWebsites from './pages/WebServices/EcommerceWebsites';
import CMSWebsites from './pages/WebServices/CMSWebsites';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/video-animation" element={<VideoAnimation />} />
            <Route path="/services/video-animation/shorts-reels" element={<ShortsReels />} />
            <Route path="/services/video-animation/youtube-vlogs" element={<YouTubeVlogs />} />
            <Route path="/services/video-animation/documentary" element={<Documentary />} />
            <Route path="/services/video-animation/corporate" element={<Corporate />} />
            <Route path="/services/video-animation/film-trailer" element={<FilmTrailer />} />
            <Route path="/services/video-animation/music-video" element={<MusicVideo />} />
            <Route path="/services/video-animation/weddings-events" element={<WeddingsEvents />} />
            <Route path="/services/video-animation/color-grading" element={<ColorGrading />} />
            <Route path="/services/video-animation/education-training" element={<EducationTraining />} />
            <Route path="/services/video-animation/product-demo" element={<ProductDemo />} />
            <Route path="/services/video-animation/podcast" element={<Podcast />} />
            <Route path="/services/video-animation/short-film" element={<ShortFilm />} />
            <Route path="/services/video-animation/travel" element={<Travel />} />
            <Route path="/services/video-animation/social-ads" element={<SocialMediaAds />} />
            <Route path="/services/video-animation/infographic" element={<Infographic />} />
            
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/web-design/professional" element={<ProfessionalWebDesign />} />
            <Route path="/services/web-design/custom" element={<CustomWebsiteDesign />} />
            <Route path="/services/web-design/corporate" element={<CorporateWebsites />} />
            <Route path="/services/web-design/landing-pages" element={<LandingPages />} />
            <Route path="/services/web-design/small-business" element={<SmallBusinessWebsites />} />
            <Route path="/services/web-design/redesign" element={<WebsiteRedesign />} />
            <Route path="/services/web-design/ecommerce" element={<EcommerceWebsites />} />
            <Route path="/services/web-design/cms" element={<CMSWebsites />} />

            <Route path="/services/graphics-design" element={<GraphicsDesign />} />
            <Route path="/services/seo-marketing" element={<SEOMarketing />} />
            <Route path="/services/admin-support" element={<AdminSupport />} />
            <Route path="/services/civil-architectural" element={<CivilArchitectural />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
