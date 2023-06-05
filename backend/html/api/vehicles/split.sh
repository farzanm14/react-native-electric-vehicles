# Split original file into car files
for row in $(cat original.json | jq -r '.[] | @base64'); do
	#echo $row | base64 --decode | jq -r .
	CAR=$(echo $row | base64 --decode)
	CAR_ID=$(echo $CAR | jq -r '.id')
	echo $CAR | jq -r . > ${CAR_ID}.json
done

# Create the full list with only a few fields
echo "[" > temp.json
for row in $(cat original.json | jq -r '.[] | @base64'); do
	#echo $row | base64 --decode | jq -r .
	CAR=$(echo $row | base64 --decode)
	CAR_ID=$(echo $CAR | jq -r '.id')
	echo $CAR | jq -r '. | { id:.id, brand:.brand, model:.model, version:.version, category:.category, imageUrl:.imageUrl }' >> temp.json
	#echo $CAR | jq -r . >> temp.json
	echo "," >> temp.json
done
cat temp.json | tail -r | tail -n +2 | tail -r > temp2.json
rm temp.json
mv temp2.json temp.json
echo "]" >> temp.json
cat temp.json | jq -r . > vehicles.json
rm temp.json
