require('../css/bootstrap/dist/css/bootstrap.min.css')
require('../css/font-awesome/css/font-awesome.css')
require('../css/index.css');
import  $  from "jquery";
import 'jquery.cookie'
$(function(){
    $( '#formId' ).on( 'submit', function () {
            var formData = $( this ).serialize();
            $.ajax({
                url: '/api/v5/login',
                type: "post",
                data: formData,
                success: function ( info ) {
                    console.log( info );
                    if ( info.code == 200 ) {
                        alert( '登录成功' );
                        $.cookie( 'userInfo', JSON.stringify( info.result ), { path: '/' } );
                        location.pathname = '/';
                    }
                }
            });
            return false;
        });
})
