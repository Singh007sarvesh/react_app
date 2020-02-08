from database_connection import cursor

class Database:
    def search_by_rest_name(self, query):
        print(rest_name)
        sql = "select * from restaurant where Restaurant_Name= '"+rest_name+"' "
        cur = cursor()
        cur.execute(sql)
        data = cur.fetchone()
        return data

    def search_by_cuisine(self, cuisine):
        sql = "select Restaurant_ID,Restaurant_Name from restaurant where Cuisines like '%"+cuisine+"%'"
        cur = cursor()
        cur.execute(sql)
        data = cur.fetchall()
        return data
    
    def get_restaurant(self):
        # select * from restaurant r INNER JOIN restaurant_location rl   ON rl.restaurant_Id = r.restaurant_Id
        sql = "select * from restaurant"
        cur = cursor()
        cur.execute(sql)
        data = cur.fetchall()
        return data
    
    def search_by_rest_id(self, query):
        sql = ''
        try:
            int(query)
            sql = "select * from restaurant r INNER JOIN restaurant_location rl ON rl.restaurant_Id = r.restaurant_Id where r.restaurant_id ='"+query+"'"
        except:
            sql = "select * from restaurant r INNER JOIN restaurant_location rl ON rl.restaurant_Id = r.restaurant_Id where r.restaurant_name like '%"+query+"%' or r.Cuisines like '%"+query+"%'"
        cur = cursor()
        cur.execute(sql)
        data = cur.fetchall()
        return data

    def sort_based_on_key(self, data):
        if data == 'Votes':
            sql = "select * from restaurant order by Votes desc"
            cur = cursor()
            cur.execute(sql)
            data = cur.fetchall()
            return data
        elif data == 'Aggregate_rating':
            sql = "select * from restaurant order by Aggregate_rating desc"
            cur = cursor()
            cur.execute(sql)
            data = cur.fetchall()
            return data
        elif data == 'Average_Cost_for_two':
            sql = "select * from restaurant order by Average_Cost_for_two desc"
            cur = cursor()
            cur.execute(sql)
            data = cur.fetchall()
            return data
    