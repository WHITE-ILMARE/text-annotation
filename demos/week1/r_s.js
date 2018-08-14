var canvas = new fabric.Canvas('test');
var text = '16款1.5T威朗变速箱自适应学习不进去\n\
经电脑查看奇数偶数档位离合器温度数据，原车奇数档温度范围内六千多秒，与其它对看数据为十七万多秒。偶数数据也是一样。\n\
申请技术支持 \n\
申请维修诊断建议\n\
全新迈锐宝P档显示错误\n\
客户反映最近经常出现挂入P档后仪表仍然提示请挂入P档\n\
检测无DTC，出现故障时，把排挡杆往前推推，会显示正常，怀疑挂档杆故障\n\
更换排挡杆总成\n\
17款全新一代君越报P178B故障 \n\
车辆行驶中，报检修变速器\n\
用GDS诊断有故障吗P178B的故障，备用驻车锁执行器备用电源性能 \n\
已经进行编程，处理保险盒后部插头，有没有好的维修建议.\n\
英朗 离合器压盘 \n\
客户反映冷车1档起步，车子抖的厉害。 \n\
经多次试车，冷车时1档起步，抖动较大。热车时，1档起步正常。拆解发现离合器压盘不平整。 \n\
更换离合器压盘后，试车正常。问题解决，预授权申请更换离合器压盘。 \n\
发动机故障灯亮 \n\
发动机故障灯亮，60升70马时一冲一冲 \n\
P0700 P0741，拆检变速箱3-5倒挡无磨损，变扭器模块故障 \n\
更换变扭器及模块 \n\
16年乐风RV123档行车有异响 \n\
客户反映123档，时速在20km/h左右时行车有异响'

var iText18 = new fabric.IText(text, {
        styles: { },
        fontFamily: 'Courier',
        fontSize: 15,
        left: 10,
        top: 10,
        textAlign:'left',
        selectable:false
      });
 
    canvas.add(iText18);

canvas.on('mouse:up',function(options){
    var start = options.target.selectionStart;
    var end = options.target.selectionEnd;
    var textsum = options.target.text;
    if(start&&end)
    {
        if(end>start){
            var text = textsum.slice(start,end);
            alert('selected:'+text);
        }
    }
});



