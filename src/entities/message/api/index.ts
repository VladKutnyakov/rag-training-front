import type { MessageDto } from '../model'

export const getMessages = (): MessageDto[] => {
  return [
    {
      id: 0,
      text: 'Test chat 1',
      type: 'SENT',
    },
    {
      id: 1,
      text: 'Test chat 2',
      type: 'RECIEVED',
    },
    {
      id: 2,
      text: 'Test chat 3',
      type: 'SENT',
    },
  ]
}
