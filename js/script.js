$(function () {
    // メニューを開閉する関数
    function toggleMenu() {
        $('.gNav').toggleClass('open');
        $('.btn-gNav').toggleClass('open');
    }

    // ハンバーガーメニューボタンのクリックイベント
    $('.btn-gNav').on("click", function () {
        toggleMenu();
    });

    // メニュー内のリンクのクリックイベント
    $('.gNav .header-nav-list a').on("click", function () {
        // スマートフォン表示時のみメニューを閉じる
        if ($(window).width() <= 767) {
            toggleMenu();
        }
    });

    // ウィンドウのリサイズイベント
    $(window).resize(function() {
        // 画面幅が768px以上になった場合、メニューを閉じる
        if ($(window).width() > 767) {
            $('.gNav').removeClass('open');
            $('.btn-gNav').removeClass('open');
        }
    });
});
