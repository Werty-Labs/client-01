import csv
import glob
import os

for file in glob.glob('*.csv'):
    print(f'\n--- {file} ---')
    with open(file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        rows = []
        for row in reader:
            try:
                vol_str = row['Search vol.'].replace(',', '')
                vol = int(vol_str)
                rows.append((row['Keyword'], vol, row['Difficulty'], row['Search intent'], row['CPC']))
            except Exception as e:
                pass
        rows.sort(key=lambda x: x[1], reverse=True)
        for i, r in enumerate(rows[:10]):
            print(f'{i+1}. {r[0]} - Vol: {r[1]}, Diff: {r[2]}, Intent: {r[3]}, CPC: {r[4]}')
