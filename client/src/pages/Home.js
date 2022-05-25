import React from 'react';
import { useQuery } from '@apollo/client';

import AppointmentForm from '../components/AppointmentForm';

import { QUERY_APPOINTMENTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_APPOINTMENTS);
  const appointments = data?.appointments || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <AppointmentForm/>
        </div>
      </div>
    </main>
  );
};

export default Home;