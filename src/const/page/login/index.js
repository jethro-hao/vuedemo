// loginFormOption
const loginFormOption = {
    width: 400,
    codeType: "img",
    column: {
        username: {
            label: "用户名",
            value: "admin",
            placeholder: "手机号/邮箱/用户名",
            autocomplete: "off",
            // rules: { required: true, message: "请输入用户名", trigger: "blur" },
        },
        password: {
            label: "密码",
            autocomplete: "off",
            // rules: { required: true, message: "请输入密码", trigger: "blur" },
        },
        code: {
            label: "验证码",
            tip: "点击图片可以刷新验证码",
            autocomplete: "off",
            // rules: { required: true, message: "请输验证码", trigger: "blur" },
        },
    },
}

//swiperOptions
const swiperOptions = {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
}

export {
    loginFormOption,
    swiperOptions
}