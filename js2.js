// JavaScript Document

// Cálculo de HD
function calculoHd() {

	var canal = document.getElementById("canal");
	var dias = document.getElementById("dias");
	var horas = document.getElementById("horas");
	var bitrate = document.getElementById("bitrate");

	var calculoHoras = ((canal.value * ((bitrate.value * 3600) / 8192)) / 1024);
	var calculoDia = (horas.value * calculoHoras);
	var calculoTotal = ((dias.value * calculoDia)/ 1024);

	var horasemMb = ((calculoHoras * 1024).toFixed(2));
	var horasemGb = ((calculoHoras).toFixed(2));
	var horasemTb = ((calculoHoras / 1024).toFixed(2));
	// document.getElementById("horasemMb").innerHTML = horasemMb;
	document.getElementById("horasemGb").innerHTML = horasemGb;
	document.getElementById("horasemTb").innerHTML = horasemTb;


	var diasemMb = ((calculoDia * 1024).toFixed(2));
	var diasemGb = ((calculoDia).toFixed(2));
	var diasemTb = ((calculoDia / 1024).toFixed(2));
	// document.getElementById("diasemMb").innerHTML = diasemMb;
	document.getElementById("diasemGb").innerHTML = diasemGb;
	document.getElementById("diasemTb").innerHTML = diasemTb;

	var totalemMb = ((calculoTotal * 1024 * 1024).toFixed(2));
	var totalemGb = ((calculoTotal * 1024).toFixed(2));
	var totalemTb = ((calculoTotal).toFixed(2));
	// document.getElementById("totalemMb").innerHTML = totalemMb;
	document.getElementById("totalemGb").innerHTML = totalemGb;
	document.getElementById("totalemTb").innerHTML = totalemTb;
}
// Limpar HD
function limpar(){

	document.getElementById("canal").value = '';
	document.getElementById("dias").value = '';
	document.getElementById("horas").value = '24';
	document.getElementById("bitrate").value = '';

	document.getElementById("horasemGb").innerHTML = '';
	document.getElementById("horasemTb").innerHTML = '';

	document.getElementById("diasemGb").innerHTML = '';
	document.getElementById("diasemTb").innerHTML = '';

	document.getElementById("totalemGb").innerHTML = '';
	document.getElementById("totalemTb").innerHTML = '';
}

// Cálculo Rede
function calculoRede(){

	var ncam = document.getElementById("canal_red");
	var vbit = document.getElementById("bitrate_red");

	var contakbps = ((ncam.value)*(vbit.value));
	document.getElementById("reskbps").innerHTML = contakbps;

	var contambps = ((((ncam.value)*(vbit.value))/1000).toFixed(0));
	document.getElementById("resmbps").innerHTML = contambps;
}
// limpar Rede
function limparRede(){

	document.getElementById("canal_red").value = '';
	document.getElementById("bitrate_red").value = '';

	document.getElementById("reskbps").innerHTML = '';
	document.getElementById("resmbps").innerHTML = '';

}

// Cálculo Consumo
function calculoConsumo(){
	var ncam = document.getElementById("cam_qnt");
	var potcam = document.getElementById("cam_pot");

	var ndvr = document.getElementById("grav_qnt");
	var potdvr = document.getElementById("grav_pot");

	var consumodiacam = ((((ncam.value)*(potcam.value)*24)/1000).toFixed(1));
	document.getElementById("potcamdia").innerHTML = consumodiacam;

	var consumomescam = (((((ncam.value)*(potcam.value)*24)*31)/1000).toFixed(1));
	document.getElementById("petmesdia").innerHTML = consumomescam;

	var consumodiadvr = (((((ndvr.value)*(potdvr.value)*24)/1000).toFixed(1)));
	document.getElementById("potdvrdia").innerHTML = consumodiadvr;

	var consumomesdvr = ((((((ndvr.value)*(potdvr.value)*24)*31)/1000).toFixed(1)));
	document.getElementById("potdvrmes").innerHTML = consumomesdvr;

	var pottotaldia = ((parseFloat(consumodiacam))+(parseFloat(consumodiadvr)));
	document.getElementById("pottotaldia11").innerHTML = pottotaldia;

	var pottotalmes = ((parseFloat(consumomescam))+(parseFloat(consumomesdvr)));
	document.getElementById("pottotalmes11").innerHTML = pottotalmes;

}
// Limpar consumodiacam
function limparConsumo() {

	document.getElementById("cam_pot").value = '';
	document.getElementById("cam_qnt").value = '';
	document.getElementById("grav_pot").value = '';
	document.getElementById("grav_qnt").value = '';

	document.getElementById("potcamdia").innerHTML = '';
	document.getElementById("petmesdia").innerHTML = '';
	document.getElementById("potdvrdia").innerHTML = '';
	document.getElementById("potdvrmes").innerHTML = '';
	document.getElementById("pottotaldia11").innerHTML = '';
	document.getElementById("pottotalmes11").innerHTML = '';


}
