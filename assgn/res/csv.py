import csv

with open('restaurantsa9126b3.csv', newline='') as csvfile:
          r = csv.reader(csvfile, delimeter='|')
          for row in r:
            print(','.join(row))