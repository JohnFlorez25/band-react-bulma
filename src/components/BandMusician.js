import React from 'react';

const BandMusician = (props) => (
  <div class='column'>
    <div class='card'>
      <div class='card-image'>
        <figure class='image is-2by1'>
          <img
            src='https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940'
            alt='Placeholder'
          />
        </figure>
      </div>
      <div class='card-content'>
        <div class='media'>
          <div class='media-content'>
            <p class='title is-4'>John Smith</p>
            <p class='subtitle is-6'>@johnsmith</p>
          </div>
        </div>

        <div class='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a href='/'>@bulmaio</a>.<a href='/'>#css</a>
          <a href='/'>#responsive</a>
        </div>
      </div>
    </div>
  </div>
);

export default BandMusician;
