import { Main } from "../../components/Main/Main";
import { Advantages } from "../../components/Advantages/Advantages";
import { Stages } from "../../components/Stages/Stages";
import { Faq } from "../../components/Faq/Faq";
import { Info } from "../../components/Info/Info";

import image from "../../assets/images/seo_main.jpg";
import { Feedback } from "../../components/Feedback/Feedback";
import { useRef } from "react";
import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";

export const SeoPage = () => {
  useDocumentTitle("Qbite | SEO-продвижение");

  const state = {
    main: {
      title: "SEO-продвижение",
      image,
    },

    info: {
      title: "SEO-продвижение сайтов",
      content:
        "Продвижение сайта (SEO) – это комплекс мероприятий, грамотное и профессиональное выполнение которого, позволяет продвинуть сайт в поисковых системах (Google, Яндекс и др.). Многие компании пренебрегают заказывать SEO оптимизацию (сео продвижение) своего сайта, тем самым, теряя большое количество клиентов. Раскрутка сайтов – отличный способ получать новых клиентов. Если SEO-специалисты смогли осуществить продвижение сайта в топ 10, то это большой шаг к увеличению вашей прибыли и узнаваемости бренда. Мы занимаемся комплексным SEO продвижением как новых (молодых) сайтов, так и тех, которые находятся не на первой странице в поисковой выдаче в Google и Яндекс. Работаем с любыми видами сайтов. Наше агентство предлагает качественное и быстрое продвижение сайтов в поисковых системах по позициям или трафику, вывод сайта в топ по низким ценам. Вы можете заказать SEO аудит сайта и получить грамотные и профессиональные рекомендации по улучшению позиций сайта в поисковых системах или заказать комплексное SEO продвижение сайтов",
    },

    advantages: {
      title: "причины заказать контекстную рекламу в нашей компании",
      subtitle:
        "В нашей команде профессионалы своего дела, которые не только качественно выполнят поставленную задачу, но и всегда подскажут Вам наилучшее решение!",
      items: [
        {
          id: 1,
          title: "Реклама в любой стране, регионе, городе",
          subtitle:
            "Покажем Вашу рекламу там где Вам нужно, вплоть до конкретного здания.",
        },
        {
          id: 2,
          title: "Рост продаж",
          subtitle: "Привлечение потенциальных клиентов в ваш бизнес.",
        },
        {
          id: 3,
          title: "Контроль расходов и отчётность",
          subtitle:
            "Достигаем оптимального соотношения цены заявки к ее качеству. Предоставляем отслеживание эффективности рекламы.",
        },
      ],
    },

    stages: {
      title: "Этапы для запуска контекстной рекламы:",
      items: [
        {
          id: 1,
          subtitle: "Аналитика рынка",
          card: "Изучение бизнеса клиента: анализ спроса и сезонности. Определяем конкурентов в интернете и анализ.",
        },
        {
          id: 2,
          subtitle: "Бюджетирование",
          card: "Прогнозируем  затраты: стоимость клика, клиента, договора.",
        },
      ],
    },
    questions: [
      {
        id: 1,
        heading:
          "Есть ли гарантия, что мой сайт попадет на первую страницу в поисковиках?",
        content:
          "Технология SEO не позволяет гарантировать выход на определенную позицию. Но мы 100% сделаем ваш сайт лучше. Здесь решающее значение имеет опыт нашей компании и специалистов. Мы уже вывели не один проект на первые места в Google и Яндекс.",
      },
      {
        id: 2,
        heading: "Что эффективнее: SEO или контекст?",
        content:
          "Все зависит от сферы бизнеса. Лучший вариант – использовать оба метода продвижения. Контекст даст быстрые заявки и прибыль. SEO принесет узнаваемость и увеличит клиентопоток в долгосрочной перспективе.",
      },
    ],
    feedback: {
      title: "У вас остались вопросы?",
      subtitle:
        "Мы готовы предложить лучшие решения для вашего бизнеса. Оставьте свои данные и мы свяжемся с вами!",
      option: { name: "SEO-продвижение", code: "3" },
    },
  };

  const formRef = useRef();

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Main state={state.main} scrollToForm={scrollToForm} />
      <Info state={state.info} />
      <Advantages state={state.advantages} />
      <Stages state={state.stages} />
      <Faq questions={state.questions} />
      <Feedback state={state.feedback} formRef={formRef} />
    </>
  );
};
