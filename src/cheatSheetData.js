const sheetData = [
  {
    path: "components",
    title: "components",
    content: [
      {
        h2: "React Components",
      },

      {
        p: "Компонент — это небольшая, переиспользуемая часть приложения, которая отвечает за отображение и поведение определённой части пользовательского интерфейса.",
      },
      {
        p: "Компоненты позволяют разбить большое приложение на независимые части, которыми проще управлять и которые можно повторно использовать.",
      },

      {
        h3: "React Компоненты как «кирпичики»",
      },

      {
        p: "Приложение можно собрать из множества небольших компонентов. Каждый компонент выполняет свою задачу, а вместе они формируют полноценный интерфейс.",
      },

      {
        c: `function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}`,
      },

      {
        h3: "Функциональный компонент",
      },

      {
        p: "Функциональный компонент — это обычная JavaScript-функция, которая возвращает JSX. Это современный и наиболее популярный способ создания компонентов.",
      },

      {
        c: `function Greeting() {
  return <h1>Привет!</h1>;
}`,
      },

      {
        h3: "Использование компонента",
      },

      {
        p: "После создания компонент можно использовать как обычный HTML-тег:",
      },

      {
        c: `function App() {
  return <Greeting />;
}`,
      },

      {
        h3: "Основные характеристики компонентов",
      },

      {
        p: "Независимость — каждый компонент может работать независимо от других частей приложения.",
      },

      {
        p: "Переиспользуемость — один компонент можно использовать несколько раз в разных местах приложения.",
      },

      {
        p: "Иерархия — компоненты могут быть вложены друг в друга. Родительский компонент может передавать данные дочернему через props.",
      },

      {
        h3: "Props",
      },

      {
        p: "Компоненты могут принимать входные данные — props. Это позволяет использовать один и тот же компонент с разными данными.",
      },

      {
        c: `function Greeting({ name }) {
  return <h1>Привет, {name}!</h1>;
}

function App() {
  return <Greeting name="Pavel" />;
}`,
      },

      {
        p: "В этом примере name — это prop, который передаётся от родительского компонента App к Greeting.",
      },

      {
        h3: "Классовые компоненты",
      },

      {
        p: "Классовые компоненты создаются с помощью классов. Они использовались до появления хуков и сейчас в основном встречаются в старых проектах.",
      },

      {
        c: `import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Привет!</h1>;
  }
}

<Greeting />;`,
      },

      {
        h3: "Главное, что нужно запомнить",
      },

      {
        p: "Компонент — это переиспользуемая часть UI.",
      },

      {
        p: "Функциональный компонент — обычная JavaScript-функция, возвращающая JSX.",
      },

      {
        p: "Компоненты можно вкладывать друг в друга.",
      },

      {
        p: "Компоненты можно переиспользовать.",
      },

      {
        p: "Данные между компонентами передаются через props.",
      },

      {
        p: "Для новых проектов используются функциональные компоненты.",
      },
    ],
  },
  {
    path: "props",
    title: "props",
    content: [
      {
        h2: "React Props",
      },
      {
        p: "Props (properties) — это механизм передачи данных от родительского компонента к дочернему. Они позволяют делать компоненты универсальными и переиспользуемыми.",
      },
      {
        h3: "Передача данных через JSX",
      },
      {
        p: "Props передаются в компонент так же, как атрибуты HTML-элементов. Значения можно передавать строками или JavaScript-выражениями.",
      },
      {
        c: `function Welcome({ userName }) {
  return <h1>Welcome, {userName}!</h1>;
}

function App() {
  return <Welcome userName="Pavel" />;
}`,
      },
      {
        h3: "Чтение Props",
      },
      {
        p: "Внутри компонента props доступны как объект. На практике часто используют деструктуризацию, чтобы код был короче и понятнее.",
      },
      {
        c: `function Profile({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

<Profile name="Pavel" age={27} />;`,
      },
      {
        h3: "Какие данные можно передавать?",
      },
      {
        p: "Через props можно передавать строки, числа, boolean, массивы, объекты, функции и другие значения.",
      },
      {
        c: `function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

<TodoList
  todos={["Learn React", "Build a project", "Get a job"]}
/>;`,
      },
      {
        h3: "Передача функций",
      },
      {
        p: "Функцию можно передать через props, чтобы дочерний компонент мог вызвать действие, которое определено в родительском.",
      },
      {
        c: `function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

<Button onClick={() => console.log("Clicked!")} />;`,
      },
      {
        h3: "props.children",
      },
      {
        p: "props.children содержит элементы, которые были переданы между открывающим и закрывающим тегами компонента. Это удобно для создания универсальных контейнеров.",
      },
      {
        c: `function Container({ children }) {
  return <div className="container">{children}</div>;
}

function App() {
  return (
    <Container>
      <h1>Welcome!</h1>
      <p>Content inside container</p>
    </Container>
  );
}`,
      },
      {
        h3: "Props нельзя изменять напрямую",
      },
      {
        p: "Props являются входными данными компонента. Компонент не должен изменять их напрямую. Если данные должны изменяться, состояние нужно хранить через state.",
      },
      {
        c: `function Example({ name }) {
  // Не изменяй props напрямую
  // name = "Ivan";

  return <p>{name}</p>;
}`,
      },
      {
        h3: "Главное",
      },
      {
        p: "Props передают данные сверху вниз: родитель → дочерний компонент. Они делают компоненты гибкими и переиспользуемыми.",
      },
    ],
  },

  {
    path: "state",
    title: "state",
    content: [
      {
        h2: "React State",
      },
      {
        p: "State — это внутренние данные компонента, которые могут изменяться во время работы приложения. При изменении state React обновляет интерфейс компонента.",
      },
      {
        h3: "State vs Props",
      },
      {
        p: "Props приходят в компонент от родителя, а state хранится внутри самого компонента и может изменяться.",
      },
      {
        h3: "useState",
      },
      {
        p: "В функциональных компонентах для работы с состоянием используется хук useState. Он возвращает текущее значение и функцию для его обновления.",
      },
      {
        c: `import { useState } from "react";

const [state, setState] = useState(initialState);`,
      },
      {
        h3: "Пример useState",
      },
      {
        c: `function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}`,
      },
      {
        h3: "Изменение State",
      },
      {
        p: "State нельзя изменять напрямую. Для обновления нужно использовать setter, который возвращает useState.",
      },
      {
        c: `const [count, setCount] = useState(0);

setCount(10);`,
      },
      {
        h3: "Обновление на основе предыдущего значения",
      },
      {
        p: "Если новое значение зависит от предыдущего, используй функциональную форму setter. Это особенно важно при нескольких обновлениях подряд.",
      },
      {
        c: `setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);`,
      },
      {
        p: "В таком случае каждое обновление получает актуальное предыдущее значение state.",
      },
      {
        h3: "State с объектами",
      },
      {
        p: "При обновлении объекта обычно создают новый объект через spread-оператор, сохраняя остальные свойства.",
      },
      {
        c: `const [user, setUser] = useState({
  name: "Pavel",
  age: 27,
});

setUser(prevUser => ({
  ...prevUser,
  age: 28,
}));`,
      },
      {
        h3: "State с массивами",
      },
      {
        p: "Для массивов используй методы, которые создают новый массив: spread, map, filter и другие.",
      },
      {
        c: `const [items, setItems] = useState([1, 2, 3]);

// Добавить
setItems(prevItems => [...prevItems, 4]);

// Удалить
setItems(prevItems =>
  prevItems.filter(item => item !== 2)
);`,
      },
      {
        h3: "State вызывает обновление UI",
      },
      {
        p: "Когда state изменяется через setter, React выполняет новый рендер компонента с актуальными данными.",
      },
      {
        h3: "Практическое использование",
      },
      {
        p: "State часто используют для счётчиков, открытия и закрытия элементов, значений input, переключателей, стилей и других динамических данных.",
      },
      {
        c: `const [showText, setShowText] = useState(false);

<button onClick={() => setShowText(prev => !prev)}>
  Показать / скрыть
</button>

{showText && <p>Текст отображается</p>}`,
      },
      {
        h3: "Главное",
      },
      {
        p: "State хранит изменяемые данные компонента. Изменять его нужно только через setter, а при зависимости от предыдущего значения использовать функциональное обновление.",
      },
    ],
  },

  {
    path: "lifecycle",
    title: "lifecycle",
    content: [
      {
        h2: "React Lifecycle",
      },
      {
        p: "Жизненный цикл описывает основные этапы существования компонента: создание, обновление и удаление.",
      },
      {
        h3: "Основные этапы",
      },
      {
        p: "Mounting — компонент создаётся и появляется в интерфейсе.",
      },
      {
        p: "Updating — компонент обновляется после изменения state или props.",
      },
      {
        p: "Unmounting — компонент удаляется из интерфейса.",
      },
      {
        h3: "useEffect в функциональных компонентах",
      },
      {
        p: "В функциональных компонентах эффекты обычно управляются через useEffect. Он позволяет выполнять действия после рендера и при изменении зависимостей.",
      },
      {
        c: `import { useEffect } from "react";

useEffect(() => {
  console.log("Effect");
}, []);`,
      },
      {
        h3: "Монтирование и размонтирование",
      },
      {
        p: "Пустой массив зависимостей означает, что эффект выполняется после первого рендера. Функция, возвращённая из эффекта, используется для очистки при размонтировании.",
      },
      {
        c: `useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);`,
      },
      {
        h3: "Зависимости useEffect",
      },
      {
        p: "Если в массиве зависимостей указано значение, эффект выполняется снова после изменения этого значения.",
      },
      {
        c: `useEffect(() => {
  console.log("Count changed");
}, [count]);`,
      },
      {
        h3: "Очистка эффекта",
      },
      {
        p: "Cleanup-функция нужна для освобождения ресурсов: таймеров, подписок, обработчиков событий и других действий, которые нужно завершить.",
      },
      {
        c: `useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);`,
      },
      {
        h3: "Классовые компоненты",
      },
      {
        p: "В старом React для жизненного цикла использовались методы классов: componentDidMount, componentDidUpdate и componentWillUnmount.",
      },
      {
        c: `class Example extends React.Component {
  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }
}`,
      },
      {
        h3: "Главное",
      },
      {
        p: "Для функциональных компонентов основным инструментом работы с эффектами является useEffect. Запомни три этапа: Mounting → Updating → Unmounting.",
      },
    ],
  },

  {
    path: "virtual-dom",
    title: "virtual DOM",
    content: [
      {
        h2: "Virtual DOM, Reconciliation и Fiber",
      },
      {
        h3: "Что такое DOM?",
      },
      {
        p: "DOM — это структура страницы, представленная в виде дерева элементов. Браузер использует DOM для отображения и изменения интерфейса.",
      },
      {
        h3: "Virtual DOM",
      },
      {
        p: "Virtual DOM — это промежуточное представление интерфейса в памяти. React создаёт виртуальное дерево элементов, соответствующее текущему состоянию компонентов.",
      },
      {
        p: "Когда данные изменяются, React создаёт новое виртуальное дерево и сравнивает его с предыдущим, чтобы определить необходимые изменения.",
      },
      {
        h3: "Reconciliation",
      },
      {
        p: "Reconciliation — процесс сравнения предыдущего и нового Virtual DOM, во время которого React определяет минимальный набор изменений для обновления интерфейса.",
      },
      {
        p: "Упрощённо процесс выглядит так: изменение state или props → новый Virtual DOM → сравнение → обновление необходимой части реального DOM.",
      },
      {
        c: `State / Props changed
        ↓
New Virtual DOM
        ↓
Reconciliation
        ↓
Update required DOM`,
      },
      {
        h3: "Почему это важно?",
      },
      {
        p: "React не требует от разработчика вручную изменять DOM после каждого изменения данных. Разработчик описывает состояние интерфейса, а React определяет необходимые DOM-обновления.",
      },
      {
        h3: "Fiber",
      },
      {
        p: "Fiber — архитектура React, которая управляет процессом обновления интерфейса и позволяет разбивать работу на небольшие задачи.",
      },
      {
        h3: "Что изменилось с Fiber?",
      },
      {
        p: "До Fiber обновления выполнялись более цельным процессом. Fiber позволил React лучше управлять очередностью работы и приоритетами обновлений.",
      },
      {
        h3: "Приоритет обновлений",
      },
      {
        p: "Не все обновления одинаково важны. Взаимодействие пользователя, например ввод текста, должно обрабатываться быстрее фоновых обновлений.",
      },
      {
        h3: "Главное",
      },
      {
        p: "Virtual DOM — представление интерфейса в памяти. Reconciliation — сравнение предыдущего и нового дерева. Fiber — архитектура React, которая помогает эффективно планировать и выполнять обновления.",
      },
    ],
  },

  {
    path: "project-structure",
    title: "project structure",
    content: [
      {
        h2: "Структура React-проекта",
      },
      {
        p: "React не диктует единственную структуру проекта. Организацию файлов выбирает разработчик, но существуют распространённые подходы, которые помогают поддерживать порядок в большом проекте.",
      },
      {
        h3: "Modules",
      },
      {
        p: "Подход с отдельными папками для страниц, компонентов, hooks, utils, API и других частей проекта хорошо подходит для небольших и средних приложений.",
      },
      {
        c: `/src
├── /pages
├── /components
├── /hooks
├── /utils
├── /helpers
├── /redux
├── /api
├── App.jsx
└── index.js`,
      },
      {
        h3: "FSD — Feature-Sliced Design",
      },
      {
        p: "FSD — архитектурная методология для организации frontend-приложений. Она помогает разделять код по ответственности и бизнес-смыслу.",
      },
      {
        c: `/src
├── /app
├── /pages
├── /features
├── /entities
└── /shared`,
      },
      {
        h3: "Основная идея FSD",
      },
      {
        p: "app — конфигурация приложения. pages — страницы. features — пользовательские функции. entities — бизнес-сущности. shared — общие компоненты и утилиты.",
      },
      {
        h3: "Modules vs FSD",
      },
      {
        p: "Modules проще и хорошо подходит для небольших проектов. FSD имеет более строгую структуру и особенно полезен для крупных приложений, где важно разделять ответственность между частями системы.",
      },
      {
        h3: "package.json",
      },
      {
        p: "package.json содержит основную информацию о JavaScript-проекте: название, версию, зависимости и команды проекта.",
      },
      {
        c: `{
  "name": "my-app",
  "version": "1.0.0",
  "description": "React project"
}`,
      },
      {
        h3: "dependencies и devDependencies",
      },
      {
        p: "dependencies — библиотеки, необходимые приложению. devDependencies — инструменты, которые нужны во время разработки.",
      },
      {
        c: `"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}

"devDependencies": {
  "eslint": "^8.45.0"
}`,
      },
      {
        h3: "scripts",
      },
      {
        p: "В scripts хранятся команды, которые можно запускать через npm. Например, запуск проекта, сборка и тестирование.",
      },
      {
        c: `"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test"
}`,
      },
      {
        p: "Запустить такую команду можно через npm run <название_скрипта>.",
      },
      {
        h3: "Главное",
      },
      {
        p: "Структура проекта должна помогать быстро находить код и понимать ответственность каждой части. Для небольших проектов достаточно простой структуры, а для крупных можно использовать FSD.",
      },
    ],
  },
  {
    path: "events",
    title: "events",
    content: [
      { h2: "React Events" },
      {
        p: "События в React позволяют реагировать на действия пользователя: нажатия, ввод текста, отправку формы, наведение и другие действия.",
      },

      { h3: "Обработчик события" },
      {
        p: "Обработчик передаётся как функция в соответствующее событие. В React используются camelCase-названия событий, например onClick.",
      },
      {
        c: `function Button() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}`,
      },

      { h3: "Основные события" },
      {
        p: "Часто используются onClick, onChange, onSubmit, onMouseEnter, onMouseLeave, onFocus и onBlur.",
      },
      {
        c: `<button onClick={handleClick}>Click</button>

<input onChange={handleChange} />

<form onSubmit={handleSubmit}>
  ...
</form>`,
      },

      { h3: "Объект события" },
      {
        p: "В обработчик можно получить объект события. Он содержит информацию о произошедшем действии и позволяет работать с элементом и поведением события.",
      },
      {
        c: `const handleClick = (event) => {
  console.log(event.target);
};`,
      },

      { h3: "Передача аргументов" },
      {
        p: "Если обработчику нужно передать дополнительные данные, используй стрелочную функцию.",
      },
      {
        c: `<button onClick={() => handleClick(user.id)}>
  Delete
</button>`,
      },

      { h3: "Остановка распространения" },
      {
        p: "stopPropagation() останавливает всплытие события к родительским элементам.",
      },
      {
        c: `const handleClick = (event) => {
  event.stopPropagation();
};`,
      },

      { h3: "Главное" },
      {
        p: "React-события передаются через props компонентов. Обработчик должен быть функцией, а для передачи аргументов удобно использовать стрелочную функцию.",
      },
    ],
  },

  {
    path: "react-additions",
    title: "react additions",
    content: [
      { h2: "Дополнения React" },

      { h3: "key" },
      {
        p: "key — уникальный идентификатор, который React использует для элементов списка. Он помогает React понимать, какие элементы изменились, добавились или удалились.",
      },
      {
        c: `const users = [
  { id: 1, name: "Анна" },
  { id: 2, name: "Павел" }
];

users.map(user => (
  <div key={user.id}>
    {user.name}
  </div>
));`,
      },
      {
        p: "Лучше всего использовать стабильный уникальный идентификатор из данных. Индекс массива как key нежелателен, если порядок элементов может изменяться.",
      },

      { h3: "Fragment" },
      {
        p: "Fragment позволяет вернуть несколько элементов без добавления лишнего DOM-элемента.",
      },
      {
        c: `function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Text</p>
    </>
  );
}`,
      },

      { h3: "Refs и useRef" },
      {
        p: "Refs позволяют получить доступ к DOM-элементу или сохранить значение между рендерами без вызова повторного рендера при его изменении.",
      },
      {
        c: `import { useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}`,
      },

      { h3: "StrictMode" },
      {
        p: "StrictMode помогает обнаруживать потенциальные проблемы в приложении во время разработки. Он не добавляет отдельный DOM-элемент.",
      },
      {
        c: `import { StrictMode } from "react";

<StrictMode>
  <App />
</StrictMode>`,
      },

      { h3: "Главное" },
      {
        p: "key нужен для списков, Fragment позволяет группировать элементы без лишнего DOM, refs дают доступ к DOM или сохраняют значение между рендерами, StrictMode помогает проверять приложение в режиме разработки.",
      },
    ],
  },

  {
    path: "optimization",
    title: "optimization",
    content: [
      { h2: "Оптимизация React" },
      {
        p: "Оптимизация помогает уменьшить количество ненужных вычислений и рендеров и сделать приложение более производительным.",
      },

      { h3: "React.memo" },
      {
        p: "React.memo позволяет пропустить повторный рендер компонента, если его props не изменились.",
      },
      {
        c: `const User = React.memo(function User({ name }) {
  return <h1>{name}</h1>;
});`,
      },

      { h3: "useMemo" },
      {
        p: "useMemo кэширует результат вычисления и пересчитывает его только при изменении указанных зависимостей.",
      },
      {
        c: `const filteredUsers = useMemo(() => {
  return users.filter(user =>
    user.name.includes(search)
  );
}, [users, search]);`,
      },

      { h3: "useCallback" },
      {
        p: "useCallback кэширует функцию между рендерами. Это особенно полезно, когда функция передаётся в мемоизированный дочерний компонент.",
      },
      {
        c: `const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);`,
      },

      { h3: "React.lazy" },
      {
        p: "React.lazy позволяет загружать компонент только тогда, когда он действительно нужен. Это помогает разделять код приложения.",
      },
      {
        c: `const About = React.lazy(() =>
  import("./About")
);`,
      },

      { h3: "Suspense" },
      {
        p: "Suspense позволяет показать fallback во время загрузки лениво загружаемого компонента.",
      },
      {
        c: `<Suspense fallback={<p>Loading...</p>}>
  <About />
</Suspense>`,
      },

      { h3: "Profiler" },
      {
        p: "Profiler используется для анализа производительности и позволяет измерять время рендера компонентов.",
      },
      {
        c: `<Profiler
  id="App"
  onRender={onRender}
>
  <App />
</Profiler>`,
      },

      { h3: "Главное" },
      {
        p: "memo помогает контролировать повторные рендеры, useMemo кэширует вычисления, useCallback — функции, lazy и Suspense используются для отложенной загрузки, а Profiler — для анализа производительности.",
      },
    ],
  },

  {
    path: "context",
    title: "context",
    content: [
      { h2: "React Context" },
      {
        p: "Context позволяет передавать данные глубоко по дереву компонентов без необходимости передавать их через props на каждом уровне.",
      },

      { h3: "Prop Drilling" },
      {
        p: "Prop Drilling возникает, когда данные приходится передавать через несколько промежуточных компонентов, хотя нужны они только одному дочернему компоненту.",
      },
      {
        c: `function App() {
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <Profile user={user} />;
}`,
      },

      { h3: "Создание Context" },
      {
        p: "Для создания контекста используется createContext.",
      },
      {
        c: `import { createContext } from "react";

const UserContext = createContext(null);`,
      },

      { h3: "Provider" },
      {
        p: "Provider передаёт значение контекста всем дочерним компонентам внутри него.",
      },
      {
        c: `function App() {
  const user = {
    name: "Pavel"
  };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}`,
      },

      { h3: "useContext" },
      {
        p: "useContext позволяет получить значение Context внутри функционального компонента.",
      },
      {
        c: `import { useContext } from "react";

function Profile() {
  const user = useContext(UserContext);

  return <h1>{user.name}</h1>;
}`,
      },

      { h3: "Когда использовать Context?" },
      {
        p: "Context удобно использовать для данных, которые нужны многим компонентам: например, тема интерфейса, текущий пользователь или другие общие значения.",
      },

      { h3: "Главное" },
      {
        p: "Context помогает избежать лишней передачи props через промежуточные компоненты. createContext создаёт контекст, Provider предоставляет значение, useContext получает его.",
      },
    ],
  },

  {
    path: "higher-order-components",
    title: "higher-order components",
    content: [
      { h2: "Higher-Order Components (HOC)" },
      {
        p: "HOC — это функция, которая принимает React-компонент и возвращает новый компонент с дополнительной логикой или возможностями.",
      },

      { h3: "Зачем нужны HOC?" },
      {
        p: "HOC позволяют переиспользовать одну и ту же логику между несколькими компонентами и не дублировать код.",
      },

      { h3: "Базовый пример" },
      {
        c: `function withLogger(Component) {
  return function WrappedComponent(props) {
    console.log("Component rendered");

    return <Component {...props} />;
  };
}`,
      },

      { h3: "Использование HOC" },
      {
        c: `function User({ name }) {
  return <h1>Hello, {name}!</h1>;
}

const UserWithLogger = withLogger(User);

<UserWithLogger name="Pavel" />;`,
      },

      { h3: "Передача Props" },
      {
        p: "HOC должен передавать исходные props в обёрнутый компонент. Для этого часто используется spread-оператор.",
      },
      {
        c: `function withLogger(Component) {
  return function WrappedComponent(props) {
    return <Component {...props} />;
  };
}`,
      },

      { h3: "HOC не изменяет исходный компонент" },
      {
        p: "Обычно HOC создаёт новый компонент на основе исходного, а не изменяет переданный компонент напрямую.",
      },

      { h3: "Главное" },
      {
        p: "HOC — это функция вида Component → EnhancedComponent. Она позволяет добавить существующему компоненту дополнительную логику и переиспользовать её.",
      },
    ],
  },

  {
    path: "routing",
    title: "routing",
    content: [
      { h2: "Routing в React" },
      {
        p: "Routing позволяет создавать несколько страниц или представлений внутри React-приложения и переключаться между ними без полной перезагрузки страницы.",
      },

      { h3: "React Router" },
      {
        p: "React Router используется для связывания URL-адресов с React-компонентами и управления навигацией.",
      },

      { h3: "BrowserRouter" },
      {
        p: "BrowserRouter используется как основной контейнер для маршрутизации и позволяет React Router отслеживать текущий URL.",
      },
      {
        c: `import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}`,
      },

      { h3: "Routes и Route" },
      {
        p: "Routes содержит набор маршрутов, а Route связывает определённый URL с React-компонентом.",
      },
      {
        c: `import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}`,
      },

      { h3: "Link" },
      {
        p: "Link используется для перехода между маршрутами без полной перезагрузки страницы.",
      },
      {
        c: `import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>`,
      },

      { h3: "NavLink" },
      {
        p: "NavLink похож на Link, но позволяет определить активный маршрут и изменить его оформление.",
      },
      {
        c: `import { NavLink } from "react-router-dom";

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
  About
</NavLink>`,
      },

      { h3: "Динамические маршруты" },
      {
        p: "Динамический параметр используется, когда часть URL должна изменяться, например для страницы конкретного пользователя.",
      },
      {
        c: `<Route
  path="/users/:userId"
  element={<User />}
/>`,
      },

      { h3: "useParams" },
      {
        p: "useParams позволяет получить параметры из текущего URL.",
      },
      {
        c: `import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  return <h1>User: {userId}</h1>;
}`,
      },

      { h3: "useNavigate" },
      {
        p: "useNavigate позволяет перейти на другой маршрут из JavaScript-кода, например после выполнения действия.",
      },
      {
        c: `import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}`,
      },

      { h3: "Вложенные маршруты" },
      {
        p: "Маршруты можно вкладывать друг в друга. Это удобно для страниц с общей структурой и несколькими внутренними разделами.",
      },
      {
        c: `<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>`,
      },

      { h3: "Outlet" },
      {
        p: "Outlet — место внутри родительского компонента, где React Router отображает соответствующий дочерний маршрут.",
      },
      {
        c: `import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}`,
      },

      { h3: "404 маршрут" },
      {
        p: "Для неизвестных URL можно использовать маршрут со значением *, чтобы показать отдельную страницу.",
      },
      {
        c: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="*" element={<NotFound />} />
</Routes>`,
      },

      { h3: "Главное" },
      {
        p: "BrowserRouter — контейнер маршрутизации. Routes — набор маршрутов. Route — конкретный маршрут. Link и NavLink — навигация. useParams — параметры URL. useNavigate — программная навигация. Outlet — вложенные маршруты.",
      },
    ],
  },
  {
    path: "storages",
    title: "storages",
    content: [
      { h2: "Storages" },

      { h3: "Local Storage" },
      {
        p: "Local Storage — встроенное хранилище браузера для сохранения данных на стороне клиента. Данные сохраняются даже после закрытия вкладки и браузера.",
      },

      { h3: "Основные особенности Local Storage" },
      {
        p: "Данные хранятся в формате ключ-значение. Все значения сохраняются как строки, поэтому объекты и массивы нужно преобразовывать через JSON.stringify().",
      },

      { h3: "Основные методы Local Storage" },
      {
        c: `localStorage.setItem("userName", "Павел");

const userName = localStorage.getItem("userName");

localStorage.removeItem("userName");

localStorage.clear();`,
      },

      { h3: "Session Storage" },
      {
        p: "Session Storage хранит данные только в рамках текущей сессии браузера. После закрытия вкладки или окна данные удаляются.",
      },

      { h3: "Методы Session Storage" },
      {
        p: "Session Storage использует тот же набор основных методов, что и Local Storage: setItem(), getItem(), removeItem() и clear().",
      },

      {
        c: `sessionStorage.setItem("theme", "dark");

const theme = sessionStorage.getItem("theme");

sessionStorage.removeItem("theme");

sessionStorage.clear();`,
      },

      { h3: "Cookies" },
      {
        p: "Cookies — небольшие данные, которые браузер сохраняет для сайта. Они часто используются для хранения информации о сессии, авторизации и других данных, которые могут передаваться на сервер.",
      },

      { h3: "Работа с Cookies" },
      {
        p: "В отличие от Local Storage и Session Storage, cookies работают через свойство document.cookie.",
      },

      { h3: "Установка Cookie" },
      {
        c: `document.cookie = "username=Павел; path=/";`,
      },

      { h3: "Чтение Cookies" },
      {
        p: "Чтобы получить все доступные cookies, можно обратиться к document.cookie. В результате возвращается строка, где cookies разделены точкой с запятой.",
      },

      {
        c: `console.log(document.cookie);`,
      },

      { h3: "Local Storage vs Session Storage vs Cookies" },
      {
        p: "Local Storage сохраняет данные после закрытия браузера. Session Storage хранит данные только до закрытия вкладки. Cookies предназначены для небольших данных и могут автоматически отправляться вместе с HTTP-запросами.",
      },

      { h3: "Главное" },
      {
        p: "Local Storage — постоянное клиентское хранилище. Session Storage — временное хранилище для текущей сессии. Cookies — небольшие данные, связанные с сайтом и часто используемые для работы с сессиями.",
      },
    ],
  },

  {
    path: "bundlers",
    title: "bundlers",
    content: [
      { h2: "Сборщики" },

      { h3: "Что такое сборщик?" },
      {
        p: "Сборщик — инструмент, который обрабатывает исходный код приложения и подготавливает его к запуску и публикации. Он может объединять файлы, обрабатывать зависимости, оптимизировать код и выполнять другие задачи.",
      },

      { h3: "Webpack и Vite" },
      {
        p: "Webpack и Vite — два популярных инструмента для работы с современными JavaScript-приложениями.",
      },

      { h3: "Webpack" },
      {
        p: "Webpack — мощный и гибко настраиваемый сборщик. Он анализирует зависимости проекта, собирает модули и формирует итоговые файлы приложения.",
      },

      { h3: "Особенности Webpack" },
      {
        p: "Webpack имеет большое количество настроек и плагинов. Он позволяет детально контролировать процесс сборки и подходит для сложных проектов с нестандартными требованиями.",
      },

      {
        c: `module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js"
  }
};`,
      },

      { h3: "Vite" },
      {
        p: "Vite — современный инструмент для разработки и сборки frontend-приложений. Он ориентирован на быструю разработку и минимальную настройку.",
      },

      { h3: "Особенности Vite" },
      {
        p: "Vite использует быстрый dev server и обеспечивает автоматическое обновление страницы или модулей при изменении кода.",
      },

      {
        p: "Во время разработки Vite позволяет быстро запускать проект и работать с изменениями без необходимости каждый раз полностью пересобирать приложение.",
      },

      { h3: "Webpack vs Vite" },
      {
        p: "Webpack предоставляет больше возможностей для тонкой настройки, но требует больше конфигурации. Vite проще начать использовать и обычно быстрее работает в режиме разработки.",
      },

      { h3: "Когда выбрать Webpack?" },
      {
        p: "Webpack подходит, когда проект требует сложной конфигурации, большого количества настроек или специфической системы сборки.",
      },

      { h3: "Когда выбрать Vite?" },
      {
        p: "Vite удобно использовать для современных frontend-проектов, когда важны быстрый запуск проекта, быстрая разработка и минимальная конфигурация.",
      },

      { h3: "Главное" },
      {
        p: "Webpack — мощный и гибкий сборщик с большим количеством настроек. Vite — быстрый современный инструмент с простой конфигурацией и удобным dev server.",
      },
    ],
  },

  {
    path: "forms",
    title: "forms",
    content: [
      { h2: "Формы в React" },

      { h3: "Работа с формами" },
      {
        p: "Формы в React используются для получения и обработки данных, введённых пользователем. При работе со сложными формами удобно использовать специальные библиотеки.",
      },

      { h3: "React Hook Form" },
      {
        p: "React Hook Form — библиотека для создания производительных и гибких форм с удобной системой валидации.",
      },

      { h3: "useForm" },
      {
        p: "Основной хук React Hook Form — useForm. Он предоставляет инструменты для регистрации полей, отправки формы и работы с состоянием валидации.",
      },

      {
        c: `import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />

      <button type="submit">
        Submit
      </button>
    </form>
  );
}`,
      },

      { h3: "register" },
      {
        p: "register связывает HTML-поле с React Hook Form и позволяет библиотеке отслеживать его значение и состояние.",
      },

      {
        c: `<input
  {...register("email")}
/>`,
      },

      { h3: "Валидация" },
      {
        p: "Правила валидации можно передать в register. Ошибки доступны через formState.errors.",
      },

      {
        c: `<input
  {...register("email", {
    required: "Email is required"
  })}
/>

{errors.email && (
  <p>{errors.email.message}</p>
)}`,
      },

      { h3: "handleSubmit" },
      {
        p: "handleSubmit обрабатывает отправку формы и передаёт данные в функцию, если форма успешно прошла проверку.",
      },

      {
        c: `const onSubmit = (data) => {
  console.log(data);
};

<form onSubmit={handleSubmit(onSubmit)}>
  ...
</form>`,
      },

      { h3: "Formik" },
      {
        p: "Formik — библиотека для работы с формами в React. Она предоставляет инструменты для управления значениями полей, отправкой формы и валидацией.",
      },

      { h3: "React Hook Form vs Formik" },
      {
        p: "React Hook Form ориентирован на производительность и минимизацию ненужных ререндеров. Formik использует более классический подход к управлению состоянием формы.",
      },

      { h3: "Когда использовать React Hook Form?" },
      {
        p: "React Hook Form хорошо подходит для больших и сложных форм, где важны производительность, удобная валидация и минимальное количество ререндеров.",
      },

      { h3: "Когда использовать Formik?" },
      {
        p: "Formik удобно использовать, когда нужен понятный подход к управлению состоянием формы и централизованная работа со значениями и валидацией.",
      },

      { h3: "Главное" },
      {
        p: "React Hook Form — useForm, register, handleSubmit и formState. Formik — альтернативная библиотека для управления формами. React Hook Form часто выбирают для производительных и сложных форм.",
      },
    ],
  },
];

export const modifySheetData = sheetData.map((page) => ({
  ...page,

  content: page.content.map((item, index) => ({
    ...item,
    id: `${page.path}-${index}`,
  })),
}));
