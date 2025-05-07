@echo off
color a
title save cookies
cls
set "SourceFolder=%USERPROFILE%\Downloads"
set "DestinationFolder=.\saveCookies"
mkdir %DestinationFolder% 2>nul
set "BakeryName=porc"
set "MaxFiles=50"

echo Checking for files every 16,6 minutes...
:loop
:: Move new files
for %%F in ("%SourceFolder%\%BakeryName%Bakery.txt") do (
    echo Moving "%%~nxF" to "%DestinationFolder%\porcBakery-%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2%_%TIME:~0,2%-%TIME:~3,2%.txt"
    move "%%F" "%DestinationFolder%\porcBakery-%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2%_%TIME:~0,2%-%TIME:~3,2%.txt" >nul
)

:: Remove oldest files if count exceeds MaxFiles
for /f "skip=%MaxFiles% delims=" %%F in ('dir /b /o-d /a-d "%DestinationFolder%\porcBakery-*" 2^>nul') do (
    echo Deleting old file: "%%F"
    del "%DestinationFolder%\%%F"
)

git add .
git commit -m "%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2% %TIME:~0,2%-%TIME:~3,2%"
git push
timeout /t 1000 >nul
goto loop