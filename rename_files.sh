#!/bin/bash

# Initialize the counter
counter=1

# Loop through all image files in the current directory
for file in new_images/*; do
  # Construct the new file name
  new_name="cats${counter}.jpg"
  
  # Rename the file
  mv "$file" "new_images/$new_name"
  
  # Print the renaming details (optional)
  echo "Renamed: $file -> $new_name"
  
  # Increment the counter
  ((counter++))
done