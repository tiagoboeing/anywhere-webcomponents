if [ ! -f $FILE ]; then
  echo "$FILE not found! 🙄"
  exit 1 # failure CI
else
  echo "Well done! $FILE founded! 🎉"
  exit 0
fi
