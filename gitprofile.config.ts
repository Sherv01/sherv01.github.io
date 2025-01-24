// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sherv01', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['sherv01/coding-portfolio'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BiasBuster (Work in Progress)',
          description:
            'Educates the newest generation on global issues by analyzing and summarizing biases from left- and right-leaning news outlets, presenting engaging, accessible content in Gen Alpha slang to promote political literacy and diverse perspectives.',
          imageUrl:
            'https://cdn.dorahacks.io/static/files/1947e4f62f96a8aa068140c45caa7860.png@128h.webp',
          link: 'https://dorahacks.io/buidl/21745',
        },
        {
          title: 'CodeGenius',
          description:
            'Web app akin to Genius (Lyrics Website) in the sense that it provides an AI-generated analysis on certain parts of code on mouse hover. Front and back end developed in under 36 hours.',
          imageUrl:
            'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/975/494/datas/gallery.jpg',
          link: 'https://devpost.com/software/code-genius',
        },
        {
          title: 'EduBuddy',
          description:
            'Web app that creates customizable to-do lists by reading course syllabi and integrates a social feature to connect users based on hobbies or schedules. Built with a focus on student productivity.',
          imageUrl:
            'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/048/461/datas/original.png',
          link: 'https://devpost.com/software/edubuddy-e5mkdb',
        },
        {
          title: 'EcoSort: Smart Waste Assistant',
          description:
            'Voice activated smart trash bin prototype that senses when a user is near, listens for the item to be thrown out, and opens the corresponding bin. Developed and built in under 24 hours.',
          imageUrl:
            'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/778/200/datas/gallery.jpg',
          link: 'https://devpost.com/software/echosort-smartwaste-assistant?ref_content=my-projects-tab&ref_feature=my_projects',
        },
        {
          title: 'Mushroom Mister',
          description: 'Developed an automated mushroom misting device for Lion\'s Mane Mushrooms using an Arduino Uno. Built with a team of 5 skilled engineers.',
          imageUrl: 'https://raw.githubusercontent.com/sherv01/sherv01.github.io/main/Non-Template-Files/Mushroom%20Mister%20Image.png',
          link: 'https://drive.google.com/file/d/1bMV5jCVntKlalJKFBizreg99IxAX2MGI/view',
        }, 
        {
          title: 'Gamify: The Web Game',
          description: 'Expanded on my very first coding project by converting it to JavaScript and adapting it to a web game using HTML and CSS. (Make sure to read the README)',
          imageUrl: 'https://www.progressivesoccertraining.com/wp-content/uploads/2021/01/how-to-run-faster.jpg',
          link: 'https://github.com/Sherv01/sherv01.github.io/tree/main/Non-Template-Files/Gamify',
        }, 
        {
          title: 'Engineering Handbook',
          description: '30 Page handbook written entirely in LaTeX outlining my engineering design experiences in my first year of university.',
          imageUrl: 'https://uiconstock.com/wp-content/uploads/2014/11/engineering-blueprint.jpg',
          link: 'https://drive.google.com/file/d/1xtIPOfZ6IoDMwFPEK0IDGClv1PJASTMj/view',
        },
        {
          title: 'Individual Research Projects (IB Internal Assessments)',
          description: 'Carried out meticulous experiments in a lab dealing with live fungus as well as techniques in analytical chemistry. Documented my findings in various research papers.',
          imageUrl: 'https://www.agro-chemistry.com/wp-content/uploads/2021/09/Biobaced-chemistry-molecules-chemie-molekulen-768x512.jpg',
          link: 'https://drive.google.com/drive/folders/1P65C3SKXu5wKiGMWr33C7Q3AbwZHRD0i',
        },
        {
          title: 'Coming Soon',
          description:
            'I am working on more projects!',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Shervin Darmanki Farahani',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 's-d-f',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'shervindarmankifarahani@gmail.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/sherv01/sherv01.github.io/main/Non-Template-Files/Shervin_Darmanki_Farahani_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'C++',
    'C',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'CSS',
    'HTML',
    'Verilog',
    'MATLAB',
    'LaTeX',
    'Git',
    'Docker',
    'Data Structures & Algorithms',
    'Object Oriented Programming',
    'Machine Learning',
    'Digital Logic',
    'Embedded Systems',
  ],
  experiences: [
    {
      company: 'University of Toronto',
      position: 'Programmer and Web Developer',
      from: 'September 2023',
      to: 'Present',
    },
    {
      company: 'University of Ottawa',
      position: 'Hack the Hill Project | Front End Developer',
      from: 'September 27, 2024',
      to: 'September 29, 2024',
    },
    {
      company: 'Hack the 6ix',
      position: 'Hack the 6ix Project | Front End Developer',
      from: 'August 2, 2024',
      to: 'August 4, 2024',
    },
    {
      company: 'University of Toronto',
      position: 'Make U of T Project | Embedded Systems Engineer',
      from: 'Feburary 17, 2024',
      to: 'February 18, 2024',
    },
    {
      company: 'University of Toronto',
      position: 'Mechanics Bridge Project | Software Engineer',
      from: 'November 2023',
      to: 'December 2023',
    },
    {
      company: 'St. Mary Catholic Academy',
      position: 'Independent Researcher in Microbiology and Analytical Chemistry',
      from: 'September 2022',
      to: 'May 2023',
    },
  ],
  certifications: [
    {
      name: 'International Baccalaureate Diploma, 4.0 GPA',
      body: 'Achieved Level 7 (the highest available grade) in every subject and graduated with more than 10 awards recognizing my academic achievements and community involvement',
      year: 'June 2023'
    },
  ],
  educations: [
    {
      institution: 'University of Toronto',
      degree: 'Bachelor of Applied Science, Computer Engineering',
      from: 'September 2024',
      to: 'Present',
    },
    {
      institution: 'University of Toronto',
      degree: 'Bachelor of Applied Science, Engineering Science',
      from: 'September 2023',
      to: 'August 2024',
    },
    {
      institution: 'St. Mary Catholic Academy',
      degree: 'International Baccalaureate Diploma',
      from: 'September 2019',
      to: 'June 2023'
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    
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
    defaultTheme: 'nord',

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
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
