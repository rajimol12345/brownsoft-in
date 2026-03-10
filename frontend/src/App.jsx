import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import VideoAnimation from './pages/VideoAnimation';
import WebDesign from './pages/WebDesign';
import GraphicsDesign from './pages/GraphicsDesign';
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
import UIUXWebsite from './pages/GraphicServices/UIUXWebsite';
import InvitationCards from './pages/GraphicServices/InvitationCards';
import LabelsPackaging from './pages/GraphicServices/LabelsPackaging';
import UIUXMobile from './pages/GraphicServices/UIUXMobile';
import BackgroundRemoval from './pages/GraphicServices/BackgroundRemoval';
import AlbumDesigning from './pages/GraphicServices/AlbumDesigning';
import PhotoEditing from './pages/GraphicServices/PhotoEditing';
import Flyers from './pages/GraphicServices/Flyers';
import BrochuresInfographics from './pages/GraphicServices/BrochuresInfographics';
import BusinessCardsBillboards from './pages/GraphicServices/BusinessCardsBillboards';
import FoodMenu from './pages/GraphicServices/FoodMenu';
import LetterheadResume from './pages/GraphicServices/LetterheadResume';
import SocialMediaBanners from './pages/GraphicServices/SocialMediaBanners';
import LogoDesign from './pages/GraphicServices/LogoDesign';

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
            <Route path="/services/graphics-design" element={<GraphicsDesign />} />
            <Route path="/services/graphics-design/ui-ux-website" element={<UIUXWebsite />} />
            <Route path="/services/graphics-design/invitation-cards" element={<InvitationCards />} />
            <Route path="/services/graphics-design/labels-packaging" element={<LabelsPackaging />} />
            <Route path="/services/graphics-design/ui-ux-mobile" element={<UIUXMobile />} />
            <Route path="/services/graphics-design/background-removal" element={<BackgroundRemoval />} />
            <Route path="/services/graphics-design/album-designing" element={<AlbumDesigning />} />
            <Route path="/services/graphics-design/photo-editing" element={<PhotoEditing />} />
            <Route path="/services/graphics-design/flyers" element={<Flyers />} />
            <Route path="/services/graphics-design/brochures-infographics" element={<BrochuresInfographics />} />
            <Route path="/services/graphics-design/business-cards-billboards" element={<BusinessCardsBillboards />} />
            <Route path="/services/graphics-design/food-menu" element={<FoodMenu />} />
            <Route path="/services/graphics-design/letterhead-resume" element={<LetterheadResume />} />
            <Route path="/services/graphics-design/social-media-banners" element={<SocialMediaBanners />} />
            <Route path="/services/graphics-design/logo-design" element={<LogoDesign />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
