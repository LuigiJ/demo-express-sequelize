module.exports = {
  'button': [
    {
      'type': 'click',
      'name': 'ReplyMessage',
      'key': 'reply'
    },
    {
      'name': 'MultilevelMenu',
      'sub_button': [
        {
          'type': 'view',
          'name': 'IndexPage',
          'url': 'http://60.205.178.50/'
        },
        {
          'type': 'click',
          'name': 'hello',
          'key': 'hello'
        }
      ]
    }
  ]
}