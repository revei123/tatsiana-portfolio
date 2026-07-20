export type Locale = "ru" | "en";

export const LINKS = {
  telegram: "https://t.me/yanovskay_tatsiana",
  github: "https://github.com/revei123",
  email: "mailto:tatyanapabota@gmail.com",
  emailRaw: "tatyanapabota@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/213225731?v=4",
} as const;

export const content = {
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      blog: "Блог",
      contact: "Контакты",
      cta: "Связаться",
    },
    hero: {
      name: "Татьяна Яновская",
      title: "AI Engineer & Python Developer",
      subtitle:
        "Создаю интеллектуальные решения: от Telegram-ботов и LangChain-пайплайнов до автоматизации 3D и веб-разработки.",
      ctaTelegram: "Обсудить проект в Telegram",
      ctaGithub: "Мой GitHub",
    },
    about: {
      title: "Обо мне",
      text: "AI-инженер из Беларуси. Специализируюсь на интеллектуальной обработке данных и автоматизации бизнес-процессов. Создаю end-to-end решения: от парсинга и фильтрации данных до продакшн-ready Telegram-ботов и кастомных CRM-модулей (Bitrix24). Открыта для удаленных контрактов по всему миру. Оплата в USDT.",
      badges: [
        "🇧🇾 Belarus",
        "🌍 Remote Worldwide",
        "💼 Open for Contracts",
        "💵 USDT",
      ],
    },
    tech: {
      title: "Технологии",
      subtitle: "Инструменты, с которыми я собираю продакшн-решения",
    },
    projects: {
      title: "Проекты",
      subtitle: "Веб, боты и автоматизация — от идеи до деплоя",
      view: "Посмотреть",
      soon: "Скоро",
      private: "Приватный репозиторий",
      items: [
        {
          title: "Сайт услуг по бурению скважин",
          description:
            "Современный адаптивный лендинг с формой захвата лидов и оптимизацией скорости загрузки.",
          tags: ["HTML5", "CSS3", "JS", "Netlify"],
          href: "https://6a283794fa777248d0b5f27f--relaxed-granita-67400b.netlify.app/",
        },
        {
          title: "Сайт по ремонту кондиционеров",
          description:
            "Коммерческий сайт с каталогом услуг, прайс-листом и интеграцией форм обратной связи.",
          tags: ["HTML5", "CSS3", "JS", "Netlify"],
          href: "https://mellifluous-halva-80d1da.netlify.app/",
        },
        {
          title: "ЯСНО — лендинг установки окон",
          description:
            "Статический лендинг: калькулятор стоимости, форма заявки, аналитика. HTML, CSS, Vanilla JS.",
          tags: ["HTML5", "CSS3", "JavaScript"],
          href: "https://github.com/revei123/yasno-landing",
        },
        {
          title: "Moro Products — морепродукты",
          description:
            "Каталог живых морепродуктов с Дальнего Востока: витрина, сезонный календарь, форма заявки. Next.js + Tailwind.",
          tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
          href: "https://github.com/revei123/moroproducts",
        },
        {
          title: "Клон сайта кинотеатра (тест)",
          description:
            "Тестовый клон сайта кинотеатра: афиша, карточки фильмов, адаптивная вёрстка. Код в приватном репозитории GitHub.",
          tags: ["HTML5", "CSS3", "JavaScript"],
          href: null,
          private: true,
        },
        {
          title: "Smart Job Telegram Bot",
          description:
            "AI-бот для поиска удалённой работы: матчинг профиля, обработка резюме и админ-панель.",
          tags: ["Python", "aiogram", "AI/ML"],
          href: "https://github.com/revei123/smart-job-telegram-bot",
        },
        {
          title: "3ds Max Camera Animator",
          description:
            "Скрипт MaxScript: автоматическое создание анимированной камеры из сцены и настройка рендера.",
          tags: ["MaxScript", "3ds Max"],
          href: "https://github.com/revei123/3dsmax-camera-animator",
        },
      ],
    },
    testimonials: {
      title: "Отзывы",
      subtitle: "Что говорят клиенты о совместной работе",
      items: [
        {
          text: "Татьяна разработала для нас сайт под ключ. Количество заявок через форму выросло на 30% уже в первый месяц. Работает четко, без лишнего геморроя, все объясняет.",
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
      ],
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
    footer: {
      cta: "Готовы автоматизировать ваш бизнес?",
      button: "Написать в Telegram",
      copyright: "© 2026 Yanovskaya Tatsiana. Built with Next.js & Tailwind CSS.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      cta: "Contact me",
    },
    hero: {
      name: "Tatsiana Yanovskaya",
      title: "AI Engineer & Python Developer",
      subtitle:
        "I build intelligent solutions: from Telegram bots and LangChain pipelines to 3D automation and web development.",
      ctaTelegram: "Discuss a project on Telegram",
      ctaGithub: "My GitHub",
    },
    about: {
      title: "About me",
      text: "AI engineer from Belarus. I specialize in intelligent data processing and business-process automation. I ship end-to-end solutions: from parsing and filtering data to production-ready Telegram bots and custom CRM modules (Bitrix24). Open to remote contracts worldwide. Payment in USDT.",
      badges: [
        "🇧🇾 Belarus",
        "🌍 Remote Worldwide",
        "💼 Open for Contracts",
        "💵 USDT",
      ],
    },
    tech: {
      title: "Tech Stack",
      subtitle: "Tools I use to ship production-ready systems",
    },
    projects: {
      title: "Projects",
      subtitle: "Web, bots, and automation — from idea to deploy",
      view: "View",
      soon: "Soon",
      private: "Private repository",
      items: [
        {
          title: "Well Drilling Services Website",
          description:
            "Modern responsive landing with lead capture form and load-speed optimization.",
          tags: ["HTML5", "CSS3", "JS", "Netlify"],
          href: "https://6a283794fa777248d0b5f27f--relaxed-granita-67400b.netlify.app/",
        },
        {
          title: "Air Conditioner Repair Website",
          description:
            "Commercial site with service catalog, price list, and feedback forms.",
          tags: ["HTML5", "CSS3", "JS", "Netlify"],
          href: "https://mellifluous-halva-80d1da.netlify.app/",
        },
        {
          title: "YASNO — Window Installation Landing",
          description:
            "Static landing with cost calculator, lead form, and analytics. HTML, CSS, Vanilla JS.",
          tags: ["HTML5", "CSS3", "JavaScript"],
          href: "https://github.com/revei123/yasno-landing",
        },
        {
          title: "Moro Products — Seafood Catalog",
          description:
            "Far East live seafood catalog: product showcase, seasonal calendar, and inquiry form. Built with Next.js and Tailwind.",
          tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
          href: "https://github.com/revei123/moroproducts",
        },
        {
          title: "Cinema Website Clone (test)",
          description:
            "Test cinema site clone: showtimes, movie cards, responsive layout. Code lives in a private GitHub repository.",
          tags: ["HTML5", "CSS3", "JavaScript"],
          href: null,
          private: true,
        },
        {
          title: "Smart Job Telegram Bot",
          description:
            "AI-powered remote job search bot with profile matching, resume handling, and admin panel.",
          tags: ["Python", "aiogram", "AI/ML"],
          href: "https://github.com/revei123/smart-job-telegram-bot",
        },
        {
          title: "3ds Max Camera Animator",
          description:
            "MaxScript tool that builds an animated camera from scene cameras and configures render.",
          tags: ["MaxScript", "3ds Max"],
          href: "https://github.com/revei123/3dsmax-camera-animator",
        },
      ],
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What clients say about working together",
      items: [
        {
          text: "Tatsiana delivered a turnkey website for us. Lead form submissions grew by 30% in the first month. Clear communication, no drama — just results.",
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
      ],
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
          excerpt:
            "Pipeline: Apify → LangChain → DB. 95% structuring accuracy.",
          body: "A common challenge when building intelligent bots is getting fresh data. I built a pipeline: 1) An Apify Actor collects raw data, bypassing protections. 2) LangChain cleans and structures it into JSON via an LLM. 3) Data is stored in a DB for instant bot search. Result: 95% structuring accuracy and no junk answers.",
        },
        {
          id: "bot-mistakes",
          title: "5 Telegram bot mistakes that kill conversion",
          excerpt:
            "Onboarding, errors, human handoff, typing indicators, and analytics.",
          body: "1. No onboarding (dumping a menu immediately). 2. Ignoring error handling (bot goes silent on bad input). 3. No human escape hatch (no «call a manager» button). 4. Slow replies without a typing indicator. 5. No user-action analytics. Fixing these sharply improves retention.",
        },
      ],
    },
    footer: {
      cta: "Ready to automate your business?",
      button: "Message on Telegram",
      copyright: "© 2026 Yanovskaya Tatsiana. Built with Next.js & Tailwind CSS.",
    },
  },
} as const;

export const TECH_STACK = [
  { name: "HTML / CSS / JS", icon: "FileCode" },
  { name: "Python", icon: "Code2" },
  { name: "LangChain", icon: "Brain" },
  { name: "FastAPI", icon: "Zap" },
  { name: "aiogram", icon: "Bot" },
  { name: "Apify", icon: "Radar" },
  { name: "3ds Max", icon: "Box" },
  { name: "Bitrix24 API", icon: "Building2" },
  { name: "Stable Diffusion", icon: "Sparkles" },
  { name: "Next.js / React", icon: "Globe" },
] as const;
