export type Notification = {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  receivedAt: Date
  read: boolean
}

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Bem-vindo ao condomínio!',
    message: 'Explore o app e conheça as funcionalidades.',
    type: 'success',
    receivedAt: new Date('2024-08-28T10:00:00Z'),
    read: false,
  },
  {
    id: '2',
    title: 'Reunião de condomínio',
    message: 'Reunião no dia 1º de setembro às 19h.',
    type: 'info',
    receivedAt: new Date('2024-08-27T14:30:00Z'),
    read: true,
  },
  {
    id: '3',
    title: 'Manutenção programada',
    message: 'Manutenção em áreas comuns dia 30 de agosto.',
    type: 'warning',
    receivedAt: new Date('2024-08-25T08:45:00Z'),
    read: false,
  },
  {
    id: '4',
    title: 'Erro no pagamento',
    message: 'Erro ao processar o pagamento. Tente novamente.',
    type: 'error',
    receivedAt: new Date('2024-08-24T09:15:00Z'),
    read: true,
  },
  {
    id: '5',
    title: 'Mensagem do síndico',
    message: 'Novas regras para uso da piscina.',
    type: 'info',
    receivedAt: new Date('2024-08-23T11:00:00Z'),
    read: false,
  },
  {
    id: '6',
    title: 'Reserva confirmada',
    message: 'Salão de festas reservado para 5 de setembro.',
    type: 'success',
    receivedAt: new Date('2024-08-22T15:30:00Z'),
    read: false,
  },
  {
    id: '7',
    title: 'Aviso de segurança',
    message: 'Atividade suspeita relatada. Fique atento.',
    type: 'warning',
    receivedAt: new Date('2024-08-21T12:00:00Z'),
    read: true,
  },
  {
    id: '8',
    title: 'Boletos disponíveis',
    message: 'Boletos de taxas já disponíveis no app.',
    type: 'info',
    receivedAt: new Date('2024-08-20T17:45:00Z'),
    read: false,
  },
  {
    id: '9',
    title: 'Correspondência entregue',
    message: 'Nova correspondência na portaria.',
    type: 'success',
    receivedAt: new Date('2024-08-19T14:30:00Z'),
    read: true,
  },
  {
    id: '10',
    title: 'Erro no cadastro',
    message: 'Erro ao cadastrar visitante. Tente novamente.',
    type: 'error',
    receivedAt: new Date('2024-08-18T08:00:00Z'),
    read: false,
  },
  {
    id: '11',
    title: 'Novo regulamento',
    message: 'Regulamento atualizado. Confira no app.',
    type: 'info',
    receivedAt: new Date('2024-08-17T16:00:00Z'),
    read: true,
  },
  {
    id: '12',
    title: 'Cadastro atualizado',
    message: 'Suas informações foram atualizadas.',
    type: 'success',
    receivedAt: new Date('2024-08-16T10:30:00Z'),
    read: false,
  },
  {
    id: '13',
    title: 'Manutenção solicitada',
    message: 'Sua solicitação de manutenção foi recebida.',
    type: 'info',
    receivedAt: new Date('2024-08-15T09:00:00Z'),
    read: true,
  },
  {
    id: '14',
    title: 'Horário de silêncio',
    message: 'Respeite o horário de silêncio: 22h às 7h.',
    type: 'warning',
    receivedAt: new Date('2024-08-14T13:45:00Z'),
    read: false,
  },
  {
    id: '15',
    title: 'Erro de sistema',
    message: 'Erro ao acessar informações. Tente mais tarde.',
    type: 'error',
    receivedAt: new Date('2024-08-13T11:30:00Z'),
    read: true,
  },
  {
    id: '16',
    title: 'Convite para evento',
    message: 'Participe da "Feira de Trocas" em 12 de setembro.',
    type: 'info',
    receivedAt: new Date('2024-08-12T15:00:00Z'),
    read: false,
  },
  {
    id: '17',
    title: 'Obrigado pela participação',
    message: 'Agradecemos por participar da reunião.',
    type: 'success',
    receivedAt: new Date('2024-08-11T14:00:00Z'),
    read: false,
  },
  {
    id: '18',
    title: 'Problema no portão',
    message: 'Portão da garagem com problema. Será consertado.',
    type: 'error',
    receivedAt: new Date('2024-08-10T12:30:00Z'),
    read: true,
  },
  {
    id: '19',
    title: 'Novo vizinho',
    message: 'Dê boas-vindas ao novo morador do ap 204.',
    type: 'info',
    receivedAt: new Date('2024-08-09T18:15:00Z'),
    read: false,
  },
  {
    id: '20',
    title: 'Solicitação atendida',
    message: 'Sua solicitação de corte de grama foi atendida.',
    type: 'success',
    receivedAt: new Date('2024-08-08T07:00:00Z'),
    read: true,
  },
]

export default notifications
