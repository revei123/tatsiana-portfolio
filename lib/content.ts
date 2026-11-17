import type { Locale } from "./content-types";

export type { Locale } from "./content-types";

export const LINKS = {
  telegram: "https://t.me/yanovskay_tatsiana",
  github: "https://github.com/revei123",
  email: "mailto:tatyanapabota@gmail.com",
  emailRaw: "tatyanapabota@gmail.com",
} as const;

export function telegramHref(text?: string) {
  if (!text) return LINKS.telegram;
  return `${LINKS.telegram}?text=${encodeURIComponent(text)}`;
}

/**
 * Service ids. `catalog` and `shop` are reserved: she has not shipped those yet.
 * To show a card later, set `visible: true` and fill the copy and a sourced price.
 * Do not invent a number — leave `priceKind: "request"` until a real price exists.
 */
export type ServiceId =
  | "landing"
  | "multipage"
  | "telegram-bot"
  | "cms-fill"
  | "audit"
  | "catalog"
  | "shop";

export type PriceLine = { label: string; amount: string };

export type Service = {
  id: ServiceId;
  visible: boolean;
  priceKind: "from" | "request";
  /** Where the figure came from. Not shown on the page. */
  source: string;
  price: Record<Locale, string>;
  lines?: Record<Locale, PriceLine[]>;
  ru: { title: string; summary: string; includes: string[] };
  en: { title: string; summary: string; includes: string[] };
};

const OWNER_USD =
  "Цены назвала владелица 17.11.2026 в долларах. Курс НБРБ на эту дату: 1 USD = 2,9977 BYN. В рублях на сайте больше не показываем.";

export const SERVICES: Service[] = [
  {
    id: "landing",
    visible: true,
    priceKind: "from",
    source: OWNER_USD + " Сайт-визитка или лендинг — от $85.",
    price: { ru: "от $85", en: "from $85" },
    ru: {
      title: "Сайт-визитка или лендинг",
      summary:
        "Одна страница или короткий сайт: что вы делаете, для кого и как оставить заявку.",
      includes: [
        "Адаптивная вёрстка на чистом коде, без конструктора",
        "Форма заявки в Telegram или на почту",
        "Базовые title и description для поиска",
        "Передача файлов после запуска",
      ],
    },
    en: {
      title: "Business-card site or landing page",
      summary:
        "One page or a short site: what you do, who it is for, and how to leave a request.",
      includes: [
        "Responsive layout in clean code, not a website builder",
        "A request form that opens Telegram or email",
        "Basic title and description for search",
        "Files handed over after launch",
      ],
    },
  },
  {
    id: "multipage",
    visible: true,
    priceKind: "from",
    source: OWNER_USD + " Многостраничный сайт — от $200, третий язык отдельно.",
    price: { ru: "от $200", en: "from $200" },
    ru: {
      title: "Многостраничный сайт",
      summary: "Несколько страниц: структура, тексты по вашим данным и мобильная версия.",
      includes: [
        "Страницы под задачу и мобильная версия",
        "Форма заявки",
        "Третий язык считается отдельно",
      ],
    },
    en: {
      title: "Multi-page site",
      summary: "Several pages: a structure, copy from your materials, and a mobile version.",
      includes: [
        "Pages for the task and a mobile version",
        "A request form",
        "A third language is priced separately",
      ],
    },
  },
  {
    id: "telegram-bot",
    visible: true,
    priceKind: "from",
    source: OWNER_USD + " Простой Telegram-бот — от $40. Сложнее — по объёму.",
    price: { ru: "от $40", en: "from $40" },
    ru: {
      title: "Простой Telegram-бот",
      summary: "Бот с меню и заявкой. Если сценарий сложнее этого списка, считаю по объёму.",
      includes: [
        "Меню",
        "Ответы на частые вопросы",
        "Сбор заявки",
        "Уведомление вам в Telegram",
      ],
    },
    en: {
      title: "Simple Telegram bot",
      summary: "A bot with a menu and a request. Anything beyond this list is priced by the scope.",
      includes: [
        "A menu",
        "Answers to common questions",
        "Collecting a request",
        "A notification to you in Telegram",
      ],
    },
  },
  {
    id: "cms-fill",
    visible: true,
    priceKind: "from",
    source:
      OWNER_USD +
      " Наполнение: карточка товара из готовых данных от $1, с описанием и обработкой фото от $2, страница от $15.",
    price: { ru: "от $1", en: "from $1" },
    lines: {
      ru: [
        { label: "Карточка товара из готовых данных", amount: "от $1" },
        { label: "С описанием и обработкой фото", amount: "от $2" },
        { label: "Страница", amount: "от $15" },
      ],
      en: [
        { label: "Product card from ready data", amount: "from $1" },
        { label: "With a description and photo processing", amount: "from $2" },
        { label: "A page", amount: "from $15" },
      ],
    },
    ru: {
      title: "Наполнение WordPress и 1C-Битрикс",
      summary: "Наполняю уже существующий сайт. Новый сайт при этом не собираю.",
      includes: [
        "Карточка товара из готовых данных",
        "Карточка с описанием и обработкой фото",
        "Отдельная страница",
      ],
    },
    en: {
      title: "Filling a WordPress or 1C-Bitrix site",
      summary: "I fill a site you already have. This is not a new site build.",
      includes: [
        "A product card from data you already have",
        "A card with a description and processed photos",
        "A separate page",
      ],
    },
  },
  {
    id: "audit",
    visible: true,
    priceKind: "from",
    source: OWNER_USD + " Аудит небольшого сайта — от $50: техническая часть, базовое SEO, удобство, отчёт.",
    price: { ru: "от $50", en: "from $50" },
    ru: {
      title: "Аудит небольшого сайта",
      summary: "Смотрю небольшой сайт и присылаю отчёт, без обещания места в поиске.",
      includes: [
        "Техническая часть",
        "Базовое SEO",
        "Удобство",
        "Письменный отчёт",
      ],
    },
    en: {
      title: "Audit of a small site",
      summary: "I look at a small site and send a report. This is not a promise of a search ranking.",
      includes: ["The technical side", "Basic SEO", "Ease of use", "A written report"],
    },
  },
  {
    id: "catalog",
    visible: false,
    priceKind: "request",
    source:
      "Услугу каталога пока не оказывала. Карточка скрыта, чтобы её можно было включить позже без новой вёрстки.",
    price: { ru: "", en: "" },
    ru: { title: "", summary: "", includes: [] },
    en: { title: "", summary: "", includes: [] },
  },
  {
    id: "shop",
    visible: false,
    priceKind: "request",
    source:
      "Интернет-магазины пока не делала. Карточка скрыта, чтобы её можно было включить позже без новой вёрстки.",
    price: { ru: "", en: "" },
    ru: { title: "", summary: "", includes: [] },
    en: { title: "", summary: "", includes: [] },
  },
];

export function visibleServices() {
  return SERVICES.filter((service) => service.visible && service.ru.title);
}

export type Work = {
  id: string;
  href: string;
  image: string;
  /** Fictional-company demo, labeled on the card. */
  demo: boolean;
  /** Real client project. */
  realClient: boolean;
  /** Example price for a site of this kind. Not a receipt for that demo. */
  example?: Record<Locale, string>;
  ru: {
    title: string;
    task: string;
    solution: string;
    result: string;
    link: string;
    alt: string;
  };
  en: {
    title: string;
    task: string;
    solution: string;
    result: string;
    link: string;
    alt: string;
  };
};

export const WORKS: Work[] = [
  {
    id: "snezhnaya",
    href: "https://snezhnaya-dubrova.vercel.app/",
    image: "/works/snezhnaya.webp",
    demo: true,
    realClient: false,
    ru: {
      title: "Снежная Дуброва",
      task: "Показать агроусадьбу так, чтобы гость увидел дома, что входит в проживание, и мог написать в мессенджер.",
      solution:
        "Одностраничный сайт: дома, баня, цена проживания, вопросы и бронирование в Viber или Telegram.",
      result:
        "Демонстрационный сайт вымышленной компании. Его можно открыть и посмотреть целиком.",
      link: "Открыть сайт",
      alt: "Скриншот главной страницы сайта Снежная Дуброва",
    },
    en: {
      title: "Snezhnaya Dubrova",
      task: "Show a country stay so a guest can see the houses, what is included, and write in a messenger.",
      solution:
        "A single-page site: houses, the banya, the nightly price, questions, and booking via Viber or Telegram.",
      result:
        "A demo site for a fictional company. It is online and can be looked through.",
      link: "Open the site",
      alt: "Screenshot of the Snezhnaya Dubrova homepage",
    },
  },
  {
    id: "bugtrakt",
    href: "https://bugtrakt.vercel.app/",
    image: "/works/bugtrakt.webp",
    demo: true,
    realClient: false,
    example: {
      ru: "Пример цены такого сайта — $115: 8 страниц, 3–4 дня, тексты по данным клиента, мобильная версия, форма заявки.",
      en: "An example price for a site like this is $115: 8 pages, 3–4 days, copy from the client's materials, a mobile version, and a request form.",
    },
    ru: {
      title: "Бугтракт",
      task: "Собрать сайт перевозчика: направления, услуги, документы и расчёт ставки в одном месте.",
      solution:
        "Отдельные страницы направлений, услуг, автопарка, документов и контактов, плюс форма расчёта перевозки.",
      result:
        "Демонстрационный сайт вымышленной компании. На самом сайте написано, что заявка никуда не отправляется.",
      link: "Открыть сайт",
      alt: "Скриншот главной страницы сайта Бугтракт",
    },
    en: {
      title: "Bugtrakt",
      task: "Build a carrier site: routes, services, documents, and a rate request in one place.",
      solution:
        "Separate pages for routes, services, the fleet, documents, and contacts, plus a shipping-rate form.",
      result:
        "A demo site for a fictional company. The site itself says a request is not sent anywhere.",
      link: "Open the site",
      alt: "Screenshot of the Bugtrakt homepage",
    },
  },
  {
    id: "nemanfrost",
    href: "https://nemanfrost.vercel.app/",
    image: "/works/nemanfrost.webp",
    demo: true,
    realClient: false,
    example: {
      ru: "Пример цены такого сайта — $95.",
      en: "An example price for a site like this is $95.",
    },
    ru: {
      title: "Неманфрост",
      task: "Сайт рефрижераторных перевозок: температура, направления и как оставить заявку.",
      solution:
        "Страницы услуг, направлений, контроля температуры, автопарка, документов и контактов.",
      result: "Демонстрационный сайт вымышленной компании. Его можно открыть и полистать.",
      link: "Открыть сайт",
      alt: "Скриншот главной страницы сайта Неманфрост",
    },
    en: {
      title: "Nemanfrost",
      task: "A refrigerated-transport site: temperature, routes, and how to leave a request.",
      solution:
        "Pages for services, routes, temperature control, the fleet, documents, and contacts.",
      result: "A demo site for a fictional company. It is online to look through.",
      link: "Open the site",
      alt: "Screenshot of the Nemanfrost homepage",
    },
  },
  {
    id: "akvaglubina",
    href: "https://relaxed-granita-67400b.netlify.app/",
    image: "/works/akvaglubina.webp",
    demo: false,
    realClient: false,
    ru: {
      title: "АкваГлубина — бурение скважин",
      task: "Лендинг буровой компании: объяснить услугу и дать человеку рассчитать стоимость и оставить заявку.",
      solution: "Одна страница с расчётом стоимости, описанием работ и формой заявки.",
      result:
        "В отзыве заказчик пишет, что заявок через форму стало больше на 30% в первый месяц.",
      link: "Открыть сайт",
      alt: "Скриншот лендинга АкваГлубина",
    },
    en: {
      title: "AkvaGlubina — well drilling",
      task: "A landing page for a drilling company: explain the service, estimate a price, and take a request.",
      solution: "One page with a cost calculator, a description of the work, and a request form.",
      result:
        "In his review the client writes that form requests grew by 30% in the first month.",
      link: "Open the site",
      alt: "Screenshot of the AkvaGlubina landing page",
    },
  },
  {
    id: "kulerteh",
    href: "https://mellifluous-halva-80d1da.netlify.app/",
    image: "/works/kulerteh.webp",
    demo: false,
    realClient: false,
    ru: {
      title: "КулЭрТэх — ремонт кондиционеров",
      task: "Сайт компании по ремонту и монтажу кондиционеров: услуги, контакты и заявка.",
      solution: "Страница с услугами, коротко о компании и формой заявки.",
      result: "Сайт открыт: услуги, телефон и форма на одной странице.",
      link: "Открыть сайт",
      alt: "Скриншот сайта КулЭрТэх групп",
    },
    en: {
      title: "KulerTekh — air-conditioner repair",
      task: "A site for an air-conditioner repair and installation company: services, contacts, and a request.",
      solution: "A page with the services, a short note about the company, and a request form.",
      result: "The site is online: services, a phone number, and a form on one page.",
      link: "Open the site",
      alt: "Screenshot of the KulerTekh site",
    },
  },
  {
    id: "maxscript",
    href: "https://github.com/revei123/3dsmax-camera-animator",
    image: "/works/maxscript.webp",
    demo: false,
    realClient: true,
    ru: {
      title: "Скрипт камеры для 3ds Max",
      task: "Убрать ручную сборку облёта камер и подготовку сцены к рендеру.",
      solution:
        "Скрипт на MaxScript: анимированная камера по камерам сцены и настройка рендера, в том числе V-Ray.",
      result:
        "Скрипт передан клиенту. В отзыве заказчик пишет, что сцены к рендеру готовятся скриптом. Отзыв есть на Workzilla.",
      link: "Открыть скрипт",
      alt: "Скриншот страницы скрипта 3ds Max Camera Animator",
    },
    en: {
      title: "Camera script for 3ds Max",
      task: "Remove the manual work of building a camera fly-through and preparing a scene for render.",
      solution:
        "A MaxScript: an animated camera through the scene cameras, and render setup, including V-Ray.",
      result:
        "The script was delivered to the client. In the review the client writes that scenes are prepared for render by the script. The review is on Workzilla.",
      link: "Open the script",
      alt: "Screenshot of the 3ds Max Camera Animator page",
    },
  },
];

export const content = {
  ru: {
    meta: {
      title: "Татьяна Яновская — сайты и Telegram-боты для малого бизнеса",
      description:
        "Лендинги и сайты-визитки на чистом коде, Telegram-боты, наполнение WordPress и 1C-Битрикс, аудит сайта. Для малого бизнеса, удалённо, общение в переписке.",
    },
    nav: {
      services: "Услуги",
      works: "Работы",
      process: "Как работаю",
      prices: "Цены",
      faq: "Вопросы",
      contact: "Контакты",
      cta: "Обсудить проект",
      menu: "Меню",
      close: "Закрыть меню",
      skip: "К содержанию",
    },
    hero: {
      name: "Татьяна Яновская",
      title: "Сайты и Telegram-боты для малого бизнеса",
      lead: "Лендинги и сайты-визитки на чистом коде, без конструкторов.",
      price: "от $85",
      priceNote:
        "Это цена сайта-визитки или лендинга. Цены в долларах. Курс НБРБ на 17.11.2026:\u00a01\u00a0USD\u00a0=\u00a02,9977\u00a0BYN.",
      ctaTelegram: "Обсудить проект",
      ctaForm: "Оставить заявку",
      asideTitle: "С чего начать",
      aside: [
        "Напишите в переписке, что нужно.",
        "Я задам вопросы и пришлю смету до старта.",
        "После предоплаты показываю работу по этапам.",
      ],
    },
    services: {
      eyebrow: "Услуги",
      title: "Что я могу сделать",
      lead: "Беру одну страницу, сайт из нескольких страниц, бота, наполнение уже готового сайта и разбор того, что мешает заявкам.",
      includes: "Что входит",
    },
    prices: {
      eyebrow: "Цены",
      title: "Сколько стоит",
      lead: "Сумму фиксирую в смете до начала работы. Цены в долларах. Курс НБРБ на 17.11.2026:\u00a01\u00a0USD\u00a0=\u00a02,9977\u00a0BYN.",
      service: "Услуга",
      price: "Цена",
    },
    works: {
      eyebrow: "Работы",
      title: "Сайты и один скрипт",
      lead: "Три демо — вымышленные компании, их можно открыть. Дальше живые страницы и реальный заказ на скрипт.",
      demo: "Демо-проект для вымышленной компании",
      real: "Реальный заказ",
      task: "Задача",
      solution: "Решение",
      result: "Результат",
    },
    why: {
      eyebrow: "Почему со мной",
      title: "Как устроена работа",
      items: [
        {
          title: "Чистый код",
          text: "Сайты собираю кодом, без конструктора: страницу можно править, и она не привязана к чужой платформе.",
        },
        {
          title: "Быстрая загрузка",
          text: "Слежу за весом страниц и картинок, чтобы сайт открывался на телефоне без долгого ожидания.",
        },
        {
          title: "Адаптивность",
          text: "Смотрю макет на телефоне и на широком экране, а не только на своём мониторе.",
        },
        {
          title: "Переписка",
          text: "Задачу, правки и сдачу ведём сообщениями. Созвоны не нужны.",
        },
        {
          title: "Удалённо",
          text: "Работаю удалённо. Город, в котором вы находитесь, на работу не влияет.",
        },
      ],
    },
    process: {
      eyebrow: "Как работаю",
      title: "От сообщения до запуска",
      lead: "Без фиксированного процента предоплаты и без обещанного числа правок: и то и другое зависит от задачи и пишется в смете.",
      steps: [
        { title: "Заявка в переписке", text: "Вы пишете, что нужно. Я отвечаю в Telegram или на почту." },
        { title: "ТЗ и смета", text: "Собираю задачу в короткий текст и называю стоимость и срок до старта." },
        { title: "Предоплата", text: "Работа начинается после предоплаты. Размер предоплаты указываю в смете." },
        { title: "Этапы с показом", text: "Показываю промежуточный результат, чтобы было видно, куда идёт работа." },
        { title: "Правки", text: "Правки в рамках согласованной задачи входят в работу. Новый объём оцениваю отдельно." },
        { title: "Запуск и доступы", text: "Публикую сайт или передаю бота и отдаю доступы вам." },
      ],
    },
    faq: {
      eyebrow: "Вопросы",
      title: "Коротко о сроках, оплате и правках",
      items: [
        {
          q: "Какие сроки?",
          a: "Срок называю в смете, когда задача уже понятна. Одностраничный сайт и бот занимают разное время, поэтому до разбора задачи срок не называю.",
        },
        {
          q: "Как устроена оплата?",
          a: "Работа начинается после предоплаты. Остальное — по этапам, как договоримся в переписке. Сумму и порядок фиксирую в смете до старта.",
        },
        {
          q: "Что с хостингом и доменом?",
          a: "Домен и хостинг остаются у вас. Если их ещё нет, подскажу, что обычно выбирают под такую задачу, подключу сайт и передам доступы.",
        },
        {
          q: "Как проходят правки?",
          a: "Правки в рамках согласованного задания входят в работу. Если задача меняется и появляется новый объём, оцениваю его отдельно и согласовываю, прежде чем браться.",
        },
      ],
    },
    reviews: {
      eyebrow: "Отзывы",
      title: "Что писали заказчики",
      items: [
        {
          text: "Татьяна разработала для нас сайт под ключ. Количество заявок через форму выросло на 30% уже в первый месяц. Работает четко, без лишней суеты, все объясняет.",
          author: "Алексей М.",
          role: "Владелец компании по бурению скважин",
        },
        {
          text: "Заказывали Telegram-бота для первичного скрининга кандидатов. Интеграция с LangChain работает отлично, бот понимает суть резюме. Сэкономили десятки часов времени рекрутеров.",
          author: "Дмитрий К.",
          role: "Руководитель отдела кадров",
        },
        {
          text: "Нужна была автоматизация рутинных задач в 3ds Max. Татьяна написала скрипты, которые теперь сами подготавливают сцены к рендеру. Профессиональный подход, код чистый.",
          author: "Елена В.",
          role: "Арт-директор 3D-визуализации",
        },
        {
          text: "Нужен был каталог оборудования с категориями, фильтрами и понятными карточками позиций. Татьяна собрала всё под ключ: удобно менеджерам и клиентам, заявки стали приходить быстрее. Без лишней воды, в срок.",
          author: "Игорь С.",
          role: "Руководитель отдела продаж",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Давайте обсудим",
      lead: "Отвечаю в переписке, обычно в течение 30 минут.",
      telegram: "Telegram",
      email: "Почта",
      quick: "Короткий запрос",
      quickItems: [
        {
          label: "Нужен лендинг",
          text: "Здравствуйте! Нужен лендинг или сайт-визитка для малого бизнеса.",
        },
        {
          label: "Нужен бот",
          text: "Здравствуйте! Нужен Telegram-бот для малого бизнеса.",
        },
        {
          label: "Нужен аудит",
          text: "Здравствуйте! Нужен аудит сайта.",
        },
      ],
      need: "Что нужно",
      budget: "Бюджет",
      example: "Ссылка на пример",
      needPlaceholder: "Например: лендинг для мастерской",
      budgetPlaceholder: "Если уже есть ориентир",
      examplePlaceholder: "Сайт, который нравится",
      submitTelegram: "Открыть в Telegram",
      submitEmail: "Открыть письмо",
      needError: "Напишите, что нужно — без этого заявка пустая.",
      greeting: "Здравствуйте! Хочу обсудить задачу.",
      mailSubject: "Заявка с сайта",
      formNote: "Форма ничего не отправляет на сервер: откроется Telegram или почта с уже заполненным текстом.",
    },
    footer: {
      note: "Сайты и Telegram-боты для малого бизнеса. Общение в переписке, удалённо.",
      copyright: "© 2026 Татьяна Яновская",
    },
    notFound: {
      title: "Такой страницы нет",
      text: "Ссылка могла устареть. Вернитесь на главную или напишите в Telegram.",
      home: "На главную",
      write: "Обсудить проект",
    },
    blog: {
      title: "Блог",
      subtitle: "Заметки из практики AI и Telegram-ботов",
      read: "Читать",
      close: "Закрыть",
      items: [
        {
          id: "apify-langchain",
          title:
            "Как я автоматизировала сбор данных для Telegram-бота с помощью Apify и LangChain",
          excerpt:
            "Пайплайн: Apify → LangChain → БД. Точность структурирования 95%.",
          body: "Одна из частых задач при разработке интеллектуальных ботов — получение актуальных данных. Я построила пайплайн: 1) Apify Actor собирает сырые данные, обходя защиты. 2) LangChain очищает их и структурирует в JSON с помощью LLM. 3) Данные сохраняются в БД для мгновенного поиска ботом. Результат: точность структурирования 95%, отсутствие мусорных ответов.",
        },
        {
          id: "bot-mistakes",
          title: "5 ошибок при разработке Telegram-ботов, которые убивают конверсию",
          excerpt:
            "Онбординг, ошибки, эскалация к менеджеру, индикатор печати и аналитика.",
          body: "1. Отсутствие онбординга (сразу вываливать меню). 2. Игнорирование обработки ошибок (бот молчит при неверном вводе). 3. Отсутствие «человеческого» выхода (нет кнопки «позвать менеджера»). 4. Медленные ответы без индикатора «печатает...». 5. Отсутствие аналитики действий пользователя. Решение этих проблем резко повышает удержание пользователей.",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Tatsiana Yanovskaya — websites and Telegram bots for small businesses",
      description:
        "Landing pages and business-card sites in clean code, Telegram bots, filling WordPress and 1C-Bitrix sites, and a website audit. For small businesses, remote, in writing.",
    },
    nav: {
      services: "Services",
      works: "Work",
      process: "How I work",
      prices: "Prices",
      faq: "Questions",
      contact: "Contact",
      cta: "Discuss a project",
      menu: "Menu",
      close: "Close menu",
      skip: "Skip to content",
    },
    hero: {
      name: "Tatsiana Yanovskaya",
      title: "Websites and Telegram bots for small businesses",
      lead: "Landing pages and business-card sites in clean code, without website builders.",
      price: "from $85",
      priceNote:
        "a business-card site or a landing page. Prices are in US dollars. NBRB rate on 17 November 2026:\u00a01\u00a0USD\u00a0=\u00a02.9977\u00a0BYN.",
      ctaTelegram: "Discuss a project",
      ctaForm: "Leave a request",
      asideTitle: "Where to start",
      aside: [
        "Write what you need.",
        "I ask a few questions and send an estimate before any work starts.",
        "After the prepayment I show the work in stages.",
      ],
    },
    services: {
      eyebrow: "Services",
      title: "What I can do",
      lead: "I take a single page, a multi-page site, a bot, filling a site you already have, and a look at what gets in the way of a request.",
      includes: "Included",
    },
    prices: {
      eyebrow: "Prices",
      title: "What it costs",
      lead: "The sum is fixed in the estimate before work starts. Prices are in US dollars. NBRB rate on 17 November 2026:\u00a01\u00a0USD\u00a0=\u00a02.9977\u00a0BYN.",
      service: "Service",
      price: "Price",
    },
    works: {
      eyebrow: "Work",
      title: "Sites and one script",
      lead: "Three demos are fictional companies you can open. Then live pages, and a real script commission.",
      demo: "Demo for a fictional company",
      real: "Real commission",
      task: "Task",
      solution: "Solution",
      result: "Result",
    },
    why: {
      eyebrow: "Why work with me",
      title: "How the work is set up",
      items: [
        {
          title: "Clean code",
          text: "I build sites in code, not in a website builder, so a page can be edited and is not tied to someone else's platform.",
        },
        {
          title: "Fast to open",
          text: "I watch the weight of pages and images so the site opens on a phone without a long wait.",
        },
        {
          title: "Fits the screen",
          text: "I check the layout on a phone and on a wide screen, not only on my own monitor.",
        },
        {
          title: "In writing",
          text: "The task, the edits, and the handoff happen in messages. No calls.",
        },
        {
          title: "Remote",
          text: "I work remotely. The city you are in does not change the work.",
        },
      ],
    },
    process: {
      eyebrow: "How I work",
      title: "From a message to launch",
      lead: "No fixed prepayment percent and no promised number of revision rounds: both depend on the task and are written into the estimate.",
      steps: [
        { title: "A message", text: "You write what you need. I reply on Telegram or by email." },
        { title: "Brief and estimate", text: "I turn the task into a short text and name the cost and the time before we start." },
        { title: "Prepayment", text: "Work starts after a prepayment. The amount is in the estimate, not a default." },
        { title: "Stages you can see", text: "I show the work in progress so it is clear where it is going." },
        { title: "Edits", text: "Edits inside the agreed task are part of the work. A new scope is priced separately." },
        { title: "Launch and access", text: "I publish the site or hand over the bot, and give you access." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Time, payment, and edits",
      items: [
        {
          q: "How long does it take?",
          a: "I name the time in the estimate, once the task is clear. A one-page site and a bot take different amounts of time, so I do not promise a deadline before that.",
        },
        {
          q: "How does payment work?",
          a: "Work starts after a prepayment. The rest follows the stages we agree in writing. The sum and the order are fixed in the estimate before we start.",
        },
        {
          q: "What about hosting and a domain?",
          a: "The domain and the hosting stay yours. If you do not have them yet, I can say what people usually pick for a task like yours, connect the site, and hand over access.",
        },
        {
          q: "How do edits work?",
          a: "Edits inside the agreed brief are part of the work. If the task changes and new scope appears, I price it separately and agree it before doing it.",
        },
      ],
    },
    reviews: {
      eyebrow: "Reviews",
      title: "What clients wrote",
      items: [
        {
          text: "Tatsiana built a turnkey website for us. Form inquiries grew by 30% in the first month. She works clearly, without extra fuss, and explains everything.",
          author: "Alexey M.",
          role: "Owner, well drilling company",
        },
        {
          text: "We ordered a Telegram bot for candidate screening. LangChain integration works great — the bot understands resumes. Saved our recruiters dozens of hours.",
          author: "Dmitry K.",
          role: "Head of HR",
        },
        {
          text: "We needed automation for routine 3ds Max tasks. Tatsiana wrote scripts that now prepare scenes for render by themselves. Clean code, professional approach.",
          author: "Elena V.",
          role: "Art director, 3D visualization",
        },
        {
          text: "We needed an equipment catalog with categories, filters, and clear product cards. Tatsiana delivered end to end — easy for both sales and clients, inquiries started coming in faster. On time, no fluff.",
          author: "Igor S.",
          role: "Head of Sales",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's discuss it",
      lead: "I reply in writing, usually within 30 minutes.",
      telegram: "Telegram",
      email: "Email",
      quick: "A short request",
      quickItems: [
        {
          label: "I need a landing page",
          text: "Hello! I need a landing page or a business-card site for a small business.",
        },
        {
          label: "I need a bot",
          text: "Hello! I need a Telegram bot for a small business.",
        },
        {
          label: "I need an audit",
          text: "Hello! I need a website audit.",
        },
      ],
      need: "What you need",
      budget: "Budget",
      example: "Link to an example",
      needPlaceholder: "For example: a landing page for a workshop",
      budgetPlaceholder: "If you already have a range",
      examplePlaceholder: "A site you like",
      submitTelegram: "Open in Telegram",
      submitEmail: "Open an email",
      needError: "Write what you need — otherwise the message is empty.",
      greeting: "Hello! I would like to discuss a task.",
      mailSubject: "Request from the website",
      formNote:
        "The form does not send anything to a server: it opens Telegram or email with the text already filled in.",
    },
    footer: {
      note: "Websites and Telegram bots for small businesses. In writing, remote.",
      copyright: "© 2026 Tatsiana Yanovskaya",
    },
    notFound: {
      title: "This page is not here",
      text: "The link may be out of date. Go back to the homepage or write on Telegram.",
      home: "Back home",
      write: "Discuss a project",
    },
    blog: {
      title: "Blog",
      subtitle: "Notes from AI and Telegram bot practice",
      read: "Read",
      close: "Close",
      items: [
        {
          id: "apify-langchain",
          title:
            "How I automated data collection for a Telegram bot with Apify and LangChain",
          excerpt: "Pipeline: Apify → LangChain → DB. 95% structuring accuracy.",
          body: "A common challenge when building intelligent bots is getting fresh data. I built a pipeline: 1) An Apify Actor collects raw data, bypassing protections. 2) LangChain cleans and structures it into JSON via an LLM. 3) Data is stored in a DB for instant bot search. Result: 95% structuring accuracy and no junk answers.",
        },
        {
          id: "bot-mistakes",
          title: "5 Telegram bot mistakes that kill conversion",
          excerpt: "Onboarding, errors, human handoff, typing indicators, and analytics.",
          body: "1. No onboarding (dumping a menu immediately). 2. Ignoring error handling (bot goes silent on bad input). 3. No human escape hatch (no «call a manager» button). 4. Slow replies without a typing indicator. 5. No user-action analytics. Fixing these sharply improves retention.",
        },
      ],
    },
  },
} as const;

export type Dictionary = (typeof content)[Locale];
