/**
 * Add the sidebar toggle capability when the sidebar exists on the page.
 * Requires jQuery cookie support to persist sidebar state.
 */
$.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js').done(function() {
   var toggleSidebar = function() {
      if ($('#main').hasClass('nosidebar')) {
         $.removeCookie('hidesidebar', { path: '/' });
         $('#main').removeClass('nosidebar');
         $('#sidebar-toggle').html('&raquo;');
      } else {
         $.cookie('hidesidebar', '1', { path: '/' });
         $('#main').addClass('nosidebar');
         $('#sidebar-toggle').html('&laquo;');
      }
   };

   if ($('#main').hasClass('nosidebar') === false) {
      $('#main').append('<button id="sidebar-toggle" class="button">&raquo;</button>');
      $('#sidebar-toggle').click(toggleSidebar);

      if ($.cookie('hidesidebar') === '1') {
         toggleSidebar();
      }
   }
});
