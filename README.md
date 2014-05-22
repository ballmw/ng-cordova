# Hello!
The goal of this project is to wrap up the core cordova services so they are available in an Angular way.

## Mocking

There will be 2 libraries.  A cordova runtime library and a set of mocks to use in the browser.

## Build

```
npm install
```

```
bower install
```

```
grunt dist
```

## Test

Currently testing in Chrome so I can debug.
```
grunt karma
```

## Detecting mocks vs real

I'm open to suggestions here, but right now this is how I detect if I want to use my real or mock services.

First a simple regex to identify if it's uiwebview, then include cordova and the cordova-services
```
 <script type="text/javascript">
        var is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);

        if (is_uiwebview) {
            console.log('user real services');

            window.onerror = function (message, url, lineNumber) {
                console.log("Error: " + message + " in " + url + " at line " + lineNumber);
            }
            document.write('<script src=\'cordova.js\'><\/script>');
            document.write('<script src=\'lib/js/cordova/cordova-services.js\'><\/script>');
        }
        else {
            console.log('user mock services');
            document.write('<script src="lib/js/cordova/cordova-mock-services.js"><\/script>');
        }
    </script>
```
