
console.log('main.js')

var app1 = new Vue({
	el: '#app1',
	data: {
		styleObj: {
			color: 'red',
			border: '3px solid black',
			padding: '10px'
		}
	}
})


var app2 = new Vue({
	el: '#app2',
	data: {
		activeColor: 'red',
		border: '5px solid pink',
		padding: '10px',
		margin: '20px 0'
	}
})


var app3 = new Vue({
	el: '#app3',
	data: {
		baseStyle: {
			color: 'brown',
			fontSize: '20px'
		},
		secondStyle: {
			background: 'lightgray',
			margin: '20px 0'
		}
	}
})


var h1 = new Vue({
	el: '#app4',
	data: {
		awesome: false 
	}
})


var template = new Vue({
	el: '#app5',
	data: {
		ok: true,
		styleObj: {
			color: 'red',
			border: '4px solid brown'
		}
	}
})

var app6 = new Vue({
	el: '#app6',
	data: {
		test: 'o'
	}
})


var app7 = new Vue({
	el: '#app7',
	data: {
		ok: true 
	}
})

// v-for="item in items"
var app8 = new Vue({
	el: '#app8',
	data: {
		janson: [
			{message: 'foo'},
			{message: 'bar'}
		]
	}
})


var app9 = new Vue({
	el: '#app9',
	data: {
		parentMessage: 'Parent',
		items: [
			{message: 'hello'},
			{message: 'hi'},
			{message: 'bobobobob'}
		]
	}
})

var app10 = new Vue({
	el: '#app10',
	data: {
		parentMessage: 'Parent',
		items: [
			{message: 'asldfja'},
			{message: 'ergfbjngrker'},
			{message: 'weohevnefljeiof'}
		]
	}
})


var app11 = new Vue({
	el: '#app11',
	data: {
		parentMessage: 'Parent',
		object: {
			one: '我是1',
			two: '我是2',
			three: '我是3'
		}
	},
	created: function(){
		// alert('还没挂在到 DOM ')
	},
	mounted: function(){
		// alert('已经挂在到 DOM ')
	}
})

console.log(app11.$el)
console.log(app11.$data)
console.log(app11.parentMessage)	// parent


var app12 = new Vue({
	el: '#app12',
	data: {
		message: 'janson',
		ahead: 'ahead'
	}
})

// new Date()

var plusDate = function(value){
	return value > 10 ? value : '0'+value	
}

var app13 = new Vue({
	el: '#app13',
	data: {
		time: new Date()
	},
	filters: {
		formatDate: function(value){
			let date = new Date(value)			
			let year = date.getFullYear()
			let month = plusDate(date.getMonth()+1)
			let day = plusDate(date.getDate())
			let hours = plusDate(date.getHours())
			let min = plusDate(date.getMinutes())
			let sec = plusDate(date.getSeconds())
			
			return hours + ' : ' + min + ' : ' + sec + ' | ' + year + '.' + month + '.' + day 
		}
	},

	mounted: function(){
		let _this = this
		this.timer = setInterval(function(){
			_this.time = new Date()
		},1000)
	},

	beforeDestroy: function(){
		if(this.timer){
			clearInterval(this.timer)
		}
	}
})


// filter 的用法: {{ data | filter1 | filter2 | filter3 | ...}} 这个叫过滤器的串联

// filter 传参数 {{ data | filter1(66, 99)}} 同时要在 js 的方法中定义：formatDate: function(value,a,b){...} 66 和 99 对应的就是 a b 

let format = function(value){
	return value > 10 ? value : '0'+value
}

var app14 = new Vue({
	el: '#app14',
	data: {
		time: new Date(),
		apple: 'apple',
		banana: '<span style="color: orange">banana</span>',
		className: 'janson',
		count: 0
	},
	methods: {
		counter: function(){
			this.count += 1
		}
	},
	filters: {
		formatDate: function(value){
			let date = new Date(value)
			let year = date.getFullYear()
			let month = format(date.getMonth())
			let day = format(date.getDate())
			let hours = format(date.getHours())
			let min = format(date.getMinutes()) 
			let sec = format(date.getSeconds())
			
			return year + ' : ' + month + ' : ' + day + '--' + hours + ' : ' + min +' : ' + sec
		}
	},
	created: function(){
		console.log('created')	
	},
	mounted: function(){
		console.log('mounted')
		let _this = this
		this.timer = setInterval(function(){
			_this.time = new Date()
		},1000)
	},
	beforeDestroy: function(){
		if(this.timer){
			clearInterval(this.timer)
		}
	}
})

// computed 计算属性
var computedDemo = new Vue({
	el: '#appdemo',
	data: {
		msg: 100000
	}
})


var computed1 = new Vue({
	el: '#computed',
	data: {
		cart1: [
			{name: 'iPhone8', count: 3, price: 1000 },
			{name: 'android', count: 2, price: 3000}
		],
		cart2: [
			{name: 'ipad', count: 5, price: 3600},
			{name: 'banana', count: 10, price: 10}
		]
	},
	computed: {
		prices: function(){
			let prices = 0
			for(let i=0; i<this.cart1.length; i++){
				prices += this.cart1[i].count * this.cart1[i].price	
			}	
			for(let j=0; j<this.cart2.length; j++){
				prices += this.cart2[j].count * this.cart2[j].price	
			}

			return prices + ' | ' + computedDemo.msg
		}
	}
})


// 计算属性的 getter 和 setter
var app88 = new Vue({
	el: '#app88',
	data: {
		firstName: 'Zhang',
		lastName: 'sanfeng',
		styleObj: {
			color: 'red',
			fontSize: '30px',
			border: '5px solid pink'
		}
	},
	computed: {
		//fullName: function(){
		//	return this.firstName + ' ' + this.lastName 
		//}  这三行代码等于下面的 get 方法

		fullName: {
			get: function(){
				return this.firstName + ' ' + this.lastName
			},
			set: funtion(newValue){
				console.log('我是set方法，我被调用了')	
				var names = newValue.split(',')
				this.firstName = names[0]
				this.lastName = names[1]
			}
		}
	}
})


// 计算属性的缓存

