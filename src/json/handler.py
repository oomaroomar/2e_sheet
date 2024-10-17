# quick script to convert json arrays to dictionaries
import json

f = open('cleric.json')
wSpells = json.load(f)
newWSpells = {}

for s in wSpells:
    key = ''
    key += s['name']
    key += s['school']
    newWSpells[key] = s
f.close()

new_spells = json.dumps(newWSpells, indent=4)


print(new_spells)