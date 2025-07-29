import cropImage from "/assets/projects/crop.png";
import movieRecImage from "/assets/projects/movie_rec.png";

import pythonLogo from "/assets/logos/python.png";
import tensorflowLogo from "/assets/logos/tensorflow.png";
import jupyterLogo from "/assets/logos/jupyter.png";
import html5Logo from "/assets/logos/html5.svg";
import anacondaLogo from "/assets/logos/Anaconda.svg";
import djangoLogo from "/assets/logos/django_svg.svg";

import whatsAppIcon from "/assets/socials/whatsApp.svg";
import linkedInIcon from "/assets/socials/linkedIn.svg";
import instagramIcon from "/assets/socials/instagram.svg";

export const myProjects = [
  {
    id: 1,
    title: "Crop Disease Identification",
    description:
      "Helps farmers identify crop diseases through a deep learning web app by analyzing uploaded images.",
    subDescription: [
      "Trained and fine-tuned a MobileNetV2 model with data augmentation and early stopping, achieving 95.10% validation accuracy for image-based disease identification in crops.",
      "Implemented real-time predictions using TensorFlow for smooth and fast image analysis. Enhanced model generalization with techniques like brightness adjustment, flipping, and zoom transformations.",
    ],
    href: "https://github.com/Nitin-Nandan/CropDiseaseIdentification.git",
    logo: "",
    image: cropImage,
    tags: [
      {
        id: 1,
        name: "Python",
        path: pythonLogo,
      },
      {
        id: 2,
        name: "TensorFlow",
        path: tensorflowLogo,
      },
      {
        id: 3,
        name: "Jupyter",
        path: jupyterLogo,
      },
      {
        id: 4,
        name: "HTML5",
        path: html5Logo,
      },
    ],
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description:
      "AI-powered movie recommendations with filters, visuals, and analytics.",
    subDescription: [
      "Built using collaborative filtering (SVD) on the MovieLens 20M dataset to provide accurate and tailored movie suggestions. Designed an intuitive UI with genre-based illustrated cards, real poster loading, and infinite scroll for seamless user interaction.",
      "Implemented advanced filters by genre, year, and rating, along with confidence scores and human-readable explanations for each recommendation. Enabled one-click export of recommendations as CSV or PDF, with intelligent caching and a no-database architecture using Pandas and pre-trained models.",
    ],
    href: "https://github.com/Nitin-Nandan/MovieRecommendationSystem.git",
    logo: "",
    image: movieRecImage,
    tags: [
      {
        id: 1,
        name: "Python",
        path: pythonLogo,
      },
      {
        id: 2,
        name: "Anaconda",
        path: anacondaLogo,
      },
      {
        id: 3,
        name: "Jupyter",
        path: jupyterLogo,
      },
      {
        id: 4,
        name: "Django",
        path: djangoLogo,
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/9199167670",
    icon: whatsAppIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nitinnandan/",
    icon: linkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/just.a.nitin?igsh=azcxazhzNGcybXk4",
    icon: instagramIcon,
  },
];

export const experiences = [
  {
    title: "Data Science Intern",
    job: "CodeClause",
    date: "2025",
    contents: [
      "Engineered a deep learning application for real-time image recognition with a streamlined interface, leveraging CNNs and Flask for seamless user interaction.",
      "Delivered a high-performance recommendation engine using collaborative filtering and intelligent caching, supporting advanced filters, confidence scoring, and dynamic content presentation.",
      "Developed an interactive dashboard to visualize user preferences and recommendation trends, with export capabilities for CSV and PDF formats.",
      "Applied K-Means clustering to segment customers based on purchasing patterns, enabling targeted business strategies through unsupervised learning.",
      "Designed and deployed a time series forecasting model to predict retail demand, incorporating seasonality and trend analysis for accurate future insights.",
    ],
  },
];