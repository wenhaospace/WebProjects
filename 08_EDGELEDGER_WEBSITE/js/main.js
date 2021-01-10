
var map = new BMapGL.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMapGL.Point(116.280190, 40.049191), 19);  // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
map.setHeading(64.5);
map.setTilt(73);

//Sticky menu background
window.addEventListener('scroll',function() {
  if (window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.9;
  }else{
    document.querySelector('#navbar').style.opacity = 1;
  }
  
})



//Smooth Scrolling
$('#navbar a,.btn').on('click',function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash =this.hash;

    $('html,body').animate(
      {
        scrollTop:$(hash).offset().top-100
      },
      800
    );
  }
})


