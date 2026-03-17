import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';

// Styles
import 'aos/dist/aos.css';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './HomePage';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/Services.jsx';
// removed ServiceDetail
import Career from './components/Career';
import BlogPage from './components/BlogPage';
import BlogDetails from './components/BlogDetails';
import PrivacyPolicyPage from './components/PrivacyPolicy';
import TermsConditionsPage from './components/TermsConditions';
import SeoMarketing from './components/seo-marketing';
import AdminSupport from './components/Admin-support';
import CivilArchitectural from './components/Civil-Architectural';

// Video Services
import ShortsReels from './components/pages/VideoServices/ShortsReels';
import YouTubeVlogs from './components/pages/VideoServices/YouTubeVlogs';
import Documentary from './components/pages/VideoServices/Documentary';
import Corporate from './components/pages/VideoServices/Corporate';
import FilmTrailer from './components/pages/VideoServices/FilmTrailer';
import MusicVideo from './components/pages/VideoServices/MusicVideo';
import WeddingsEvents from './components/pages/VideoServices/WeddingsEvents';
import ColorGrading from './components/pages/VideoServices/ColorGrading';
import EducationTraining from './components/pages/VideoServices/EducationTraining';
import ProductDemo from './components/pages/VideoServices/ProductDemo';
import Podcast from './components/pages/VideoServices/Podcast';
import ShortFilm from './components/pages/VideoServices/ShortFilm';
import Travel from './components/pages/VideoServices/Travel';
import SocialMediaAds from './components/pages/VideoServices/SocialMediaAds';
import Infographic from './components/pages/VideoServices/Infographic';
import VideoAnimation from './components/pages/VideoServices/VideoAnimation';

// Web Services
import WebDesign from './components/pages/WebServices/WebDesign';
import ProfessionalWebDesign from './components/pages/WebServices/ProfessionalWebDesign';
import CustomWebsiteDesign from './components/pages/WebServices/CustomWebsiteDesign';
import CorporateWebsites from './components/pages/WebServices/CorporateWebsites';
import LandingPages from './components/pages/WebServices/LandingPages';
import SmallBusinessWebsites from './components/pages/WebServices/SmallBusinessWebsites';
import WebsiteRedesign from './components/pages/WebServices/WebsiteRedesign';
import EcommerceWebsites from './components/pages/WebServices/EcommerceWebsites';
import CMSWebsites from './components/pages/WebServices/CMSWebsites';

// Graphics Services
import GraphicsDesign from './components/pages/GraphicServices/GraphicsDesign'; // Added missing import
import UIUXWebsite from './components/pages/GraphicServices/UIUXWebsite';
import InvitationCards from './components/pages/GraphicServices/InvitationCards';
import LabelsPackaging from './components/pages/GraphicServices/LabelsPackaging';
import UIUXMobile from './components/pages/GraphicServices/UIUXMobile';
import BackgroundRemoval from './components/pages/GraphicServices/BackgroundRemoval';
import AlbumDesigning from './components/pages/GraphicServices/AlbumDesigning';
import PhotoEditing from './components/pages/GraphicServices/PhotoEditing';
import Flyers from './components/pages/GraphicServices/Flyers';
import BrochuresInfographics from './components/pages/GraphicServices/BrochuresInfographics';
import BusinessCardsBillboards from './components/pages/GraphicServices/BusinessCardsBillboards';
import FoodMenu from './components/pages/GraphicServices/FoodMenu';
import LetterheadResume from './components/pages/GraphicServices/LetterheadResume';
import SocialMediaBanners from './components/pages/GraphicServices/SocialMediaBanners';
import LogoDesign from './components/pages/GraphicServices/LogoDesign';

const routeTitles = {
  '/': 'BrownSofts IT Services | Innovative IT Solutions',
  '/about': 'About Us | BrownSofts IT Services',
  '/contact': 'Contact Us | BrownSofts IT Services',
  '/services': 'Our Services | BrownSofts IT Services',
  '/services/seo-marketing': 'SEO & Digital Marketing | BrownSofts IT Services',
  '/services/admin-support': 'Admin Support Services | BrownSofts IT Services',
  '/services/civil-engineering': 'Civil & Architectural Services | BrownSofts IT Services',
  '/career': 'Careers | Join Our Team | BrownSofts IT Services',
  '/blog': 'Our Blog | Insights & Trends | BrownSofts IT Services',
  '/privacy-policy': 'Privacy Policy | BrownSofts IT Services',
  '/terms-conditions': 'Terms & Conditions | BrownSofts IT Services',
  
  // Video Animation
  '/services/video-animation': 'Video Animation Services | BrownSofts IT Services',
  '/services/video-animation/shorts-reels': 'Shorts & Reels Editing | BrownSofts IT Services',
  '/services/video-animation/youtube-vlogs': 'YouTube Vlogs Editing | BrownSofts IT Services',
  '/services/video-animation/documentary': 'Documentary Video Editing | BrownSofts IT Services',
  '/services/video-animation/corporate': 'Corporate Video Production | BrownSofts IT Services',
  '/services/video-animation/film-trailer': 'Film & Movie Trailer Editing | BrownSofts IT Services',
  '/services/video-animation/music-video': 'Music Video Production | BrownSofts IT Services',
  '/services/video-animation/weddings-events': 'Wedding & Event Video Editing | BrownSofts IT Services',
  '/services/video-animation/color-grading': 'Professional Color Grading | BrownSofts IT Services',
  '/services/video-animation/education-training': 'Educational & Training Videos | BrownSofts IT Services',
  '/services/video-animation/product-demo': 'Product Demo Video Services | BrownSofts IT Services',
  '/services/video-animation/podcast': 'Podcast Video Editing | BrownSofts IT Services',
  '/services/video-animation/short-film': 'Short Film Production | BrownSofts IT Services',
  '/services/video-animation/travel': 'Travel & Vlog Video Editing | BrownSofts IT Services',
  '/services/video-animation/social-ads': 'Social Media Video Ads | BrownSofts IT Services',
  '/services/video-animation/infographic': 'Infographic & Motion Graphics | BrownSofts IT Services',

  // Web Services
  '/services/web-design': 'Web Design & Development | BrownSofts IT Services',
  '/services/web-design/professional': 'Professional Web Design | BrownSofts IT Services',
  '/services/web-design/custom': 'Custom Website Development | BrownSofts IT Services',
  '/services/web-design/corporate': 'Corporate Website Design | BrownSofts IT Services',
  '/services/web-design/landing-pages': 'High-Converting Landing Pages | BrownSofts IT Services',
  '/services/web-design/small-business': 'Small Business Website Solutions | BrownSofts IT Services',
  '/services/web-design/redesign': 'Website Redesign Services | BrownSofts IT Services',
  '/services/web-design/ecommerce': 'E-commerce Website Development | BrownSofts IT Services',
  '/services/web-design/cms': 'CMS Website Development (WordPress/Shopify) | BrownSofts IT Services',

  // Graphics Services
  '/services/graphics-design': 'Graphics Design Services | BrownSofts IT Services',
  '/services/graphics-design/ui-ux-website': 'Website UI/UX Design | BrownSofts IT Services',
  '/services/graphics-design/invitation-cards': 'Invitation Card Design | BrownSofts IT Services',
  '/services/graphics-design/labels-packaging': 'Label & Packaging Design | BrownSofts IT Services',
  '/services/graphics-design/ui-ux-mobile': 'Mobile App UI/UX Design | BrownSofts IT Services',
  '/services/graphics-design/background-removal': 'Product Background Removal | BrownSofts IT Services',
  '/services/graphics-design/album-designing': 'Photo Album & Portfolio Design | BrownSofts IT Services',
  '/services/graphics-design/photo-editing': 'Professional Photo Editing | BrownSofts IT Services',
  '/services/graphics-design/flyers': 'Flyer & Poster Design | BrownSofts IT Services',
  '/services/graphics-design/brochures-infographics': 'Brochure & Infographic Design | BrownSofts IT Services',
  '/services/graphics-design/business-cards-billboards': 'Business Card & Billboard Design | BrownSofts IT Services',
  '/services/graphics-design/food-menu': 'Restaurant Food Menu Design | BrownSofts IT Services',
  '/services/graphics-design/letterhead-resume': 'Letterhead & Resume Design | BrownSofts IT Services',
  '/services/graphics-design/social-media-banners': 'Social Media Banner Design | BrownSofts IT Services',
  '/services/graphics-design/logo-design': 'Logo Design & Branding | BrownSofts IT Services',
};

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    let title = routeTitles[currentPath] || 'BrownSofts IT Services | Innovative IT Solutions';
    
    // Handle dynamic blog routes
    if (currentPath.startsWith('/blog/')) {
      title = 'Blog Post | BrownSofts IT Services';
    }
    
    document.title = title;
  }, [location]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/seo-marketing" element={<SeoMarketing />} />

        {/* Admin & Civil Routes */}
        <Route path="/services/admin-support" element={<AdminSupport />} />
        <Route path="/services/civil-engineering" element={<CivilArchitectural />} />

        {/* Video Animation Routes */}
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
        <Route path="/services/video-animation" element={<VideoAnimation />} />

        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />

        {/* Web Design Routes */}
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/web-design/professional" element={<ProfessionalWebDesign />} />
        <Route path="/services/web-design/custom" element={<CustomWebsiteDesign />} />
        <Route path="/services/web-design/corporate" element={<CorporateWebsites />} />
        <Route path="/services/web-design/landing-pages" element={<LandingPages />} />
        <Route path="/services/web-design/small-business" element={<SmallBusinessWebsites />} />
        <Route path="/services/web-design/redesign" element={<WebsiteRedesign />} />
        <Route path="/services/web-design/ecommerce" element={<EcommerceWebsites />} />
        <Route path="/services/web-design/cms" element={<CMSWebsites />} />

        {/* Graphics Design Routes */}
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;