/// Looking for something, whant to help improoving?

var Host = window.location.host;

/* fix for ugly, stupid thai immigration website */
$('frame').load( function() {
    $('frame').contents().find("head").append($("<style type='text/css'>  html, body, img {-webkit-filter: grayscale(0) !important;}  </style>"));
});

/* Just incase if css injection doesn't work */
/* Especially if they add !important */
var str = Host.indexOf("google");
if( str < 1 ) {
  $("body").attr("style","filter: grayscale(0) !important ; -webkit-filter:grayscale(0) !important");
}
