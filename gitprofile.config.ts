// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Gates12', // Your GitHub org/user name. (This is the only required config)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['ATM-SIMULATOR','gitprofile','JAVA-PROJECT','Movie-Ticket-Booking-system'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'My Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      manual: {
        // Properties for manually specifying projects
        projects: ['Gates12/TravellerHub', 'Gates12/2More2Go', 'Gates12/Mapit', 'Gates12/Senthil-Cinema', 'Gates12/College-Portal', 'Gates12/Airline-Ticketing-System'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
   external: {
      header: 'Achievements',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Samsung Innovation Campus',
          description:
            'Achieved Top honors at the prestigious Samsung Innovation Hackathon, showcasing exceptional problem-solving and innovative skills.',
          imageUrl:
            'https://www.sammyfans.com/wp-content/uploads/2022/01/Samsung-Innovation-Campus-1000x576.jpg',
          link: 'https://sic.edc.org/',
        },
        {
          title: 'LeetCode',
          description:
            'Attained an impressive **Highest Contest Rating of 1543 on LeetCode**, placing among the top percentile of global programmers.',
          imageUrl:
            'https://assets.leetcode.com/static_assets/public/images/LeetCode_Sharing.png',
          link: 'https://leetcode.com/u/nycstriker01/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Gates Babu',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/gates-babu/',
    twitter: 'https://x.com/SamuelG24726522',
    instagram: 'https://www.instagram.com/__samuel56/?next=%2F',
    reddit: 'https://www.reddit.com/user/Gates168/',
    youtube: 'https://www.youtube.com/@gates9906', // example: 'pewdiepie'
    udemy: 'https://www.udemy.com/user/samuel-gates-9/',
    medium: 'https://medium.com/@samuelgates36',
    dev: 'https://dev.to/gates_e1ba6f41d487181e992',
    telegram: '@gates65',
    website: 'https://gates12.github.io/gitprofile/',
    phone: '+91 9618028283',
    email: 'gatesbabudakarapu18@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1wG1hPYMIScOPkPogXMix5oIu6iAbzf4t/view', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Java',
    'Tailwind CSS',
    'CSS',
    'Linux',
    'Python',
  ],
  experiences: [
    {
      company: 'Mynerva',
      position: 'MERN Stack Developer',
      from: 'August 2023',
      to: 'November 2023',
      companyLink: 'https://www.mynerva.in/',
    },
    {
      company: 'Abata AI',
      position: 'Backend Developer',
      from: 'August 2024',
      to: 'October 2024',
      companyLink: 'https://abata.in/',
    },
    {
      company: 'Outlier',
      position: 'Machine Learning Engineer',
      from: 'November 2024',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/try-outlier/posts/?feedView=all',
    },
  ],
  educations: [
    {
      institution: 'Indian Institute of Information Technology Lucknow',
      degree: 'Bachelors  Degree',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Narayana Jr College',
      degree: 'Intermediate',
      from: '2018',
      to: '2020',
    },
  ],

  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
