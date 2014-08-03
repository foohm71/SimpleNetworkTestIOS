
//Handling alerts in case they appear anywhere in the app
UIATarget.onAlert = function onAlert(alert)
{
        var title = alert.name();

        UIALogger.logWarning("Alert with title '" + title + "' encountered!");
        return true;
}

#import "tuneup_js/tuneup.js"

var target = UIATarget.localTarget();
var application = target.frontMostApp();
var window = application.mainWindow();

test("TC00 - Log Element Tree", function(target, application) {       
    
    logElementTree();

});

//TC0.1 - Getting some device information
test("TC0.1 - Gettting some device information", function(target, application) {
   delay(5);
   UIALogger.logMessage("The connected device is an " +target.model());
   UIALogger.logMessage("The OS is " +target.systemName());
   UIALogger.logMessage("The iOS version is " +target.systemVersion());
   UIALogger.logMessage("The name of the device is " +target.name());
});

//TC01 - Network Test
test("TC01 - Network Test", function(target, application) {
    logElementTree();	 
    delay(1);
    window.buttons()["Button"].tap(); 
    delay(2);
    logElementTree();	 
	var expectedString = "Network OK";
	var actualString = window.staticTexts()["Label"].value();
	var firstText = window.staticTexts()[0].value();
	var networkOK = window.staticTexts()["Label"].text; 
	UIALogger.logMessage("actualString is " + actualString);
	UIALogger.logMessage("firstText is " + firstText);
	UIALogger.logMessage("networkOK is " + networkOK); 
						 
//    if (actualString === actualString) {
	if (window.staticTexts()["Network OK"].isVisible()) { 
       UIALogger.logPass("Network OK");
    } else {
       UIALogger.logFail("No network");
    }
});	 

