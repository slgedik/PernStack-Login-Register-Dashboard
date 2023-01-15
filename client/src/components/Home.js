import React from 'react';
import { Link } from 'react-router-dom';
function Home({ setAuth, setCli }) {
  return (
    <div>
      <button>
        <Link to='/login' onClick={() => setAuth(false)}>
          vet giriş
        </Link>
      </button>
      <button>
        <Link to='/client-Login' onClick={() => setCli(false)}>
          Müşteri giriş
        </Link>
      </button>
    </div>
  );
}

export default Home;
