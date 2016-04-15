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
  var email = $('#input-email').text();
  if(name == '') {
    $('#name').addClass('has-error')
    return;
  }
  if(url == '') url = "http://placehold.it/300x300";
  if(phone == '') phone = "-";
  if(address == '') address = "-";
  if(email == '') email = "-";

  console.log(name, phone, url, address, email);
  var contactItem = $(`
          <div class="col-xs-12 col-md-4 contactItem animated slideInRight">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="col-xs-4 col-md-3 imageBox">
                    <img class="profileImg" src="${url}" alt="">
                  </div>
                  <div class="col-xs-8 col-md-9">
                    <div class="row">
                      <h4 class="name">
                        ${name}
                      </h4>
                      <p class="phone">
                        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
                        <span class="num">${phone}</span>
                      </p>
                      <p class="address">
                        <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                        <span class="homeAddress">${address}</span>
                      </p>
                      <p class="email">
                        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                        <span class="emailAddress">${email}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `);
        $('#contactList').append(contactItem);
        $('.modal').modal('hide')
        $('.has-error').removeClass('has-error');



  // var $contactItem = $('<div>').addClass('col-xs-12 col-md-4 contactItem');
  // var $panel = $('<div>').addClass('panel panel-default');
  // var $panelBody = $('<div>').addClass('panel-body');
  //
  // var $imageBox = $('<div>').addClass('col-xs-4 col-md-3 imageBox');
  // var $image = $('<img>').addClass('profileImg');
  // $image.src = url;



  // $imageBox.append($image);
  //
  // var $contactContent = $('<div>').addClass('col-xs-8 col-md-9');
  //
  // var $row = $('div').addClass('row');
  //
  // var $name = $('<h4>').addClass('name');
  // $name.text(name);
  //
  // var $phoneIcon = $('<span class="glyphicon glyphicon-phone" aria-hidden="true"></span>');
  // var $phonenumber = $('span').addClass('num').text(phone);
  // var $phone = $('<p>').addClass('phone').append($phoneIcon).append($phonenumber);
  //
  // var row = $row.append($name).append($phone);
  //
  // $contactContent.append(row);
  //
  // $panelBody.append($imageBox).append($contactContent);
  //
  // $panel.append($panelBody);
  //
  // var $fullContact = $contactItem.append($panel);
  //
  // console.log($fullContact);
}
