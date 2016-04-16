"use strict";

var contactSamples = [
  {
   "name":"Adam D'Angelo",
   "phone":"636-555-3226",
   "address":"855 Delaware Avenue, San Francisco, 94108",
   "email":"adam@quora.com",
   "url":"https://pbs.twimg.com/profile_images/422587147124604928/hlT0oR0m_400x400.png"
  },
  {
   "name":"Chris Sacca",
   "phone":"636-555-3226",
   "address":"855 Delaware Avenue, San Francisco, 94108",
   "email":"chris@lowercasecapital.com",
   "url": "https://pbs.twimg.com/profile_images/668902554957316096/IpjBGyjC.jpg"
  },
];

var NameStorage = {
  get: function(){
    try {
      var contacts = JSON.parse(localStorage.contacts);
    } catch(err) {
      var contacts = contactSamples;
    };

    return contacts;
  },

  write: function(contacts){
    localStorage.contacts = JSON.stringify(contacts);
  }
};

$(document).ready(function(){
  renderList();
  // Some animation
  $('.buttonLabel').toggleClass('animated flash');
  $('#newContact').hover(function(){
    $('#newContact').toggleClass('animated pulse');
  });

  // Event handlers
  $('#addContact').click(addContact);
});

function renderList() {
  var contacts = NameStorage.get();

  var $contactItems = contacts.map(function(contactitem){
    var $item = $('.template').clone().removeClass('template');
    $item.find('.name').text(contactitem.name);
    $item.find('.num').text(contactitem.phone);
    $item.find('.homeAddress').text(contactitem.address);
    $item.find('.emailAddress').text(contactitem.email);
    $item.find('img').attr('src', contactitem.url);

    return $item;
  });

  $('#contactList').empty().append($contactItems);
}

function addContact(){
  // Gather values from the form
  var name = $('#input-name').val();
  var phone = $('#input-phone').val();
  var url = $('#input-url').val();
  var address = $('#input-address').val();
  var email = $('#input-email').val();

  // Form validation
  if(name == '') {
    $('#name').addClass('has-error')
    return;
  }
  if(url == '') url = "http://placehold.it/300x300";
  if(phone == '') phone = "-";
  if(address == '') address = "-";
  if(email == '') email = "-";

  // TODO: Render contactlist

  $('.modal').modal('hide')
  $('.has-error').removeClass('has-error');
}
