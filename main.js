"use strict";

$(document).ready(function(){
  $('.buttonLabel').toggleClass('animated flash');
  $('#newContact').hover(function(){
    $('#newContact').toggleClass('animated pulse');
  });
  $('#addContact').click(addContact)
});

function addContact(){
  var name = $('#input-name').val();
  var phone = $('#input-phone').val();
  var url = $('#input-url').val();
  var address = $('#input-address').val();
  var email = $('#input-email').val();

  if(name == '') {
    $('#name').addClass('has-error')
    return;
  }
  if(url == '') url = "http://placehold.it/300x300";
  if(phone == '') phone = "-";
  if(address == '') address = "-";
  if(email == '') email = "-";

  var $contactItem = $('.template').clone();

  $contactItem.removeClass('template');
  $contactItem.find('img').attr('src', url);
  $contactItem.find('.num').text(phone);
  $contactItem.find('.name').text(name);
  $contactItem.find('.homeAddress').text(address);
  console.log(email);
  console.log($contactItem.find('.emailAddress'));
  $contactItem.find('.emailAddress').text(email);


        $('#contactList').append($contactItem);
        $('.modal').modal('hide')
        $('.has-error').removeClass('has-error');

}
