import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import Card from './Card';

function Services({ services }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredServices = services.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Element name="servicesSection">
      <div className='services w-full px-16 py-16 bg-[#d5def8] relative flex flex-col justify-center items-center max-md:px-10 max-sm:px-5'>
        <div className="w-full flex justify-between items-center mt-6 flex-wrap max-md:justify-center gap-10">
          <h1 className='text-center text-4xl font-semibold max-sm:text-3xl '>Перечень наших услуг:</h1>
          <div className="flex flex-col gap-5">
					<p>Найти услуги:</p>
					<input className='services-search' placeholder='Название услуги' type="text" value={searchText} onChange={handleSearchChange} />
					</div>
        </div>
        <div className="services-cards flex justify-around items-center mt-10 py-10 flex-wrap gap-10 max-h-[100vh] overflow-y-scroll px-10">
				{filteredServices.length > 0 ? (
            filteredServices.map(item => (
              <div key={item.id}>
                <Link to={`/services/${item.id}`}>
                  <Card name={item.name} id={item.id} img={item.img} />
                </Link>
              </div>
            ))
          ) : (
            <p>Ничего не найдено.</p>
          )}
        </div>
      </div>
    </Element>
  );
}

export default Services;
