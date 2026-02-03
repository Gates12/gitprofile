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
        projects: ['Gates12/UHC-Policy-ChatBot', 'Gates12/Patient-Management-System', 'Gates12/Production-Ready-CI-CD-Pipeline', 'Gates12/Senthil-Cinema', 'Gates12/Library-Management-System', 'Gates12/Airline-Ticketing-System'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
    website: 'https://gates12.github.io/gitprofile/',
    phone: '+91 9618028283',
    email: 'gatesbabu1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1hj-zg4JBkWngDE_dSt0DeBkZKbno8-0Y/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'Goland',
    'SpringBoot',
    'Docker',
    'Kubernetes',
    'Linux',
    'SQL',
    'Jenkins',
    'AWS',
    'Ansible,',
    'Terraform,',
  ],
  experiences: [
    {
      company: 'Abata AI',
      position: 'Software Engineer Intern',
      from: 'August 2024',
      to: 'January 2025',
      companyLink: 'https://abata.in/',
    },
    {
      company: 'Hashout Technologies',
      position: 'Software Engineer',
      from: 'March 2025',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/hashout-technologies/',
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
  
  
  // Track visitor interaction and behavior. https://www.hotjar.com
  // Hides the switch in the navbar
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
