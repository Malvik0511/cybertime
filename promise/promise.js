window.onload = function(){
	function MyPromise(f){
		this.f = f;	
		this.fn = [];
		this.then = function(f){
			if (arguments.length === 2) {
				this.f.call(null, arguments[0], arguments[1]);
			}
			else {
				this.fn = [...this.fn, f];
				if (this.fn.length === 2) this.then(...this.fn)
			}
			return this;		
		}	
		this.catch = function(f){
			this.fn = [...this.fn, f];
			if (this.fn.length === 2) this.then(...this.fn)
			return this;
		}
	}
	
	const p = new MyPromise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() < 0.5) {
				resolve();
			}
			else reject();
		}, 200)
	})
	
	p.then(() =>{
		console.log('passed');
	}).catch(() => {
		console.log('failed');
	})
}
