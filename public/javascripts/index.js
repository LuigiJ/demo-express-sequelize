$(function(){
  $('button').click(function(e){
    e.preventDefault();
    // localhost:3000/db/test/findAll
    $.ajax({
      url: '/db/test/findAll',
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