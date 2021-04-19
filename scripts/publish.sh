#!/bin/bash 


lerna publish from-package --dist-tag "v${1}" --force-publish=@ecosystemos/$2
