/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "", "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: [], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 12,
  units: "metric",

  modules: [
    {
      module: "alert",
    },
    {
      module: "MMM-Wallpaper",
      position: "fullscreen_below",
      config: { // See "Configuration options" for more information.
        //source: "bing",
        source: "/r/australia",
        slideInterval: 60 * 1000 // Change slides every minute
      }
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: 'worldclock',
      position: 'top_left', // This can be any of the regions, best results in top_left or top_right regions
      config: {
        // See 'Configuration options' for more information.
    
        timeFormat: 'HH:mm A', //defined in moment.js format()
        style: 'left', //predefined 4 styles; 'top', 'left','right','bottom'
        offsetTimezone: null, // Or you can set `Europe/Berlin` to get timegap difference from this timezone. `null` will be UTC timegap.
        clocks: [
          {
            title: "Holland",
          },
          {
            title: "Sydney", // Too long title could cause ugly text align.
            timezone: "Australia/Sydney", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
            //flag: "au",
          },
          {
            title: "Sunnyvale",
            timezone: "US/Pacific",
          },
        ]
      }
    },
    {
      module: "calendar",
      header: "US Holidays",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
          }
        ]
      }
    },
    {
    module: "calendar",
    header: "AUS Holidays",
    position: "top_left",
    config: {
      calendars: [
        {
          symbol: "calendar-check",
          url: "webcal://www.calendarlabs.com/ical-calendar/ics/35/Australia_Holidays.ics"
          
        }
      ]
    }
    },
    {
      module: "MMM-Memo",
      position: "top_left",
      config: {
        memoTitle: "Shopping",
        memoDisplayIfEmpty: "True"
      }
    },
    {
      module: 'MMM-Dad-Jokes',
      position: 'lower_third', // Or wherever you want
      config: {
          updateInterval: 60000,
          fadeSpeed: 4000
      }
    },
    {
      module: "MMM-MyScoreboard",
      position: "top_right",
      config: {
        showLeagueSeparators: true,
        colored: true,
        viewStyle: "mediumLogos",
        sports: [
          {
            league: "NFL",
            teams: ["DET"]
          }
        ]
      }
    },
    {
      module: "compliments",
      position: "lower_third"
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        locationID: "4996248",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: "a3d6458372673847c2aedb6ab7537b5f"
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        locationID: "4996248",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
        appid: "a3d6458372673847c2aedb6ab7537b5f" 
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "New York Times",
            url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
