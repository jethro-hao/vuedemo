//wordcloud
const wordcloudData = [{
        name: "iPhone X",
        value: 19651,
    },
    {
        name: "Mac Pro",
        value: 18341,
    },
    {
        name: "华为P20",
        value: 17319,
    },
    {
        name: "小米手机",
        value: 12550,
    },
    {
        name: "欧莱雅",
        value: 11638,
    },
    {
        name: "玛莎拉蒂",
        value: 10608,
    },
    {
        name: "特斯拉Model S",
        value: 8298,
    },
    {
        name: "jackjones",
        value: 7630,
    },
    {
        name: "韩都衣舍",
        value: 7440,
    },
    {
        name: "天生要强",
        value: 6065,
    },
    {
        name: "梅西",
        value: 5065,
    },
    {
        name: "三只松鼠",
        value: 4965,
    },
];

const wordcloudConfig = {
    minFontSize: 30,
    maxFontSize: 80,
    split: 30,
    rotate: true,
};

const cardOption = {
    span: 6,
    data: [

        {
            click: function (item) {
                this.$message.success(JSON.stringify(item));
            },
            name: '阿里',
            src: 'https://s1.ax1x.com/2020/09/11/wtz2dS.jpg',
            text: '我对钱不感兴趣',
            href: '/home',
            target: '_blank'
        },
        {
            click: function (item) {
                this.$message.success(JSON.stringify(item));
            },
            name: '腾讯',
            src: 'https://s1.ax1x.com/2020/09/11/wt7DB9.jpg',
            text: '腾讯游戏,没钱玩你麻痹',
            href: '/home',
            target: '_blank'
        },
        {
            click: function (item) {
                this.$message.success(JSON.stringify(item));
            },
            name: '网易掌门人',
            src: 'https://s1.ax1x.com/2020/09/11/wtHF3T.jpg',
            text: '网易游戏,玩你麻痹',
            href: '/home',
            target: '_blank'
        },
        {
            click: function (item) {
                this.$message.success(JSON.stringify(item));
            },
            name: '小苏苏',
            src: 'https://s1.ax1x.com/2020/09/11/wNpfvn.jpg',
            text: '我最可耐',
            href: '/home',
            target: '_blank'
        },
    ]
}

const boxOption = {
    span: 6,
    data: [{
            click: function (item) {
                alert(JSON.stringify(item));
            },
            title: '错误日志',
            count: 12332,
            icon: 'el-icon-warning',
            color: 'rgb(49, 180, 141)',
            href: 'https://avuejs.com',
            target: '_blank'
        },
        {
            click: function (item) {
                alert(JSON.stringify(item));
            },
            title: '数据展示',
            count: 33,
            icon: 'el-icon-view',
            color: 'rgb(56, 161, 242)',
            href: 'https://avuejs.com',
            target: '_blank'
        },
        {
            click: function (item) {
                alert(JSON.stringify(item));
            },
            title: '权限管理',
            count: 2223,
            icon: 'el-icon-setting',
            color: 'rgb(117, 56, 199)',
            href: 'https://avuejs.com',
            target: '_blank'
        },
        {
            click: function (item) {
                alert(JSON.stringify(item));
            },
            title: '权限管理',
            count: 2223,
            icon: 'el-icon-setting',
            color: 'rgb(117, 56, 199)',
            href: 'https://avuejs.com',
            target: '_blank'
        },
    ]
};

export {
    wordcloudData,
    wordcloudConfig,
    cardOption,
    boxOption
}