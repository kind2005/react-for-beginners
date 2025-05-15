import { Outlet, Link } from 'react-router-dom';

function BaseLayout() {
  return (
    <div>
      <header>
        <h1>🐱 React? 🐱</h1>
        <nav>
          <Link to="./">Home</Link>
           | <Link to="todos">Todos</Link> | <Link to="coinList">CoinList</Link> | <Link to="test">Test4</Link>
        </nav>
      </header>
      <main>
        <Outlet /> {/* 여기에 자식 라우트가 렌더링됨 */}
      </main>
    </div>
  );
}

export default BaseLayout;