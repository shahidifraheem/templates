jQuery(document).ready(function ($) {
    $('.cs-sidebar-nav li, .cs-navbar li').has('.sub-menu').each(function () {
        $(this).children('a').after(`<button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--cs-dark-color)" width="30px"
                                height="30px" viewBox="-8.5 0 32 32" version="1.1">
                                <path
                                    d="M7.28 20.040c-0.24 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l5.84 5.84 5.84-5.84c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-6.44 6.44c-0.16 0.16-0.4 0.24-0.6 0.24z" />
                            </svg>
                        </button>`);
    });
    $(".cs-toggle-btn").click(function () {
        $(".cs-mobile-sidebar").addClass("active")
    })
    $(".cs-sidebar-close").click(function () {
        $(".cs-mobile-sidebar").removeClass("active")
    })
    $(".cs-sidebar-nav li > button").click(function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass("active");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().siblings().find(".sub-menu").slideUp();
        $(this).parent().siblings().find("li").removeClass("active");
    })
});