/*function nama () {
	document.write("test");
}
nama();



x= 10;
y = 5;

function kali () {
	z= x * y ;
	alert("hasil perkalian dari "+ x +"*" + y+ "="+z );
}
kali();*/



/*function test () {
	alert("selamat pagi");
}

*/


/*
function tambah (a,c) {
	return a + c;
}

var total = tambah(10,5);
document.write(total);

*/
/*function tugas (x,z) {
	return x+ z;
var x = 8;
var z =4;
var lihat = tugas(8,4), tambah(8,2);
alert(lihat);

}

*/
/*
function kali (x,z) {
	return x+z;

}

function kali (x,z) {
	return x*z;
}
var lihat = kali(tugas(3,2). tugas(5,7));
alert(lihat);
*/
function tambah(){
	var hasil=0	;

for (var i = 0; i < arguments.lenght; i++) {
	hasil += arguments[i];
}
return hasil;
}
var test= tambah(1 ,2 ,3 ,4 ,5);
document.write(test);