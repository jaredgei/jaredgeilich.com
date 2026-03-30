import React from 'react';
import 'scss/Hire.scss';

import Image from 'components/Image';

import portrait from 'images/portrait.jpg';

const BRIEFCASE_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z' />
  </svg>
);
const CODE_BRANCH_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <path d='M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z' />
  </svg>
);
const GRADUATION_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <path d='M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z' />
  </svg>
);
const GRAPH_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <path d='M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z' />
  </svg>
);
const HEART_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' />
  </svg>
);
const LANGUAGES_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
    <path d='M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z' />
  </svg>
);
const LOCATION_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
    <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
  </svg>
);
const MAIL_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
  </svg>
);
const PERSON_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
    <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
  </svg>
);
const PHONE_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
  </svg>
);
const WEB_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path d='M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z' />
  </svg>
);

const Hire = () => {
  const renderContactMethod = (text, icon) => (
    <div className='contactMethod'>
      <div className='contactIcon'>{icon}</div>
      <div className='contactText'>{text}</div>
    </div>
  );

  const renderSectionHeader = (title, icon) => (
    <div className='sectionHeader'>
      <div className='sectionIcon'>{icon}</div>
      <div className='sectionTitle'>{title}</div>
      <div className='sectionDivider' />
    </div>
  );

  const renderEntry = (title, url, location, date, description, content) => (
    <div className='entry'>
      <div className='entryTop'>
        <div className='entryTitle'>
          <a href={url} target='_blank' rel='noopener noreferrer' className='titleBold'>
            {title}
          </a>
          {location ? <span className='location'>{` | ${location}`}</span> : ''}
        </div>
        <div className='entryDate'>{date}</div>
      </div>
      <div className='entryDescription'>{description}</div>
      <div className='entryContent'>{content}</div>
    </div>
  );

  return (
    <div className='hire'>
      <div className='resume'>
        <div className='resumeHeader'>
          <div className='portrait'>
            <Image src={portrait} alt='Jared Portrait' />
          </div>
          <div className='me'>
            <div className='name'>Jared</div>
            <div className='name'>Geilich</div>
            <div className='title'>Senior Full-Stack Engineer & Designer</div>
          </div>
          <div className='contact'>
            {renderContactMethod('jgeilich@gmail.com', MAIL_ICON)}
            {renderContactMethod('603-479-9447', PHONE_ICON)}
            {renderContactMethod('jaredgeilich.com', WEB_ICON)}
            {renderContactMethod('Boston, MA', LOCATION_ICON)}
          </div>
        </div>
        <div className='section'>
          {renderSectionHeader('Summary', PERSON_ICON)}
          <div className='sectionContent'>
            Senior full-stack software engineer specializing in TypeScript, React, and Node.js, with deep experience building AI/ML data pipelines and
            user-facing tooling. Proven track record leading frontend engineering and UX design for systems processing millions of data points.
            Focused on bridging complex backend infrastructure with intuitive, high-performance, user-centric interfaces.
          </div>
        </div>
        <div className='section'>
          {renderSectionHeader('Skills', GRAPH_ICON)}
          <div className='sectionContent'>
            <div>
              <strong>Languages:</strong> TypeScript, JavaScript, Python, C++
            </div>
            <div>
              <strong>Frontend:</strong> React, Next.js, HTML, CSS, SCSS
            </div>
            <div>
              <strong>Backend:</strong> Node.js, Express, GraphQL, FastAPI
            </div>
            <div>
              <strong>Databases:</strong> PostgreSQL, MongoDB
            </div>
            <div>
              <strong>Cloud:</strong> AWS (S3, EC2, CloudFront)
            </div>
            <div>
              <strong>Other:</strong> Docker, Ansible, Photoshop, Sketch, Figma, Canva
            </div>
          </div>
        </div>
        <div className='section'>
          {renderSectionHeader('Employment History', BRIEFCASE_ICON)}
          <div className='sectionContent'>
            {renderEntry(
              'Syntiant Corporation',
              'https://www.syntiant.com',
              'Remote',
              'August 2022 - Present',
              'Senior Software Engineer & Head of Frontend Engineering',
              'Architected and maintained a computer vision and audio training pipeline (React, TypeScript, C++, PostgreSQL) processing millions of assets at scale. Reduced model iteration time, improved accuracy, and enabled offline edge deployment in resource-constrained, zero-connectivity environments. Owned frontend engineering and UX strategy across the company, defining architecture, design systems, and development standards.',
            )}
            {renderEntry(
              'Pilot AI',
              'https://pilot.ai',
              'Palo Alto, CA & Remote',
              'June 2018 - August 2022',
              'Senior Software Engineer & Head of Frontend Engineering',
              'Designed and built a greenfield end-to-end model training pipeline for computer vision systems, supporting data ingestion, labeling, training, analysis, and deployment. Built and deployed real-time retail analytics systems across nationwide store networks using MongoDB, Node.js, GraphQL, and React. Established company-wide design systems, component libraries, and testing patterns as primary owner of the frontend codebase.',
            )}
            {renderEntry(
              'Grokker',
              'https://www.grokker.com',
              'San Jose, CA',
              'June 2015 - June 2018',
              'Software Engineer',
              'Built cross-platform video streaming applications (iOS, Android, tvOS, Roku, web), contributing to frontend UX and backend systems using Node.js and MongoDB.',
            )}
          </div>
        </div>
        <div className='section'>
          {renderSectionHeader('Projects', CODE_BRANCH_ICON)}
          <div className='sectionContent'>
            {renderEntry(
              'rpeg.io',
              'https://rpeg.io',
              null,
              null,
              'Lead Engineer & Designer',
              'Lyric synchronization software for musicians and their teams to quickly generate precise word-by-word timing data using a combination of AI and manual input, then generate and customize beautiful lyric videos.',
            )}
            {renderEntry(
              'mediocre.business',
              'https://mediocre.business',
              null,
              null,
              'Lead Engineer & Designer',
              'Built a platform highlighting average-rated businesses to challenge optimization bias in recommendation systems, blending humor with alternative discovery mechanics',
            )}
            {renderEntry(
              'synthesize.consulting',
              'https://github.com/jaredgei/synthesize/tree/main',
              null,
              null,
              'Lead Engineer & Designer',
              'The world’s first micro-consulting platform where users can ask a former McKinsey consultant bite-sized (yes/no or 100 character limited) questions for a fraction of the cost of traditional consulting.',
            )}
            {renderEntry(
              'The Stall Wall',
              'https://github.com/jaredgei/the-stall-wall',
              null,
              null,
              'Lead Engineer & Designer',
              'A chatroom that only allows one user inside at a time, similar to communication via writing on the inside of a bathroom stall.',
            )}
            {renderEntry(
              'Potlux',
              'https://engageduniversity.blogs.wesleyan.edu/2016/02/22/pcse-seed-grants-in-action-report-3-from-potlux/',
              null,
              null,
              'Frontend Engineer & Designer',
              'A sustainability platform for college students to share the programs they are creating at their universities to help the environment.',
            )}
          </div>
        </div>
        <div className='section'>
          {renderSectionHeader('Education', GRADUATION_ICON)}
          <div className='sectionContent'>
            {renderEntry(
              'Wesleyan University',
              'https://www.wesleyan.edu',
              'Middletown, CT',
              'Class of 2015',
              'Computer Science & Film',
              'Graduated with bachelor’s degrees in computer science and film with a 3.8 Major GPA. Also also took a variety of visual design and music courses',
            )}
          </div>
        </div>
        <div className='section'>
          {renderSectionHeader('Languages', LANGUAGES_ICON)}
          <div className='sectionContent'>
            <strong>English</strong> (native proficiency), <strong>Japanese</strong> (conversational proficiency)
          </div>
        </div>
        <div className='section'>
          {renderSectionHeader('Other Interests', HEART_ICON)}
          <div className='sectionContent'>
            I am a musician with experience playing a variety of instruments, as well as arranging, notating, composing, and producing. I have a film
            degree, and have worked with a number of video production softwares. My background in the arts informs a strong attention to detail for
            user experience and code quality in software development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
