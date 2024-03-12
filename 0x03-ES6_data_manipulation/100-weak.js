const weakMap = new WeakMap();

function queryAPI(endpoint) {
	  const endpointCount = weakMap.get(endpoint) || 0;
	  if (endpointCount >= 5) {
		      throw new Error('Endpoint load is high');
		    }
	  weakMap.set(endpoint, endpointCount + 1);
}

export { weakMap, queryAPI };
