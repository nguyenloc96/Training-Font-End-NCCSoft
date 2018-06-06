$(document).ready(function(){
    // Show menu header
    $('.menu-tablet').click(function(){
        $('.list-menu').toggle('slow');
    });
    // Change menu
    $('.list-menu li').click(function(){
        $('.list-menu li').removeClass('active');
        $(this).addClass('active');
    });
    
    // Change slide-bar
    var interval;
  	function start(){
    	interval = setInterval(function(){
      		$('#next').click();
   		}, 2000);
  	}
  	function stop(){
    	clearInterval(interval);
    }
    start();
    $('#next').click(function(){
        var currPage = parseInt($('.change-slide li.select').attr('slide-list'));
        var nextPage = currPage+1;
        if(nextPage > 2){
            nextPage = 0;
        }
        $('.change-slide li').removeClass('select');
        $('.slide-title-1 div').removeClass('selected');
        $('.change-slide li[slide-list]').eq(nextPage).addClass('select');
        $('.slide-title-1 div[per-slide]').eq(nextPage).addClass('selected');
    });
    $('.change-slide li').click(function(){
        $('.change-slide li').removeClass('select');
        var currPage = parseInt($(this).attr('slide-list'));
        $('.slide-title-1 div').removeClass('selected');
        $('.slide-title-1 div[per-slide]').eq(currPage).addClass('selected');
        $(this).addClass('select');
    });

    $('.change-list li').click(function(){
        $('.change-list li').removeClass('select');
        $(this).addClass('select');
    });
    // Change border-bottom page contact
    $('.input-name-email input').on('click', function(){
        $('.input-message textarea').removeClass('input-active');
        $('.input-name-email input').removeClass('input-active');
        $(this).addClass('input-active');
    });
    $('.input-message textarea').on('click', function(){
        $('.input-name-email input').removeClass('input-active');
        $(this).addClass('input-active');
    });
});