import logo from '../../assets/img/image 1.svg'

import './style.css'

function Header() {

    return (

        <header>
        <div className="logo-container-dsmeta">
            <img src={logo} alt="logo DS Meta" />
            <h1>DSMeta</h1>
            <p>Desenvolvido por <a className="github" 
            href="https://github.com/theussoliveira011" target="_blank">Matheus
                    Oliveira</a>
            </p>
        </div>
        </header>

    )



}
export default Header