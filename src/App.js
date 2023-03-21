import './App.css';
import PaintingList from './components/PaintingList';
import paintings from './paintings.json';
import Logo from './components/Logo';
import Panel from './components/Panel';

//на 12 строці додаємо айдішник як унікальний ключ кожного елементу списку
//якщо в колекції немає наприклад idшників можна в map використовувати index або саму назву елемента

function App() {
  return (
    <div>
      <Panel title="останні новини">
        <p>Hello</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, fugiat.
        </p>
        <a href="/">Читати</a>
      </Panel>

      <Panel>
        <p>Hello</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, fugiat.
        </p>
      </Panel>

      <Logo text={'Це ЛОГО компонент'} />
      <PaintingList paintings={paintings} />
     
  </div>);
}

export default App;
