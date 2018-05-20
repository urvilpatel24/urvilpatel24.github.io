$(function() {
    $(".fancybox").fancybox({
        helpers: {
            title: {
                type: "inside"
            }
        }
    })
}), $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html, body").animate({
                scrollTop: t.offset().top
            }, 1e3), !1
        }
    })
}), jQuery(document).ready(function() {
    jQuery(".skillbar").each(function() {
        jQuery(this).find(".skillbar-bar").animate({
            width: jQuery(this).attr("data-percent")
        }, 2500)
    })
});