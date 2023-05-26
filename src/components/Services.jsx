import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import Card from './Card';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

function Services({ services }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const { t } = useTranslation(['profile']);

  const filteredServices = services.filter((item) =>
  t(`${item.name}`).toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Element name="servicesSection">
      <div className='services w-full px-16 py-16 bg-[#d5def8] relative flex flex-col justify-center items-center max-md:px-5 max-sm:px-2'>
        <div className="w-full flex justify-between items-center mt-6 flex-wrap max-md:justify-center gap-10">
          <h1 className='text-center text-4xl font-semibold max-sm:text-3xl '>{t('Перечень наших услуг:')}</h1>
          <div className="flex items-center bg-white px-4 rounded-lg border-[grey] border">
            <SearchIcon />
            <input
              className='services-search text-[18px] max-md:text-[15px] max-md:w-[200px]'
              placeholder={t('Название услуги:')}
              type="text"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="services-cards flex justify-around items-center mt-10 py-10 flex-wrap gap-10 max-md:gap-7 max-[430px]:gap-3 mix-h-[100vh] px-10 max-md:px-2">
          {filteredServices.length > 0 ? (
            filteredServices.map((item) => (
              <div key={item.id}>
                <Link to={`/services/${item.id}`}>
                  <Card name={item.name} id={item.id} img={item.img} />
                </Link>
              </div>
            ))
          ) : (
            <p>{t('Ничего не найдено.')}</p>
          )}
        </div>
      </div>
    </Element>
  );
}

export default Services;
