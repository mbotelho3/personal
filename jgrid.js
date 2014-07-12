$(document)


$(function(){
$("#grid").jresponsive({
	transormation: 'animation', 
	min_size: 100,
	max_size: 250,
	height:250,
	hspace:10,
	vspace:10,
	class_name: 'container'
});


$('#grid').jresponsive({
min_size: 100 ,
max_size: 250,
height:	200,
hspace:	40,
vspace:	10,
transformation:	,
class_name: 'item',
content_array: content,
},callback);
});