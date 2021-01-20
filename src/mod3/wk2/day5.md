# Mod 3 > Week 2 > Day 5

Below are some experimental code blocks

|Javascript|Java|
```javascript
const http = require('http');
const oracledb = require('oracledb');
let error;
let user;
 
oracledb.getConnection(
    {
      user: process.env.EECS_USER, 
      password: process.env.EECS_PASSWORD,
      connectString: 'dbaccess'
    }, 
    function(err, connection) {
      if (err) {error = err; return;}
      
      connection.execute('select user from dual', [], function(err, result) {
        if (err) {error = err; return;}
 
        user = result.rows[0][0];
        error = null;
 
        connection.close(function(err) {
          if (err) {console.log(err);}
        });
      })
    }
);
 
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
 
  if (error === null) {
    response.end('Connection test succeeded. You connected to Exadata Express as ' + user + '!');
  } else if (error instanceof Error) {
    response.write('Connection test failed. Check the settings and redeploy app!\n');
    response.end(error.message);
  } else {
    response.end('Connection test pending. Refresh after a few seconds...');
  }
}).listen(process.env.PORT);
```
```java
public class OracleJdbcTest
{
	String driverClass = "oracle.jdbc.driver.OracleDriver";

	Connection con;
	
	public void init(FileInputStream fs) throws ClassNotFoundException, SQLException, FileNotFoundException, IOException
	{
		Properties props = new Properties();
		props.load(fs);
		String url = props.getProperty("db.url");
		String userName = props.getProperty("db.user");
		String password = props.getProperty("db.password");
		Class.forName(driverClass);

		con=DriverManager.getConnection(url, userName, password);
	}
	
	public void fetch() throws SQLException, IOException
	{
		PreparedStatement ps = con.prepareStatement("select SYSDATE from dual");
		ResultSet rs = ps.executeQuery();
		
		while (rs.next())
		{
			// do the thing you do
		}
		rs.close();
		ps.close();
	}

	public static void main(String[] args) 
	{
		OracleJdbcTest test = new OracleJdbcTest();
		test.init();
		test.fetch();
	}
}
```

Some other stuff. And then another example with 4 different languages!

|Python|Go|Java|Javascript|
```python
print("Hello World")
```
```go
fmt.Println("Hello World")
```
```java
System.out.println("Hello World");
```
```javascript
console.log('Hello World')
```

Not a tabbed block

```java
public main void() {
    // example 2
}
```

## Youtube Embed

!(https://www.youtube.com/watch?v=OlWomZbCW6I)

## Slides

!(https://docs.google.com/presentation/d/e/2PACX-1vR9fXGQK-iEBE2zaLeilLJlAM0_90xheU8S1VTGyvT08hmVuKDK-sPlL34MeXf3bv-Pl8zBw9caaHti/embed)

[attendance log](https://applied.multiverse.io/mod/questionnaire/complete.php?id=6702)
[prev](/swe/mod3/wk2/day4.html)
[main](/swe)