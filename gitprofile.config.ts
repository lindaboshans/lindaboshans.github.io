// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lindaboshans', // Your GitHub org/user name. (This is the only required config)
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
      header: 'Github Projects',
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
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Advancing GABAergic Neuron Development: Insights from Single-cell RNA-sequencing',
          description:
            'This project showcases an analysis of single-cell RNA sequencing data from induced pluripotent stem cells differentiated into GABAergic inhibitory neurons, \
            utilizing R scripts tailored for 10x Genomics scRNA-sequencing data. Aimed at advancing our understanding of neuronal differentiation, \
            this research compares various protocols to identify the one that yields neurons most closely resembling mature, forebrain-specific inhibitory neurons. \
            The outcome of this project not only sheds light on the optimal strategies for neuronal differentiation but also contributes significantly to the field \
            of regenerative medicine and neural research',
          imageUrl:
            'https://i.imgur.com/Y9QTVyS.png',
          link: 'https://github.com/lindaboshans/scRNA-seq-pipeline',
        },
        {
          title: 'Fitbit Insights: Analyzing the Impact of Activity on Heart Rate and Sleep Quality',
          description:
            'In this project I explore the the nuanced relationship between physical activity, resting heart rate, and sleep quality \
            through detailed analysis of my personal Fitbit data. This project delves into whether activity levels can influence \
            cardiovascular efficiency and sleep, employing data processing, feature engineering and linear regression. Despite \
            challenging conventional wisdom with findings of no significant correlation between activity levels and expected health \
            outcomes, this exploration sheds light on the complex factors affecting our well-being, highlighting the importance of \
            a holistic approach to health analytics.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/lindaboshans/Fitbit-Data-Analysis',
        },
        {
          title: 'Harmonizing Preferences: Machine Learning for Spotify Song Predictions',
          description:
            '"Harmonizing Preferences" is a data science project that explores the use of machine learning to predict personal music tastes on Spotify. \
            Through the process of data scraping, exploratory data analysis, and testing various algorithms, the project culminates \
            in training a predictive model with an 86.73% F1 score, showcasing the potential of machine learning in personalizing\
            music recommendations.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/lindaboshans/Spotify-Recommendation-System/',
        },
        {
          title: 'Analyzing New York City's Motor Vehicle Crashes: Trends and Fatalities Across Boroughs',
          description:
            'This project delves into New York City's motor vehicle crash data, aiming to identify trends in fatal crashes\
            and their leading causes by borough. Through meticulous data cleaning and exploratory analysis, it was found that \
            Brooklyn, followed by Queens, has the highest incidence of crashes when adjusted for population. This analysis not\
            only honed my data analysis skills but also spotlighted critical areas for potential safety improvements.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/lindaboshans/EDA-for-NYC-Motor-Vehicle-Crashes',
        },
        {
          title: 'Mapping cis-regulatory elements in human neurons links psychiatric disease heritability and activity-regulated transcriptional programs',
          description:
            'This publication showcases my work in analyzing and integrating bulk RNA-sequencing, ATAC-sequencing, and CUT&RUN-sequencing of histone modifications and transcription factors \
             in order to identify regions of the genome in neurons that respond to stimulation, and whether these regions infer disease heritablity.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9219592/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Linda Lee',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'linda-seong-lee',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', 
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'lindaboshans@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'RNA-seq/scRNA-seq',
    'ATAC-seq',
    'CUT&RUN-seq',
    'Nextflow',
    'Snakemake',
    'Singularity',
    'Docker',
    'SQL',
    'Git',
    'HPC',
    'Python',
    'R',
    'Data Analysis',
    'Machine Learning',
  ],
  experiences: [
    {
      company: 'Icahn School of Medicine at Mount Sinai',
      position: 'Postdoctoral Fellow',
      from: 'August 2020',
      to: 'Present',
      companyLink: 'https://labs.neuroscience.mssm.edu/project/yang-lab/',
    },
  ],
  certifications: [
    {
      name: 'MIT Applied Data Science Program',
      body: 'statistics, machine learning, deep learning',
      year: 'March 2022 - June 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'University of Connecticut',
      degree: 'PhD in Physiology & Neurobiology',
      from: '2013',
      to: '2020',
    },
    {
      institution: 'University of Connecticut',
      degree: 'B.S in Molecular & Cell Biology',
      from: '2008',
      to: '2012',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
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
    defaultTheme: 'winter',
    disableSwitch: true,

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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
