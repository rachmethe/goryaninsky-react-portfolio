import React, { useState, useEffect } from 'react';
import { FiCalendar, FiSun, FiRefreshCw } from 'react-icons/fi'; // Импорт иконок
import Header from '../components/layouts/Header';
import Contacts from '../components/layouts/Contacts'; // Импорт контактов

const About = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [weather, setWeather] = useState(null); // Состояние для погоды
  const [lastUpdated, setLastUpdated] = useState('2024-11-24'); // Дата обновления вручную

  useEffect(() => {
    // Установка текущей даты
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('ru-RU'));

    // Получение данных о погоде в Москве
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6173&current_weather=true&timezone=Europe/Moscow'
        );
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <>
      <Header />
      <div className="mx-auto px-4 text-center pt-5 sm:pt-32">
        {/* Секция с заголовками и текстом */}
        <section className="text-center text-slate-700">
          <h2 className="text-2xl font-bold mb-4">Обо мне:</h2>
          <p className="mb-6">
            Я начинающий фронтенд-разработчик с опытом работы в проектном менеджменте. Мои
            профессиональные интересы лежат в области создания удобных и эстетичных
            веб-приложений. Ответственный, доброжелательный и всегда стремлюсь к достижению
            результата. Вдохновляюсь генеративным искусством, новыми технологиями, их
            доступностью и значимостью для общества, а также личностным развитием.
          </p>

          <h2 className="text-2xl font-bold mb-4">Образование:</h2>
          <p className="mb-6">
            Московский университет им. С.Ю. Витте (2018), факультет управления,
            специализация — Управление проектами.
          </p>

          <h2 className="text-2xl font-bold mb-4">Опыт работы:</h2>
          <ul className="list-disc ml-10 text-left mx-auto w-fit">
            <li className="mb-4">
              <strong>ООО ЭНПРОС</strong> (март 2024 — октябрь 2024)
              <br />
              Дефектоскопист ультразвукового контроля: контроль сварных соединений,
              составление отчетов, взаимодействие с заказчиками.
            </li>
            <li className="mb-4">
              <strong>Госкорпорация Росатом</strong> (ноябрь 2022 — декабрь 2023)
              <br />
              Дефектоскопист ультразвукового контроля: контроль сварных соединений,
              составление отчетов, взаимодействие с заказчиками.
            </li>
            <li className="mb-4">
              <strong>Appen Butler Hill</strong> (май 2021 — март 2022)
              <br />
              Оценщик: анализ релевантности рекламных материалов, выявление
              недопустимого контента, проверка англоязычных статей.
            </li>
            <li className="mb-4">
              <strong>Московский аэропорт Домодедово</strong> (март 2020 — март 2021)
              <br />
              Архитектор продуктов: разработка тарифов, описание работы систем,
              подготовка корпоративных дел.
            </li>
            <li className="mb-4">
              <strong>Taurus Technologies</strong> (апрель 2019 — сентябрь 2019)
              <br />
              Руководитель IT-проектов: управление веб-разработкой, прототипирование,
              тестирование, контент-менеджмент.
            </li>
          </ul>
        </section>

        {/* Блок с погодой */}
        <div className="flex justify-end mt-16 mr-28">
          <section className="flex flex-col md:flex-row items-center gap-4 text-slate-700 border-2 border-slate-700 p-4 w-fit">
            {/* Текущая дата */}
            <div className="flex items-center border p-4 border-slate-700 w-[200px]">
              <FiCalendar className="text-slate-500 text-xl mr-4" />
              <div>
                <h3 className="text-sm font-bold">Текущая дата:</h3>
                <p className="text-sm">{currentDate}</p>
              </div>
            </div>
            {/* Погода в Москве */}
            <div className="flex items-center border p-4 border-slate-700 w-[200px]">
              <FiSun className="text-yellow-500 text-xl mr-4" />
              <div>
                <h3 className="text-sm font-bold">Погода в Москве:</h3>
                {weather ? (
                  <p className="text-sm">
                    {weather.temperature}°C, {weather.weathercode_description || 'ясно'}
                  </p>
                ) : (
                  <p className="text-sm">Загрузка...</p>
                )}
              </div>
            </div>
            {/* Дата обновления информации */}
            <div className="flex items-center border p-4 border-slate-700 w-[200px]">
              <FiRefreshCw className="text-blue-500 text-xl mr-4" />
              <div>
                <h3 className="text-sm font-bold">Дата обновления:</h3>
                <p className="text-sm">{lastUpdated}</p>
              </div>
            </div>
          </section>
        </div>




        {/* Контакты */}
        <section className="mt-8">
          <Contacts />
        </section>
      </div>
    </>
  );
};

export default About;
