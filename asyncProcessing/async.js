"use strict";

window.onload = () => {
	/*проверку на тип элементов не провожу т.к. в функции это можно использовать
	проверку нулевого и последнего аргуметов не провожу так как интерпритатор по
	ним возбудит ошибку самостоятельно
	*/
	function launchInParallel (func, data, n, callback) {
		if (!Array.isArray(data)) throw Error(data + " are not array");
		if (isNaN(n) || n < 1) throw Error('n must be number equal or more than 1');
		var i = 0,	
	  		count = 0,
	  		len = data.length;

  		function iterratorAsync(){
  			if (count < n){
  				count++;
  				func.call(null, data[i], () => {
	  				count--;
	  				if (count === 0 && i === len -1){
	  					callback();
	  				}
	  				else if (i < (len - 1) && count < n){
	  					i++;
	  					iterratorAsync();
	  				}
	  			});

	  			if (i < (len - 1) && count < n){
	  				i++;
	  				iterratorAsync();
	  			}	  			
  			}
	  	}

	  	iterratorAsync();
	}
	
};





