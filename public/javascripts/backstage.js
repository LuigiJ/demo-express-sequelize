$(function(){
  function menuAction (type) {
    if(type !== undefined) {
      $.ajax({
        url: '/weChat/menu/' + type,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          console.log(data)
        },
        error: function (err) {
          console.log(err)
        }
      }); 
    }
  }
  $('.create').click(function(e){
    e.preventDefault();
    menuAction('create');
  });
  $('.delete').click(function(e){
    e.preventDefault();
    menuAction('delete');
  });
})