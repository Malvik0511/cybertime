window.onload = function(){
	function deepEqual(elt, secondElt){
		if (arguments.length !== 2) throw Error('function should take 2 arguments');
		if (typeof elt === 'object'){
			if (Array.isArray(elt)){
				if (!Array.isArray(secondElt)) return false;
				if (elt.length !== secondElt.length) return false;
				for(var i = 0; i < elt.length; i++){					
					if (typeof elt[i] === 'function') continue;
					if (!deepEqual(elt[i], secondElt[i])) {
						return false;
					}
				}
				return true;
			}
			if (typeof secondElt !== 'object') return false;
			for (var prop in elt){
				if (!elt.hasOwnProperty(prop)) continue;
				if (typeof prop === 'function') continue;
				if (secondElt[prop] === null) return false;
				if (!deepEqual(elt[prop], secondElt[prop])) return false;
			}
			for (var prop in secondElt){
				if (!secondElt.hasOwnProperty(prop)) continue;
				if (typeof prop === 'function') continue;
				if (elt[prop] === null) return false;
				if (!deepEqual(elt[prop], secondElt[prop])) return false;
			}
			return true
		}		
		if (elt !== secondElt) return false;
		return true;
	}
	
	var a= [1,2,3], b = [1,2,3]
	console.log(deepEqual(a, b))
	
};





