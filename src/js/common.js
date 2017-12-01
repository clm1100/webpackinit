import $ from 'jquery'
import 'jquery.cookie'
import template from "art-template/lib/template-web";
import NProgress from "nprogress";
import  "nprogress/nprogress.css";

function commomInit(){
    $( '.loading' ).hide();
    // 二级菜单展开
    $( '.aside a + ul' ).prev().click(function () {
        // 展开 ul 标签
        $( this ).next().toggle();
    }) ;
    // 处理页面加载时的齿轮
    $( document ).ajaxStart(function () {
        $( '.loading' ).show();
        NProgress.start();
    });
    $( document ).ajaxStop( function () {
        $( '.loading' ).fadeOut( 500 );
        NProgress.done();
    });
    
    /*
        第一部分, 验证 用户是否登录
    */
    var php_session_id = $.cookie( 'PHPSESSID' );
    if ( !php_session_id && location.pathname != '/login.html' ) {
        location.pathname = '/login.html';
    }
    
    /**
        第二部分, 页面加载的时候, 从 cookie 取出 userInfo, 得到用户的头像与用户名
     */
    if ( location.pathname != '/login.html' ) {
        var userInfo = $.cookie( 'userInfo' );
        var userInfoObj = JSON.parse( userInfo || '{}' );
        var format = template( 'userProfileTplId', userInfoObj );
        console.log(format)
        $( '.aside .profile' ).html( format );
    }
    
    $( '#btn_logout' ).click( function () {
        $.ajax({
            url: '/api/logout',
            type: 'post',
            success: function ( info ) {
                if ( info.code == 200 ) {
                    // console.log( info );
                    location.pathname = '/';
                }
            }
        });
    });
}

export default commomInit



