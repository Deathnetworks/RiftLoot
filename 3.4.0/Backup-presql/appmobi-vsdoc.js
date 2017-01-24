AppMobi={};
AppMobi.accelerometer={};
/*
* @param watchID
*/ 
 AppMobi.accelerometer.clearWatch=function(watchID){
 /// <param name='watchID'></param>
};

/*
* @param accelerometerSuccess
* @param accelerometerOptions
*/ 
 AppMobi.accelerometer.getCurrentAcceleration=function(accelerometerSuccess,accelerometerOptions){
 /// <param name='accelerometerSuccess'></param>
/// <param name='accelerometerOptions'></param>
};

/*
* @param accelerometerSuccess
* @param accelerometerOptions
*/ 
 AppMobi.accelerometer.watchAcceleration=function(accelerometerSuccess,accelerometerOptions){
 /// <param name='accelerometerSuccess'></param>
/// <param name='accelerometerOptions'></param>
};

AppMobi['analytics']='';

AppMobi['audio']='';

AppMobi.cache={};
/*
* @param url
*/ 
 AppMobi.cache.addToMediaCache=function(url){
 /// <param name='url'></param>
};

/*
* @param url
* @param id
*/ 
 AppMobi.cache.addToMediaCacheExt=function(url,id){
 /// <param name='url'></param>
/// <param name='id'></param>
};

/*
*/ 
 AppMobi.cache.clearAllCookies=function(){
 };

/*
*/ 
 AppMobi.cache.clearMediaCache=function(){
 };

/*
* @param name
*/ 
 AppMobi.cache.getCookie=function(name){
 /// <param name='name'></param>

};

/*
*/ 
 AppMobi.cache.getCookieList=function(){
 };

/*
*/ 
 AppMobi.cache.getMediaCacheList=function(){
 };

/*
* @param url
*/ 
 AppMobi.cache.getMediaCacheLocalURL=function(url){
 /// <param name='url'></param>
};

AppMobi.cache.media={};
AppMobi.cache.media['add']='';

AppMobi.cache.media['clear']='';

AppMobi.cache.media['remove']='';

AppMobi.cache.media['update']='';

/*
* @param name
*/ 
 AppMobi.cache.removeCookie=function(name){
 /// <param name='name'></param>
};

/*
* @param url
*/ 
 AppMobi.cache.removeFromMediaCache=function(url){
 /// <param name='url'></param>
};

/*
* @param name
* @param value
* @param expirationDays
*/ 
 AppMobi.cache.setCookie=function(name,value,expirationDays){
 /// <param name='name'></param>
/// <param name='value'></param>
/// <param name='expirationDays'></param>
};

AppMobi.camera={};
/*
*/ 
 AppMobi.camera.clearPictures=function(){
 };

/*
* @param pictureFilename
*/ 
 AppMobi.camera.deletePicture=function(pictureFilename){
 /// <param name='pictureFilename'></param>
};

/*
*/ 
 AppMobi.camera.getPictureList=function(){
 };

/*
*/ 
 AppMobi.camera.getPictureURL=function(){
 };

/*
*/ 
 AppMobi.camera.importPicture=function(){
 };

AppMobi.camera.picture={};
AppMobi.camera.picture['add']='';

AppMobi.camera.picture['busy']='';

AppMobi.camera.picture['cancel']='';

AppMobi.camera.picture['clear']='';

AppMobi.camera.picture['remove']='';

/*
* @param quality
* @param saveToLibrary
* @param pictureType
*/ 
 AppMobi.camera.takePicture=function(quality,saveToLibrary,pictureType){
 /// <param name='quality'></param>
/// <param name='saveToLibrary'></param>

/// <param name='pictureType'></param>
};

AppMobi['contacts']='';

AppMobi.device={};
/*
*/ 
 AppMobi.device.addVirtualPage=function(){
 };

AppMobi.device['appmobiversion']='';

AppMobi.device.barcode={};
AppMobi.device.barcode['scan']='';

/*
* @param shouldblock
* @param whitelist
*/ 
 AppMobi.device.blockRemotePages=function(shouldblock,whitelist){
 /// <param name='shouldblock'></param>
/// <param name='whitelist'></param>
};

AppMobi.device.connection={};
AppMobi.device.connection['update']='';

/*
* @param url
* @param requestMethod
* @param requestBody
* @param successCallback
* @param errorCallback
*/ 
 AppMobi.device.getRemoteData=function(url,requestMethod,requestBody,successCallback,errorCallback){
 /// <param name='url'></param>
/// <param name='requestMethod'></param>
/// <param name='requestBody'></param>
/// <param name='successCallback'></param>
/// <param name='errorCallback'></param>
};

/*
* @param paramsObj
*/ 
 AppMobi.device.getRemoteDataExt=function(paramsObj){
 /// <param name='paramsObj'></param>

};

/*
* @param url
* @param requestMethod
* @param requestBody
* @param successCallback
* @param errorCallback
* @param uniqueIdentifier
*/ 
 AppMobi.device.getRemoteDataWithID=function(url,requestMethod,requestBody,successCallback,errorCallback,uniqueIdentifier){
 /// <param name='url'></param>
/// <param name='requestMethod'></param>
/// <param name='requestBody'></param>
/// <param name='successCallback'></param>
/// <param name='errorCallback'></param>
/// <param name='uniqueIdentifier'></param>
};

AppMobi.device.hardware={};
AppMobi.device.hardware['back']='';

AppMobi.device['hasAnalytics']='';

AppMobi.device['hasCaching']='';

AppMobi.device['hasStreaming']='';

AppMobi.device['hasUpdates']='';

/*
*/ 
 AppMobi.device.hideSplashScreen=function(){
 };

AppMobi.device['initialOrientation']='';

/*
*/ 
 AppMobi.device.installUpdate=function(){
 };

AppMobi.device['lastStation']='';

/*
* @param url
*/ 
 AppMobi.device.launchExternal=function(url){
 /// <param name='url'></param>
};

/*
* @param shouldStayOn
* @param onlyWhenPluggedIn
*/ 
 AppMobi.device.managePower=function(shouldStayOn,onlyWhenPluggedIn){
 /// <param name='shouldStayOn'></param>
/// <param name='onlyWhenPluggedIn'></param>

};

AppMobi.device['model']='';

AppMobi.device.orientation={};
AppMobi.device.orientation['change']='';

AppMobi.device['osversion']='';

AppMobi.device['phonegapversion']='';

AppMobi.device['platform']='';

AppMobi.device['queryString']='';

AppMobi.device['ready']='';

AppMobi.device.remote={};
AppMobi.device.remote['block']='';

AppMobi.device.remote['close']='';

AppMobi.device.remote['data']='';

/*
*/ 
 AppMobi.device.removeVirtualPage=function(){
 };

AppMobi.device['resume']='';

/*
*/ 
 AppMobi.device.scanBarcode=function(){
 };

/*
* @param shouldAutoRotate
*/ 
 AppMobi.device.setAutoRotate=function(shouldAutoRotate){
 /// <param name='shouldAutoRotate'></param>
};

/*
* @param domain
* @param username
* @param password
*/ 
 AppMobi.device.setBasicAuthentication=function(domain,username,password){
 /// <param name='domain'></param>
/// <param name='username'></param>
/// <param name='password'></param>
};

/*
* @param orientation
*/ 
 AppMobi.device.setRotateOrientation=function(orientation){
 /// <param name='orientation'></param>
};

/*
* @param url
* @param closeImageX
* @param closeImageY
* @param closeImageWidth
* @param closeImageHeight
*/ 
 AppMobi.device.showRemoteSite=function(url,closeImageX,closeImageY,closeImageWidth,closeImageHeight){
 /// <param name='url'></param>
/// <param name='closeImageX'></param>
/// <param name='closeImageY'></param>
/// <param name='closeImageWidth'></param>

/// <param name='closeImageHeight'></param>
};

/*
* @param url
* @param closeImagePortraitX
* @param closeImagePortraitY
* @param closeImageLandscapeX
* @param closeImageLandscapeY
* @param closeImageWidth
* @param closeImageHeight
*/ 
 AppMobi.device.showRemoteSiteExt=function(url,closeImagePortraitX,closeImagePortraitY,closeImageLandscapeX,closeImageLandscapeY,closeImageWidth,closeImageHeight){
 /// <param name='url'></param>
/// <param name='closeImagePortraitX'></param>
/// <param name='closeImagePortraitY'></param>
/// <param name='closeImageLandscapeX'></param>
/// <param name='closeImageLandscapeY'></param>
/// <param name='closeImageWidth'></param>
/// <param name='closeImageHeight'></param>
};

AppMobi.device['suspend']='';

AppMobi.device.update={};
AppMobi.device.update['available']='';

/*
*/ 
 AppMobi.device.updateConnection=function(){
 };

AppMobi.device['uuid']='';

AppMobi.display={};
/*
*/ 
 AppMobi.display.startAR=function(){
 };

/*
*/ 
 AppMobi.display.stopAR=function(){
 };

/*
* @param widthPortrait
* @param widthLandscape
*/ 
 AppMobi.display.useViewport=function(widthPortrait,widthLandscape){
 /// <param name='widthPortrait'></param>

/// <param name='widthLandscape'></param>
};

AppMobi.file={};
/*
*/ 
 AppMobi.file.cancelUpload=function(){
 };

AppMobi.file.upload={};
AppMobi.file.upload['busy']='';

/*
* @param localURL
* @param uploadURL
* @param folderName
* @param mimeType
* @param uploadProgressCallback
*/ 
 AppMobi.file.uploadToServer=function(localURL,uploadURL,folderName,mimeType,uploadProgressCallback){
 /// <param name='localURL'></param>
/// <param name='uploadURL'></param>
/// <param name='folderName'></param>
/// <param name='mimeType'></param>
/// <param name='uploadProgressCallback'></param>
};

AppMobi.geolocation={};
/*
* @param watchTimer
*/ 
 AppMobi.geolocation.clearWatch=function(watchTimer){
 /// <param name='watchTimer'></param>
};

/*
* @param successFunction
* @param errorFunction
*/ 
 AppMobi.geolocation.getCurrentPosition=function(successFunction,errorFunction){
 /// <param name='successFunction'></param>
/// <param name='errorFunction'></param>

};

/*
* @param successFunction
* @param errorFunction
* @param options
*/ 
 AppMobi.geolocation.watchPosition=function(successFunction,errorFunction,options){
 /// <param name='successFunction'></param>
/// <param name='errorFunction'></param>
/// <param name='options'></param>
};

AppMobi['jsVersion']='';

AppMobi.notification={};
/*
* @param userID
* @param password
* @param email
*/ 
 AppMobi.notification.addPushUser=function(userID,password,email){
 /// <param name='userID'></param>
/// <param name='password'></param>
/// <param name='email'></param>
};

/*
* @param message
* @param title
* @param buttontext
*/ 
 AppMobi.notification.alert=function(message,title,buttontext){
 /// <param name='message'></param>
/// <param name='title'></param>
/// <param name='buttontext'></param>

};

/*
* @param count
*/ 
 AppMobi.notification.beep=function(count){
 /// <param name='count'></param>
};

/*
* @param userID
* @param password
*/ 
 AppMobi.notification.checkPushUser=function(userID,password){
 /// <param name='userID'></param>
/// <param name='password'></param>
};

/*
* @param notificationIDs
*/ 
 AppMobi.notification.deletePushNotifications=function(notificationIDs){
 /// <param name='notificationIDs'></param>
};

/*
*/ 
 AppMobi.notification.deletePushUser=function(){
 };

/*
* @param newEmail
* @param newPassword
*/ 
 AppMobi.notification.editPushUser=function(newEmail,newPassword){
 /// <param name='newEmail'></param>
/// <param name='newPassword'></param>
};

/*
* @param userID
* @param emailAddress
*/ 
 AppMobi.notification.findPushUser=function(userID,emailAddress){
 /// <param name='userID'></param>
/// <param name='emailAddress'></param>
};

/*
* @param id
*/ 
 AppMobi.notification.getNotificationData=function(id){
 /// <param name='id'></param>

};

/*
*/ 
 AppMobi.notification.getNotificationList=function(){
 };

/*
*/ 
 AppMobi.notification.hideBusyIndicator=function(){
 };

AppMobi.notification.push={};
/*
*/ 
 AppMobi.notification.push.closeRichPushViewer=function(){
 };

AppMobi.notification.push['delete']='';

AppMobi.notification.push['disable']='';

AppMobi.notification.push['enable']='';

AppMobi.notification.push['read']='';

AppMobi.notification.push['receive']='';

AppMobi.notification.push['refresh']='';

AppMobi.notification.push.rich={};
AppMobi.notification.push.rich['busy']='';

AppMobi.notification.push.rich['close']='';

AppMobi.notification.push['send']='';

/*
* @param userID
* @param message
* @param data
*/ 
 AppMobi.notification.push.sendPushNotification=function(userID,message,data){
 /// <param name='userID'></param>
/// <param name='message'></param>
/// <param name='data'></param>
};

AppMobi.notification.push['sendpassword']='';

/*
* @param notificationID
* @param closeImagePortraitX
* @param closeImagePortraitY
* @param closeImageLandscapeX
* @param closeImageLandscapeY
* @param closeImageWidth
* @param closeImageHeight
*/ 
 AppMobi.notification.push.showRichPushViewer=function(notificationID,closeImagePortraitX,closeImagePortraitY,closeImageLandscapeX,closeImageLandscapeY,closeImageWidth,closeImageHeight){
 /// <param name='notificationID'></param>
/// <param name='closeImagePortraitX'></param>
/// <param name='closeImagePortraitY'></param>
/// <param name='closeImageLandscapeX'></param>
/// <param name='closeImageLandscapeY'></param>
/// <param name='closeImageWidth'></param>

/// <param name='closeImageHeight'></param>
};

AppMobi.notification.push.user={};
AppMobi.notification.push.user['edit']='';

AppMobi.notification.push.user['editattributes']='';

AppMobi.notification.push.user['find']='';

/*
* @param notificationIDs
*/ 
 AppMobi.notification.readPushNotifications=function(notificationIDs){
 /// <param name='notificationIDs'></param>
};

/*
*/ 
 AppMobi.notification.refreshPushNotifications=function(){
 };

/*
*/ 
 AppMobi.notification.sendPushUserPass=function(){
 };

/*
* @param attributesObj
*/ 
 AppMobi.notification.setPushUserAttributes=function(attributesObj){
 /// <param name='attributesObj'></param>
};

/*
*/ 
 AppMobi.notification.showBusyIndicator=function(){
 };

/*
*/ 
 AppMobi.notification.vibrate=function(){
 };

AppMobi.oauth={};
AppMobi.oauth['busy']='';

/*
* @param paramsObj
*/ 
 AppMobi.oauth.getProtectedData=function(paramsObj){
 /// <param name='paramsObj'></param>
};

AppMobi.oauth.protected={};
AppMobi.oauth.protected['data']='';

AppMobi.oauth['setup']='';

AppMobi.oauth['unauthorize']='';

/*
* @param service
*/ 
 AppMobi.oauth.unauthorizeService=function(service){
 /// <param name='service'></param>
};

AppMobi.oauth['unavailable']='';

AppMobi['oauthAvailable']='';

AppMobi['payments']='';

AppMobi.player={};
AppMobi.player.audio={};
AppMobi.player.audio['busy']='';

AppMobi.player.audio['error']='';

AppMobi.player.audio['start']='';

AppMobi.player.audio['stop']='';

/*
*/ 
 AppMobi.player.ffwd=function(){
 };

/*
*/ 
 AppMobi.player.hide=function(){
 };

/*
* @param soundURL
*/ 
 AppMobi.player.loadSound=function(soundURL){
 /// <param name='soundURL'></param>
};

/*
*/ 
 AppMobi.player.pause=function(){
 };

/*
*/ 
 AppMobi.player.play=function(){
 };

/*
* @param podcastURL
*/ 
 AppMobi.player.playPodcast=function(podcastURL){
 /// <param name='podcastURL'></param>
};

/*
* @param soundURL
*/ 
 AppMobi.player.playSound=function(soundURL){
 /// <param name='soundURL'></param>
};

AppMobi.player.player={};
AppMobi.player.player['hide']='';

AppMobi.player.podcast={};
AppMobi.player.podcast['busy']='';

AppMobi.player.podcast['error']='';

AppMobi.player.podcast['start']='';

AppMobi.player.podcast['stop']='';

/*
*/ 
 AppMobi.player.rewind=function(){
 };

/*
* @param backColor
* @param fillColor
* @param doneColor
* @param playColor
*/ 
 AppMobi.player.setColors=function(backColor,fillColor,doneColor,playColor){
 /// <param name='backColor'></param>

/// <param name='fillColor'></param>
/// <param name='doneColor'></param>
/// <param name='playColor'></param>
};

/*
* @param portraitX
* @param portraitY
* @param landscapeX
* @param landscapeY
*/ 
 AppMobi.player.setPosition=function(portraitX,portraitY,landscapeX,landscapeY){
 /// <param name='portraitX'></param>
/// <param name='portraitY'></param>
/// <param name='landscapeX'></param>
/// <param name='landscapeY'></param>
};

AppMobi.player.shoutcast={};
AppMobi.player.shoutcast['busy']='';

AppMobi.player.shoutcast['error']='';

AppMobi.player.shoutcast['pause']='';

AppMobi.player.shoutcast['play']='';

AppMobi.player.shoutcast['start']='';

AppMobi.player.shoutcast['stop']='';

/*
*/ 
 AppMobi.player.show=function(){
 };

AppMobi.player.sound={};
AppMobi.player.sound['error']='';

/*
* @param relativeURL
*/ 
 AppMobi.player.startAudio=function(relativeURL){
 /// <param name='relativeURL'></param>
};

/*
* @param shoutcastURL
* @param showPlayer
*/ 
 AppMobi.player.startShoutcast=function(shoutcastURL,showPlayer){
 /// <param name='shoutcastURL'></param>

/// <param name='showPlayer'></param>
};

/*
* @param netStationID
* @param resumeMode
* @param showPlayer
*/ 
 AppMobi.player.startStation=function(netStationID,resumeMode,showPlayer){
 /// <param name='netStationID'></param>
/// <param name='resumeMode'></param>
/// <param name='showPlayer'></param>
};

AppMobi.player.station={};
AppMobi.player.station['busy']='';

AppMobi.player.station['error']='';

AppMobi.player.station['pause']='';

AppMobi.player.station['player']='';

AppMobi.player.station['start']='';

AppMobi.player.station['stop']='';

/*
*/ 
 AppMobi.player.stop=function(){
 };

/*
*/ 
 AppMobi.player.stopAudio=function(){
 };

/*
*/ 
 AppMobi.player.toggleAudio=function(){
 };

AppMobi.player.track={};
AppMobi.player.track['change']='';

/*
* @param soundURL
*/ 
 AppMobi.player.unloadSound=function(soundURL){
 /// <param name='soundURL'></param>
};

/*
* @param volumePercentage
*/ 
 AppMobi.player.volume=function(volumePercentage){
 /// <param name='volumePercentage'></param>
};

AppMobi.playingtrack={};
AppMobi.playingtrack['album']='';

AppMobi.playingtrack['artist']='';

AppMobi.playingtrack['imageurl']='';

AppMobi.playingtrack['title']='';

AppMobi['updateAvailable']='';

AppMobi['updateMessage']='';

AppMobi['webRoot']='';
