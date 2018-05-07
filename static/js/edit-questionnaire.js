/*
coffeescript
a= """
~~~~~~
"""
b = a.replace(/[\r\n]/g,'')
console.log(b)
*/

var htmlRadio = '<div class="question">						<!--问题标题div-->						<div class="question-title">							<label contenteditable="true">点击编辑单选题问题</label>						</div>						<!--问题选项div-->						<div class="choices">							<!--第一个没有按钮-->							<div class="am-radio choice">								<input type="radio" name="single-questiono" value="option1">								<span>									<label contenteditable="true">单选框 - 选项一</label>								</span>								<div class="opt-ctrl">									<span class="copy item"><i class="iconfont icon-icon-34"></i></span>									<span class="delete item"><i class="iconfont icon-icon-56"></i></span>									<span class="up item"><i class="iconfont icon-icon-89"></i></span>									<span class="down item"><i class="iconfont icon-icon-89 rotate"></i></span>								</div>							</div>							<div class="am-radio choice">								<input type="radio" name="single-questiono" value="option1">								<span>									<label contenteditable="true">单选框 - 选项一</label>								</span>								<div class="opt-ctrl">									<span class="copy item"><i class="iconfont icon-icon-34"></i></span>									<span class="delete item"><i class="iconfont icon-icon-56"></i></span>									<span class="up item"><i class="iconfont icon-icon-89"></i></span>									<span class="down item"><i class="iconfont icon-icon-89 rotate"></i></span>								</div>							</div>						</div>						<div class="question-ctrl">							<span class="handle item"><i class="iconfont icon-icon-90"></i></span>							<span class="copy item"><i class="iconfont icon-icon-3"></i></span>							<span class="delete item"><i class="iconfont icon-icon-66"></i></span>						</div>					</div>'

var htmlCheckbox = '<div class="question">						<div class="question-title">							<label contenteditable="true">点击编辑多选题问题</label>						</div>						<div class="choices">							<div class="am-radio choice">								<input type="checkbox" name="single-questiono" value="option2">								<span>									<label contenteditable="true">复选框 - 选项一</label>								</span>								<div class="opt-ctrl">									<span class="copy item"><i class="iconfont icon-icon-34"></i></span>									<span class="delete item"><i class="iconfont icon-icon-56"></i></span>									<span class="up item"><i class="iconfont icon-icon-89"></i></span>									<span class="down item"><i class="iconfont icon-icon-89 rotate"></i></span>								</div>							</div>							<div class="am-radio choice">								<input type="checkbox" name="single-questiono" value="option2">								<span>									<label contenteditable="true">复选框 - 选项二</label>								</span>								<div class="opt-ctrl">									<span class="copy item"><i class="iconfont icon-icon-34"></i></span>									<span class="delete item"><i class="iconfont icon-icon-56"></i></span>									<span class="up item"><i class="iconfont icon-icon-89"></i></span>									<span class="down item"><i class="iconfont icon-icon-89 rotate"></i></span>								</div>							</div>						</div>						<div class="question-ctrl">							<span class="handle item"><i class="iconfont icon-icon-90"></i></span>							<span class="copy item"><i class="iconfont icon-icon-3"></i></span>							<span class="delete item"><i class="iconfont icon-icon-66"></i></span>						</div>					</div>'

var htmlText = '<div class="question">						<div class="question-title">							<label contenteditable="true">点击编辑问答题题目</label>						</div>						<div class="answer-text">							<div class="am-form-group">			                <textarea  rows="3"></textarea>			              </div>						</div>						<div class="question-ctrl">							<span class="handle item"><i class="iconfont icon-icon-90"></i></span>							<span class="copy item"><i class="iconfont icon-icon-3"></i></span>							<span class="delete item"><i class="iconfont icon-icon-66"></i></span>						</div>					</div>'

var htmlStar = '<div class="question">						<div class="question-title">							<label contenteditable="true">点击编辑评分题题目</label>						</div>												<div class="choices">							<div class="am-radio choice">								<span>									<label contenteditable="true">评分题 - 选项一</label>								</span>								<div class="opt-ctrl">									<span class="copy item"><i class="iconfont icon-icon-34"></i></span>									<span class="delete item"><i class="iconfont icon-icon-56"></i></span>									<span class="up item"><i class="iconfont icon-icon-89"></i></span>									<span class="down item"><i class="iconfont icon-icon-89 rotate"></i></span>								</div>							</div>							<div class="am-radio choice">								<span>									<label contenteditable="true">评分题 - 选项二</label>								</span>								<div class="opt-ctrl">									<span class="copy item"><i class="iconfont icon-icon-34"></i></span>									<span class="delete item"><i class="iconfont icon-icon-56"></i></span>									<span class="up item"><i class="iconfont icon-icon-89"></i></span>									<span class="down item"><i class="iconfont icon-icon-89 rotate"></i></span>								</div>							</div>						</div>						<div class="question-ctrl">							<span class="handle item"><i class="iconfont icon-icon-90"></i></span>							<span class="copy item"><i class="iconfont icon-icon-3"></i></span>							<span class="delete item"><i class="iconfont icon-icon-66"></i></span>						</div>					</div>'

// 拖拽,使用dragula插件
//dragula([document.getElementById('dragula-container')], {
//moves: function (el, container, handle) {
//  return handle;
//}
//});

//jquery ui拖拽
$("#dragula-container").sortable({
	connectWith: ".question",
	handle: ".handle",
	placeholder: "question-highlight"
});

//复制问题
$('.question-ctrl>span.copy').click(function(){
	console.log(123)
	var question = $(this).closest('div.question');
	question.append(question.clone(true));
})

//删除问题
$('.question-ctrl>span.delete').click(function(){
	var question = $(this).closest('div.question');
	question.remove();
})

//添加问题
$(".question-radio").click(function(){
	$('.question-list').append(htmlRadio);
})
$(".question-checkbox").click(function(){
	$('.question-list').append(htmlCheckbox);
})
$(".question-text").click(function(){
	$('.question-list').append(htmlText);
})
$(".question-star").click(function(){
	$('.question-list').append(htmlStar);
})

//复制选项
$('.opt-ctrl>span.copy').click(function(){
	var choice = $(this).closest('div.choice');
	choice.parent().append(choice.clone(true));
})

//删除选项
$('.opt-ctrl>span.delete').click(function(){
	var choice = $(this).closest('div.choice');
	choice.remove();
})

//上移选项
$('.opt-ctrl>span.up').click(function(){
	var choice = $(this).closest('div.choice');
	var previous = choice.prev();
	choice.after(previous);
})

//下移选项
$('.opt-ctrl>span.down').click(function(){
	var choice = $(this).closest('div.choice');
	var next = choice.next();
	choice.before(next);
})