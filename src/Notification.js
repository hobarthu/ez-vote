
function notify(title, body, icon) {
    if (window.Notification) {
        if (Notification.permission === 'granted') {
            return new Notification(title, {
                body: body,
                icon: icon
            });
        } else {
            Notification.requestPermission(function (result) {
                if (result === 'denied' || result === 'default') {
                    alert('The permission has been denied!');
                } else {
                    return new Notification(title, {
                        body: body,
                        icon: icon
                    });
                }
            });
        }
    } else {
        alert('Your browser does not support Notification!');
    }
}

var i = 0;
var interval = window.setInterval(function () {
    var notification = notify("I'm Snoopy " + i + ".", "Nice to meet you!", '../static/images/dog.jpg');
    if (notification) {
        notification.onshow = function() {
        console.log('show');
        };
        notification.onclick = function() {
            console.log('click');
        };
        notification.onclose = function() {
            console.log('close');
            notification;
        };
        notification.onerror = function() {
            console.log('error');
        };
    }
    if (i++ == 9) {
        window.clearInterval(interval);
    }
}, 1000);