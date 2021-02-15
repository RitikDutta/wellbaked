/* 
 *  Data Sync Demo
 *  A simulated IoT desktop UI to demonstrate the data sync API
 *  https://github.com/pubnub
 * 
 *  @girlie_mac (PubNub)
 *  License: MIT
 */

(function() {

    // PubNub Data Sync

    var pubnub = PUBNUB.init({
        subscribe_key: 'sub-c-cb09c518-75a1-11e4-a290-02ee2ddab7fe',
        publish_key:   'pub-c-161fc194-bfd2-44e1-af19-0d44c834089d',
    });

    var home = pubnub.sync('home');

    // "Smart Home" UI

    var doorSwitch = document.getElementById('door');
    var lightSwitch = document.getElementById('light');
    var musicSwitch = document.getElementById('music');

    var audio = document.getElementsByTagName('audio')[0];

    var doorElem = document.querySelector('.door');
    var lightElem = document.querySelector('.light');
    var musicElem = document.querySelector('.music');


    function updateDoor() {
        if(doorSwitch.checked) {
            doorElem.classList.add('on');
            home.merge({'door': true});
        } else {
            doorElem.classList.remove('on');
            home.merge({'door': false});
        }
    }

    function updateLight() {
        if(lightSwitch.checked) {
            lightElem.classList.add('on');
            home.merge({'light': true});
        } else {
            lightElem.classList.remove('on');
            home.merge({'light': false});
        }
    }

    function updateMusic() {
        if(musicSwitch.checked) {
            musicElem.classList.add('on');
            audio.play();
            home.merge({'music': true});
        } else {
            musicElem.classList.remove('on');
            audio.pause();
            home.merge({'music': false});
        }
    }

    function syncDoor(status) {
        if(status === true) {
            doorElem.classList.add('on');
            doorSwitch.checked = true;
        } else {
            doorElem.classList.remove('on');
            doorSwitch.checked = false;
        }
    }

    function syncLight(status) {
        if(status === true) {
            lightElem.classList.add('on');
            lightSwitch.checked = true;
        } else {
            lightElem.classList.remove('on');
            lightSwitch.checked = false;
        }
    }

    function syncMusic(status) {
        if(status === true) {
            musicElem.classList.add('on');
            audio.play();
            musicSwitch.checked = true;
        } else {
            musicElem.classList.remove('on');
            audio.pause();
            musicSwitch.checked = false;
        }
    }

    // Data Sync Events

    home.on.ready(function(ref){
        console.log(JSON.stringify(ref.value()));
        syncDoor(ref.value().door);
        syncLight(ref.value().light);
        syncMusic(ref.value().music);
    });

    home.on.merge(function(ref){
        console.log(JSON.stringify(ref.value()));
        syncDoor(ref.value().door);
        syncLight(ref.value().light);
        syncMusic(ref.value().music);
    });

    // UI Events

    doorSwitch.addEventListener('change', updateDoor, false);
    lightSwitch.addEventListener('change', updateLight, false);
    musicSwitch.addEventListener('change', updateMusic, false);

})();


