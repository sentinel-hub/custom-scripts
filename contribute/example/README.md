---
layout: default
title: Example
nav_order: 1
parent: Contribute
---

# Example product

---

## How to publish your own product

* Fork the repository to get your own copy of the custom-scripts   
  _It is easiest to fork the repository on GitHub, but as some of you might not have GitHub account, or don't want to bother with all this versioning and collaboration tools, you can also just download the whole repository as Zip file and work from there._
  
* Create a new directory entry for your custom script   
  *Copy the `example` directory to proper directory, based on which datasource (satellite) you are publishing the product for, to something that describes what the product is about, say `my_algorithm`.*   
  *Preferably use ["snake_case"](https://simple.wikipedia.org/wiki/Snake_case) (underscores instead of spaces) if more than one word is used.*
  
* Fill in the details about the project in the `README.md` file.   
  *Obviously, you'll want to remove this chapter, but use the rest of the file as a template.*   
  *Have a look around at other `README.md` files to see how to include images, format the text and generally use the GitHub [markdown](https://help.github.com/categories/writing-on-github/) (e.g. [here](../sentinel-2/cby_cloud_detection/README.md) for mathematical formulas or [here](../sentinel-2/ndvi_uncertainty/README.md) for adding images).*
  
* Implement the product in the `script.js` file.   
  *The most work is of course the JavaScript implementation of the product. The `example` folder includes an empty custom script with comments that will hopefully help you build your own custom script. Of course the easiest is to do the custom script building/testing on [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/).*
  
* Add an entry pointing to your script to the [main](../README.md) readme file.   
  *A link and a short description will do.*
  
* And create a pull request :).
  *There is extensive help on creating pull requests on GitHub [help](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/), but if you feel overwhelmed by this step and would still like to contribute, send us the folder you've created and we will take care of it for you.*

Publishing your product should be easy, nevertheless, any feedback and ideas how to improve or make the process simpler is very appreciated.

### Test your changes locally

This is optional but makes Pull Requests quicker to handle since they should have less mistakes.  
Before you create the PR you can check if everything looks right on the website. To do this follow these steps which are based on [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) page:

#### Linux
- In the root directory of your fork open a terminal
- Install ruby
  - Ubuntu: `sudo apt install ruby ruby-dev`
- Install bundler
  - `gem install bundler`
  - On Ubuntu you might have to add `sudo`
- Create a Gemfile
  - In the root folder of the repository (where the `_config.yml` file is) create a new file `Gemfile`.
  - i.e  `touch Gemfile`
  - and add the following content:

```
source 'https://rubygems.org'
gem "github-pages", "~> GH_VERSION", group: :jekyll_plugins
```

Replace `GH_VERSION` with the version number that is displayed next to github-pages [here](https://pages.github.com/versions/). 

- Serve the page
  - First install all necessary gems with `bundle install`
  - then the site can be built with `bundle exec jekyll serve`
  - The site should then be visible on http://127.0.0.1:4000

#### macOS
- In the root directory of your fork open a terminal
- Install ruby
  - `brew install chruby ruby-install xz`
    - If homebrew hasn't been installed yet, intall homebrew 

    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
  - `ruby-install ruby 3.1.3`
  - After installation run the following codes:

  ```
  echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
  echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
  echo "chruby ruby-3.1.3" >> ~/.zshrc # run 'chruby' to see actual version
  ```
  - Quit and relaunch Terminal, then check that everything with `ruby -v`
  - It should show ruby 3.1.3p185 (2022-11-24 revision 1a6b16756e) or a newer version
- Install Jekyll
  - `gem install jekyll`
- Install bundler
  - `gem install bundler`
- Following the **Create a Gemfile** step in the Linux section
- Serve the page
  - First install all necessary gems with `bundle install`
  - Add the missing webrick package with `bundle add webrick`
    - Run this command again when the following error message pops out:

    ```
    bundler: failed to load command: jekyll
    ```
  - then the site can be built with `bundle exec jekyll serve`
  - The site should then be visible on http://127.0.0.1:4000

---

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground](https://apps.sentinel-hub.com/sentinel-playground/?source=S2&lat=41.9027835&lng=12.496365500000024&zoom=12&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/example/script.js){:target="_blank"}    
 - [EO Browser](http://apps.sentinel-hub.com/eo-browser/#lat=41.9&lng=12.5&zoom=10&datasource=Sentinel-2%20L1C&time=2017-10-08&preset=CUSTOM&layers=B01,B02,B03&evalscripturl=https://raw.githubusercontent.com/sentinel-hub/customScripts/master/example/script.js){:target="_blank"}   

## General description of the script

## References
 - possible references (scientific articles, wiki/web references, ...)
