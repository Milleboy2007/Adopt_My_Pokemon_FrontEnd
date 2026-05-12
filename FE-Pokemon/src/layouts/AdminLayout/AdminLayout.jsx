import { NavLink, Outlet, useOutletContext } from 'react-router-dom';
import './adminLayout.css';

export default function AdminLayout() {
  const { user } = useOutletContext();

  return (
    <div className="admin-layout">
      
      <header className="header-admin">
        <nav className="nav-admin">
          <NavLink 
            to="/admin" 
            end 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Gestion Adoptions
          </NavLink>

          <NavLink 
            to="/admin/createPoke" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Créer un Pokémon
          </NavLink>

          <NavLink
           to="/admin/createQuiz"
           className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Creer un Quiz
          </NavLink>
        </nav>
      </header>

      <main className="admin-area">
        <Outlet context={{ user }} />
      </main>

    </div>
  );
}