'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 20;
var CLOUD_SHADOW_GAP = 10;
var GISTOGRAMMA_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 25;
var BAR_HEIGHT = GISTOGRAMMA_HEIGHT - TEXT_HEIGHT * 2;
var TEXT_COLOR = '#000000';
var TEXT_FONT = '16px PT Mono';
var TEXT_BASELINE = 'hanging';
var TEXT_X = CLOUD_X + CLOUD_GAP;
var TEXT_Y = CLOUD_Y + CLOUD_GAP;
var TEXT_Y2 = CLOUD_Y + CLOUD_GAP + TEXT_HEIGHT;
var TIME_Y = CLOUD_Y + BAR_GAP * 1.7;
var NAME_Y = TIME_Y + GISTOGRAMMA_HEIGHT;
var BLUE_H = 255;
var BLUE_S = 100;
var BLUE_L = 50;
var COLOR_ME = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var createText = function (ctx, color, font, baseline) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = baseline;
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  createText(ctx, TEXT_COLOR, TEXT_FONT, TEXT_BASELINE);
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  createText(ctx, TEXT_COLOR, TEXT_FONT, TEXT_BASELINE);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y2);

  for (var i = 0; i < names.length; i++) {
    var barX = CLOUD_X + CLOUD_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var barY = GISTOGRAMMA_HEIGHT - barHeight + TIME_Y - TEXT_HEIGHT;
    ctx.fillText(Math.floor(times[i]), barX, TIME_Y);
    ctx.fillStyle = 'hsl(' + BLUE_H + ',' + BLUE_S * Math.random() + '%,' + BLUE_L + '%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = COLOR_ME;
    }
    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], barX, NAME_Y);
  }
};
