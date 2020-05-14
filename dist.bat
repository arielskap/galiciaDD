@echo off
color 30
call npm run build:dll
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\accidentes289 \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza Accidentes289!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Accidentes289

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\accidentes290 \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza ¡Accidentes290!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Accidentes290

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\accidentes291 \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza ¡Accidentes291!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Accidentes291

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\accidentes292 \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza ¡Accidentes292!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Accidentes292

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\bici \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza Bici!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Bici

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\camino \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza ¡Camino!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Camino

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\celular \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza ¡Celular!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Celular

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\desempleo \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza ¡Desempleo!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Desempleo

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\hogar \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza ¡Hogar!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Hogar

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\pyme \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza Pyme!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Pyme

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\pymeIntegral \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza Pyme Integral!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\PymeIntegral

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\salud \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza Salud!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Salud

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\tecno \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza Tecno!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\Tecno

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\viaPublica \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza Via Publica!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\ViaPublica

XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\vidaProteccionFamiliar \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\src\jsons\json
echo "¡Comienza Vida Proteccion Familiar!"
call npm run build
XCOPY /E /Y \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\desarrollo\template\dist \\srv_dd\d$\IIS\www\dynamicdoc.com.ar\galiciaSeguros\VidaProteccionFamiliar

pause
exit