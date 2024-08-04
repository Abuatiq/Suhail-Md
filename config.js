const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347068300216";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_48_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlJNmViNVAxeHFXL2tBMnp5NzdhUlozamx6UXlqNGJwWWFIWW1XMVV3dTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNEWFlLUGFlU2hTdTdQNG5ncEJDeVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWU2YjExMmYtNDViYi00MTIzLTgyNWItMTViZmMyM2M2NDc5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMTQ4LFxuICAgICAgMTM0LFxuICAgICAgMjUwLFxuICAgICAgMTA0LFxuICAgICAgNzAsXG4gICAgICA3MyxcbiAgICAgIDU5LFxuICAgICAgMjIyLFxuICAgICAgOTMsXG4gICAgICAxMDgsXG4gICAgICAxODMsXG4gICAgICA5NSxcbiAgICAgIDksXG4gICAgICA4MyxcbiAgICAgIDczLFxuICAgICAgMTc1LFxuICAgICAgMTI5LFxuICAgICAgMTg3LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAxOTksXG4gICAgICA3NSxcbiAgICAgIDEwNSxcbiAgICAgIDExMyxcbiAgICAgIDEyMyxcbiAgICAgIDIyMSxcbiAgICAgIDk5LFxuICAgICAgMjgsXG4gICAgICAxNDQsXG4gICAgICAxODcsXG4gICAgICAxMTksXG4gICAgICA2OSxcbiAgICAgIDIzLFxuICAgICAgMjA3LFxuICAgICAgODksXG4gICAgICA2MixcbiAgICAgIDE0LFxuICAgICAgMTcxLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVBWRFRMQldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjgzMDAyMTY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIDwnZCb8J2QriDwnZCA8J2QrfCdkKLwnZCqXCIsXG4gICAgXCJsaWRcIjogXCIxNjE5OTMzODIyMjAwMDc6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZThoNWNFRU9xWnY3VUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk12cm51cWtMQ1NVZDd2ZWE0MFBlWE1vZkFMUHJic3RoTlNVQmlmQjV1aUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicnRENkVqN0tCbTdzeVowWVFVdld6WWJwL0dVY3FyWGtJbnZiaXRWeWp5SUhZdThzL0VDSWRBdUQvYXJtNU5OTU9aL1JyS2tLVGJ5elV5K0dBTnhqQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU1BsdXRrSXpQRG1tbkR3Z1JaaExIaXBGZmUreHhkSDBYTXArNlFZcDcySW1rQkxnL3V5ZVkzZWx1b2xjQXk5V3kxaW94S2pnNThnclZ0V1Z1eGNiaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2ODMwMDIxNjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc5NzI5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUovcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSi9wLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
