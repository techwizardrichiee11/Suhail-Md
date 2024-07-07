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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254740479599";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_36_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQzLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZqeUdhK3VNS0haTndYQkFhNnNjd0dDcGZpdDZ1bVlOaEtNYzZDdUxQOFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQwNDc5NTk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RDRBQzY4QTVDRkYxNTgzQzJCMDZCMzQyQjYzNzg5RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMjY5NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDA0Nzk1OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRGNDYzOUVFRTBFN0QzRTY4ODlFNkZBM0EwMkMzRUEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDMyNjk1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpZEZBOFRhblFWZU9Qb0VnSVBTZExRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhYzgwNWY0LTE5NTktNGJmYi04OWM2LTE1NWQ5M2NkNjgyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDk3LFxuICAgICAgMTM2LFxuICAgICAgNjUsXG4gICAgICAyMjUsXG4gICAgICAyMzgsXG4gICAgICA0OCxcbiAgICAgIDM5LFxuICAgICAgMjEwLFxuICAgICAgNDQsXG4gICAgICAxNDMsXG4gICAgICAxMjQsXG4gICAgICAxNjUsXG4gICAgICA3OCxcbiAgICAgIDQ5LFxuICAgICAgMjQ4LFxuICAgICAgODMsXG4gICAgICAxMjAsXG4gICAgICA2MixcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAyMTUsXG4gICAgICAyNDUsXG4gICAgICAxNDYsXG4gICAgICAxODEsXG4gICAgICA2MCxcbiAgICAgIDI1MixcbiAgICAgIDE2OCxcbiAgICAgIDQ3LFxuICAgICAgNTUsXG4gICAgICAxMzQsXG4gICAgICAxMTQsXG4gICAgICAxNDksXG4gICAgICAyMjcsXG4gICAgICAxODYsXG4gICAgICA4OCxcbiAgICAgIDEwMSxcbiAgICAgIDE3MCxcbiAgICAgIDc4LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFdEN1NCRTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MDQ3OTU5OTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDE5NjYwOTI3MTAxMjQ6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmK8J2ZofCdmaHwnZmuIPCdmY3wnZme8J2ZmPCdmZ3wnZmW8J2Zp/CdmZnwnZmo8J+UpfCflKVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQN0I2dWtFRUtXMnFMUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlITlJmUWJSdGRQV0djSngxZzkzT0M5V1hjcG11WVk4aXphNnl6bkE4Rjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWWhPRmI4SEJiZEcxalozemRPdFpFbUdVejJtUnNnUWQ2LzVua3AyQ1NVaTMwZkYranY3elVRbWU3OCtQZ1hZcXM1WXNuTTZkcWtBNm80a1R5cVVaRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVzgvQWlLcnhzRDJUd2VocUhnOUtNdmF5azJjN0lOaHlTbTIyZjE1c2t2aUNLVFJJYUlITVZZYmVFYms1Vkw4WTQ2VnBwVjhKelJtVGxIVndmVWdiaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQwNDc5NTk5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMyNjk1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxoY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGhjLmpzb24iOiAie1wia2V5RGF0YVwiOlwidHJiYXVjVzRTT1N6MGFjd3J3MFh2dlFyNVJOZmxtdlJmMkNWbk4zM1dhbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjk1Njg3OTM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BONNIE",
  ownername:process.env.OWNER_NAME|| "RICHIE",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BONNIE"  ).toUpperCase(),



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
