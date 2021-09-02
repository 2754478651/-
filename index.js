const express = require('express');
const path = require('path');
const open = require('open');
const morgan = require('morgan');
const app = express();
const PORT = 8080;
const errMiddleware = require('./errormiddleware.js')
// 导入404中间件
const notFound = require('./notFoundmiddleware');

const artTemplate = require('art-template');
const express_template = require('express-art-template');
//配置模板的路径
app.set('views', __dirname + '/view/');
//设置express_template模板后缀为.html的文件(不设这句话，模板文件的后缀默认是.art)
app.engine('html', express_template);
//设置视图引擎为上面的html
app.set('view engine', 'html');
artTemplate.defaults.imports.dateFormat = function (time, format = 'YYYY-MM-DD HH:mm:ss') {
    return moment.unix(time).format(format);
}
app.get('/', function (req, res) {
    let headfont = [
        '小米商城', 'MIUI', 'loT', '云服务', '天星科技', '有品',
        '小爱开放平台', '企业团购', '资质证照', '协议规则', '下载app',
        '智能生活', 'Select Location', '登录', '注册', '消息通知'
    ]
    let headche = ['购物车（0）']
    let xiaomi = ['小米手机', 'Redmi红米', '电视', '笔记本', '家电', '路由器', '智能硬件', '服务', '社区']
    let leftli = ['手机 电话卡', '电视 盒子', '笔记本 显示器', '家电 插线板', '出行 穿戴', '智能 路由器', '电源 配件', '健康 儿童', '耳机 音响', '生活 箱包']
    let hao = ['让全球每个人都能享受科技带来的美好生活']
    let xiaomier = ['小米商城', 'MIUI', '米家', '米聊', '多看', '游戏', '路由器', '米粉卡', '政企服务', '小米天猫店', '隐私政策', '问题反馈', '廉政举报', 'Select Region']
    let pd = ['@mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2017]1530-131号', '违法和不良信息举报电话: 185-0130-1238, 本网站所列数据,除特殊说明,所有数据均出自我司实验室测试']
    let fule = [{ help: "帮助中心", zhanghao: "账户管理", gwzn: "购物指南", dingdan: "订单操作" },
    { help: "服务支持", zhanghao: "售后政策", gwzn: "自助服务", dingdan: "相关下载" },
    { help: "线下门店", zhanghao: "小米之家", gwzn: "服务网点", dingdan: "授权体验店" },
    { help: "关于小米", zhanghao: "了解小米", gwzn: "加入小米", dingdan: "投资者关系" },
    { help: "关注我们", zhanghao: "新浪微博", gwzn: "官方微信", dingdan: "联系我们" },
    { help: "特色服务", zhanghao: "F码通道", gwzn: "礼物码", dingdan: "防伪查询" }]
    let coimg = ['img/21.png', 'img/v-logo-1.png.png', 'img/v-logo-2.png', 'img/23.png']
    let furi = [{ phone: "400-100-5678", xq: "周一至周日 8:00-18:00 ", shihua: "(仅收市话费)", kefu: "联系客服" }]
    let weixiu = ['预约维修服务', '7天无理由退货', '15天免费换货', '满150包邮', '520余家售后网点']
    let tup = ['./img/小米1.webp']
    let fbh = ['Redmi 10X系列发布会']
    let fbh1 = ['Redmi 10X系列发布会']
    let xiaomifb = [{ tu: "./img/小米2.webp", wezi: "小米10 青春版 发布会" },
    { tu: "./img/小米3.webp", wezi: "小米10 8k手机拍大片" },
    { tu: "./img/小米4.webp", wezi: "小米10发布会" }]
    let sp = [{ sp1: "视频", ck: "查看全部" }]
    let xiaomiphone = [{ tu: './img/小米手机1.webp', h3: "小米MIX FOLD", p1: "折叠大屏 | 自研芯片", p2: "9999元起" },
    { tu: './img/小米手机2.webp', h3: "小米11 UItra", p1: "1.12''GN2 | 2K四微曲屏", p2: "5999元起" },
    { tu: './img/小米手机3.webp', h3: "小米11 Pro", p1: "1.12''GN2 | 骁龙888", p2: "4999元起" },
    { tu: './img/小米手机4.webp', h3: "小米11 青春版", p1: "小米11 青春版 轻薄", p2: "2299元起" },
    { tu: './img/小米手机5.webp', h3: "黑鲨4 Pro", p1: "黑鲨4 Pro", p2: "3999元起" },
    { tu: './img/小米手机6.webp', h3: "黑鲨4", p1: "黑鲨4 磁动力升降肩键", p2: "2499元起" },
    { tu: './img/小米手机7.webp', h3: "小米10S", p1: "骁龙870 | 对称式双扬立体声", p2: "3299元起" },
    { tu: './img/小米手机8.webp', h3: "Redmi K40 Pro 系列", p1: "骁龙 / E4 旗舰直屏", p2: "2799元起" }]
    let bannerxing = ['./img/小米电视.webp']
    let lefter = ['./img/小米图片手机.webp']
    let bigleft = [{ sj: "手机", da: ">", gd: "查看更多" }]
    let center = ['./img/小米图片.webp']
    let time1 = [{ tu: "./img/小米图片一.webp", mitu: "米兔智能故事机 白色", hua: "能说会道， 好玩伴", yuan: "169元", yuany: "199元" },
    { tu: "./img/小米图片一.webp", mitu: "米兔智能故事机 白色", hua: "能说会道， 好玩伴", yuan: "169元", yuany: "199元" },
    { tu: "./img/小米图片一.webp", mitu: "米兔智能故事机 白色", hua: "能说会道， 好玩伴", yuan: "169元", yuany: "199元" }]

    let time2 = [{ tu: "./img/小米图片一.webp", mitu: "米兔智能故事机 白色", hua: "能说会道， 好玩伴", yuan: "169元", yuany: "199元" }]
    let time = [{ sj: "00:00场", img: "./img/小米闪电.jpg", over: "距离结束还有", one: '00', two: ":", three: "38", four: ":", fif: "58" }]
    let banner = ['./img/小米.webp']
    let sha = [{ ms: "小米秒杀",  big: ">" ,xiao: "<"}]
    let sb = ['./img/red9A.jpg', './img/小米11.jpg', './img/小米手表.jpg']
    let six = [{ img: "./img/小米秒杀.png", wz: "小米秒杀" },
    { img: "./img/企业团购.png", wz: "企业团购" },
    { img: "./img/F码通道.png", wz: "F码通道" },
    { img: "./img/米粉卡.png", wz: "米粉卡" },
    { img: "./img/以旧换新.png", wz: "以旧换新" },
    { img: "./img/话费充值.png", wz: "话费充值" }
    ]
    // let dl=[]
    //3.输出模板内容res.render('模板文件'，分配的变量{});
    res.render('index.html', { headfont, headche, xiaomi, leftli, hao, xiaomier, pd, fule, coimg, furi, weixiu, tup, fbh, fbh1, xiaomifb, sp, xiaomiphone, bannerxing, lefter, bigleft, center, time1, time2, time, banner, sha, sb, six })
})


app.use(function (req, res, next) {
    console.log('middleware1')
    next();
})
app.use(function (req, res, next) {
    console.log('middleware2')
    console.log(abc)
    // let err = new Error('出错了')
    // next(err);
    // throw new Error('出错了')
    next()
})
//错误中间件
app.use(errMiddleware);
app.use(function (req, res, next) {
    console.log('middleware3')
    next();
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use('/', express.static(path.join(__dirname, 'view')))
app.get('/login', (req, res) => {
    res.send('hello login')
})
app.get('/register', (req, res) => {
    res.send('hello register')
})



// 404页面
app.use(notFound);


app.listen(PORT, () => {
    open(`http://127.0.0.1:${PORT}`)
    console.log(`服务器启动，端口号${PORT}`);
})
