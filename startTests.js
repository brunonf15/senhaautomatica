exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',

    specs: [
        'autenticacao-usuario.js',
    ],

    capabilities: {
        browserName: 'chrome',
        platformName: 'android',
        deviceName: '42000b389b977200',
	//To get your device, type: adb devices on cmd
    }

};