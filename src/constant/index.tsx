
import { FiGithub } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaLinkedinIn, FaFacebook } from "react-icons/fa";



export const mainLinks = [
    { title: "Home", link: "#hero" },
    { title: "About", link: "#about" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
]

export const ComunicationsWay = [
    { icon: <FiGithub />, link: "https://github.com/mohammedsalhyen" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mohammed-abdelsalhyen-sherief-8976441b8/" },
    { icon: <FaWhatsapp />, link: "https://wa.me/201110948994" },
    { icon:<FaFacebook/>,link:"https://www.facebook.com/mohammed.abdelsalhyen"}

]
export const jobs = ["Frontend Developer", "Tailwind CSS Expert", "Next.js Specialist"]

export const ContactInfo = [
    { title: "Email", text:"mohammedsalhyen1@gmail.com", icon: <MdAlternateEmail /> },
    { title: "Phone", text:"(+20) 1097365299", icon: <FaPhone /> },
    { title: "Location", text:"Cairo,Egypt", icon: <FaMapMarkerAlt /> }
]
export const projects = [
  {
    name: "LiBooking",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1756835161/Screenshot_2-9-2025_204148_libooking.com_robmmu.jpg",
    description:
      "As a Front-end Developer, I built the UI for LiBooking, a modern hotel booking platform using React, TypeScript, and Tailwind CSS. I implemented i18n, animations, maps integration, secure auth, real-time booking, and optimized the app with reusable components, Redux Toolkit, and Recharts for data visualization.",
    link: "https://libooking.com",
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "React Router",
      "i18next (Localization)",
      "Leaflet Maps",
      "Google APIs",
      "Firebase",
      "Zod Validation",
      "Swiper",
      "React Helmet Async",
      "Recharts",
    ],
  },
  {
    name: "Sehaty-tech",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1738583727/Screenshot_3-2-2025_135456_tabibe.netlify.app_pg6zpg.jpg",
    description:
      "Sehaty-tech is a medical website using it you can ask and communicate with any doctor you choice with one click",
    link: "https://sahtik.mmpro.ly/",
    skills: ["React js", "TypeScript", "Tailwind", "React-aos"],
  },
  {
    name: "Eco shop",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1725961515/4232cead7d1922af7059bb09086e909a7a29c8ff-1468x1864_qxkuty.webp",
    description:
      "Amazing full stack E-commerce website it's for seamless online shopping. With a user-centric design, robust architecture, and secure transactions, discover it now.",
    link: "https://ecoshop-v1.vercel.app/",
    github: "https://github.com/mohammedsalhyen/Eco-shop_V1",
    skills: [
      "Next js",
      "TypeScript",
      "Tailwind",
      "Stripe",
      "Sanity",
      "Responsive",
      "canvas-confetti",
    ],
  },
    {
    name: "Share Me",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726058737/841dd85910f3727978e3f7e8062f68e560635f2c-1468x724_nagjxv.webp",
    description:
      "Full-stack social media app where users can upload, download, comment, and save images. Includes smart login and profile pages.",
    link: "https://shareme-en.netlify.app/",
    github: "https://github.com/mohammedsalhyen/ShareMe",
    skills: [
      "React js",
      "Google OAuth",
      "Tailwind",
      "React Router",
      "Sanity",
      "Responsive",
    ],
  },
  {
    name: "Souq-Tech",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726064928/Web_capture_11-9-2024_172828_souq-tech.netlify.app_idfq1i.jpg",
    description:
      "Souq-tech is a multi-vendor Ecommerce, it has a lot of advantages. You can pay, search and filter easily — just open and discover it.",
    link: "https://souq-tech.netlify.app/",
    skills: [
      "React js",
      "TypeScript",
      "Tailwind",
      "React-aos",
      "Swiper",
      "Localization",
    ],
  },
  {
    name: "T-Shop",
    img: "/asset/Screenshot_20-10-2025_202942_t-shop-v1.vercel.app.jpeg",
    description:
      "T-Shop is a simple Ecommerce for training as a task, it has a lot of advantages. you can have wish List and cart you can make crud on it ",
    link: "https://t-shop-v1.vercel.app/",
    github: "https://github.com/mohammedsalhyen/T-shop",
    skills: [
      "Next js (V15)",
      "TypeScript",
      "Tailwind",
      "React-aos",
      "Zustand",
      "Dark&Light mode"
    ],
  },
  {
    name: "Elghazala",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726064544/Web_capture_11-9-2024_172159_main--hitun.netlify.app_tsasbb.jpg",
    description:
      "I developed the front-end of Elghazala — a full stack website for Hitun supermarket showing all available products with a creative design and enhanced performance.",
    link: "https://alghazala.ly",
    skills: [
      "React js",
      "TypeScript",
      "Tailwind",
      "React-aos",
      "Swiper",
      "Localization",
    ],
  },
  {
    name: "Mazad",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726064187/Web_capture_11-9-2024_171554_mazad-app.netlify.app_nzr5dx.jpg",
    description:
      "Mazad is an interactive online auction platform allowing users to participate in real-time auctions, offering a seamless and responsive experience.",
    link: "https://mazad-app.netlify.app/",
    skills: [
      "React js",
      "TypeScript",
      "Tailwind",
      "React-aos",
      "Swiper",
      "Localization",
    ],
  },

  {
    name: ".Trip",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726063434/fdf1fe6e45ce06eb9abb5c12c9f379b3159f4d45-1468x4400_szxwpv.webp",
    description:
      ".Trip is a travel website developed with Next.js. It helps travelers choose destinations at great prices with modern design and animation.",
    link: "https://dot-trip.vercel.app/",
    github: "https://github.com/mohammedsalhyen/.Trip",
    skills: ["Next js", "TypeScript", "Tailwind", "React-aos"],
  },
  {
    name: "Eng System",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726063750/Web_capture_11-9-2024_17840_eng-system.vercel.app_koyych.jpg",
    description:
      "Eng System is a website for an engineering and construction company offering real estate consulting, project management, and design services.",
    link: "https://eng-system.vercel.app/",
    skills: ["React js", "TypeScript", "Tailwind", "React-aos", "Swiper"],
  },
  {
    name: "Smart Motors",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726062424/068ec1d9e5045a9efe5e0ac8d5903ded7dbdc0af-1468x11171_dk2bpi.webp",
    description:
      "Simplified car showroom website allowing users to browse and search for new and used cars.",
    link: "https://smart-motor.netlify.app/",
    github: "https://github.com/mohammedsalhyen/smart-motor",
    skills: ["HTML", "CSS", "Bootstrap", "Responsive", "JS", "Pug"],
  },
  {
    name: "Blood Donation",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726063308/84deb599afef7b0d2c87a7c2a5ad1ac5f1160cd8-1468x4080_a69nbx.webp",
    description:
      "Graduation project focusing on simplifying blood donation through an intuitive, responsive front-end experience.",
    link: "https://mohammedsalhyen.github.io/finalProject/",
    github: "https://github.com/mohammedsalhyen/finalProject",
    skills: ["JS", "SASS", "HTML", "CSS", "Responsive", "Bootstrap"],
  },
  {
    name: "Elite Center",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726059857/025f8db9d760b856fdf0bbe28189444a6bce4eef-1468x3677_hn8u46.webp",
    description:
      "An academic website for Elite Center, offering personalized programs and expert teachers for students.",
    link: "https://elite-center1.netlify.app/",
    github: "https://github.com/mohammedsalhyen/elite-center",
    skills: ["JS", "Sass", "Pug JS", "HTML", "CSS", "Responsive", "Bootstrap"],
  },
  {
    name: "Food App",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726062171/3dd7af2d98b6615229c87f0d42af9893ba03b892-1468x1547_rkgdt8.webp",
    description:
      "Meal Display Web App — allows users to search meal recipes using an external API.",
    link: "https://mohammedsalhyen.github.io/Meal-Display-Interface/",
    github: "https://github.com/mohammedsalhyen/Meal-Display-Interface",
    skills: ["JS", "API Integration", "HTML", "CSS", "Responsive", "Bootstrap"],
  },
  {
    name: "Kasper",
    img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726061559/0ab63ddb0ea817d4fd2cf8c83873947d7d7b3c3b-1468x8449_x3szf6.webp",
    description:
      "Responsive online store designed with HTML & CSS, adapting smoothly to all screen sizes.",
    link: "https://mohammedsalhyen.github.io/html_css_project1/",
    github: "https://github.com/mohammedsalhyen/html_css_project1",
    skills: ["HTML", "CSS", "Responsive"],
  },
];
export const experience = [
  {
    jobTitle: "React Front-end Developer",
    start: "2024-07-01",
    end: "Now",
    workedFor: "MMTech Company",
    responsibleFor: "Design and develop high-quality websites",
  },
  {
    jobTitle: "Freelancer",
    start: "2021-05-01",
    end: "2024-06-01",
    responsibleFor: "Building websites with JavaScript for multiple clients",
  },
  {
    jobTitle: "Training",
    start: "2022-07-31",
    end: "2022-08-11",
    workedFor: "ITI",
    responsibleFor: "IOT Training",
  },
  {
    jobTitle: "Training",
    start: "2021-08-06",
    end: "2021-08-20",
    workedFor: "ITI",
    responsibleFor: "Front-End Development Track",
  },
  {
    jobTitle: "Faculty of Computer Science and Information Systems",
    start: "2019-05-01",
    end: "2023-05-01",
    workedFor: "Minia University",
    responsibleFor: "Department of Computer Science",
  },
];
export const skills = [
  { name: "CSS3", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066143/df88869c237e2841c0108e70b3ae44be15a460c2-256x361_itm53y.svg" },
  { name: "HTML 3", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066226/d4e7402a193dcd29d25ca8c9704f4b0e917bd9c3-256x361_jwalto.svg" },
  { name: "Pug JS (Jade)", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066232/9581a1b754b9bdb7ebdea987073e63eb43ac59aa-2500x2500_wholpu.svg" },
  { name: "Sass", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066320/70eb6d5cdf3836f70d8d13e1b7166cd12cc782fe-256x192_ay2lcc.svg" },
  { name: "TypeScript", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066326/0a6af6143e936cedc834d2d5af35987e0e39e94e-2500x2500_dkb3lh.svg" },
  { name: "Sanity IO", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066373/31fa7a4051dd6836d4bf7fcd7fcd0e4685f9e22a-400x400_wxzfgc.webp" },
  { name: "Github", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066386/4211dcf8891ce55ee4556bf78e75a4f88f52beb7-800x800_hsvdby.svg" },
  { name: "Redux", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066432/5b79ec6b27d13e5f0093a44907efb10e25c0bfe1-2500x2383_blccqg.svg" },
  { name: "Next JS", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066427/5cbd3ec0a09610764d99053e68d5965cf2b3d609-800x800_w9bgvr.svg" },
  { name: "Tailwind CSS", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066494/66425e7f3983055fe55147cbf13284df75ca3f39-32x32_sbhi1w.webp" },
  { name: "React JS", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066529/430af3eb075038cbc5c595feb8bbb772e8512f1e-48x48_kisw9r.webp" },
  { name: "OOP", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066641/60a1bf6c9f73b1be0f20313d9d15582fdba8feab-48x48_n2b91g.webp" },
  { name: "JavaScript", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066509/9eaa901beee3f377ff582d7fbab89ad25b173a09-48x48_oczgsg.webp" },
  { name: "Command Line", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066648/b3bc3af1cb576e4b0e95ae8a94dc771a532252f1-48x50_ioix2a.webp" },
  { name: "Bootstrap", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066657/54a1e71bea375237ada32259058be7b4fbe03589-48x48_peyouc.webp" },
  { name: "Axios", img: "https://res.cloudinary.com/dw8tg6qif/image/upload/v1726066664/cb598b403430745517738d49fa65b31a3b4868fa-32x32_rlmzhv.webp" },
];
