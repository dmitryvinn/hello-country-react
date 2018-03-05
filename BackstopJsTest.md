1) Install BackstopJS
npm install -g backstopjs

2) Initialize BackstopJS
backstop init

3) Run tests
backstop test

4) Approve screenshots
backstop approve





















Demo:

1) Point url in backstop.json to a proper value:
"url": "http://localhost:3000/",
2) backstop test
3) backstop approve

4) Data for config:

{
  "id": "backstop_default",
  "viewports": [
    {
      "label": "phone",
      "width": 374,
      "height": 667
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    }
  ],
  "onBeforeScript": "chromy/onBefore.js",
  "onReadyScript": "chromy/onReady.js",
  "scenarios": [
    {
      "label": "Hello America",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "http://localhost:3000/",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": "",
      "selectors": [],
      "selectorExpansion": true,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    },
    {
      "label": "American Flag",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "http://localhost:3000/",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": "",
      "selectors": [".countryFlag"],
      "selectorExpansion": true,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "chrome",
  "engineFlags": [],
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
