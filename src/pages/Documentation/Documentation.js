import React from 'react';
import Card from '../../components/Card/Card';

const Documentation = () => {
   return (
      <div>
         <Card>
            <h2>You fixed the Documentation!</h2>
            <p>Here are some hint</p>
            <ul>
               <li>Make sure all Components are capitalized.</li>
               <li>If a file is importing a file, make sure the file exists and the component has been exported!</li>
               <li>Sometimes there are errors, but React won't pick them up because they are behavioural errors. Do all your links work?</li>
            </ul>
         </Card>
      </div>
   );
};

export default Documentation;
