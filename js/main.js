
var instagramWidth = ($("#instafeed").width() / 3) - 40;

var feed = new Instafeed({
   get: 'user',
   // userId: 1458002023,
   // accessToken: '1458002023.467ede5.1968bef707324b96961797198330b0b6',
   // test
   userId: 3252543,
   accessToken: '3252543.467ede5.26d5f8f730064fec802a05ccec723db2',
   limit: 60,
   resolution: instagramWidth <= 310 ? 'low_resolution' : 'standard_resolution',
   sortBy: 'most-recent',
   template: '<a href="{{link}}"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{image}}" /></a>',
   after: function () {
       $("#instafeed img").unveil(200, function() {
          $(this).load(function() { this.style.opacity = 1; });
       });
   }
});
feed.run();
