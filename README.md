## Ant 4.0.0-rc.3 IE 11 Bug

To run the application

* `yarn` to install dependencies

* `yarn dev` to run the app

* Open [http://localhost:3000](http://localhost:3000)

Any dropdown, popover, etc. will flash when running the application in Internet Explorer 11

This is a significant rendering issue, but the severity/noticeability varies depending on the computer (or Virtual Machine).

In some cases, the whole page will re-render, in others, just the components will briefly disappear and then reappear.

![IE 11 Rendering Bug](./IE11Bug.gif)
