import {
  facebook, linkedin, instagram, twitter, github, facebook1, linkedin1, instagram1, twitter1, github1,  responsive, react, fullstack,info, info1,info2,info3,cafe,cafe1,cafe2,cafe3,ambo,ambo1,ambo2,ambo3,ambo4,aimfit,aimfit1,aimfit2,aimfit3,help,help1,help2,help3,product,p1,p2,p3,gas,gas1,gas2,gas3,parkpro,parkpro1,parkpro2,parkpro3,parkpro4,parkpro5,login
} from '../assets';



const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: '',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: 'Facebook',
    url: '',
    icon: facebook,
    icon1: facebook1,
  },
  {
    id: 3,
    name: 'Instagram',
    url: '',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 4,
    name: 'Twitter',
    url: '',
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/griffin-k',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Java',
    icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'C++',
    icon: 'https://i.redd.it/31b2ii8hchi31.jpg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Sql',
    icon: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Json',
    icon: 'https://www.vectorlogo.zone/logos/json/json-icon.svg',
  },

  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },

  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },

  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Linux',
    icon: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Android Studio',
    icon: 'https://www.vectorlogo.zone/logos/android/android-official.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Firebase',
    icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Canva',
    icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg',
  },

];

const projects = [
  {
    id: 1,
    name: 'Infogator',
    desc: 'Infogator is your ultimate travel companion app. Discover tailored tourist attractions, get in-depth info about each place, including local foods. Experience the best of every location you visit with ease.',
      tech: ['Java', 'Xml', 'Firebase' ,'Canva'],
    img: info,
    carousel: [info1, info2, info3],
    source_link: 'https://github.com/griffin-k/INFOGATOR',
    live_link: '',
  },
  {
    id: 6,
    name: 'Giving Hands',
    desc: ' GIVING HANDS, we empower transparent giving. Donate clothes, food, money, and blood directly to those in need, ensuring your donations reach the intended recipients transparently.',
      tech: ['Sql', 'Canva', 'Vb.Net'],
    img: help,
    carousel: [help1,help2,help3],
    source_link: 'https://github.com/griffin-k',
    live_link: '',
  },
  {
    id: 2,
    name: 'Online Cafe',
    desc: 'Cafe Bloom is an app that simplifies cafe dining. It lets you order from a selection of cafes, view cafe info, menus, and prices. You can choose between delivery or pickup. Theres an Android app for customers and a web-based admin interface for cafe owners.',
    tech: ['Java', 'Kotlin', 'Firebase','Xml'],
    img: cafe,
    carousel: [cafe1, cafe2, cafe3],
    source_link: 'https://github.com/griffin-k',
    live_link: '',
  },
  {
    id: 3,
    name: 'Ambulance Booking App',
    desc: 'Our Ambulance Booking App simplifies the emergency response process for both drivers and customers. Log in with ease using your Google account, choose your preferred hospital, and quickly book an ambulance. Keep tabs on your booking history and track the ambulances real-time location as it rushes to your aid. Multiple payment methods are integrated for a seamless and efficient experience during critical moments.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Java','Firebase'],
    img: ambo,
    carousel: [ambo1, ambo2, ambo3,ambo4],
    source_link: 'https://github.com/griffin-k',
    live_link: '',
  },
   {
    id: 4,
    name: 'Aim Fit',
    desc: 'AimFit brings precision to your yoga practice with cutting-edge TensorFlow pose estimation technology. It captures live video feeds from the web and overlays landmarks to guide your exercises flawlessly. Get real-time feedback for safer and more effective yoga sessions, making it accessible and enjoyable for practitioners of all levels.',
    tech: ['React', 'TensorFlow' ,'Pose-Estimation'],
    img: aimfit,
    carousel: [aimfit1,aimfit2,aimfit3],
    source_link: 'https://github.com/griffin-k',
    live_link: 'https://64d59bb38e0cde19c9aa22ae--papaya-kelpie-ff9f62.netlify.app/',
  },
  
  {
    id: 6,
    name: 'Tasty cookies',
    desc: 'Explore the world of mouthwatering cookies from Teasty Cookies, where each treat is crafted with premium ingredients for a truly divine taste. Indulge in the joy of our delightful selection and satisfy your sweet cravings.',
        tech: ['Html', 'CSS', 'JavaScript'],
    img: product,
    carousel: [p1,p2,p3],
    source_link: 'https://github.com/griffin-k',
    live_link: '',
  },
  {
    id: 4,
    name: 'Gas Leakage Detector',
    desc: 'real-time gas leak detection system.Bot Car Equipped with sensors, this car detects gas leaks and sends instant notifications to a web page for swift response. It provides complete control and peace of mind through a user-friendly interface and pinpoints the exact location of gas leaks for rapid response.',
     tech: ['Javascript', 'Firebase', 'Css','Html','Canva'],
    img: gas,
    carousel: [gas1,gas2,gas3],
    source_link: 'https://github.com/griffin-k',
    live_link: '',
  },
  {
    id: 4,
    name: 'Parking System',
    desc: 'Parking Pro is a smart IoT-based parking solution that tracks slot availability and parking door status in real-time, making parking easy.',
     tech: ['Html', 'JavaScript', 'FireBase','Canva'],
    img: parkpro,
    carousel: [parkpro1,parkpro2,parkpro3,parkpro4,parkpro5],
    source_link: 'https://github.com/griffin-k',
    live_link: '',
  },
  {
    id: 4,
    name: 'Scary Login Page',
    desc: '',
   tech: ['Html', 'JavaScript', 'Css'],
    img: login,
    carousel: [],
    source_link: 'https://github.com/griffin-k',
    live_link: '',
  },
  // {
  //   id: 4,
  //   name: 'Responsive Login Page',
  //   desc: '',
  //   tech: ['React', 'Redux', 'Openweather API'],
  //   img: metricwebapp,
  //   carousel: [metricswebapp1, metricswebapp2],
  //   source_link: 'https://github.com/griffin-k',
  //   live_link: '',
  // },
 
];

const testimonials = [
  {
    id: 1,
    name: 'Muhammad Talha',
    image: 'https://avatars.githubusercontent.com/u/47237123?v=4',
     text: 'I highly recommend Karimullah for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic.',
    country: 'Pakistan',
    linkedIn: '',
  },
  {
    id: 2,
    name: 'Shariq Habib',
    image: 'https://avatars.githubusercontent.com/u/26686673?v=4',
     text: "Throughout our collaboration, I was consistently impressed by Karimullah professionalism, attention to detail, and ability to adapt to changing requirements.",
    country: 'Bangladash',
    linkedIn: '',
  },
  {
    id: 3,
    name: 'Muhammad Ali Hanif',
    image: 'https://avatars.githubusercontent.com/u/52717891?v=4',
   text: "One of Karimullah greatest strengths is his impressive technical expertise. He possesses a deep understanding of the latest technologies and trends in his field, allowing him to tackle complex challenges with ease.",
    country: 'Pakistan',
    linkedIn: '',
  },
  {
    id: 4,
    name: 'Ahmed Hasan Rony',
    image: 'https://avatars.githubusercontent.com/u/77187003?v=4',
    text: 'I really am comfortable with collaborating and coding with karimullah. His ingenious ideas give me a lot of ideas solving a problem multiple ways.',
    country: 'India',
    linkedIn: '',
  },
  {
    id: 5,
    name: 'Malaikah',
    image: 'https://avatars.githubusercontent.com/u/38559635?v=4',
    text: 'Communication was another strength that Karimullah brought to the table. He actively listened, communicated ideas clearly, and collaborated effectively with team members.',
    country: 'Pakistan',
    linkedIn: '',
  },
  {
    id: 6,
    name: 'Hachemi',
    image: 'https://avatars.githubusercontent.com/u/12778013?v=4',
    text: 'I learned too much from you and I can say that you are fantastic . Working with you is always a pleasure, hope that we can work on some project asap.',
    country: 'Russia',
    linkedIn: '',
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'Android Development',
    text: 'I transform your innovative concepts into dynamic Android experiences. With expertise in cutting-edge mobile development technologies and a commitment to excellence, I engineer captivating and intuitive apps that stand out.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Testimonial',
    url: '/#testimonial',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, testimonials, social, services, navLinks,
};
