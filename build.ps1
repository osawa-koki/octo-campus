
Clear-Host

Write-Host ""
Write-Host "Removing the old project..." -ForegroundColor Green
Write-Host ""

Remove-Item -Path "./docs" -Recurse -Force

Write-Host ""
Write-Host "Building the project..." -ForegroundColor Green
Write-Host ""

yarn build

Write-Host ""
Write-Host "Copying the new project..." -ForegroundColor Green
Write-Host ""

Copy-Item -Path "./public" -Destination "./docs" -Recurse

Write-Host ""
Write-Host "Done!" -ForegroundColor Blue
Write-Host ""
