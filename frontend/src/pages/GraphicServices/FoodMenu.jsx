import React from 'react';
import GraphicServiceLayout from '../../components/GraphicServiceLayout';
import { FiLayers, FiPenTool, FiImage } from 'react-icons/fi';

const FoodMenu = () => {
    const data = {
        title: "Food Menu Design Services",
        breadcrumbLabel: "Food Menu",
        mainImg: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
        subtitle: "Appetizing Visual Menus",
        description1: "Your menu is your primary sales tool. We design restaurant and cafe menus that are easy to navigate, highlight high-margin items, and align perfectly with your culinary brand's atmosphere.",
        description2: "We focus on psychological menu engineering—using strategic placement, clear typography, and professional food photography integration to guide your guests toward the best experiences your kitchen offers.",
        featureList1: [
            "Dine-in and takeout menu design",
            "Digital menus for QR codes",
            "Specialty drink and dessert menus"
        ],
        featureList2: [
            "Clear price and item hierarchy",
            "Thematic visual styling",
            "Print-ready durable layouts"
        ],
        stepsTitle: "3 Steps to a Tasty Menu",
        steps: [
            { title: 'Menu Structuring', desc: 'We organize your categories and items.', icon: <FiLayers /> },
            { title: 'Visual Layout', desc: 'We apply your brand style and colors.', icon: <FiPenTool /> },
            { title: 'Final Review', desc: 'We ensure all prices and text are perfect.', icon: <FiImage /> }
        ],
        advantageImg: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=600",
        advantageContent: "A well-designed menu can increase average spend per customer by up to 15%.",
        advantageFeatureList: [
            "Easy-to-read typography",
            "High-quality food imagery",
            "On-brand cultural aesthetics"
        ],
        faqs: [
            {
                question: "Can you design digital tablet menus?",
                answer: "Yes, we design both static print menus and interactive digital menu interfaces for tablets or TVs."
            },
            {
                question: "Do you offer menu updates later?",
                answer: "We provide the source files, and we also offer a maintenance service for periodic price or item updates."
            }
        ],
        activePath: "/services/graphics-design/food-menu"
    };

    return <GraphicServiceLayout {...data} />;
};

export default FoodMenu;
