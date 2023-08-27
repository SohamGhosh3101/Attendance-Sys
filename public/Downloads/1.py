import sqlite3
conn = sqlite3.connect('Lab4Ques1.db')
cursor = conn.cursor()
print("Connected to database")
command1 ="""CREATE TABLE Recipe(
id int primary key,
name varchar(400),
description varchar(400),
category_id int,
chef_id int,
created datetime);
"""
command2 = """
insert into Recipe values(1,"abc","chinese", 2, 3,"12-12-22");
"""
command3 = """
insert into Recipe values(2,"john","chinese", 3, 4,"01-11-20");
"""
command4 = """
insert into Recipe values(3,"sonakshi","italian", 4, 5,"03-02-21");
"""
command5 = """
insert into Recipe values(5,"Pasta","italian", 2, 3,"02-11-19");
"""
command6 = """
select * from Recipe;
"""
cursor.execute(command1)
cursor.execute(command3)
cursor.execute(command4)
cursor.execute(command5)
cursor.execute(command6)
query1 = """ select count(id) from Recipe where description="chinese"; """
query2= """ select id, name from Recipe where chef_id=3; """
cursor.execute(query1)
ans1 = cursor.fetchall()
print(format(ans1))
cursor.execute(query2)
ans2 = cursor.fetchall()
print(format(ans2))
query3 = """ select description from Recipe where name like "P%"; """
cursor.execute(query3)
ans3 = cursor.fetchall()
print(ans3)
conn.commit()
conn.close()