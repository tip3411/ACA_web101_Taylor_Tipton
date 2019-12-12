var red;

$('.redbox').click(function() {
    red = $(this).select();
    $('.green').append(red);
}
)
$('.green').click(function() {
    $('.green').append(red);
}
)
