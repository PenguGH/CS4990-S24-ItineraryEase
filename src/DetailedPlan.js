import React from 'react';

const DetailedPlan = ({ plan }) => {
  return (
    <div>
      <h2>Your Generated Travel Plan</h2>
      <pre>{JSON.stringify(plan, null, 2)}</pre>
    </div>
  );
};

export default DetailedPlan;