/* 机构管理 */
const treeData = [{
    value: "1",
    label: '爱克信集团总公司',
    children: [{
        value: "1-1",
        label: '西安爱克信',
        children: [{
            value: "1-1-1",
            label: "爱克信研发部"
        }]
    }]
}, {
    value: "2",
    label: '小米集团总公司',
    children: [{
        value: "2-1",
        label: '西安小米',
        children: [{
            value: "2-1-1",
            label: "小米研发部"
        }]
    }]
}]
const treeOption = {
    defaultExpandAll: true,
    editBtn: false,
    addBtn: false,
    delBtn: false,
    formOption: {
        labelWidth: 100,
        column: [{
            label: '自定义项',
            prop: 'test'
        }],
    },
    props: {
        labelText: '标题',
        label: 'label',
        value: 'value',
        children: 'children'
    }
}

const tableOption = {
    selection: true,
    searchMenuSpan: 8,
    viewBtn: true,
    column: [{
            label: '姓名',
            prop: 'name',
            search: true,
        },
        {
            label: '性别',
            prop: 'sex',
            search: true,
        }
    ]
}

const tableData0 = [{
        name: '张三',
        sex: '男',
    },
    {
        name: '李四',
        sex: '女'
    }
]
const tableData1 = [{
        name: '老王',
        sex: '男',
    },
    {
        name: '二狗',
        sex: '女'
    }
]

export {
    treeData,
    treeOption,
    tableOption,
    tableData0,
    tableData1
}