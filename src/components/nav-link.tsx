// Importa ComponentProps do React para acessar todas as propriedades do elemento 'a'
import { ComponentProps } from "react"

// Define uma interface para as propriedades do componente NavLink
// Utiliza ComponentProps<'a'> para incluir todas as propriedades padrão de um elemento HTML 'a'
interface NavLinkProps extends ComponentProps<'a'>{
    children: string
}

// Exporta o componente NavLink que recebe props do tipo NavLinkProps
export function NavLink(props: NavLinkProps) {

    // Retorna um elemento 'a' com as propriedades passadas e uma classe CSS adicional
    // Utiliza o operador de propagação para passar todas as propriedades recebidas para o elemento 'a'
    // Define a classe CSS 'font-medium text-sm' para o elemento 'a'
    // Renderiza o conteúdo da propriedade 'children' dentro do elemento 'a'
    return (
        <a {...props} className='font-medium text-sm'>
            {props.children}
        </a>
    )
}