import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <main><Outlet /></main>
      <footer>
        <p>© 2026 • Backend & DevOps Engineer • MSCS at Georgia Tech</p>
      </footer>
    </div>  
  );
}

export default App