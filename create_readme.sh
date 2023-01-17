#!/bin/bash

cat README_cover.md

let count=0
for f in $(ls -d */ | sed 's/\/$//' |grep -v 'resources'|grep -v 'images')
do
    echo "## $f"
    #let count=count+1
    for l in $(find -s $f -type f -not -path '*/\.*'|grep -v assets)
    do
	    var=$(echo $l| cut -d '/' -f2 |sed 's/\.markdown$//')
	    echo "- [$var]($l)"
	    let count=count+1
    done
done
echo ""
echo $'\n\n Run #bash create_readme.sh > README.md  in order to create README file automatically'
echo $'\n Number of markdown pages so far are: '$count
