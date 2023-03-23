import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div className="home">
        <h1>Home</h1>
        <ul>
          <li>
            <Button variant="Link">
              {<Link to="/Sessao1">Section 1</Link>}
            </Button>
          </li>
          <li>
            <Button variant="Link">
              <Link to="/Sessao2">Section 2</Link>
            </Button>
          </li>
          <li>
          <Button variant="Link">
            <Link to="/Sessao3">Section 3</Link>
            </Button>

          </li>
         <Outlet/>

        </ul>
      </div>
    </>
  );
}
