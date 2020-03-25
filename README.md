# React MLB Logos

![npm](https://img.shields.io/npm/v/react-mlb-logos)

> React components for MLB team logos

![image](https://user-images.githubusercontent.com/11506653/74988213-3d6abc00-540b-11ea-9a5e-328b15059f46.png)

## Install

```shell
$ npm install react-mlb-logos
```

## Usage

```js
import React from 'react';
import { TOR } from 'react-mlb-logos';

const Example = () => {
  return <TOR />; // Loads the Toronto Blue Jays logo
};

export default Example;
```

or include all icons

```js
import React from 'react';
import * as MLBIcons from 'react-mlb-logos';

const Example = () => {
  return <MLBIcons.TOR />; // Loads the Toronto Blue Jays logo
};

export default Example;
```

## Configuration

Size can be easily configured (Default of 100px)

```js
import React from 'react';
import { TOR } from 'react-mlb-logos';

const Example = () => {
  return (
    <div>
      <TOR size={60} />
      <TOR /> // Default of 100px
      <TOR size={140} />
    </div>
  );
};

export default Example;
```

Results in

<img width="324" alt="Screen Shot 2019-07-11 at 5 50 31 PM" src="https://user-images.githubusercontent.com/11506653/74988355-a4887080-540b-11ea-8109-0327cb8ec55c.png">
