import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Make sure your styles.css is imported
export default function Info() {
    return (
    <div>
      <div className="px-4 py-5 my-5 text-center head">
        <h1 className="display-5 fw-bold text-body-emphasis">Welcome to MUN IITI 2024</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            MUN IITI is going to be an extraordinary intellectual and social conference 
            that brings together an amazing assortment of young minds from across India
            to engage in and gain first-hand experience of negotiating processes by playing 
            the role of diplomats for a period of two days. At a personal level, this MUN 
            endeavour will stretch the general knowledge & awareness of the participants
            while sensitising them to the challenging global issues and the intricate 
            obstacles of being a global leader. Moreover, it will develop and enhance 
            skills to negotiate, articulate and market ideas along with fostering critical and
            creative thought process to spontaneously come up with solutions to some grave world problems.
          </p>
        </div>
      </div>
    </div>
  );
};
