---
layout: ../../layouts/LayoutBlogPost.astro
title: "Building a distributed rate limiter"
description: ""
pubDate: 2025-11-31
category: "python"
---

# Building a distributed rate limiter

Building web systems can be a challenge, more so when you've to protect it against malicious intent. 
One of the challenges I've faced in my short career building web applications is preventing possible DDoS attacks or just overwhelming usage from ignorant/oblivious users. 

Rate limiting is an age old scheme to protect your web system against threats, but implementation gets more challenging when setting up rate limiting for distributed services, which is increasingly common in recent times. 

This is my attempt at building a distributed rate limiter for concurrency.

Let's start small. 

We first need an simple web app to test our rate limiter.

Then we need to expose it before an nginx 