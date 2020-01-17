# Amazing Toolkit

## Available Services
1. DBService
2. MailService
3. SlackService
4. AnalyticsService

##  Usage (all services follow similar pattern)
1. Import service
```js
// preferred way for frontend
- import SlackService from 'amazing-toolkit/dist/SlackService'

// preferred way for backend
- import {SlackService} from 'amazing-toolkit'
```
2. Initialize service
```js
SlackService.init('webhookURL')
```

## Other Information
- Project is written in Typescript.

This code is released under an [MIT license](https://github.com/xerosanyam/amazing-toolkit/tree/master/LICENSE).