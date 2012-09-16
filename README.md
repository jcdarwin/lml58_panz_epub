# LML58 PANZ Frankfurt Webbook #

## Overview ##

The PANZ Frankfurt webbook profiling 14 New Zealand educational publishers can be accessed at [http://readium.newzealandeducated.com](http://readium.newzealandeducated.com).
This publication has been produced by [Learning Media Limited](www.learningmedia.co.nz) for the [Publishers Association of New Zealand](http://www.bpanz.org.nz/) and for [Education New Zealand](http://www.educationnz.org.nz/).
  
This publication is an example of content be developed in accordance with the [EPUB3 Fixed Layout standard](http://idpf.org/epub/fxl/), and delivered to users of modern web browsers using a customised version of the [Readium online reading system](http://readium.org/).

## Description ##

### EPUB3 ###
This content for this publication has been assembled in conformance with the [EPUB3.0 standard](http://idpf.org/epub/30), and has been delivered as a discrete EPUB3 package, for use on mobile devices that support the EPUB3 fixed layout standard.
At the present time, this means that iBooks on the Apple iPad is the only reading system on mobile devices (i.e. excluding web browsers) that can correctly render this content. This is expected to change as other vendors start supporting EPUB3 more widely.

### Browser support ###
This content has also been delivered using a customised version of the [Readium](http://readium.org/) reading system, meaning that it can be accessed online using modern web browsers (at [http://readium.newzealandeducated.com](http://readium.newzealandeducated.com)).
This means that users of recent versions of the Chrome, Safari and Firefox web browsers should be able to view this content well.

Users of Internet Explorer will be directed to install [ChromeFrame](http://www.google.com/chromeframe?prefersystemlevel=true), an extension for Windows-based Internet Explorer (versions 6 through 9) that, once installed, will allow them to view the content.

### Fixed Layout ###
[Fixed Layout](http://idpf.org/epub/fxl/) is an extension of the EPUB3 format administered by the [International Digital Publishing Forum](http://idpf.org/), the same body charged with the administration of the main EPUB3 standard.

Contrary to conventional EPUB, which assumes the ability for the reading system to automatically reflow content to suit the dimensions of the device screen and the user preferences (e.g. the amount of text that will fit on the screen for a given font-size selected by the user), 
fixed-layout allows publishers to specify particular dimensions for the page size, and therefore have the same level of control over layout as they do with print publications.

This precise control of layout is useful when publishers are targeting screen sizes no smaller than a certain size (e.g. iPad, and typical PC screens), but comes at the cost of not being able to support reading on smaller devices such as iPhone, conventional mobile phone etc).

In the case of the PANZ Frankfurt webbook we have produced a layout which measures 1024px wide by 768px high, these being the dimensions of the iPad. As such, this publication can be viewed comfortably on the Apple iPad (using the iBooks application) as well as in desktop web browsers.


## Features ##

The notable features of this project can be broken down into those that appear in the publication itself, and those that are associated with the Readium reading system:

### EPUB3 publication ###
The notable features regarding the EPUB3 publication are that it

* __is compliant with the [EPUB 3 Fixed Layout standard](http://idpf.org/epub/fxl/)__

* __features sophisticated use of javascript__, in the form of the [jplayer video player](http://www.jplayer.org/), which provides a consistent and enhanced video experience in different reading systems.

  HTML5 video (as supported by major web browsers and iBooks on the iPad) allows for native support of video playback, however the implementation and appearance differs from one platform to another.
In contrast, jplayer allows us to provide a consistent interface which allows:
  * muting of audio
  * toogling between full-screen and thumbnail display of the video
  * control over looping of the video

* __features sophisticated use of CSS3 transitions__, such as the CSS animation of the titles on the [title page](http://readium.newzealandeducated.com/viewer.html?book=lml58_panz_epub_individual_intro).
  This page also includes use of CSS3 gradients.

* __features shortened links to external resources__, which allow the tracking of the number of users that follow hyperlinks that point to external resources.
  For example, the link to learningmedia.co.nz is [http://bit.ly/S0aTAC](http://bit.ly/S0aTAC), which will resolve to [http://learningmedia.co.nz/](http://learningmedia.co.nz/), but where usage can be examined by adding a '+' to the end of the URL, e.g. [http://bit.ly/S0aTAC+](http://bit.ly/S0aTAC+)

* __features the use of "tel:" links__, that allow a user using iBooks on the iPad to click on a link and be directed to save the telephone number in their contacts.

* __features the use of embedded web fonts__, to allow for finer control over typography and a richer experience. For example, the font used fr the headings on the [Clean Slate Press section](http://readium.newzealandeducated.com/viewer.html?book=lml58_panz_epub_individual_section_03#) is [ShortStack](http://www.google.com/webfonts/specimen/Short+Stack), a freely-licensed Google web font.


### Readium reading system ###
The notable features regarding this implementation of the Readium reading system include

* __a cross-browser (i.e. modern browsers) reading system.__

  The Readium developers have been focusing only on Chrome as their target browser, but this PANZ Frankfurt webbook shows that, with some realtively minor work, Readium can be made to work well across:
  * Chrome
  * Safari
  * Firefox
  
  This cross-browser ability is important in ensuring that a wide audience can be reached. It is hoped that, with the upcoming launch of Internet Explorer 10, that this browser will also be able to be catered for.  

* __pinch-and-zoom support__, using the wheel mouse / multi-touch
  This is important in allowing users to resize the content (given that it is fixed-layout), so that they can zoom in and inspect certain aspects.

* __detection of unsupported browsers__ (e.g. Internet Explorer) and redirection to the ChromeFrame plugin.

* __ability to navigate large publications__.

  The [Readium library view](http://readium.newzealandeducated.com/) has been used as a table of contents to allow a user to navigate to a particular section of interest.

  This has been useful because the size of the publication is rather large, at around 200MB. This is due to the amount of video content, and the fact that this video content had to be included in two formats (WebM for Firefox, and M4V for other browsers).

  Initial experiments with loading this content as a single publication proved problematic, even over a fast network connection with a relatively well-specced machine, as Readium attempted to load all assets when the user visited the first page.
  
  The answer to this problem was to split the publication into a series of smaller publications, one per educational publisher section, which then allow for a reasonable user experience in terms of load time and responsiveness.

  In order to support this approach, cross-section linking was added, allowing a user to navigate seamlessly from the end of one section to the start of the next section. 

* __memory of a user's reading position__, such that the next time they open the publication they are returned to that position
      
## Possibilities ##
As a result of this work, some of the important points and possibilities for future development / implementation include the following

1. __Rich media, animation and interactivity__

  The use of the jplayer video player demonstrates that we can use sophisticated implementations of javascript for a variety of purposes, such as:
  * animation and enhanced user interactivity
  * creation of "self-quizzes" to allow the user to test their understanding of the content
  
  Although it is likely that in third-party reading systems such as Apples iBooks, javascript is likely to remain sandboxed (such that it can't communicate
  outside of the publication), we are still able to use javascript for cross-system communication when using web-based reading systems such as Readium.
  
2. __Large publications__

  This project has proven that it is possible to deliver large publications (i.e. > 100MB of content) to an online audience,
  though care may be needed regarding the structure of these publications. For publications that include rich-media (video, audio etc), 
  it can be expected that the publication size will be relatively large, particularly as there is a requirement to provide multiple formats of media 
  such as video and audio in order to support a range of browsers.

3. __Cross-browser support for EPUB content__

  This project has show that Readium, although still in development, appears to be a viable means of delivering EPUB content to an audience
  via the web browser.

4. __One content format for multiple distribution channels__

  Although this project focused on EPUB3 Fixed Layout, the Readium reading system can also be used to deliver EPUB2 and EPUB3 conventional (i.e. reflowable) content.
  The major benefit of this is that it allows the separation of the production content and the reading system.
  
  With past projects, the content has had to be developed to "fit" the constraints of the reading system; in contrast, use of the EPUB standard allows
  the production of content that can work appropriately in third party reading systems.
  
  For this project this has meant iBooks on the iPad, as the EPUB 3 Fixed Layout standard is relatively new, and therefore not yet widely supported. However, EPUB2 content will work across a much wider range of third-party reading systems and devices, and a single digital publication
  can be produced which can be distributed into the market place for use on third-party devices, as well as being presented in a reading system (i.e. Readium) which is more closely under the control of the organisation.
  
5. __Tracking of content usage__

  Content that is served by web servers under the organisation's control (such as that served using Readium) can be supported by the collection of usage statistics.
  These usages statistics can then be analysed to determine user behaviour and determine better ways to meet user needs.
  
  Where content is distributed to third parties (such as when EPUB content is distributed via platforms such as Kobo, Apple iBookStore etc),
  content usage statistics can still be gathered through the use of techniques such as analysis of shortened links.
  As we have Google Analytics for the conventional web, we are now seeing the emergence of analytic services for digital publications,
  such as [hiptype](http://www.hiptype.com/).
  
## Obtaining the Readium Code ##
The Readium code can be obtained as follows:

        git clone --branch=panz git@github.com:jcdarwin/readium.git

To obtain the content (form the cwa-lml private git repo) and plug it into the correct location:

        cd readium/epub_content
        git clone git@github.com:cwa-lml/lml58_panz_epub.git

A local (ruby) server can then be started to serve the Readium content:

        rake server

Then visit http://localhost:3000/index.html in a browser to see the library view.

## Shortened links ##
The following links have been shortened using bit.ly, in order to allow us to track the number of clicks
made on a given hyperlink by users of the webbook.
In order to see the statistics regarding a link, simply enter it into your browser address bar and append a "+",
e.g. [http://bit.ly/O4ro8U+](http://bit.ly/O4ro8U+)

  * http://www.8interactive.com: [http://bit.ly/O4ro8U](http://bit.ly/O4ro8U)
  * http://www.awardinteractive.com: [http://bit.ly/OKDIfO](http://bit.ly/OKDIfO)
  * http://www.sunshinebooks.com.au: [http://bit.ly/PwvghM](http://bit.ly/PwvghM)
  * http://www.awardreadlingonline.com: [http://bit.ly/OEHRRm](http://bit.ly/OEHRRm)
  * http://www.cleanslatepress.com: [http://bit.ly/OwwKZJ](http://bit.ly/OwwKZJ)
  * http://www.globaled.co.nz: [http://bit.ly/N2qQmI](http://bit.ly/N2qQmI)
  * http://www.facebook.com/gesystems: [http://on.fb.me/QZTxwN](http://on.fb.me/QZTxwN)
  * http://www.globaled.co.nz: [http://bit.ly/N2qQmI](http://bit.ly/N2qQmI)
  * http://www.esa.co.nz: [http://bit.ly/ND9Jnb](http://bit.ly/ND9Jnb)
  * http://www.essentialresources.co.nz: [http://bit.ly/QAB8Mk](http://bit.ly/QAB8Mk)
  * http://hana.co.nz: [http://bit.ly/Q2SRKE](http://bit.ly/Q2SRKE)
  * http://www.kiwamedia.com: [http://bit.ly/UculYd](http://bit.ly/UculYd)
  * http://www.learningmedia.com: [http://bit.ly/TY8S7T](http://bit.ly/TY8S7T)
  * http://www.worddetective.net: [https://bit.ly/S0b0fG](https://bit.ly/S0b0fG)
  * http://www.rainbowreading.co.nz: [http://bit.ly/O4u8Tw](http://bit.ly/O4u8Tw)
  * http://www.ryanpublications.co.nz: [http://bit.ly/OsEkpG](http://bit.ly/OsEkpG)
  * http://www.skylight.org.nz: [http://bit.ly/O4uo4Y](http://bit.ly/O4uo4Y)
  * http://www.csi-literacy.com: [http://bit.ly/PsWzdS](http://bit.ly/PsWzdS)
  * http://www.southpacificpress.com: [http://bit.ly/PP4YeX](http://bit.ly/PP4YeX)
  * http://www.lifteducation.com: [http://bit.ly/OKFOMI](http://bit.ly/OKFOMI)