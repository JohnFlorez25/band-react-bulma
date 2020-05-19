import React from 'react';

const BandMusician = ({ musician }) => (
  <div className='column' id={musician.id}>
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-2by1'>
          <img
            src='https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940'
            alt='Placeholder'
          />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-4'>
                {`${musician.first_name} ${musician.last_name}`}
            </p>
            <p className='subtitle is-6'>{`@${musician.twitter}`}</p>
          </div>
        </div>

        <div className='content'>
          {musician.about_me}<br />
          <a href='/'>{`@${musician.skill_1}`}</a>.
          <a href='/'>{`@${musician.skill_2}`}</a>
          <a href='/'>{`@${musician.skill_3}`}</a>
        </div>
      </div>
    </div>
  </div>
);

export default BandMusician;
