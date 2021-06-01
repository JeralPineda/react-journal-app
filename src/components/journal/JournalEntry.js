import React from 'react';

export const JournalEntry = () => {
   return (
      <div className='journal__entry pointer'>
         <div
            className='journal__entry-picture'
            style={{
               backgroundSize: 'cover',
               backgroundImage: 'url(https://www.cice.es/wp-content/uploads/2015/03/pez-artwork-ilustraciones.jpg)',
            }}
         ></div>

         <div className='journal__entry-body'>
            <p className='journal__entry-title'>Un nuevo dia</p>

            <p className='journal__entry-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ut quia dolorum! </p>
         </div>

         <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>30</h4>
         </div>
      </div>
   );
};
