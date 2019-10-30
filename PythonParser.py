import  json

input_file = open('NoSQLSchema.json')
json_array = json.load(input_file)
n = [json_array['Education'][0]]
