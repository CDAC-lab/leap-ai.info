# WIC template for IEEE IES Conferences
This is the conference website for IEEE IES Conferences

# IEEE IES Conferences Website Template

This repository contains the Hugo-based website template for IEEE IES conferences. It leverages a customized version of the Hugo Relearn theme, tailored specifically for the needs of IEEE IES conferences. The theme is designed to be easy to update and maintain, suitable for academic and professional conference presentations.

## How It Works
Changes to the `master` branch automatically trigger a GitHub Action. This action builds the website and commits the resulting static files to the `gh-pages` branch, from where the website is served.

The website is automatically built and deployed whenever changes are pushed to the `master` branch. To see your changes live, simply push to `master` and the GitHub Actions workflow will handle the rest.

## Content Structure
All website content is located within the `content/` directory. The home page content can be found in `content/_index.en.md`, while other pages are organized into directories that represent the menu structure of the website. All pages are created in Markdown and include frontmatter for metadata configuration.

You can directly edit the markdown files using github UI.

To edit, select the edit button on the top right corner of the preview.
You can add/upload files, delete files using the same UI.

### Frontmatter
Frontmatter is used at the beginning of each Markdown file to define how a page is rendered. Common frontmatter configurations include:

1. `title`: Sets the title of the page. For example: `title = "News and Updates"`
2. 
```
[_build]
  render = 'never'
```
: Use this setting to control the rendering of a page, such as preventing a page from being rendered and indexed. This is useful for menu items that should remain visible but not render content, such as pages under construction.

Once your page is ready, simply removing this frontmatter will render the page once the action is automatically triggerd.

## Static Files
Static assets such as images and PDFs are stored in the `static/` directory. Files in this directory are copied directly to the website without processing. For instance, if you have a slideshow, place your images in `static/images/slideshow/`, and refer to them in your Markdown files like `images/slideshow/`

## Contributing

- You can directly edit the markdown files using github web UI.
- Once changes are done, commit them to the master branch and wait until the actions are successfull.

Please ensure all content updates adhere to the existing folder and frontmatter configurations to maintain consistency across the site.


## Theme Details
Our website uses a fork of the Hugo Relearn theme which has been modified to meet our specific requirements. The modified theme can be found here: [Hugo Theme IES Con](https://github.com/lakshithagunasekara/hugo-theme-ies-con).

The parent theme has many features that are out of the box supported by the IES con theme. You can find them at [Hugo relearn theme](https://mcshelby.github.io/hugo-theme-relearn/index.html)

## Need help
You can reach the developer by mailing L.Gunasekara@latrobe.edu.au


## Specical short codes

### Slideshow

The slideshow shortcode allows you to create a dynamic slideshow on your website, showcasing a set of images with optional overlay text. Below is an explanation of how to use this shortcode, including its features and different use cases.

html
'''
{{< slideshow path="images/slideshow" largeText="Large Text Here" smallText="Small Text Here" >}}
'''

#### Features
1. Image Display: The slideshow will display all valid images (.jpg, .jpeg, .png) found in the specified directory.
2. Image Resizing: Images are automatically resized to fit within the defined dimensions (1120px width by 460px height) while maintaining their aspect ratio.
3. Overlay Text: You can add a large and a small text overlay to each slide for additional context or information.
4. Navigation Arrows: Users can navigate through slides using the left and right arrows.
5. Automatic Slideshow: Slides will automatically transition every 4 seconds.
6. Responsive Design: The slideshow is responsive and adapts to different screen sizes, including tablets and mobile devices.
7. Dots Navigation: Users can also navigate through slides using the dot indicators at the bottom of the slideshow.



