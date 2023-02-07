# Publish/Subscribe [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&text=Publish%2FSubscribe%20JavaScript%20UMD%20package&tw_p=tweetbutton&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fpublish-subscribe-js&via=shystrukk) #
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![Build Status](https://travis-ci.org/shystruk/publish-subscribe-js.svg?branch=master)](https://travis-ci.org/shystruk/publish-subscribe-js) [![npm version](https://badge.fury.io/js/publish-subscribe-js.svg)](https://badge.fury.io/js/publish-subscribe-js) [![Known Vulnerabilities](https://snyk.io/test/github/shystruk/publish-subscribe-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/shystruk/publish-subscribe-js?targetFile=package.json)

Publish/Subscribe UMD package

> The Publish/Subscribe pattern encourage us to think hard about the relationships between different parts of our application. They also help us identify what layers containing direct relationships which could instead be replaced with sets of subjects and observers. This effectively could be used to break down an application into smaller, more loosely coupled blocks to improve code management and potentials for re-use. ~ Addy Osmani

## Getting Publish/Subscribe ##
#### npm
`npm install publish-subscribe-js`

#### yarn
`yarn add publish-subscribe-js`

## Example ##
```javascript
import PublishSubscribe from 'publish-subscribe-js'

// create a function callback to subscribe to topic
const callback = (data, ...args) => {
    // args will store ['TOPIC', data, data_1, data_2, ...]
    console.log(data, args)
}

PublishSubscribe.subscribe('TOPIC', callback)
PublishSubscribe.publish('TOPIC', data, data_1, data_2, ...)
```

### Add more subscribers to topic ###
```javascript
// There are no limits, one TOPIC may store subscribers how many you needed
PublishSubscribe.subscribe('TOPIC', callback)
PublishSubscribe.subscribe('TOPIC', callback_1)
PublishSubscribe.subscribe('TOPIC', callback_2)

// All subscribers will be called
PublishSubscribe.publish('TOPIC')
```

### Unsubscribe specific topic ###
```javascript
PublishSubscribe.subscribe('TOPIC', callback)
PublishSubscribe.unsubscribe('TOPIC')
```

### Unsubscribe specific subscriber in topic ###
```javascript

const callbackKey = PublishSubscribe.subscribe('TOPIC', callback)
const callback_1Key = PublishSubscribe.subscribe('TOPIC', callback_1)

// Unsubscribe only callback subscriber
PublishSubscribe.unsubscribe('TOPIC', callbackKey)
```

### Unsubscribe all topics ###
```javascript
PublishSubscribe.unsubscribeAll()
```

## Contributing

Any contributions you make **are greatly appreciated**.

Please read the [Contributions Guidelines](CONTRIBUTING.md) before submitting a PR.

## License

MIT © [Vasyl Stokolosa](https://about.me/shystruk)
