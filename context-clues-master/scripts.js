$(document).ready(function () {

  var friends = [

    'Bri',
    'Jerry',
    'Lisa',
    'Ray',
    'Ramsey',

  ];

  var locations = [

    'bedroom',
    'kitchen',
    'living room',
    'bathroom',
    'sun room',
    'closet',
    'game room',
    'dining room',
    'garage',
    'attic'

  ];

  var weapons = [

    'bag of oranges',
    'handful of scorpions',
    'nokia phone',
    'crowbar',
    'lazer pointer',
    'pun',
    'sliced bread',
    'oxford comma',
    'bad mexican food',
    'chair',
    'Frozen Soundtrack',
    'poison',
    'hammer',
    'david bowie knife',
    'story they told a thousand times about what their baby did that was so cute that one time',
    'hair brush',
    'stapler',
    'allergies',
    'screwdriver',
    'toenail clipper',

  ];

  var who = ` I accuse `;
  var what = `with the `;
  var where = `in the `;

  for (var i = 0; i < 100; i++) {

    $('body').append(`<h3 class="accusation${i}">Accusation ${i + 1}</h3>`);

  };

  $(`h3`).on('click', function () {

    var randomFriend = Math.floor(Math.random() * Math.floor(5));
    var randomLocation = Math.floor(Math.random() * Math.floor(10));
    var randomWeapon = Math.floor(Math.random() * Math.floor(20));

    var content = who + `${friends[randomFriend]} ` + what + `${weapons[randomWeapon]} ` + where + `${locations[randomLocation]}!`
    $(this).append(content);

  });

});