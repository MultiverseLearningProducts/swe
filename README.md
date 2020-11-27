
![SWE at WhiteHat Welcome](https://user-images.githubusercontent.com/4499581/92381014-fec7f500-f101-11ea-8fcd-506232e5de87.png)

## Overview

This is a repository of apprentice facing lessons, and coach notes. Published on Github pages.

```
├── bootcamp
│   └── wk1
│       ├── day1.html
│       └── day2.html
├── index.html
├── mod1
│   └── wk1
│       └── day1.html
├── mod3
│   ├── wk1
│   │   ├── day1.html
│   │   ├── day2.html
│   │   ├── day3.html
│   │   ├── day4.html
│   │   └── day5.html
│   └── wk2
│       ├── day1.html
│       ├── day2.html
│       ├── day3.html
│       ├── day4.html
│       └── day5.html
├── modest.css
├── notes
│   ├── bootcamp
│   │   └── wk1
│   │       ├── day1.html
│   │       └── day2.html
│   └── mod3
│       ├── wk1
│       │   ├── day1.html
│       │   ├── day2.html
│       │   ├── day3.html
│       │   ├── day4.html
│       │   └── day5.html
│       └── wk2
│           ├── day1.html
│           ├── day2.html
│           ├── day3.html
│           ├── day4.html
│           └── day5.html
└── style.css
```
## Usage

Clone the repo. Make sure you have push permissions to this repo. To publish your changes run;

```
npm run publish
```

That will build the markdown pages into html pages and then push to github. See the site here [https://whitehatlearningproducts.github.io/swe/](https://whitehatlearningproducts.github.io/swe/)

## Special Markdowns

### Embeds

You can embed Google slides and YouTube videos using `!(embed-url)`. With Google Slides make sure your slide link ends with `/embed`. You might have to doctor the URL to ensure this. i.e.

```sh
!(https://docs.google.com/presentation/d/e/2PACX-1vR9fXGQK-iEBE2zaLeilLJlAM0_90xheU8S1VTGyvT08hmVuKDK-sPlL34MeXf3bv-Pl8zBw9caaHti/embed)
```

YouTube videos you just need the shareable link.

### Tabbed code blocks

![a tabbed code block](https://user-images.githubusercontent.com/4499581/100463012-17bdc200-30c3-11eb-8cff-d6083f9b8b7b.gif)

To create a tabbed code block use the following markdown

![use the pipe character to separate the labels for the language tabs no line-breaks between the following code blocks](https://user-images.githubusercontent.com/4499581/100463155-4dfb4180-30c3-11eb-963c-9c168cd4f16e.png)

There are 2 rules to follow:

1. Create the tabs with labels using the pipe character
1. In the code blocks that follow don't have line breaks between them make sure your different language blocks butt up to each other.

The language preference is set in local storage you your choice of language will persist between page loads.
