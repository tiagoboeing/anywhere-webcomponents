if [ ! -f ./../dist/anywhere-webcomponents/anywhere-webcomponents.js ]; then
  echo "Entry file not found! 🙄"
  exit 0
else
  exit 1 # failure CI
fi

