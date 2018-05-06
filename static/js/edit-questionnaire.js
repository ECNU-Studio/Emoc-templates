//拖拽效果
dragula([$('dragula-container')], {
  moves: function (el, container, handle) {
    return handle;
  }
});
function $ (id) {
  return document.getElementById(id);
}
