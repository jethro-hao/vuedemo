/* addPerson.js */
const groupFormOption = {
    group: [{
        icon: 'el-icon-info',
        label: '基本信息',
        collapse: true, //分组默认折叠
        prop: 'baseInfo',
        column: [{
                label: '用户姓名',
                prop: 'name',
                rules: [{
                    required: true,
                    message: "请输入姓名",
                    trigger: "blur"
                }]
            },
            {
                label: "拼音",
                prop: "pinyin",
                placeholder: "自动生成",
                disabled: "disabled"
            },
            {
                label: '人员工号',
                prop: 'jobNo',
            }, {
                label: '英文名',
                prop: 'englishName',
            }, {
                label: '性别',
                prop: 'sex',
            }, {
                label: '登录账户',
                prop: 'account',
            },

        ]
    }, {
        icon: 'el-icon-info',
        label: '工作信息',
        collapse: true, // 分组默认展开
        arrow: true,
        prop: 'jobsInfo',
        column: [{
                label: '归属机构',
                prop: 'organ',
                rules: [{
                    required: true,
                    message: "请输入",
                    trigger: 'blur'
                }]
            }, {
                label: '岗位',
                prop: 'post',
            },
            {
                label: '归属机构',
                prop: 'organ2',
            }, {
                label: '岗位',
                prop: 'post2',
            },
        ]
    }, {
        icon: 'el-icon-info',
        label: '授权信息',
        blur: () => {
            console.log(0)
        },
        collapse: true, // 分组默认展开
        arrow: true,
        prop: 'authorizationInfo',
        column: [{
            label: '授权机构',
            prop: 'authorizationOrgan',
            rules: [{
                required: true,
                message: "请输入",
                trigger: 'blur'
            }]
        }, {
            label: '岗位',
            prop: 'post3',
        }, {
            label: '归属机构',
            prop: 'organ3',
        }, {
            label: '岗位',
            prop: 'post4',
        }, ]
    }, ]
}

export {
    groupFormOption
}