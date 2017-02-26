//import $ from "jquery";
/*var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());*/
document.write("测试akjaz")
$.ajax({
	url:"./dataJSON/data.json",
	success:function(data){
		console.log(data)
	}
})
