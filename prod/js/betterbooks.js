
//make dropup parent clickable
function clickDropdown() {
    if ($('.navbar-toggler').css("display") === "none") {
        $('.dropdown-toggle').click(function () {
            window.location.href = $(this).attr('href');
            return false;
        });
    }
}

$(document).ready(function () {
    clickDropdown();
    $(window).resize(function () {
        clickDropdown();
    });
});
