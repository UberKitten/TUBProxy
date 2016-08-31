# The "Unblockable" Proxy

Blast from the past. This is a PHP web proxy I wrote back in 2008 that base64 encodes web pages to bypass web filters, then Javascript on the client decodes the base64 and renders it. I was 14 when I first wrote it for use in middle school.

It was called "unblockable" because it ran off my home internet connection with a dynamic IP address. I replicated the IP to a bunch of dynamic DNS servers, and I also would write it down and just bring it to school when they got blocked. It was designed to defeat content inspectors by also using images instead of text. Yes, I know/knew it was blockable, but like with antivirus, you just have to be unique enough to avoid heuristics. Several of my friends used it around that time too.

My Javascript shenanigans would break Javascript heavy websites like GMail, so I also had an installation of [gmail-lite](http://gmail-lite.sourceforge.net/index2.html) which is a webmail proxy for GMail.
