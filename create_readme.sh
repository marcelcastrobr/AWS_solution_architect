#!/bin/bash

let count=0
#for f in "$target"/*
#for f in $(find -s . -type d -not -path '*/\.*')
for f in $(ls -d */ | sed 's/\/$//' |grep -v 'resources'|grep -v 'images')
do
    #echo $f
    echo "## $f"
    #echo $(basename $f)
    let count=count+1
    #find -s $(basename $f) -type f -not -path '*/\.*';
    for l in $(find -s $f -type f -not -path '*/\.*')
    do
	    #echo  $l
	    var=$(echo $l| cut -d '/' -f2 |sed 's/\.markdown$//')
	    echo "- [$var]($l)"
    done
done
echo ""
echo "Count: $count"
