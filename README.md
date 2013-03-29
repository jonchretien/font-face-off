#  Font Face-Off

While working at my old job we needed to test different versions of a font that was being served by Typekit in order to compare the [hinting](http://blog.typekit.com/2010/12/14/a-closer-look-at-truetype-hinting/) among the different samples. This was a rough prototype I used for testing purposes that I'd ultimately like to improve on.

## Getting started

First you'll need a [Typekit account](https://typekit.com/fonts). Once you're set up the basic HTML structure on the demo page is:

``` html
<div class="shell">
    <table id="js-fontSamples" class="font-samples"></table>
</div>
```

You'll also need to add the Typekit specific font-family values and weights for your kit:

``` css
.font-sample > p { font-family: "franklin-110413-1", "franklin-110413-2"; }
.sample1 { font-weight: 500; }
.sample2 { font-weight: 600; }
.sample3 { font-weight: 700; }
```

Once the markup and styles are set up create a new instance of FontFaceOff. The FontFaceOff constructor accepts two arguments.

1. The font name.
2. The class names for the font variations.
3. An options object and any custom options.

``` js
window.addEventListener('load', function() {
    var fontFaceOff = new FontFaceOff( 'Franklin Gothic', 'class1,class2,class3', {
        // options
    });
}, false);
```

## Options

Options are set with an object as the third argument to the FontFaceOff constructor. All options are optional and do not need to be set.


### fontSizes

**Type:** Array

``` js
fontSizes: [9, 10, 11, 12, 13, 14, 16, 18, 21, 24, 30]
```

The font size values for testing.

### lorem

**Type:** String

``` js
lorem: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.'
```

Placeholder text.

### table

**Type:** String

``` js
table: 'js-fontSamples'
```

The DOM id of the table container.

## Demo
[http://jonchretien.github.com/fontfaceoff/](http://jonchretien.github.com/font-face-off/)

## Browser Support

At the time of this writing this script has been tested in the latest versions of the following browsers:

- Apple Safari
- Google Chome
- Mozilla Firefox

## License

Font Face-Off is released under the [MIT License](http://mit-license.org).