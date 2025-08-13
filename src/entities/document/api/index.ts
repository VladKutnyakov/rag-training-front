import type { DocumentDto } from '../model'

export const getDocuments = (): DocumentDto[] => {
  return [
    {
      id: 0,
      name: 'Test chat 1',
      extension: '.docx',
    },
    {
      id: 1,
      name: 'Test chat 2',
      extension: '.pdf',
    },
  ]
}
