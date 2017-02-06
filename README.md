# dzayerjs
Javascript library for algeria cities , build , search , count

#install
```html
<script type="text/javascript" src="dzayerjs.js"></script>

```
#wilaya
```javascript
var alger = dzayer.wilaya(16);
var guelma = dzayer.wilaya('guelma');
```
#commune
```javascript
var frenda = dzayer.commune('frenda');
console.log(frenda.name);//return Frenda

var wilaya = frenda.origin();// tiaret
```


#search
```javascript
//wilayas
var results = dzayer.search( 'al'); // return wilayas
//comunes
var results2 = dzayer.search('ain',true); //return Object
```

#distance

calculate distance between 2 places
```javascript
var bouira = dzayer.wilaya('bouira') ,
adrar = dzayer.wilaya('adrar') ,
distance (adrar,bouira); // return distance
var distance_m = distance(adrar,bouira,'m');
``` 
#Closest
shows the closest point 
```javascript
// example : closest wilaya to algiers : blida
var x = dzayer.w(15) ,
closest = dzayer.closest(x);
console.log(closest.name) ; //return the closest w to tizi ouezzo
```
