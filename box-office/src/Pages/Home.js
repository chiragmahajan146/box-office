import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
// import Title from '../components/Title';

const Home = () => {
  const [input] = useState('');

  const onInputChange = ev => {
    console.log(ev.target.value);
  };
  return (
    <MainPageLayout>
      {/* <Title title="box office" subtitle="are u looking for ?" />, this is homeS{' '} */}
      <input type="text" onChange={onInputChange} />
    </MainPageLayout>
  );
};

export default Home;
