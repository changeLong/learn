/*
 * 错误码定义
 * 错误信息定义
 */

module.exports = {
	userNotfind : {
		errorCode : 1,
		errorMsg : '用户不存在'
	},
	creatCardErr : {
		errorCode : 20001,
		errorMsg : '创建失败'
	},
	creatCardLimit : {
		errorCode : 20002,
		errorMsg : '卡片数量超出限制'
	},
	deleteCardErr : {
		errorCode : 30001,
		errorMsg : '删除卡片失败'
	},
	cardGived : {
		errorCode : 40001,
		errorMsg : '卡片已赠送'
	}
}