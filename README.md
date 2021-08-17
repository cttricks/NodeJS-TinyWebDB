# NodeJS-TinyWebDB
Using Node Server For TinyWebDB Component - [Appinventor](https://appinventor.mit.edu) | [Niotron](https://niotron.com) 
<br>

In this tutorial you'll get to know about hosting your **own TinyWebDB Instance** for FREE on any shared hosting.<br>
I'm assuming that you already have shared hosting and you are logged in to your cPanel.
<br>
## ⚡️ Host your own TinyWebDB Instance
Now follow the below given steps or [Click here](https://twbyt.cttricks.com) to watch tutorial video to setup Node Server.
1. On cPanel, Under SOFTWARE section you'll get **Setup Node.js App** option. Click on that
2. Click on **CREATE APPLICATION** button.
3. Provide `Application root`, `Application URL`, `Application startup file`, and `Passenger log file`, Click create. <br> <br>
![image|690x320](https://cttricks.com/xTinyDB/newpro3.png)
<br><br>
4. Now got to file manager and on `/home/<Your-Domain-Name>/` you'll find `tinywebdb` folder as we have set `Application root` to **tinywebdb**. 
5. Inside this folder create `package.json` file and paste the below-given JSON

```JSON
{
  "name": "tinywebdb",
  "version": "1.0.0",
  "description": "Node JS Server For TinyWebDB - Ai2 Component",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Ct tricks",
  "license": "MIT"
}
```
6. Create another file `database.json` and paste the below-given demo data in that.
```JSON
{
  "tag1": "Hello_World",
  "tag2": "Hello_Cttricks"
}

```

7. Now open `index.js` file and paste the codes of [index.js](https://raw.githubusercontent.com/cttricks/NodeJS-TinyWebDB/main/index.js) file of this repo & save it.
8. On NodeJS panel `Stop App` and click `Run NPM Install` (Refresh the page if the button is still not clickable)
9. Now click `START APP` button.

Now visit your `Application URL`. It shoud `https://<Your-Domain>/tinywebdb/`. You can access it by clicking on the ↗️`open` button on the right side of Application URL. 
<br><br>⚠️ Please note that,<br>
When you paste the `Application URL` in `Service URL` of TinyWebDB component, remove `/` from the end of the url. Example `https://<Your-Domain>/tinywebdb`


## 🎯 Demo APP/AIA
A demo app is made on [Niotron Builder](https://niotron.com) you can use my AIA file or can create your own on any appinventor clone.<br><br>
![image|690x320](https://cttricks.com/xTinyDB/newpro.png)
![image|690x320](https://cttricks.com/xTinyDB/newpro2.png)
<br>

## 🚀 Important Links
- Watch [Tutorial Video](https://twbyt.cttricks.com) on YouTube
- [Download](https://cttricks.com/xTinyDB/NodeTWD.apk) demo apk file
- [Download](https://cttricks.com/xTinyDB/NodeTWD.aia) demo aia file


<br>

**Enjoy your own TinyWebDB Service!** 🥳
