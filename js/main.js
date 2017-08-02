$(document).ready(function(){
    function randomData() {
        return Math.round(Math.random()*1000);
    }
    $.get('pe-all.geo.json', function (json) {
        echarts.registerMap('Peru', json);
        var chart = echarts.init(document.getElementById('container'));
        chart.setOption({
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                min: 0,
                    max: 3500,
                    left: 'left',
                    top: 'bottom',
                    text: ['inicio','fin'],      
                    calculable: true
                },   
            series: [
                {
                    name: 'lima',
                    type: 'map',
                    map: 'Peru',
                    roam: true,
                    selectedMode : 'single',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    label:{
                        normal: {
                            show:false
                        },
                        emphasis: {
                            label:{
                                show:true
                            }
                        }
                    },
                    data:[
                        {name: 'Lima',value: 1000 ,id : 5 },
                        {name: 'Junín',value: 2000 ,id : 5 },
                        {name: 'Ica',value: 0 ,id : 5 }
                    ]
            }
    
            ]
        });
         chart.on('click',function(param){
                console.log(param);
            });
    });
        /*$.get('peru_capital_provincia.json', function (json) {
            echarts.registerMap('Peru', json);
            var chart = echarts.init(document.getElementById('container2'));
            chart.setOption({
                series: [
                    {
                        name: 'lima',
                        type: 'map',
                        map: 'Peru',
                        roam: true,
                        label:{
                            normal: {
                                show:false
                            },
                            emphasis: {
                                label:{
                                    show:true
                                }
                            }
                        },
                    data:[]
                }
        
                ]
            });
            chart.on('click',function(param){
                    console.log(param);
                });
    });*/
});

