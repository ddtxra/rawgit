RawGit for GitLab
======
This is an adpation of [rawgit](https://rawgit.com/) to work with [SIB GitLab](https://gitlab.isb-sib.ch/).

## Build and run with Docker

```shell
docker build -t sibrawgit .
docker run -d -p 5000:5000 sibrawgit:latest
```


## Develop

You can edit web.js to point to your gitlab domain.

1. Install dependencies.

        cd rawgit && npm install

2. Start the local server.

        npm start

3. Browse to <http://localhost:5000/> and you should see RawGit in action.


Running Tests
-------------

```
npm test
```


Contributing
------------

Want to add a feature or fix a bug? If it's something small, just send a pull
request. If it's something big, please get in touch and ask if I'm interested
before working on it.


License
-------

Copyright (c) 2015 Ryan Grove (ryan@wonko.com).

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
