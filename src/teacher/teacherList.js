require('../css/bootstrap/dist/css/bootstrap.min.css')
require('../css/font-awesome/css/font-awesome.css')
require('../css/index.css')
import '../js/common.js'
import template from "art-template/lib/template-web";
// import $ from "jquery";
import "bootstrap";
$(function(){
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function ( info ) {
            if ( info.code == 200 ) {    
                var html = template( 'tableTeacherInfoListTpl', { list: info.result } );  
                $( '#tableTeacherInfoList tbody' ).html( html );
            }
        }
    });


    // 对家乡信息进行格式化, 去掉其中的 竖线
var rhometown = /\|/g;
template.defaults.imports.formatHomeTown = function ( hometown ) {
	return hometown.replace( rhometown, ' ' );
}


// 添加查看信息的点击事件
$( '#tableTeacherInfoList' ).on( 'click', '.showInfo', function () {
	
	var tc_id = $( this ).parent( 'td' ).attr( 'data-tc-id' );

	// alert( tc_id );
	// 通过 id 查找用户数据

	$.ajax({
		url: '/api/teacher/view',
		type: 'get',
		data: { tc_id: tc_id },
		success: function ( info ) {
			if ( info.code == 200 ) {

				var html = template( 'teacherInfoTpl', info.result );
				// console.log( html );
                $( '#modalTeacherInfo' ).html( html );
                console.log($( '#modalTeacherInfo' ))

				// console.log( $( '#modalTeacherInfo' ) );
                console.log($( '#teacherModal' ))

				$( '#teacherModal' ).modal( 'show' );

			}
		}
	})

});




// 提供讲师状态修改按钮
var statusValues = [ '启 用', '注 销' ];
$( '#tableTeacherInfoList' ).on( 'click', '.status', function () {

	// 发送请求修改状态
	// 1, 获得 id
	// 2, 获得当前状态
	// 3, 发送请求
	// 4, 拿到请求结果
	// 5, 修改页面中的值

	var tc_id = $( this ).parent( 'td' ).attr( 'data-tc-id' ),
		tc_status = $( this ).attr( 'data-tc-status' );
	var that = this;
	$.ajax({
		url: '/api/teacher/handle',
		type: 'post',
		data: {
			tc_id: tc_id,
			tc_status: tc_status
		},
		success: function ( info ) {
			if ( info.code == 200 ) {
				// console.log( info.result );
				$( that ).attr( 'data-tc-status', info.result.tc_status )
					     .text( statusValues[ info.result.tc_status ] );
			}
		}
	});

	return false;
});
})