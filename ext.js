String.prototype.normalize =  function(){
var str = this.toLowerCase().replace(/[àáâãäå]/g,"a").replace(/[èéêë]/g,"e").replace(/[ï]/g,"i");
 return str;
}

Object.prototype.origin = function() {
  return dzayer.wilaya(this.wilaya);
}

dzayer.search = function(key) {
var w = dzayer.wilayas, i , list =[];
  for (i = 0; i < w.length; i++) {
  if (w[i].name.normalize().indexOf(key.normalize()) !== -1 || (parseInt(key) < 49 && parseInt(key) > 0 &&  w[i].id == parseInt(key)))  list.push(w[i]);
  }
  return list;
};

dzayer.wilaya = function(x) {
  var res;
  if (isNaN(x)) {
    for (i = 0; i < dzayer.wilayas.length; i++) {
    if (dzayer.wilayas[i].name.normalize().indexOf(x.normalize()) !== -1)  res = dzayer.wilayas[i];
    }
  } else {
    res =  dzayer.wilayas[parseInt(x) -1];
  }
  return res;
} ,

dzayer.commune = function(x) {
  var res;
  if (isNaN(x)) {
    for (i = 0; i < dzayer.communes.length; i++) {
    if (dzayer.communes[i].name.normalize().indexOf(x.normalize()) !== -1)  res = dzayer.communes[i];
    }
  } else {
    res =  dzayer.communes[parseInt(x) -1];
  }
  return res;
} ,



dzayer.distance = function(w1 , w2, unit) {
    lat1 = w1.lat , lon1 = w1.long , lat2 = w2.lat , lon2 = w2.long ;
  var radlat1 = Math.PI * lat1/180;
	var radlat2 = Math.PI * lat2/180;
	var theta = lon1-lon2;
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180/Math.PI;
	dist = dist * 60 * 1.853159616;
	if (unit=="m") { dist = dist *1000 };
	if (unit=="M") { dist = dist / 1.609344 };
	if (unit=="N") { dist = dist * 0.5395987433 };
	return dist;
}

dzayer.build = function(target,options) {
  var defaults = {
    filter : dzayer.wilayas,
    showNumbers : false,
    select : false ,
    render : function(x){
      var name =   x.name ;
if (options && options.showNumbers) name = x.id +'-'+name;
var selected = (options && options.select && dzayer.wilaya(options.select) == x ?'selected':'') ;
      return '<option value="'+x.id+'" '+selected+'>'+name+'</option>';
    }
  }


var param = Object.assign({}, defaults, options);
var outPut = '';
for (var i = 0; i < param.filter.length; i++) {
  outPut += param.render(param.filter[i]);
}

document.querySelector(target).innerHTML = outPut;

}
