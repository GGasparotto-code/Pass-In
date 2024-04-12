// Importando ComponentProps do React para estender as propriedades do botão
import { ComponentProps } from "react";

// Importando a função twMerge da biblioteca tailwind-merge para combinar classes Tailwind CSS
import { twMerge } from "tailwind-merge";

// Definindo uma interface para as propriedades do componente IconButton
// Estendendo ComponentProps<'button'> para incluir todas as propriedades padrão de um botão HTML
// Adicionando uma propriedade opcional 'transparent' que determina a transparência do botão
interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean
}

// Exportando o componente IconButton em uma função
export function IconButton({ transparent, ...props}: IconButtonProps) {

    // Retornando um elemento button com as propriedades passadas e classes Tailwind CSS aplicadas
    // Utilizando twMerge para combinar classes condicionalmente com base na propriedade 'transparent' e no estado 'disabled' do botão
    return (
        <button {...props} 
        
        className={twMerge(
            'border border-white/10 rounded-md p-1.5',      // Classe base do botão
            transparent ? 'bg-black/20' : 'bg-white/10',    // Classe condicional
            props.disabled ? 'opacity-50' : null,       // Classe de opacidade condicional para botão quando estiver desabilitado
        )}/>
        
    )
}