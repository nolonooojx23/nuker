import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Contact from './components/Contact'
import ServicesInfo from './components/ServicesInfo'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import icon1 from '../public/image/icon.png';
import icon2 from '../public/image/icon2.png';
import icon3 from '../public/image/icon3.png';
import icon4 from '../public/image/icon4.png';
import icon5 from '../public/image/icon5.png';
import icon6 from '../public/image/icon6.png';
import icon7 from '../public/image/icon7.png';
import icon8 from '../public/image/icon8.png';
import icon9 from '../public/image/icon9.png';
import icon10 from '../public/image/icon10.png';
import icon11 from '../public/image/icon11.png';
import icon12 from '../public/image/icon12.png';
import icon13 from '../public/image/icon13.png';
import icon14 from '../public/image/icon14.png';
import icon15 from '../public/image/icon15.png';



function App() {
  const [showbtn, setShowbtn] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 135) {
      setShowbtn(true)
    } else {
      setShowbtn(false)
    }
  })

  const services = [
    { id: 1, name: 'Распростронение листовок.', description: 'Организуем эффективное распростронение рекламы от печати до раздачи листовок. Промоутеры подбираються по вашим критериям и по хорошим отзывам от других клиентов. Согласуйте распространение рекламы заранее, так мы сможем подобрать наиболее подходящего промоутера.', img: icon1, },
    { id: 2, name: 'Расклейка объявлений.', description: 'Сделаем макет продающего объявления. Напечатаем и доставим листовки. Подберем проверенных расклейщиков с высоким рейтингом и по хорошим отзывам от клиентов. Проклеим по дворам, подъездам, этажамю Проконтролируем расклейщиков и предоставим фотоотчет.', img: icon2 },
    { id: 3, name: 'Печать и дизайн листовок.', description: 'Изготовим листовки, флаеры, плакаты, афишы и другую полиграфию. Организуем верстку дизайн-макета и печать полиграфической продукции. Доставим готовую печатную продукцию на адрес.', img: icon3 },
    { id: 4, name: 'Услуга промоутеров с рупором.', description: 'Подберем проверенных промоутеров и бесплатно сделаем замену по вашему желанию. Промоутеры проверяются на опрятную внешность, активность, честность и подбираються по хорошим отзывам от других клиентов. Вас ждут 39 000 промоутеров на раздачу листовок, расклейку, анкетирование, дегустацию, выставку, мероприятия.', img: icon4 },
    { id: 5, name: 'Проведение промо-акций, дегустаций.', description: 'Организуем и проведем полевое исследование: анкетирование, сбор контактов, подсчет трафика, тайный покупатель. Подберем полевой промо-персонал по хорошим отзывам от других клиентов и прокотролируем его работу. Обработаем и предоставим актуальные данные с "полей" в режиме онлайн.', img: icon5 },
    { id: 6, name: 'Аренда и продажа промостойек.', description: 'Изготовим оборудование и предоставим реквизит для проведения промо-акции. Организуем брендироварие и нанесения логотипа на промо-продукцию. Доставим на место проведение рекламной акции и организуем хранение.', img: icon6 },
    { id: 7, name: 'Украшение шарами.', description: 'Мы специализируемся на украшении шарами и предлагаем полный спектр услуг, чтобы сделать вашу следующую промо-акцию незабываемой! Наша команда опытных профессионалов готова изготовить красочные шары и предоставить вам все необходимое оборудование для проведения рекламной акции. Мы учтем ваши предпочтения и цели, чтобы создать уникальный дизайн, отражающий ваш бренд.', img: icon7 },
    { id: 8, name: 'Опросы, маркетинговое исследование.', description: 'Организуем и проведем полевое исследование: анкетирование, сбор контактов, подсчет трафика, тайный покупатель. Подберем полевой промо- персонал по хорошим отзывам от других клиентов и проконтролируем его работу. Обработаем и предоставим актуальные данные с "полей" в режиме онлайн.', img: icon8 },
		{ id: 9, name: 'Кастинг менеджер.', description: 'Наше агентство проводит набор на должность кастинг-менеджера! Если вы талантливы в организации и проведении кастингов, то у нас есть отличная возможность для вас. Ваша основная ответственность будет заключаться в организации и проведении кастингов для различных проектов. Вам предстоит работать в тесном взаимодействии с режиссерами, продюсерами и клиентами, чтобы найти подходящих кандидатов для различных ролей и задач. ', img: icon9 },
		{ id: 10, name: 'Организция массовок.', description: 'Наше агентство готово организовать массовку от 1 до 1000 участников из нашей обширной базы временного персонала, которая насчитывает 39 000 человек! Мы предлагаем широкий выбор кандидатов и можем подобрать участников по любым критериям, отвечающим требованиям вашего проекта. Наш профессиональный коллектив проведет фотокастинг и поможет вам выбрать идеальных кандидатов для вашей массовки.', img: icon10 },
    { id: 11, name: 'Услуга тайный покупатель.', description: 'Наше агентство предлагает услугу тайного покупателя, которая поможет вам оценить качество обслуживания и клиентского опыта в вашем бизнесе. Мы предоставляем профессиональных тайных покупателей, которые будут действовать в качестве обычных клиентов, наблюдая, взаимодействуя с вашим персоналом и оценивая различные аспекты вашего бизнеса. Наша услуга тайного покупателя позволяет вам получить объективную и непредвзятую оценку качества обслуживания.', img: icon11 },
    { id: 12, name: 'Организация выставок, корпоративов.', description: 'Наше агентство специализируется на организации выставок и корпоративных мероприятий, которые помогут вам создать незабываемые и успешные события. При организации выставок мы предлагаем полный спектр услуг, начиная от планирования и дизайна до управления и проведения самого мероприятия. Мы работаем в тесном сотрудничестве с вами, чтобы понять ваши цели и потребности, и создать уникальную концепцию выставки. Мы занимаемся выбором подходящего места, разработкой выставочного стенда, логистикой, привлечением посетителей, а также координацией работы на мероприятии.', img: icon12 },
    { id: 13, name: 'Регулеровка и проведение праздников.', description: 'Наше агентство предлагает услуги по регулировке и проведению праздников, чтобы сделать ваше мероприятие ярким, запоминающимся и полным веселья. Мы специализируемся на различных типах праздников, включая дни рождения, свадьбы, юбилеи, корпоративные вечеринки, выпускные и другие особые события. Наша команда профессионалов обладает опытом в создании атмосферы, которая отражает вашу индивидуальность и пожелания. Мы предлагаем полный спектр услуг, начиная от планирования и дизайна праздника до его осуществления.', img: icon13 },
    { id: 14, name: 'Установка наружной рекламы.', description: 'Наше агентство специализируется на установке наружной рекламы, которая поможет привлечь внимание вашей целевой аудитории и повысить узнаваемость вашего бренда или продукта. Мы предлагаем широкий спектр услуг по установке наружной рекламы, включая консультации, планирование, дизайн, производство и установку различных видов наружной рекламы. Мы работаем с вами, чтобы определить ваши цели и потребности, и разработать наиболее эффективные решения для достижения ваших рекламных целей.', img: icon14 },
    { id: 15, name: 'Свободные руки помощи.', description: '"Свободные руки помощи" - это универсальная услуга, предназначенная для облегчения вашей повседневной жизни и освобождения времени. Мы предлагаем широкий спектр услуг, чтобы помочь вам с различными задачами и обязанностями, давая вам возможность сконцентрироваться на более важных вещах. Наша команда профессионалов готова помочь вам с различными задачами, включая: Домашние дела, Персональная организация, Административная помощь, Личные покупки , Личный водитель и тд.', img: icon15 },
  ];


  return (
    <div className="App">
      <BrowserRouter>
        <Link to='/contact' className={showbtn ? 'showbtn-contact active z-[2000]' : 'showbtn-contact z-[2000]'}><LocalPhoneIcon /></Link>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<><Home /><Contact /></>} />
          <Route path="/services/:id" element={<ServicesInfo services={services} />} />
        </Routes>
        <About />
        <Services services={services} />
        <Location />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
