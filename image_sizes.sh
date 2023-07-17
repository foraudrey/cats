#!/bin/bash

image_directory="images/"

for img_file in "$image_directory"/*.jpeg; do
  image_size=$(identify -format "%wx%h" "$img_file")
  echo $image_size
done
