import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h5>
          Created by the {''}
          <span
          ><a href="https://github.com/BrantMartin/KensAllStarMovers" target="_blank" rel="noopener noreferrer">Developer Dynasty</a>
          </span>{' '}
           team:
          <span
          ><a href="https://github.com/TR742" target="_blank" rel="noopener noreferrer">Tyler</a>
          </span>{''}
          , {''}
          <span
          ><a href="https://github.com/phlipadelphia" target="_blank" rel="noopener noreferrer">Phillip</a>
          </span>{''}
          , {''}
          <span
          ><a href="https://github.com/BrantMartin" target="_blank" rel="noopener noreferrer">Brant</a>
          </span>{''}
          , {''}
          <span
          ><a href="https://github.com/LawsonSV" target="_blank" rel="noopener noreferrer">Lawson</a>
          </span>{''}
          , and {''}
          <span
          ><a href="https://github.com/SamanthaLord22" target="_blank" rel="noopener noreferrer">Samantha</a>
          </span>{''}
          .
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
