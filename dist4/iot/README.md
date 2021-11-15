# Data Sync Demo with Simulated Smart Home

A demo for a quick tutorial of [PubNub][pubnub]'s new [Data Sync][datasync] service.

![data sync illustration](https://raw.githubusercontent.com/pubnub/data-sync-demo/gh-pages/datasync.png)

## What is Data Sync?

PubNub Data Sync can work in tandem with PubNub Data Streams, so developers can sync and share structured objects across every device while also using our realtime Publish/Subscribe messaging layer, all wrapped within a single security and access control model.

## What does this demo do?

This demonstrates the home automation solution using Data Sync. A *Home Status* object contains the status of door lock, light, and audio setting in the house. When a light is triggered, the *Home Status* object is updated automatically across every smartphone, hub and server that is connected.

![photo](https://raw.githubusercontent.com/pubnub/data-sync-demo/gh-pages/datasync-demo.gif)

## Live Demo

[Try it here now!][demo]



[demo]: http://pubnub.github.io/data-sync-demo
[pubnub]: http://www.pubnub.com/docs/javascript/javascript-sdk.html
[datasync]: http://www.pubnub.com/docs/javascript/overview/data-sync.html
