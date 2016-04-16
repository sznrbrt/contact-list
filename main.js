"use strict";

var contactSamples = [
  {
   "name":"Adam D'Angelo",
   "phone":"636-555-3226",
   "address":"855 Delaware Avenue, San Francisco, 94108",
   "email":"adam@quora.com",
   "url":"https://pbs.twimg.com/profile_images/422587147124604928/hlT0oR0m_400x400.png",
   "id":1
  },
  {
   "name":"Chris Sacca",
   "phone":"636-555-3226",
   "address":"855 Delaware Avenue, San Francisco, 94108",
   "email":"chris@lowercasecapital.com",
   "url": "https://pbs.twimg.com/profile_images/668902554957316096/IpjBGyjC.jpg",
   "id":2
  },
];

var NameStorage = {
  get: function(){
    try {
      var contacts = JSON.parse(localStorage.contacts);
    } catch(err) {
      NameStorage.write(contactSamples);
      var contacts = JSON.parse(localStorage.contacts);
    };

    return contacts;
  },

  write: function(contacts){
    localStorage.contacts = JSON.stringify(contacts);
  }
};

$(document).ready(function(){
  // Some animation
  $('.buttonLabel').toggleClass('animated flash');
  $('#newContact').hover(function(){
    $('#newContact').toggleClass('animated pulse');
  });

  // Event handlers
  $('#addContact').click(addContact);
  renderList();

  $(document).on('click', '.deleteButton', deleteContact);
  $(document).on('click', '.editButton', editContact);
});

function renderList() {
  var contactItems = NameStorage.get();
  var $contactItems = contactItems.map(function(contactitem){
    var $item = $('.template').clone().attr('id', contactitem.id).removeClass('template');
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
  var newContact = {};
  newContact.name = $('#input-name').val();
  newContact.phone = $('#input-phone').val() || "N/A";
  newContact.url = $('#input-url').val() || "http://placehold.it/300x300";
  newContact.address = $('#input-address').val() || "N/A";
  newContact.email = $('#input-email').val() || "N/A";
  // Form validation for the name
  if(newContact.name == '') {
    $('#name').addClass('has-error');
    return;
  }

  var contactList = NameStorage.get();
  newContact.id = contactList[contactList.length - 1].id ++;
  contactList.push(newContact);
  NameStorage.write(contactList);
  var newContact = {};
  renderList();

  $('.modal').modal('hide')
  $('.has-error').removeClass('has-error');
}

function deleteContact(event){
  var index = $(event.target).closest('.contactItem').index();
  console.log(index);
  var contacts = NameStorage.get();
    contacts.splice(index, 1);
    NameStorage.write(contacts);
  renderList();
}


function editContact(event){
  var index = $(event.target).closest('.contactItem').index();

  console.log(index);
}
