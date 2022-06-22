import './Navbar.css'
import carro from '../assets/img/carro.png';

function Navbar() {
  return (
      <nav>
          <div className="menuNav">
            <p>Inicio</p>
            <p>Ofertas</p>
            <p>Acerca de</p>
            <p>Contacto</p>
              <div className="img-carro">
              <a href="#">
                <img src= {carro} />
              </a>
              </div>
          </div>    
            
      </nav>
    
  );
}

export default Navbar;
