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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et rutrum nisi. Etiam accumsan ante sit amet aliquet facilisis. Aliquam erat volutpat. Nunc egestas egestas diam non fringilla. Sed eget enim non tellus iaculis euismod ut non felis. Maecenas porttitor lacus a dignissim ultricies. Ut volutpat augue odio, at auctor lectus porttitor varius. Vivamus vestibulum, dui eget dictum rhoncus, mi diam pulvinar sapien, in tincidunt tellus diam at libero. In ut dapibus mi.',
      type: 'RECIEVED',
    },
    {
      id: 2,
      text: 'Test chat 3',
      type: 'SENT',
    },
  ]
}
