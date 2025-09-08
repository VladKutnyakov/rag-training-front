import type { DocumentDto } from '../model'

export const getDocuments = (): DocumentDto[] => {
  return [
    {
      id: 0,
      name: 'Document1 chat',
      extension: '.docx',
    },
    {
      id: 1,
      name: 'ReportDoc',
      extension: '.pdf',
    },
  ]
}
