(function (jtd, undefined) {
    jtd.onReady(function () {

        var codeBlocks = document.querySelectorAll('div.highlighter-rouge, div.listingblock > div.content, figure.highlight');

        var copyButtons = document.querySelectorAll('div.highlighter-rouge>button, div.listingblock > div.content>button, figure.highlight>button');
        copyButtons.forEach(copyButton => {
            copyButton.title = 'Copy code';
        })

        // note: the SVG svg-copied and svg-copy is only loaded as a Jekyll include if site.enable_copy_code_button is true; see _includes/icons/icons.html
        var svgCDownload = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';

        codeBlocks.forEach(codeBlock => {
            var copyButton = document.createElement('button');
            var timeout = null;
            copyButton.style.cssText = 'right:40px';
            copyButton.type = 'button';
            copyButton.ariaLabel = 'Download code';
            copyButton.innerHTML = svgCDownload;
            copyButton.title = 'Download code'
            codeBlock.append(copyButton);

            copyButton.addEventListener('click', function () {
                if (timeout === null) {
                    var code = (codeBlock.querySelector('pre:not(.lineno, .highlight)') || codeBlock.querySelector('code')).innerText;
                    code = code.replace(/\n/g, "%0D%0A"); 

                    // create an anchor element that we can programmatically click
                    const a = document.createElement('a');

                    console.log(code)

                    // set up a data uri with the text
                    a.href = `data:text/plain,${code}`;

                    // set the download attribute so it downloads and uses this as a filename
                    a.download = 'evalscript.js';

                    // stick it in the document
                    document.body.appendChild(a);

                    // click it
                    a.click();

                    copyButton.innerHTML = svgCDownload;

                    var timeoutSetting = 4000;

                    timeout = setTimeout(function () {
                        copyButton.innerHTML = svgCDownload;
                        timeout = null;
                    }, timeoutSetting);
                }
            });
        });
        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();

    });
})(window.jtd = window.jtd || {});
