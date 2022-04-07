const profileData = {
  title: 'Resume',
  name: 'Vipin Yadav',
  sub_title: 'Frontend Developer',
  logoURL: 'assets/images/dp.jpg',
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>JavaScript</strong>
     and it's applications. Experienced in designing and implementing sophisticated UI/UX with
      Progressive Web Application standards and application life-cycle managements.`,
    contact: {
      email: 'imvpn22@gmail.com',
      phone: '+91-9919716378',
      address: 'Bangalore, IN'
    }
  },
  links: [
    { title: 'Codepen', src: 'https://codepen.io/imvpn22' },
    { title: 'Github', src: 'https://github.com/imvpn22' },
    { title: 'LinkedIn', src: 'https://www.linkedin.com/in/imvpn22' }
    // { title: 'Twitter', src: 'https://twitter.com/imvpn22' }
    // { title: 'HackerEarth', src: 'https://www.hackerearth.com/@imvpn22' },
  ],
  education: [
    {
      alma: 'FET, GKV, Haridwar',
      duration: '2014 - 2018',
      std: 'B.Tech. (Computer Science & Engineering)',
      score: '71.00%'
    },
    {
      alma: 'Jwala Devi SVMIC, Prayagraj',
      duration: '2011 - 2013',
      std: 'Class XI - XII (PCM)',
      score: '89.80%'
    },
    {
      alma: 'Jwala Devi SVMIC, Prayagraj',
      duration: '2011 - 2013',
      std: 'Class IX - X (PCM)',
      score: '73.33%'
    }
  ],
  skills: [
    {
      category: 'Programming Languages',
      topics: ['TypeScript', 'JavaScript', 'C', 'C++']
    },
    {
      category: 'Frameworks / Libraries',
      topics: [
        'ReactJS',
        'Redux',
        'NodeJS',
        'Express',
        'Angular',
        'Bootstrap',
        'antd'
      ]
    },
    {
      category: 'Databases',
      topics: ['MongoDB', 'PostgreSQL']
    }
  ],
  projects: [
    {
      title: 'Restaurant Review',
      duration: 'June - Nov 2018',
      link: 'https://github.com/imvpn22/restaurant-review-pwa',
      desc: `A web-app to list, view and add reviews of restaurents.
      The app includes filtering based on location, cuisine and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support and improved accessibility.`
    },
    {
      title: 'WhiteBoard',
      duration: 'Jun - Aug 2017',
      link: 'https://github.com/imvpn22/whiteboard',
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`
    }
  ],
  experiences: [
    {
      organization: 'Mobile Premier League',
      title: `Software Development Engineer 1`,
      date: 'Apr 2020 - Present',
      details: [
        `Working on the development of internal tools to provide ease in the work of the operation team with tech stack of
        <strong>ReactJS</strong> with <strong>SCSS</strong> and <strong>Redux</strong> for frontend and <strong>NodeJS-Express</strong>
        with protobuf for the backend.`,
        `Created a customized Content Management System for MPL's website, to update content and images on the fly for different pages.`
      ]
    },
    {
      organization: 'Wipro',
      title: `Project Engineer`,
      desc: `Project Engineer`,
      date: 'Aug 2018 - Apr 2020',
      details: [
        `Contributed in the development of a <strong>collaborative online
        blueprint editor</strong> by translating the design mockups into reusable UI components
        with industry-standard UX patterns using <strong>Angular</strong> with <strong>SCSS</strong>,
        <strong>NgRx</strong> and <strong>Angular-Material</strong> and adding actions to those by
        creating services to integrate backend REST-APIs.`,
        `Resolved UI/UX issues by refactoring React components and re-structuring CSS/SCSS of an internal project with codebase of ReactJS-Redux.`
      ]
    },
    {
      organization: 'Venuemonk',
      title: 'Full-Stack Developer Intern',
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' rel='noreferrer' href='https://www.venuemonk.com/'>
      <strong> Venuemonk </strong> </a> (<a target='_blank' rel='noreferrer' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: 'Jan 2018 - Apr 2018',
      details: [
        `Designed and developed a <strong>Venue Onboarding platform</strong> to streamline and automate
        the onboarding process of partner venues using <strong>React.js-Redux</strong> frontend and
        <strong>Node.js-Express, MongoDB</strong> backend.`
      ]
    },
    {
      organization: 'Hasura',
      title: 'Product Development Intern (Remote)',
      desc: `<strong>Product development intern</strong> at <a target='_blank' rel='noreferrer' href='https://hasura.io/'>
      <strong> Hasura </strong> </a> (<a target='_blank' rel='noreferrer' href='https://goo.gl/8V3jBy'> https://goo.gl/8V3jBy</a>)`,
      date: 'Jun 2017 - Aug 2017',
      details: [
        `Created a web-app using <strong>Node.js-Express</strong> with <strong>EJS</strong> server-side-templating on
        <strong>Hasura's BaaS platform</strong> with features of group-chat and a
        sketch board for real-time collaboration with peers. The work was more focused
        towards <strong>using auth and data APIs</strong> offered by the platform, deploying the app,
        testing and reporting the bugs in it.`
      ]
    }
  ],
  certifications: [
    {
      desc: `<strong>Mobile Web Specialist Nanodegree</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: 'May - Nov 2018'
    },
    {
      desc: `<strong>Introduction to Modern Application Development</strong>, a MOOC by <em> NPTEL (IIT Madras)
      and Hasura</em>. Ranked at <strong> top 10 percentile </strong> among more than 2500 candidates.
       (<a target='_blank' rel='noreferrer' href='https://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'>
       https://goo.gl/X3HEdR</a>)`,
      date: 'Jan - Mar 2017'
    }
  ],
  events: []
};
