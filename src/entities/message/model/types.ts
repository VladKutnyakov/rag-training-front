export interface MessageDto {
  id: number
  text: string
  type: 'SENT' | 'RECIEVED'
}
