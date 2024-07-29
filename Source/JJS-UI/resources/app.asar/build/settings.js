var fs = require('fs');
const path = require('path')

/*Note: This is designed so that save data is maintained even on uninstall/reinstalls.
This is great so I can push UI updates and people won't need to set their settings again*/

//File that contains the save data in JSON format
var confPath = process.env.APPDATA + "\\jjv5conf.json"

//Default configuration settings for JJSploit
var defaultConf = {
	ui:{
		topMost: false,
		//Garbage version tracking, but now we're stuck with it
		version: 45,
	}
}

//Creates configuration file if not found. Typically only when JJSploit is first installed
if(!fs.existsSync(confPath)){
	fs.writeFileSync(confPath, JSON.stringify(defaultConf));
}

//Resets config file if theres any problems with it
try{
	require(confPath)
}
catch(e){
	fs.writeFileSync(confPath, JSON.stringify(defaultConf));
	console.log("JJSploit settings was corrupt, so it has factory reset.")
}

//Keeps the UI version in sync
var currentUI = SaveData().ui
currentUI.version = defaultConf.ui.version
SaveData({ui: currentUI})

//Gets current save data or overwrites the save data
function SaveData(newSaveDataObj=undefined){
	var saveData = JSON.parse(fs.readFileSync(path.resolve(__dirname, confPath)))

	if(newSaveDataObj){
        // Save new data
        
        //Not doing this because it doesn't remove keys with the undefined datatype
        //saveData = Object.assign({}, saveData, newSaveDataObj)

		for(key in newSaveDataObj){
			saveData[key] = newSaveDataObj[key]

			//Specifiy deletion by setting value as undefined
			if(newSaveDataObj[key] === undefined){
				delete saveData[key]
			}
        }

		fs.writeFileSync(path.resolve(__dirname, confPath), JSON.stringify(saveData));
	}

	return saveData
}

module.exports = SaveData