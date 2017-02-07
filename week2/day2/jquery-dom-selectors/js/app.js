$(document).ready(function () {
  $('li:first').addClass('selected');

  $('article:nth-child(even)').addClass('middle');

  $('.list-item:odd').addClass('highlighted');

  $('.list-item:last').css('border', '1px solid #eee');

  $(':focus').css('border-color', 'red');
});
