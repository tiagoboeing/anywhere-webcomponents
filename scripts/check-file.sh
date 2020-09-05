if [ ! -f $FILE ]; then
  echo "$FILE not found! 🙄"
  exit 1 # failure CI
else
  exit 0
fi
