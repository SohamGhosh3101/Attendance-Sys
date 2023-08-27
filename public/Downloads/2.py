import sqlite3
connection_obj = sqlite3.connect('mytable2.db')
crsr = connection_obj.cursor()
sql_command ="""CREATE TABLE IF NOT EXISTS Movie (
Movie_ID VARCHAR(255),
Movie_Name VARCHAR(255),
Genre VARCHAR(255),
Language VARCHAR(255),
Rating FLOAT);"""
crsr.execute(sql_command)
sql_command = """INSERT INTO Movie VALUES ("004","Harry Potter","Fantasy","English","8");"""
crsr.execute(sql_command)
sql_command = """INSERT INTO Movie VALUES ("005","Pirates of the Caribbean","Adventure","English","8.5");"""
crsr.execute(sql_command)
sql_command = """INSERT INTO Movie VALUES ("102","Jurassic Park","Thriller","English","8.2");"""
crsr.execute(sql_command)
crsr.execute(sql_command)
sql_command = """INSERT INTO Movie VALUES ("007","Spectre","Thriller","English","7.5");"""
crsr.execute(sql_command)
sql_command = """INSERT INTO Movie VALUES ("002","The Flopped","drama","English","2.5");"""
crsr.execute(sql_command)
print("Displaying Original data")
crsr.execute("SELECT * FROM Movie")
ans = crsr.fetchall()
for i in ans:
    print(i)
print("")
sql_command = """UPDATE Movie SET Rating = ((Rating*110)/100);"""
crsr.execute(sql_command)
print("Printing data after updating rating to 10%")
crsr.execute("SELECT * FROM Movie")
ans = crsr.fetchall()
for i in ans:
    print(i)
print("")
sql_command = """DELETE from Movie where Movie_ID = 102 """
crsr.execute(sql_command)
print("Displaying data after deleting 102 Movie_ID")
crsr.execute("SELECT * FROM Movie")
ans = crsr.fetchall()
for i in ans:
    print(i)
print("")
print("Displaying data having rating value greater than 3")
crsr.execute("SELECT * FROM Movie WHERE Rating>3")
ans = crsr.fetchall()
for i in ans:
    print(i)
print("")
connection_obj.commit()
connection_obj.close()