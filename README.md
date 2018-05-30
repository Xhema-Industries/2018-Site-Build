# 2018-Site-Build
New 2018 Xhema Website
https://xhema-industries.github.io/2018-Site-Build/


# Instructions For Installing Admin and Local Site on Your Local Machine:

## Getting started

https://jekyllrb.com/docs/home/

 1. Install Jekyll and Ruby - https://jekyllrb.com/docs/installation/
 2. Clone repository from GitHub - https://github.com/Xhema-Industries/2018-Site-Build
 3. Download to desktop repository or download [GitHub Desktop](https://desktop.github.com/)
 4. `cd` into repository using `Terminal`
 5. then `gem install bundler`
 6. then `bundle install`
 7. To run: `bundle exec jekyll serve`

## Site Build will reside at:
http://localhost:4000

## Site Admin:
http://localhost:4000/admin


## Guides and rules for adding posts

 All posts are added in markdown. Here's a [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you can't find it here.

### linking

 - external linking
 ```
 [link text](https://external-link/here/ "any title text you want to include for increased SEO")
 ```

 - `mailto` links
 ```
 [contact us here](mailto:email@domain.com)
 ```

 - posts using `post_url`. This tag places the domain structure for you when linking internally.
 ```
 [link text]({% post_url name-of-post-with-dates %} "any title text you want to include for increased SEO").
 ```

### Images

#### Adding an image

 Adding an image is easy enough, remember to add the Bootstrap 4 responsive image class `.img-fluid`.

 ```
 ![ Your image description, i.e., alt tag content ]( /path/to/image.jpg ){: .img-fluid }
 ```

#### JPG vs. PNG

 All post, card and header images should be saved as `.jpg` using the specifications below.

 |setting|default|
 |---|---|
 | dpi | 144* |
 | max-width | 1200px |
 | image quality | 80% |

 > * 144dpi takes greater advantage of retina and 4K+ resolutions vs. the older 72dpi standard.

 Logo images should always be saved as transparent `.png` files.

#### Naming convention

 - **DO** use lowercase
 - **DO** use hyphens
 - **DO** use descriptive names for SEO

 - **DO NOT** use spaces
 - **DO NOT** use commas
 - **DO NOT** use underscores
 - **DO NOT** use CamelCase
 - **DO NOT** use special characters (`!@#$%^*~`)
 - **DO NOT** use the ampersand (`&`), spell out `and`

 As we move forward, we'll also look at an image structure that will change based on screen size via `srcset` to deploy multiple sizes while targeting specific uses and screens.

### Tables

 Markdown tabels are

 ```
 header 1 |	header 2
 --- | ---
 column 1 | column 2
 column 1 | column 2
 column 1 | column 2
 ```
 Adding Bootstrap classed directly before a table will add styling to your table. **Always use `.table`**, combine the rest for the desired effect.

 class |	effect
 --- | ---
 table | Bootstrap default table styling
 table-striped | alternating shaded backgrounds for better visibility
 table-bordered | borders
 table-inverse | dark table with white text

 ```
 {: .table.table-striped.table-bordered.table-invert }
 header 1 |	header 2
 --- | ---
 column 1 | column 2
 ```

### Bulleted Lists
 * Bullet 1
     * Sub-bullet 1
 * Bullet 2
     * Sub-bullet 1
     * Sub-bullet 2

### Typography

 There are additional [classes dedicated to typography](https://getbootstrap.com/docs/4.1/content/typography/) that may help you achieve your desired effect.

 > note: some classes may be overwritten by existing styles.
