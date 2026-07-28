@echo off
echo ============================================
echo   DESPLEGAR MOKADU-WEB A NETLIFY
echo ============================================
echo.
echo Paso 1: Login en Netlify (se abre el navegador)
npx netlify-cli login
echo.
echo Paso 2: Desplegando la web...
npx netlify-cli deploy --prod --dir . --site-name mokadu-bilbao
echo.
echo LISTO. Tu web de Mokadu esta en:
echo https://mokadu-bilbao.netlify.app
echo.
pause
