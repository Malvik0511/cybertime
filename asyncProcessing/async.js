window.onload = function(){
	function launchInParallel (func, data, n, callback) {
		console.dir(func)
		var i = 0,	
	  		count = 0,
	  		len = data.length
  		function iterratorAsync(){
  			if (count > n) {
  				setTimeout(iterratorAsync, 1);
  				console.log('count = ' + count)
  				//console.log( count + ' overflow')
  			}
  			else{
  				count++;
  				func.call(null, data[i], function(){
	  				count--;
	  				console.log('i = '+ i)
	  				if (i >= len && count === 0){
	  					callback();
	  					return;
	  				}
	  			})
	  			if (i < len){
	  				console.log('!')
	  				i++;
	  				iterratorAsync()
	  			}
	  			
  			}
	  	}
	  	iterratorAsync();

  	// не более n функций должны исполняться в любой момент времени
  	// FIXME
	}












function sleep (s, callback) {
  setTimeout(callback, s * 1000)
}

const data = [1, 3, 2, 1, 1, 4, 2, 5]

launchInParallel(sleep, data, 5, () => {
  // должно завершиться через 6 секунд
  console.log('done')
})
	
};





