const str = Data_RumourTop20.map(function(row) { return '<div class="item"><div class="i-1"><a href="' + row[7] + '" target="_blank">' + row[1] + '</a></div><div class="i-2">' + row[2] + '</div><div class="i-3">' + row[3] + '</div></div>';}).join(' ');

$('.J_list').append('<div class="item-header"><div class="i-1">浏览量 Top 20 辟谣谣言内容</div><div class="i-2">浏览量</div><div class="i-3">评论量</div></div><div class="item-content">' + str + '</div>')

renderChart1();
renderChart2();
renderChart3();
renderChart4();
renderChart5();

