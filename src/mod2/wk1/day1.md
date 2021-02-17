# Mod 2 > Week 1 > Day 1

![microsoft certificate](https://di3xp7dfi3cq.cloudfront.net/pub/media/magefan_blog/w/h/what-jobs-can-you-get-with-mta-cetification.jpg)

## You are going to be come a Microsoft Technical Associate by gaining an industry recognised qualification.

We are going to build a frontend application that will use or touch upon all the knowledge required to pass the Microsoft Technical Associate Exam (MTA 70-480 Programming in HTML5 with JavaScript and CSS3). It is a peer to peer audio composition app where you can create tracks, play them back, share them with the network of other composers, and play their compositions in your player.

Along the way you’ll come across; italic bullet points, these are the MTA learning objectives, slide shows these usually require a little commentary from your coach, but often contain useful coding examples, links and mini quizzes that test your knowledge. At the end of the module you’ll have lots of practice questions to test your understanding and get used to the style of exam questions.

# HTML

## Learning Objectives

*   _1.1 Create the document structure by using HTML Structure the UI by using semantic markup, including for search engines and screen readers (Section, Article, Nav, Header, Footer, and Aside); create a layout container in HTML_

## Lesson

Lets start with a good basis for our application by creating the HTML structure and style it using a responsive flexible css grid layout.

We are going to use semantic HTML elements. Semantics is the study of the meanings of words and phrases in a language. Semantic elements are elements with a meaning.

Look at the examples below.

```html
    <body>
        <div>
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <img src="/images/slipper-01.jpg" alt="slipper 01" />
                    <div>£29.99</div>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <img src="/images/slipper-02.jpg" alt="slipper 02" />
                    <div>£29.99</div>
                    <button>Add to Cart</button>
                </div>
                <div>
                    <img src="/images/slipper-03.jpg" alt="slipper 03" />
                    <div>£29.99</div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        <div>
            <span>my slipper company</span>
        </div>
    </body>
```

Whilst this is valid HTML it does not have much meaning. By using the semantic elements we can layout our page structure in the same way, but also communicate to other programs that read our HTML how to treat the different areas. Those other programs might be, a search engine indexing our page, a screen reader, different browsers rendering out page. For example google uses the `<article>` elements to determine the subject of a page.

Let us have a look at the same layout but use semantic elements.

```html
    <body>
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/shop">Shop</a>
            </nav>
        </header>
        <main>
            <section>
                <article>
                    <hgroup>
                        <h1>Slipper</h1>
                        <h2>Our most comfortable</h2>
                    </hgroup>
                    <figure>
                        <img src="/images/slipper-01.jpg" alt="slipper 01" />
                        <figcaption>£29.99</figcaption>
                    </figure>
                    <button>Add to Cart</button>
                </article>
            </section>
        </main>
        <footer>
            <span>my slipper company</span>
        </footer>
    </body>
```

|HTML elements|Description|
|:---|:---|
`<header>`|Defines the top of a section or page
`<main>`|Represents the dominant content of the of a document or component
`<footer>`|Defines the bottom of a section or page or component
`<article>`|Defines self-contained areas on a page
`<nav>`|Defines navigation to other pages in the site
`<hgroup>`|Defines a group of headings (H1–H6 elements) *this is now depreciated
`<figure>`|Defines content that contains a figure, such as an image, chart, or picture
`<figcaption>`|Defines the caption of a figure element


In addition to the elements above you should also know about and try to use the following:

|HTML elements|Description|
|:---|:---|
`<aside>`|Defines smaller content areas outside the flow of a webpage
`<mark>`|Defines text that should be highlighted
`<progress>`|Defines the progress of the task

## Using the `<hgroup>` element

The `<hgroup>` element is a semantic method that organises headers and sub-headers. This element typically contains the standard and familiar `<h1>` to `<h6>` elements. The `<hgroup>` element groups related headers in sequence.

## Using the `<progress>` element

The `<progress>` element represents the progress of an objective or task. The two supported types of progress tasks are **determinate** and **indeterminate**.

Use a **determinate** progress task when you know in advance the amount of work to be completed; in other words, you know the starting and ending values. Sample scenarios for this case include downloading a file for which you know the exact size or displaying the progress of a fundraising effort. In both situations, you know the exact status of the task at any particular time, and you also know what the end goal is—either the number of bytes for the file download or the number of dollars for the fundraiser. In these determinate cases, you can specify HTML5 markup such as this:

```html
    <p>Our goal is to have 1000 users:</p>
    <span>0</span>
    <progress value="50" max="1000"></progress>
    <span>1000</span>
```

<progress value="50" max="1000"></progress>

As shown in the preceding code, the `<progress>` element has two attributes you need to know: value and max. The value attribute lets you specify the current value or position of the `<progress>` element at a specific point in time. The max attribute tells the browser what the maximum possible value is for the element. The browser uses these two values to determine how much of the element should be coloured in. So if I change the value to 750 the progress bar displays the new value like this:

<progress value="750" max="1000"></progress>

You use **indeterminate** tasks when you don’t know how long a task will take to complete but still want to show users that some work is occurring and that they should wait. When you don’t specify the value attribute, the browser can infer that the `<progress>` element represents an indeterminate task.

<progress></progress>

Downloading...

Can you see the bar is subtly pulsing?

## Using the `<mark>` element

    Use the `<mark>` element to <mark>highlight</mark> text

Use the `<mark>` element to <mark>highlight</mark> text.

You have now been introduced to the HTML elements you’ll need to know about for the exam. We can use these to layout our app’s page.

[attendance log](https://platform.multiverse.io/apprentice/attendance-log/188)
[main](/swe)|[prev](/swe/mod1/wk2/day5.html)|[next](/swe/mod2/wk1/day3.html)