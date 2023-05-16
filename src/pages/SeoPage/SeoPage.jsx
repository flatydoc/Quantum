import { Main } from "../../components/Main/Main";
import { Advantages } from "../../components/Advantages/Advantages";
import { Stages } from "../../components/Stages/Stages";
import { Faq } from "../../components/Faq/Faq";
import { Info } from "../../components/Info/Info";

import image from "../../assets/images/seo_main.jpg";
import { Feedback } from "../../components/Feedback/Feedback";
import { useRef } from "react";
import { useDocumentTitle } from "../../core/hooks/useDocumentTitle";

import { Calculator } from "../../components/Calculator/Calculator";
import { Consult } from "../../components/HomePage/Consult/Consult";

export const SeoPage = () => {
  useDocumentTitle("Qbite | SEO-продвижение");

  const state = {
    main: {
      title: "SEO-продвижение",
      subtitle: "Верхние строчки поисковых систем могут быть Ваши!",
      image,
    },

    info: {
      title: "SEO-продвижение сайтов",
      content:
        "Продвижение сайта (SEO) – это комплекс мер по оптимизации контента и структуры сайта для поисковых систем, с целью улучшение его позиций в выдаче поисковых систем на определенные запросы пользователей. Основная задача SEO-продвижения – привлечение целевой аудитории на сайт. Многие принебрегают заказывать Seo-продвижение своего сайта, тем самым, теряя большое количество новых клиентов. Правильная Seo-оптимизация это ключевой шаг к получению прибыли и узнаваемости бренда.",
    },

    advantages: {
      title: "причины заказать SEO-продвижение в нашей компании",
      subtitle:
        "В нашей команде профессионалы своего дела, которые не только качественно выполнят поставленную задачу, но и всегда подскажут Вам наилучшее решение!",
      items: [
        {
          id: 1,
          title: "Технология SEO 3.0",
          subtitle:
            "Уникальная технология SEO 3.0 позволит привлечь целевых посетителей и эффективно преобразовать их в клиентов.",
        },
        {
          id: 2,
          title: "Белые методы продвижения",
          subtitle:
            "Мы используем только те методы продвижения, которые не запрещены поисковыми системами.",
        },
        {
          id: 3,
          title: "Эффективные инструменты",
          subtitle:
            "В нашей SEO-мастерской используются только действенные инструменты интернет-маркетинга.",
        },
        {
          id: 4,
          title: "Прозрачная отчётность",
          subtitle:
            "Предоставляем детализированные отчеты по раскрутке интернет-проекта.",
        },
      ],
    },

    stages: {
      title: "Этапы SEO-продвижения:",
      items: [
        {
          id: 1,
          subtitle: "Анализ ниши и конкурентов",
          card: "Изучение технической и контентной оптимизации в нише и оценка результатов конкурентов с целью определения необходимого уровня оптимизации сайта и разработки стратегии продвижения сайта",
        },
        {
          id: 2,
          subtitle: "Семантическое проектирование",
          card: "Составление семантического ядра (сбора и группировки ключевых слов), разработки структуры сайта (уровней вложенности, иерархии) и составления технических заданий на написание контента для внутреннего размещения",
        },
        {
          id: 3,
          subtitle: "SEO аудит",
          card: "Анализ сайта на предмет технических ошибок, соответствия требованиям и рекомендациям поисковой системы, поведенческих и коммерческих факторов с целью выявления ошибок и точек роста",
        },
        {
          id: 4,
          subtitle: "Внутренняя оптимизация",
          card: "Оптимизация на уровне исходного кода страницы сайта, целью которой является обеспечение работоспособности сайта и соответствие техническим требованиям поисковой системы. Заказав сайт в нашем агенстве Вы сразу получите оптимизированный сайт",
        },
        {
          id: 5,
          subtitle: "Внешняя оптимизация",
          card: "Повышение узнаваемости и цитируемости своего сайта на других ресурсах с формированием обратных ссылок на оптимизируемый сайт",
        },
        {
          id: 6,
          subtitle: "Мониторинг",
          card: "Регулярное измерение и анализ трафика из органического поиска на страницы сайта, отслеживание и анализ позиций",
        },
      ],
    },
    questions: [
      {
        id: 1,
        heading: "Когда будут первые результаты продвижения?",
        content:
          "Первые результаты вы заметите уже на второй месяц продвижения. Мы предоставим Вам подробный отчет. Попадание в ТОП обычно требует от 3 до 9 месяцев.",
      },
      {
        id: 2,
        heading:
          "Есть ли гарантия, что мой сайт попадет на первую страницу в поисковиках?",
        content:
          "Технология SEO не позволяет гарантировать выход на определенную позицию. Но мы 100% сделаем Ваш сайт лучше. Здесь решающее значение имеет опыт нашей компании и специалистов. Мы уже вывели не один проект на первые места в Google и Яндекс.",
      },
      {
        id: 3,
        heading: "Что эффективнее: SEO или контекст?",
        content:
          "Все зависит от сферы бизнеса. Лучший вариант – использовать оба метода продвижения. Контекст даст быстрые заявки и прибыль. SEO принесет узнаваемость и увеличит клиентопоток в долгосрочной перспективе.",
      },
      {
        id: 4,
        heading: "Входит ли копирайтинг в стоимость продвижения?",
        content:
          "Обычно копирайтинг входит в стоимость, однако объем и количество текстов зависит от выбранного способа продвижения.",
      },
    ],
    feedback: {
      title: "У вас остались вопросы?",
      subtitle:
        "Мы поможем продвинуть Ваш бизнес в интернете. Оставьте свои данные и мы свяжемся с Вами!",
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
      <Calculator scrollToForm={scrollToForm} />
      <Advantages state={state.advantages} />
      <Consult formRef={formRef} />
      <Stages state={state.stages} />
      <Faq questions={state.questions} />
      <Feedback state={state.feedback} />
    </>
  );
};