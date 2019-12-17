$('.redbox').click(function() {
    red = $(this).select();
    $('.green').append(red);
}
)
$('.green').click(function() {
    $('.green').append(red);
}
)
$('.greenbox').click(function() {
    green = $(this).select();
    $('.blue').append(green);
}
)
$('.green').click(function() {
    $('.green').append(green);
}
)
$('.bluebox').click(function() {
    blue = $(this).select();
    $('.yellow').append(blue);
}
)
$('.green').click(function() {
    $('.green').append(blue);
}
)
$('.yellowbox').click(function() {
    yellow = $(this).select();
    $('.red').append(yellow);
}
)
$('.green').click(function() {
    $('.green').append(yellow);
}
)
