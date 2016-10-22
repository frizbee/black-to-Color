/// Looking for something, whant to help improoving?

$('frame').load( function() {
    $('frame').contents().find("head").append($("<style type='text/css'>  html, body, img {-webkit-filter: grayscale(0) !important;}  </style>"));
});
