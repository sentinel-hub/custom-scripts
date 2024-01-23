---
layout: default
title: Contribute
nav_order: 99
has_children: false
---

# Contribute to Custom Scripts

Have a look at the [template](/contribute/example) for an example of how a script page can be structured.

You can also have a look at other scripts to see how they are structured.

For instructions on how custom scripts are structured have a look at this [tutorial](https://www.sentinel-hub.com/explore/education/custom-scripts-tutorial/), or at the [official documenation](https://docs.sentinel-hub.com/api/latest/evalscript/).

---

## How to publish your own product

- Fork the repository to get your own copy of the custom-scripts  
  _It is easiest to fork the repository on GitHub, but as some of you might not have GitHub account, or don't want to bother with all this versioning and collaboration tools, you can also just download the whole repository as Zip file and work from there._
- Create a new directory entry for your custom script  
  _Copy the `example` directory to proper directory, based on which datasource (satellite) you are publishing the product for, to something that describes what the product is about, say `my_algorithm`._  
  _Preferably use ["snake_case"](https://simple.wikipedia.org/wiki/Snake_case) (underscores instead of spaces) if more than one word is used._
- Fill in the details about the project in the `README.md` file.  
  _Obviously, you'll want to remove this chapter, but use the rest of the file as a template._  
  _Have a look around at other `README.md` files to see how to include images, format the text and generally use the GitHub [markdown](https://help.github.com/categories/writing-on-github/) (e.g. [here](../sentinel-2/cby_cloud_detection/README.md) for mathematical formulas or [here](../sentinel-2/ndvi_uncertainty/README.md) for adding images)._
- Implement the product in the `script.js` file.  
  _The most work is of course the JavaScript implementation of the product. The `example` folder includes an empty custom script with comments that will hopefully help you build your own custom script._
- Add an entry pointing to your script to the top level markdown file (i.e. if adding a script for Sentinel 2 add the link to `sentinel-2.md` in the folder `sentinel-2`).  
  _A link and a short description will do._
- And create a pull request :).  
  _There is extensive help on creating pull requests on GitHub [help](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/), but if you feel overwhelmed by this step and would still like to contribute, send us the folder you've created and we will take care of it for you._

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
  - i.e `touch Gemfile`
  - and add the following content:

```
source 'https://rubygems.org'
gem "github-pages", "~> GH_VERSION", group: :jekyll_plugins
gem "just-the-docs"
```

Replace `GH_VERSION` with the version number that is displayed next to github-pages [here](https://pages.github.com/versions/).

- Serve the page
  - First install all necessary gems with `bundle install`
  - then the site can be built with `bundle exec jekyll serve`
  - The site should then be visible on `127.0.0.1:4000`

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
  - The site should then be visible on `127.0.0.1:4000`
