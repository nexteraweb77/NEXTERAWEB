#!/bin/bash
# Porneste site-ul pe calculator. Nu inchide fereastra pana nu termini de privit site-ul.
cd "$(dirname "$0")" || exit 1
clear
echo ""
echo "  >>> Pornesc site-ul... te rog asteapta cateva secunde."
echo ""
npm run dev
