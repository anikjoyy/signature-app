import React from 'react';
import Title from './Title';

const Home = () => {
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className='bg-gray-400'>
      <Title
        classes={'text-center text-slate-800 text-6xl font-bold pt-10'}
        text={name}
      />
      <Title
        classes={'text-center text-black text-2xl font-semibold pt-5'}
        text={date}
      />
      <div className='grid gap-6 my-6 md:grid-cols-2'>
        <input
          type='date'
          value={date}
          class='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          onChange={handleDateChange}
        ></input>
        <input
          type='text'
          value={name}
          class='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
          onChange={handleNameChange}
        ></input>
      </div>
    </div>
  );
};

export default Home;
