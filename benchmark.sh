#!/bin/sh

ab -r -n 1000 -c 100 http://localhost:3000/api/testCreateHotel
ab -r -n 1000 -c 100 http://localhost:3000/api/testSearch
