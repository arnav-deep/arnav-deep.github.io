# v3

Third iteration of my personal website built with Jekyll.

> 📢 **PSA for those who want to fork or copy this repo and use it for their own site:**
>
> Please be a decent person and give me proper credit by linking back to my website! Refer to this handy [quora post](https://www.quora.com/Is-it-bad-to-copy-other-peoples-code) if you're not sure.

## Dependencies

- [Gulp](https://gulpjs.com/)

## Getting Started

1.  `gem install jekyll sass bundler jekyll-minifier jekyll-sitemap`
2.  `npm install`
3.  `npm start`


## Triggering Visit Emails

You can trigger emails whenever your website is visite. Currently, Pipedream is being used to trigger an email to the owners email whenever the website is visited.
There is a filter on the Pipedream which prevents sending emails unless the Origin in the header of the Webhook matches to a specific website. You can change this to your website when you build your own Pipedream workflow.

### How to set up the Pipedream Workflow

1. Log in to your Pipedream account.
2. Create a new workflow with a Webhook address without a body.
3. Optional Check - Add a second step as a filter where the header origin contains your websites domain. Continue if check passes. This will help when others fork this website from you, so you on't get multiple triggers for other people's websites.
4. Add a send email to self action and add the subject and body you want.
