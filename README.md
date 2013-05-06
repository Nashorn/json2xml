# Intro
I like xml. I like json. I like javascript.
So I made a little tool to convert from json to xml.

# How to use
First, import the json2xml.js.  
Then, do something like this : 
<pre>var xml = json2xml.convert(obj, "data");</pre>
This will convert your json object (obj) to xml.

## Parameters

The json2xml.convert function needs 2 parameters :  
*  The json object (called "obj" in the example).  
*  The xml root name ("data" in the example).

* USAGE:
<pre>
<code>
json2xml.convert({
	name:"Jayson Smath", 
	address:{
		street:"888 Oakhills Road",
		city: "Somewhere",
		state: "N Carolina",
		zip:34500
	}, 
	kids:[
		{name:"isaiah", age:6, phone:["abc"]},
		{name:"geo", age:19}
	]},
"xml");
</code>
</pre>

* OUTPUT:
<pre>
<xml>
	<name>Jayson Smath</name>
	<address>
		<street>888 Oakhills Road</street>
		<city>Somewhere</city>
		<state>N Carolina</state>
		<zip>34500</zip>
	</address>
	<kids>
		<item>
			<name>isaiah</name>
			<age>6</age>
			<phone>
				<item>abc</item>
			</phone>
		</item>
		<item>
			<name>geo</name>
			<age>19</age>
		</item>
	</kids>
</xml>
</pre>
# License
This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States License.

# Contact
You can contact me at jaysmith024ATgmail.com
(replace AT with @) Please write "json2xml" or something in your subject.