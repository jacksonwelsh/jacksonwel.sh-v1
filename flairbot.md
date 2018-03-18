---
title: "Flairbot for reddit"
layout: single
author_profile: true
read_time: false
comments: false
share: true
related: false
toc: true
classes: wide
---

# Flairbot for reddit communities

Flairbot is a moderation tool for reddit communities. It is extremely simple to
set up and use, and requires very few resources to run. It automatically makes
a comment on each post and flairs posts according to the votes cast on the
comment.

## Features

* Quick and easy to set up, there's even a script to walk you through it
* No maintenance
* Can report posts where comment is heavily downvoted
* Can require approval of posts that reach x upvotes
* Logs all actions to a subreddit and text file
* Comments on every post automatically

## Getting Started

Getting this bot up and running is extremely easy. It runs great on Raspberry
Pi's, and this guide is assuming you are running it on a Raspberry Pi. You
should create a separate account for the bot to run on.

1. **Download the repo.** Navigate to your home directory, `/home/pi` and enter
the following command: `git clone https://github.com/jackson1442/redditBot`.

2. **Configure your bot.** Navigate to the newly-created `redditBot` folder and
run `configure.py`. Answer all of the questions and don't leave anything blank.

3. **Set up your login info file.** Rename `samplelogin.ini` to `praw.ini`.
We'll fill in the rest of the info shortly.

3. **Generate keys.** Navigate to https://www.reddit.com/prefs/apps on a
computer, sign in, and do the following:
    * scroll to the bottom and select "Create another app...".
    * Make up a name and description and select `script`.
    * Set the redirect url to `http://127.0.0.1`
    * Add your bot account as a developer
    * Inset the public and secret keys into `praw.ini`.
    * Insert your (the bot's) username and password into `praw.ini`. (you can't have 2FA on)
    * **DO NOT UPLOAD PRAW.INI TO THE INTERNET, NOW OR EVER!!!** Keep this stored locally. If on github, add it to your `.gitignore`.

5. **Run it!** The main file is `main.py`, it'll create a log for you. Based on your system, you can set it as a scheduled job to run `main.py` every x minutes. For cron on linux systems, you'll want to use launcher.sh, modified for your directory structure.

6. **Create that cronjob.** Stop here if you are not using a raspberry pi.
TO create your cronjob, perform the following steps:
    1. In the command line, enter `sudo crontab -e`
        * If asked, edit using nano.
    2. Navigate to the bottom of the file, and add this: `*/10 * * * * sh
    /home/pi/redditBot/launcher.sh &>> /home/pi/logs/cronlog 2>&1`. You can
    change the 10 in that string to however often you want to run the script,
    in minutes.
    3. (optional) Set your pi to reboot every x hours. Sometimes, things go
    wrong for seemingly no reason. Rebooting help to prevent this. Add
    `* */6 * * * reboot` to your crontab on a new line to reboot every 6 hours.
    4. Press ctrl + x, then y, then enter. This saves your file and exits.

7. **Done!** You now have a great reddit bot running on your subreddit that
will make your moderation jobs exponentially easier.

If you have any questions, you can [send me a message on reddit](https://www.reddit.com/message/compose/?to=jackson1442). Thanks for
reading!

## FAQ

### For users

#### What does it do?

This bot will automatically flair posts based on the number of upvotes it receives on its comment. The comment scores do not affect the bot's karma because all vote comments are stickies.

Depending on the configuration of the bot, it may remove posts that reach a certain
amount of karma without being approved. On /r/MurderedByWords, it removes unapproved
posts with 5k+ karma.

It can also notify moderators via a report whenever a post is overwhelmingly voted
one way or another. This prevents low quality content from making the front page.

#### How do I know this isn't just a cheap karma-grab?

Per the inner-workings of reddit, sticky comments can never generate karma. It's
how reddit is written, and since all comments posted by this bot are stickies,
it is not generating any karma at all.


#### Why do we trust a bot to moderate the subreddit?

Great question! This bot is being developed by /u/jackson1442, a moderator on /r/MurderedByWords. Any changes to the source code must be done by him, so we shouldn't be having any issues with abuse. In case you're worried about the bot being able to destroy the world, you can check out our [source code](https://github.com/jackson1442/redditBot) and see that it's not capable of that.

Bots on subreddits that he doesn't moderate are run by the moderators of those subreddits, completely independently. It's just like an extension of their moderation capabilities.

#### Why don't the moderators just do this?

The bot is able to more efficiently and impartially flair posts. Since the community is able to flair posts, we will be able to see which posts are of the best quality or simply belong in one category.

#### Why does it automatically remove posts?

This is to ensure that low-quality content does not get heavily upvoted and reach the top of the sub. Generally, this happens when /r/all upvotes content they enjoy without regard to the subreddit it is in, since many people (myself included) don't know all of the rules and inner-workings of every sub.

This solution is preferred to CSS buttons because CSS is only visible on the computer version of reddit. This allows all users of subreddits to have a say in the content choices.

##### I have a different question.

Great! I love talking about the bot. Send me a message, or hit me up [in Discord](http://discord.gg/Fe3eUb6). I will not answer questions about moderation decisions in my inbox.


### For moderators

#### How can I install this on my subreddit?

I don't host the bot for any subreddits other than my own - if you want to run it on your subreddit, please follow the directions [above](/flairbot/#getting-started)

#### How does this work?

This bot will run through all of the posts on a subreddit less than 5 days old, add a comment, save that comment, then hide the post. The next time the bot is run (and every time thereafter), it will check its saved comments and see how many votes they have, flairing accordingly, and then will do the same thing - comment, save, and hide.

It won't repeat actions on posts because it only comments on posts it can see- that's why they're hidden, and why you shouldn't run this on your own account.

If the comment reaches a certain threshold on either end, it is removed and the flair will remain.

#### Why don't I just use AutoModerator for this?

You can't. AutoModerator lacks the capability to do the logic required for this bot. You'll have to use a separate account.
