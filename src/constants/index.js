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
    image: "/assets/projects/crop.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "TensorFlow",
        path: "/assets/logos/tensorflow.png",
      },
      {
        id: 3,
        name: "Jupyter",
        path: "/assets/logos/jupyter.png",
      },
      {
        id: 4,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
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
    image: "/assets/projects/movie_rec.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "Anaconda",
        path: "/assets/logos/Anaconda.svg",
      },
      {
        id: 3,
        name: "Jupyter",
        path: "/assets/logos/jupyter.png",
      },
      {
        id: 4,
        name: "Django",
        path: "/assets/logos/django_svg.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
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
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];