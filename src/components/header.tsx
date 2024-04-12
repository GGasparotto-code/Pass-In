// Importando o ícone do evento
import eventIcon from '../assets/evento.png'

// Importando o componente NavLink
import { NavLink } from './nav-link'

// Função Header que retorna o cabeçalho da aplicação
export function Header() {
    return (

        // Div que contém o ícone e a navegação
        <div className='flex items-center gap-5 py-2'>
            <img src={eventIcon} /> 
            
            <nav className='flex items-center gap-5'>
                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>
            </nav>
        </div>
    )
}