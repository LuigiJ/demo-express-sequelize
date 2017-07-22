$(function(){
  $('button').click(function(e){
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/db/test/findAll',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data)
      },
      error: function (err) {
        console.log(err)
      }
    });
  })
})