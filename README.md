## Heen en Weerwolven

Heen en Weerwolven is an app designed to support the game Werewolves when playing with two villages. In short - Werewolves is a live action role playing game where the villagers of a previously peaceful village try to unmask the werewolves that are suddenly in their midst and keep eating innocent people at night.

Playing the game with two villages gives players the opportunity to travel between the different locations, allowing them to share information they learned in their own village. For example accusing someone of being a werewolf and explain why you think this. Or approaching it a bit more low-key, you could send a secret message to one of your fellow players. Either signed or anonymous, within your village or to the other one.

This web app is not a standalone replacement of the game, its purpose is to enhance the experience of playing Werewolves together in real life. Enjoying an exciting game of secrecy, accusation, defence, magic and mystery.

The first version of the app was developed by a team of graduates from Class14 at Codaisseur. After finishing their training as full stack developers, their Final Real World Project was getting the idea for the app into the real world to be actually used by me and my friends and hopefully many more!

They did an awesome job within the short amount of time they had. So many thanks and credits to them for getting Version 1.0 up and running:

[Nayhane Gomes](https://github.com/Nayhane)
[Anissa Miloudi](https://github.com/AMiloudi)
[Erle Monfils](https://github.com/Erlemorgaine)
[Oscar van Zijverden](https://github.com/Schmarfy)
[Caspar Boetes](https://github.com/Casparboetes)

## Current main features:
**sign-up**
  - webcam image
  - equal distribution between villages

**players**
  - send message
  - move to other village
  - mayor-role
  - die..

**messages**
  - player can send one message per game, receive as many as sent
  - ten second countdown to send message before it gets automatically sent
  - option to sign or send anonymous
  - storyteller can show messages to recipients from message page

**travel**
  - move between villages
  - when percentage of originally registered players drops to 50% you get prompted to move all villagers to one village
  - move all villagers with one button

**timer**
  - upon daybreak a timer is manually started at 15 minutes to discuss and accuse
  - five minutes before it ends it indicates they have a few more minutes left to give their final defence and vote who will die

## Upcoming features:
**characters**
  - upon death, select what type of character the player was - e.g. villager, werewolf, seer, witch, etc

## Set-up
Make sure to also run the api [heen-en-weerwolven-api](https://github.com/tanjahennis/heen-en-weerwolven-api)

Start server
```yarn start```
