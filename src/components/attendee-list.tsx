// Importando ícones e componentes necessários
import searchIcon from '../assets/search.png'
import moreIcon from '../assets/mais_h.png'
import arrowRight from '../assets/chevron-direita.png'
import arrowLeft from '../assets/chevron-esquerda.png'
import arrowsLeft from '../assets/chevrons-esquerda.png'
import arrowsRight from '../assets/chevrons-direita.png'

// Importando biblioteca dayjs para manipulação de datas e localização
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

// Importando os componentes personalizados
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

// Importando propriedades do React e dados de participantes do evento
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/attendees'

// Configurando a biblioteca dayjs para usar o plugin de tempo relativo e a localização pt-br
dayjs.extend(relativeTime)
dayjs.locale('pt-br')

// Componente principal para listar os participantes
export function AttendeeList() {

    // Estados para busca e paginação
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(attendees.length / 10)

    // Função para lidar com mudanças no campo de busca
    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
        setPage(1)
    }

    // Funções para navegação entre páginas
    function goToFirstPage() {
        setPage(1)
    }

    function goToLastPage() {
        setPage(totalPages)
    }

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToPreviousPage() {
        setPage(page -1)
    }

    // Renderização do texto participantes e configuração do input para pesquisa de nomes
    return(
        <div className='flex flex-col gap-4'>
        <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>

            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                <img className='size-4' src={searchIcon} />
                <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
            </div>

            {search}

        </div>

        <Table> 

            <thead>
                <tr className='border-b border-white/10'>
                    <TableHeader style={{width: 48}} className='py-3 px-4 text-sm font-semibold text-left'>
                        <input type="checkbox" className='size-4 bg-black/20 rounded border-white/10'/>
                    </TableHeader>

                    <TableHeader>Código</TableHeader>
                    <TableHeader>Participante</TableHeader>
                    <TableHeader>Data de Inscrição</TableHeader>
                    <TableHeader>Data do Check-In</TableHeader>
                    <TableHeader style={{width: 64}}></TableHeader>
                </tr>
            </thead>

            <tbody>
                {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                    return (
                        <TableRow key={attendee.id}>
                        <TableCell>
                            <input type="checkbox" className='size-4 bg-black/20 rounded border-white/10'/>
                        </TableCell>
                        <TableCell>{attendee.id}</TableCell>
                        <TableCell>
                            <div className='flex flex-col gap-1'>
                                <span className='font-semibold text-white'>{attendee.name}</span>
                                <span>{attendee.email}</span>
                            </div>
                        </TableCell>
    
                        <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                        <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
    
                        <TableCell>
                            <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                                <img className='size-4' src={moreIcon} />
                            </button>
                        </TableCell>
    
                    </TableRow>
                    )
                })}

            </tbody>

            <tfoot>
                <tr>
                    <TableCell colSpan={3}>
                        Mostrando 10 de {attendees.length} itens
                    </TableCell>

                    <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>

                        <div className='inline-flex items-center gap-8'>
                        <span>Página {page} de {totalPages}</span>
                        
                        <div className='flex gap-1.5'>
                        <IconButton onClick={goToFirstPage} disabled={page === 1}>
                            <img className='size-4' src={arrowsLeft} />
                        </IconButton>

                        <IconButton onClick={goToPreviousPage} disabled={page === 1}> 
                            <img className='size-4' src={arrowLeft} />
                        </IconButton>

                        <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                            <img className='size-4' src={arrowRight} />
                        </IconButton>

                        <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                            <img className='size-4' src={arrowsRight} />
                        </IconButton>
                        </div>

                        </div>
                    </td>
                </tr>
            </tfoot>

        </Table>
        </div>

    )
}