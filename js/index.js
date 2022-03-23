//抽奖人员名单
var class12 = "曾庆阳;万佳恒;吴方进;万瑾然;章星;聂宇豪;陶晨杰;樊超;彭晨屹;龚文涛;汪荣天;唐萌馨;易昊;樊诗彤;汪佳怡;李春红;章晗;胡聪智;阙文金;涂嘉铭;邹诗雨;徐欣航;刘飞宇;罗阳;李婷;胡书鸣;李杰;万尹萍;张盈盈;李博文;涂鹤立;熊键南;祝怡欣;万贻婷;涂智鹏;江海洋;谢宏艺;程学鹏;张宇轩;涂文城;魏涛;罗珍艳;王宽;付天乐;徐雯露;万玉琴;祝英伟;杜宇超;李轩;万国兰;刘苏鹏;胡朴楠;李思彤;付豪;喻俊哲";
var class14 = '聂罗淅;涂勇健;周鑫宇;谭紫怡;胡建文;黄妮;谢象旋;刘崇宇;李建龙;杨夏颖;涂天宇;徐小凤;姚思雅;熊文超;陶熠轩;罗梓亮;胡振东;刘文志;肖梓梁;涂霜;黄志豪;李雪如;吴广安;黄淞;陶鸿博;匡珍妮;辜欣雨;付雯慧;郭香;刘雅琦;王紫梦;杨芷萱;熊星;郭聪;何灿;吴康华;周盼;李桂林;王嘉欣;徐凯兴;涂阳;高艺馨;李文斌;万盼盼;周芮;李兆沙;王梓俊;谌嘉琪;黄文欢;李星宇;邓钟浩;吴健雄;邱子健;万蔷雨;刘畅;陈千甬;高行;李宇航;刘俊杰;罗善佳;田金兰;涂琬婷;杨智群;喻君如';
var allPerson = class12;
//未中奖人员名单
var remainPerson = allPerson.toString().split(";");
//中奖人员名单
var luckyMan = [];
var timer;//定时器
$(function () {
    $('.cls12').on('click', function () {
        $('.switch').removeClass('checked');
        $('.cls12').addClass('checked');
        allPerson = class12;
        resetPerson();
    });
    $('.cls14').on('click', function () {
        $('.switch').removeClass('checked');
        $('.cls14').addClass('checked');
        allPerson = class14;
        resetPerson();
    });
    iconAnimation();
    //开始抽奖
    $("#btnStart").on("click", function () {
        //判断是开始还是结束
        if ($("#btnStart").text() === "开始") {
            if (!$("#txtNum").val()) {
                showDialog("请输入抽取人数");
                return false;
            }
            if ($("#txtNum").val() > 49) {
                showDialog("一次最多只能输入49人");
                return false;
            }
            if ($("#txtNum").val() > remainPerson.length) {
                showDialog("当前抽取人数大于人员池总人数<br>当前抽取人数：<b>" + $("#txtNum").val() + "</b>人,人员池人数：<b>" + remainPerson.length + "</b>人");
                return false;
            }
            $("#result").fadeOut();
            //显示动画框，隐藏中奖框
            $("#luckyDrawing").show().next().addClass("hide");
            move();
            $("#btnStart").text("停止");
            $("#bgLuckyDrawEnd").removeClass("bg");
        }
        else {
            $("#btnStart").text("开始");//设置按钮文本为开始
            var luckyDrawNum = $("#txtNum").val();
            startLuckDraw();//抽奖开始

            $("#luckyDrawing").fadeOut();
            clearInterval(timer);//停止输入框动画展示
            $("#luckyDrawing").val(luckyMan[luckyMan.length - 1]);//输入框显示最后一个中奖名字
            $("#result").fadeIn().find("div").removeClass().addClass("p" + luckyDrawNum);//隐藏输入框，显示中奖框
            $("#bgLuckyDrawEnd").addClass("bg");//添加中奖背景光辉
            $("#txtNum").attr("placeholder", "请输入抽取人数(" + remainPerson.length + ")");
        }
    });

    $("#btnReset").on("click", function () {
        resetPerson(1);
    });

    function resetPerson (showAlert) {
        remainPerson = allPerson.toString().split(";");
        luckyMan = [];
        //中奖人数框置空
        $("#txtNum").val("1").attr("placeholder", "请输入抽取人数");
        $("#showName").val("");
        //隐藏中奖名单,然后显示抽奖框
        $("#result").html('<div></div>')
        $("#bgLuckyDrawEnd").removeClass("bg");//移除背景光辉

        showAlert && alert('已重置抽取池')
    }
});

//抽奖主程序
function startLuckDraw() {
    //抽奖人数
    var luckyDrawNum = $("#txtNum").val();
    if (luckyDrawNum > remainPerson.length) {
        alert("抽奖人数大于奖池人数！请修改人数。或者点重置开始将新一轮抽奖！");
        return false;
    }
    //随机中奖人
    var randomPerson = getRandomArrayElements(remainPerson, luckyDrawNum);
    var tempHtml = "";
    $.each(randomPerson, function (i, person) {
        var sizeStyle = "";
        if (person.length > 3) {
            sizeStyle = " style=font-size:" + 3 / person.length + "em";
        }
		tempHtml += "<span><span " + sizeStyle + ">" + person + "</span></span>";
    });
    $("#result>div").html(tempHtml);
    //剩余人数剔除已中奖名单
    remainPerson = remainPerson.delete(randomPerson);
    //中奖人员
    luckyMan = luckyMan.concat(randomPerson);
    //设置抽奖人数框数字为空
    $("#txtNum").val("1");
}

//跳动的数字
function move() {
    var $showName = $("#showName"); //显示内容的input的ID
    var interTime = 30;//设置间隔时间
    timer = setInterval(function () {
        var i = GetRandomNum(0, remainPerson.length);
        $showName.val(remainPerson[i]);//输入框赋值
    }, interTime);
}

//顶上的小图标，随机动画
function iconAnimation() {
    var interTime = 200;//设置间隔时间
    var $icon = $("#iconDiv>span");
    var arrAnimatoin = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "wobble", "tada"];
    var timer2 = setInterval(function () {
        var i = GetRandomNum(0, $icon.length);
        var j = GetRandomNum(0, arrAnimatoin.length);
        //console.log("i:" + i + ",j:" + j);
        $($icon[i]).removeClass().stop().addClass("animated " + arrAnimatoin[j]);//输入框赋值
    }, interTime);

}
