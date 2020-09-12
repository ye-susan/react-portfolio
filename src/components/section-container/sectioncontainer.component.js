import React from 'react';
import './sectioncontainer.component.scss';

function SectionContainer(props) {
    return (
        <div className='section-container'>
            {/* content */}
            <h1>About</h1>
            <p>
                Hi there! 🤓
                I'm a full-stack developer currently volunteering at Hack for LA (where I write documentation and assist with adding new features to the site).

                I'm always looking to learn about new (tech/productivity hacks/relaxing shows/hikes/books/cultures) and looking forward to meeting fellow engineers 👯 - connect with me on LinkedIn!
                Feel free to reach out to me if you're also interested in getting involved in Hack for LA/civic tech.
            </p>
        </div>
    );
}

export default SectionContainer;