const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="zh8559462@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || "ᴘ Aftab Hussain " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923107253460";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923107253460,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_27_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSkp4Z2tYTWFEeVY5MmNuTUNoT0gzMmxrbmEzS2F1cFFaQXBBR0ovK3pNTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLTBfWnFBT0tSRk9FNUI0ejBSWjJfZ1wiLFxuICBcInBob25lSWRcIjogXCJmNzk1OWQ0MC05NTEyLTQ0MzEtOTcxOC00OGY3ZTllMDA4NzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMjAxLFxuICAgICAgODQsXG4gICAgICA1MyxcbiAgICAgIDI4LFxuICAgICAgMjA1LFxuICAgICAgMjM1LFxuICAgICAgMjMzLFxuICAgICAgNzQsXG4gICAgICA4MSxcbiAgICAgIDQ0LFxuICAgICAgMzEsXG4gICAgICAyNTUsXG4gICAgICAxOTgsXG4gICAgICAxMjQsXG4gICAgICAyMDEsXG4gICAgICAxMTYsXG4gICAgICAxNjAsXG4gICAgICAxNTMsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICA1MCxcbiAgICAgIDE4NCxcbiAgICAgIDI4LFxuICAgICAgMTk0LFxuICAgICAgMTksXG4gICAgICA4LFxuICAgICAgNSxcbiAgICAgIDExLFxuICAgICAgMjIwLFxuICAgICAgMjQzLFxuICAgICAgMTU0LFxuICAgICAgMSxcbiAgICAgIDE5MCxcbiAgICAgIDE3NSxcbiAgICAgIDE5NSxcbiAgICAgIDI0OCxcbiAgICAgIDE4LFxuICAgICAgMTQwLFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjJNR1czWFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEwNzI1MzQ2MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWZ0YWIgTWV5b1wiLFxuICAgIFwibGlkXCI6IFwiMjM5MzU4OTgwNDQ4NTEwOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjNDOGFrRkVPMkUwN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXS2hJSVlydHQvWHpVR3g4RlQ3Vm1wVG9ZcElIV2k4TW5vOW9jWjdkUFV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdMNzdOVGlxL3dUdGxQN3h4dGMwME9mSS8yVWs5ZnVsQVQ1dFlPMW8yRFVPTzRNR2htdnZLMThXamwvYzRydHRJNTV0NUFOdHlTWUJTblBmVTRxcEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5BaTZzeUVBMUs4RVVNYngvdEhEUGhuTktiaHkvamlIWC9wQVV3clhoeGZSckk4UktvcDRxNEdRZW1HZUdYWWszaFNwdUNWcWFvUVlTUjc4S3BNVEJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEwNzI1MzQ2MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjgzMDgzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURwTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHBMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMWNxZmVuSlNCTUFJT0VYQVBnRFJ0Z3k5OEg0a0RtUHFkSk9TdlBlWkJCWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDMwMDIwMzgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY4MzA4MzUyOTVcIn0iCn0= "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // Aftab Hussain"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Aftab bot",
  ownername:process.env.OWNER_NAME|| "Aftab Hussain",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
