# nu (new) ![project status](http://dl.dropbox.com/u/2208502/maintained.png)

Functional object allocation

## Installation

    $ npm install nu

## Usage

```javascript
var nu = require('nu');

var MyAwesomeConstructor = function (wat, wan) {
  this.wat = wat;
  this.wan = wan;
};

var middleware = {
  awesomeObject: function () {
    return nu.apply(MyAwesomeConstructor, arguments);
  }
};

var myAwesomeObj1 = middleware.awesomeObject('foo', 'bar');
// or
var myAwesomeObj2 = nu.call(MyAwesomeConstructor, 'foo', 'bar');
```

## License

_This software is released under the MIT license cited below_.

    Copyright (c) 2010 Kilian Ciuffolo, me@nailik.org. All Rights Reserved.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the 'Software'), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:
    
    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
