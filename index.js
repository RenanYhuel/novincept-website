var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.infomaniak.com/1/kmeet/rooms',
  'headers': {
    'Authorization': 'Bearer YOUR-TOKEN-HERE',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "calendar_id": 36351,
    "starting_at": "2020-06-01 20:00:00",
    "ending_at": "2020-06-01 20:00:00",
    "timezone": "Europe\/Zurich",
    "hostname": "kmeet.infomaniak.com",
    "title": "example",
    "options": [
        {
            "subject": "example",
            "start_audio_muted": false,
            "enable_recording": true,
            "enable_moderator_video": false,
            "start_audio_only": true,
            "lobby_enabled": true,
            "password_enabled": true,
            "e2ee_enabled": true
        }
    ]
})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});