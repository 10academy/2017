$(function () {
    var readMoreLinkSelector = '.read-more__link',
        readLessLinkSelector = '.read-less__link',
        readMoreTextSelector = '.read-more__text';

    $(readMoreLinkSelector).each(function () {
        var $this = $(this),
            $parent = $this.parent();
        $this.click(function () {
            $this.hide();
            $parent.find(readLessLinkSelector).show();
            $parent.find(readMoreTextSelector).show();
        });
    });

    $(readLessLinkSelector).each(function () {
        var $this = $(this),
            $parent = $this.parent();
        $this.click(function () {
            $this.hide();
            $parent.find(readMoreLinkSelector).show();
            $parent.find(readMoreTextSelector).hide();
        });
    });
});

