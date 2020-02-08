import mysql.connector  

#Create the connection object   
myconn = mysql.connector.connect(host = "localhost", user = "root", password = "sarvesh123", database = "ass")  
  
#printing the connection object   
# print(myconn)   
  
#creating the cursor object
def cursor():
    cur = myconn.cursor()
    return cur