
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
		fullName: 'Wang,wei',
		styleObj: {
			color: 'brown',
			fontSize: '30px'
		}
	},
	methods: {
		xxx: function(){
			this.fullName= this.fullName.split(',').reverse().join(' ')	
			return this.fullName
		}
	},
	computed: {
		reverseName: function(){
			let names = this.fullName.split(',')
			return names.reverse().join(' ')
		}	
	}
})

// watch 与 计算属性

var app99 = new Vue({
	el: '#app99',
	data: {
		firstName: 'Foo',
		lastName: 'dddd',
		fullName: 'Foo Bar' 
	},
	//computed: {
	//	xxx: function(){
	//		this.fullName = this.firstName + this.lastName	
	//		return this.fullName
	//	}
	//},
	watch: {
		firstName: function(value){
			this.fullName = value + ' ' + this.lastName	
		},
		lastName: function(value){
			this.fullName = this.firstName + ' ' + value
		}
	}
})


// computed setter
var app33 = new Vue({
	el: '#app33',
	data: {
		firstName: 'Da',
		lastName: 'jian'
	},
	computed: {
		fullName: {
			get: function(){
				return this.firstName + ' ' + this.lastName
			},
			set: function(val){
				let names = val.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	}
})

app33.fullName = 'Xin He'

// a标签  img标签
var app67 = new Vue({
	el: '#app67',
	data: {
		href: 'https://www.google.com/ncr',
		src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
	}
})


// v-bind:class...
var app55 = new Vue({
	el: '#app55',
	data: {
		isActive: true,
		isBorderA: true,
		isBorderB: false,
		isBack1: true,
		isBack2: false
	},
	methods: {
		changeBorder: function(){
			this.isBorderA = !this.isBorderA
			this.isBorderB = !this.isBorderB
			return this.isBorderA ; this.isBorderB
		},
		changeBack: function(){
			this.isBack1 = !this.isBack1
			this.isBack2 = !this.isBack2
			return this.isBack1 ; this.isBack2
		}
	}
})

// v-bind:class="classNames"
var app77 = new Vue({
	el: '#app77',
	data: {
		yyy: true
	},
	computed: {
		classNames: function(){
			return {
				he: true,
				jian: true,
				xin: true 
			}
		}
	}
})


// v-bind:class="[one, two]"
var app90 = new Vue({
	el: '#app90',
	data: {
		one: 'activeClass',
		two: 'errorClass'
	}
})


// v-bind="[{jonson: isJonson},hey]"
var app86 = new Vue({
	el:'#app86',
	data: {
		isActive: true,
		hey: 'heyhey'
	}
})

// v-bind:style="styleObj"
var app64 = new Vue({
	el: '#app64',
	data: {
		styleObj: {
			border: '5px solid red',
			color: 'blue'
		}
	}
})

// :style="[one,two]"
var app444 = new Vue({
	el: '#app444',
	data: {
		one: {
			color: 'red',
			border: '5px solid pink'
		}, 
		two: {
			fontSize: '40px',
			background: 'blue'
		} 
	}
})

// 练习
var app999 = new Vue({
	el: '#app999',
	data: {
		isOne: true	
	}
})


var array = new Vue({
	el: '#array',
	data: {
		he: 'hehe',
		jian: 'jianjian'
	}
})


