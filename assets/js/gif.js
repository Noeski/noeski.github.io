$(document).ready(function() {
  var gif = [];

  $('div.animated_gif_frame').each(function(i, n) {
      var $img = $(n).children('img');
      var data = $img.attr('src').replace(/\.(png|jpg)$/,'.gif');
      $img.attr('data-source', data).data('alt', data);
      gif.push(data);

      $(n).on('click', function() {
        var $img = $(this).children('img'),
            $imgSrc = $img.attr('src'),
            $imgAlt = $img.attr('data-source'),
            $imgExt = $imgAlt.replace(/^.*?\.(\w+)$/,'$1');

        if($imgExt === 'gif') {
            $img.attr('src', $img.data('alt')).attr('data-source', $imgSrc);
            $(this).addClass('playing');
        } else {
            $img.attr('src', $imgAlt).attr('data-source', $img.data('alt'));
            $(this).removeClass('playing');
        }
      });
  });

  var image = [];

  $.each(gif, function(index) {
      image[index]     = new Image();
      image[index].src = gif[index];
  });
});
