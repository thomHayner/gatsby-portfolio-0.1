---
slug: "second-post "
date: "2019-05-04"
title: "How to add Google reCAPTCHA v3 to Gatsby"
author: T.Hayner
heroSrc: ""
heroAlt: ""
heroPhotog: ""
heroDistro: ""
---

## reCAPTCHA v3: The Latest Version Which Runs in the Background, Without a User Challenge.
<br />
<p>
  reCAPTCHA is a free service offered by Google that protects websites from spam and abuse. It can be easily integrated into any website to prevent spam submissions and protect user data. In this tutorial, we'll learn how to add Google reCAPTCHA v3 to a Contact Page using GetForm.io on a Gatsby website.
</p>
<p>
  Google reCAPTCHA v3 is a new version of reCAPTCHA that uses a scoring system to determine whether a user is a human or a bot. It works in the background and doesn't require the user to solve a challenge like the previous versions.
</p>
<p>
  This tutorial assumes that you have a Gatsby webpage with a Contact Form.  You can use any package for handling your Contact Form, but for this tutorial I used GetForm.io
</p>
<p>
Let's get started!
</p>
<br />

### Step 1: Get reCAPTCHA Site Key
<p>
  The first step is to get a reCAPTCHA site key from the Google reCAPTCHA website. To do this, follow these steps:
</p>
<ol>
  <li>Go to the Google reCAPTCHA website.</li>
  <li>Click on the "Get reCAPTCHA" button.</li>
  <li>Fill in the form with your website information and select reCAPTCHA v3.</li>
  <li>Accept the terms and conditions and click on the "Register" button.</li>
  <li>You will now see a site key and secret key. Make a note of the site key as you will need it in the next step.</li>
</ol>
<br />

### Step 2: Install the react-google-recaptcha-v3 package
<p>
  To add reCAPTCHA to your Gatsby website, you need to install a package.  Many other tutorials will tell you to use `gatsby-plugin-recaptcha` package, but for reCAPTCHA v3 you actually want the `react-google-recaptcha-v3` package.  To install the correct package, run the following command in your terminal:
</p>
<code>
  npm i react-google-recaptcha-v3
</code>
<br />
<br />

### Step 3: Add the plugin to your gatsby-config.js file
<p>
  Now that you have installed the plugin, you need to add it to your gatsby-config.js file. To do this, open your gatsby-config.js file and add the following code:
</p>
<code>
  yaml
  Copy code
  module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-recaptcha`,
        options: {
          async: true,
          defer: false,
          args: `?render=explicit`,
          sitekey: `your-site-key`,
          badge: `bottomright`,
        },
      },
    ],
  }
</code>
<p>
  Remember to replace your-site-key with your actual reCAPTCHA site key.
</p>
<br />

### Step 4: Add reCAPTCHA to your form
<br />
<p>
  Finally, you need to add reCAPTCHA to your form. To do this, open the file where your form is located and add the following code:
</p>
<code>
  import ReCAPTCHA from "gatsby-plugin-recaptcha"
</code>
<code>
  <form>
    ...
    <ReCAPTCHA />
    <button type="submit">Submit</button>
</form>
</code>
<p>
  And that's it! You have now successfully added Google reCAPTCHA v3 to your Gatsby website.
</p>
<p>
  In conclusion, adding reCAPTCHA to your website is a simple process that can help protect your website from spam and
</p>
