import React from 'react';
import 'scss/Hire.scss';

import Image from 'components/Image';

import portrait from 'images/portrait.jpg';

const BRIEFCASE_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
    <path d='M400-720h160v-80H400v80ZM578.5-98.5Q520-157 520-240t58.5-141.5Q637-440 720-440t141.5 58.5Q920-323 920-240T861.5-98.5Q803-40 720-40T578.5-98.5ZM160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v116q0 18-15.5 27t-32.5 1q-26-12-54.5-18t-57.5-6q-116 0-198 82t-82 198q0 18 2.5 36.5T450-167q5 17-5.5 32T417-120H160Zm580-128v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60Z' />
  </svg>
);
const CODE_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
    <path d='M440-91 160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm0-366v274l40 23 40-23v-274l240-139v-42l-43-25-237 137-237-137-43 25v42l240 139Z' />
  </svg>
);
const GRADUATION_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
    <path d='M840-320v-236L518-381q-18 10-38 10t-38-10L104-565q-11-6-15.5-15T84-600q0-11 4.5-20t15.5-15l338-184q9-5 18.5-7.5T480-829q10 0 19.5 2.5T518-819l381 208q10 5 15.5 14.5T920-576v256q0 17-11.5 28.5T880-280q-17 0-28.5-11.5T840-320ZM442-141 242-249q-20-11-31-30t-11-41v-152l242 131q18 10 38 10t38-10l242-131v152q0 22-11 41t-31 30L518-141q-9 5-18.5 7.5T480-131q-10 0-19.5-2.5T442-141Z' />
  </svg>
);
const GRAPH_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
    <path d='M680-160q-17 0-28.5-11.5T640-200v-200q0-17 11.5-28.5T680-440h80q17 0 28.5 11.5T800-400v200q0 17-11.5 28.5T760-160h-80Zm-240 0q-17 0-28.5-11.5T400-200v-560q0-17 11.5-28.5T440-800h80q17 0 28.5 11.5T560-760v560q0 17-11.5 28.5T520-160h-80Zm-240 0q-17 0-28.5-11.5T160-200v-360q0-17 11.5-28.5T200-600h80q17 0 28.5 11.5T320-560v360q0 17-11.5 28.5T280-160h-80Z' />
  </svg>
);
const HEART_ICON = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
    <path d='M480-340q54 0 98.5-29.5T646-448q7-15 0-30t-23-21q-15-6-29.5.5T572-477q-12 27-37.5 42T480-420q-29 0-54.5-15T388-477q-7-15-21.5-21.5T337-499q-16 6-23 21t0 30q23 49 67.5 78.5T480-340Zm-74.5-214.5Q420-569 420-590t-14.5-35.5Q391-640 370-640t-35.5 14.5Q320-611 320-590t14.5 35.5Q349-540 370-540t35.5-14.5Zm220 0Q640-569 640-590t-14.5-35.5Q611-640 590-640t-35.5 14.5Q540-611 540-590t14.5 35.5Q569-540 590-540t35.5-14.5ZM480-756q34-40 81-62t99-22q94 0 157 63t63 157q0 42-12.5 80.5t-43 83Q794-412 742.5-359T613-236l-80 70q-23 20-53 20t-53-20l-80-70q-78-70-129.5-123t-82-97.5q-30.5-44.5-43-83T80-620q0-94 63-157t157-63q52 0 99 22t81 62Z' />
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
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
    <path d='M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Z' />
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
          {renderSectionHeader('Projects', CODE_ICON)}
          <div className='sectionContent'>
            {renderEntry(
              'rpeg.io',
              'https://rpeg.io',
              null,
              null,
              'Founder & Sole Engineer',
              'Lyric synchronization software for musicians and their teams to quickly generate precise word-by-word timing data using a combination of AI and manual input, then generate and customize beautiful lyric videos.',
            )}
            {renderEntry(
              'mediocre.business',
              'https://mediocre.business',
              null,
              null,
              'Co-Founder & Sole Engineer',
              'Built a platform highlighting average-rated businesses to challenge optimization bias in recommendation systems, blending humor with alternative discovery mechanics.',
            )}
            {renderEntry(
              'synthesize.consulting',
              'https://github.com/jaredgei/synthesize/tree/main',
              null,
              null,
              'Co-Founder & Sole Engineer',
              'The world’s first micro-consulting platform where users can ask a former McKinsey consultant bite-sized (yes/no or 100 character limited) questions for a fraction of the cost of traditional consulting.',
            )}
            {renderEntry(
              'The Stall Wall',
              'https://github.com/jaredgei/the-stall-wall',
              null,
              null,
              'Co-Founder & Sole Engineer',
              'A chatroom that only allows one user inside at a time, similar to communication via writing on the inside of a bathroom stall.',
            )}
            {renderEntry(
              'Potlux',
              'https://engageduniversity.blogs.wesleyan.edu/2016/02/22/pcse-seed-grants-in-action-report-3-from-potlux/',
              null,
              null,
              'Lead Frontend Engineer & Designer',
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
