// 折線圖
new Chart(document.getElementById('line'), {
  type: 'line',
  data: {
    labels: ['1月','2月','3月','4月'],
    datasets: [{
      label: '數據',
      data: [10, 20, 15, 25],
      borderColor: 'blue'
    }]
  }
});

// 長條圖
new Chart(document.getElementById('bar'), {
  type: 'bar',
  data: {
    labels: ['A','B','C','D'],
    datasets: [{
      label: '數量',
      data: [12, 19, 7, 14],
      backgroundColor: 'orange'
    }]
  }
});

// 圓餅圖
new Chart(document.getElementById('pie'), {
  type: 'pie',
  data: {
    labels: ['紅','藍','黃'],
    datasets: [{
      data: [30, 50, 20]
    }]
  }
});

// 環形圖
new Chart(document.getElementById('doughnut'), {
  type: 'doughnut',
  data: {
    labels: ['紅','藍','黃'],
    datasets: [{
      data: [40, 35, 25]
    }]
  }
});

// 雷達圖
new Chart(document.getElementById('radar'), {
  type: 'radar',
  data: {
    labels: ['跑步','游泳','跳高','投擲','力量'],
    datasets: [{
      label: '能力值',
      data: [65, 59, 90, 81, 56]
    }]
  }
});

// 極區圖
new Chart(document.getElementById('polar'), {
  type: 'polarArea',
  data: {
    labels: ['紅','藍','黃'],
    datasets: [{
      data: [11, 16, 7]
    }]
  }
});