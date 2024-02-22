@echo off
color a
title save cookies
cls
set "SourceFolder=%USERPROFILE%\Downloads"
set "DestinationFolder=.\saveCookies"
mkdir %DestinationFolder%
set "FilePrefix=porcBakery"

echo Checking for files every 16,6 minutes...
:loop
for %%F in ("%SourceFolder%\%FilePrefix%*") do (
    echo Moving "%%~nxF" to "%DestinationFolder%\porcBakery-%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2%_%TIME:~0,2%-%TIME:~3,2%.txt"
    move "%%F" "%DestinationFolder%\porcBakery-%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2%_%TIME:~0,2%-%TIME:~3,2%.txt" > nul
)
git add .
git commit -m "%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2% %TIME:~0,2%-%TIME:~3,2%"
git push
timeout /t 1000 >nul
goto loop