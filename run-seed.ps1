# Ejecutar seed en producción
$response = Invoke-WebRequest -Uri "https://portfolio-backend-tsvy.onrender.com/seed" -Method POST -UseBasicParsing
$response.Content | ConvertFrom-Json | Format-List
