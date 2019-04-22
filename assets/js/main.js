$('.carousel').carousel({
    interval: 2000
})
$('.hamburger').click(function () {
    if ($(this).data('toggle') == 'slideDown') {
        $('#nav-container').slideUp();
        $(this).data('toggle', 'slideUp');
    } else if ($(this).data('toggle') == 'slideUp') {
        $('#nav-container').slideDown();
        $(this).data('toggle', 'slideDown');
    }
})
