# Phoenix Config

My config for [Phoenix](https://github.com/kasper/phoenix).

This is a fairly customized/modified version of [danshan/.phoenix.js](https://gist.github.com/danshan/a2039396cfa19ec2379a19feacf05dc0) with inspirations taken from [fabiospampinato/phoenix](https://github.com/fabiospampinato/phoenix).

## Install Prerequisites

Install Phoenix

```sh
brew install --cask phoenix
```

Allow Phoenix in your system preferences

<kbd>System Preferences</kbd> &raquo; <kbd>Security & Privacy</kbd> &raquo; <kbd>Accessibility</kbd>

### Install Karabiner

Download and install Karabiner-Elements:

[https://karabiner-elements.pqrs.org/](https://karabiner-elements.pqrs.org/)

Install my Karabiner-Elements configuration:

[https://github.com/ezrafree/karabiner-config](https://github.com/ezrafree/karabiner-config)

## Install Instructions

> Note: Whenever Phoenix is running and doesn't find a config, it will create an empty config file at `~/.phoenix.js`. Make sure Phoenix is not running when you clone this repo down, and if you find your config isn't taking effect, check to see if you have an empty file at `~/.phoenix.js`. If you do, make sure Phoenix isn't running, delete the file, and run Phoenix again. This should allow it to pick up your config at at `~/.config/phoenix`.

Clone to your `~/.config/phoenix` directory

Over HTTPS:

```sh
git clone https://github.com/ezrafree/phoenix-config ~/.config/phoenix
```

Or over SSH:

```sh
git clone git@github.com:ezrafree/phoenix-config.git ~/.config/phoenix
```

Make a copy of the example config

```sh
cd ~/.config/phoenix/config && cp example.config.js config.js
```

Now you can make any changes to `config.js` to configure.

## Debugging

If you run into problems, or when developing new features, you can follow the logs with:

```sh
log stream --process Phoenix
```

When developing, to log objects use `JSON.stringify()` with `Phoenix.log()`

```js
Phoenix.log('foo: ' + JSON.stringify(foo))
```

## Usage

> Please note: `⇪` is referred to as your "hyper" key. By default this is set to the CAPS LOCK key, but can be modified to your preferences.

### Halves

| Shortcut            | Description                             |
| ------------------- | --------------------------------------- |
| `⇪` + `shift` + `↑` | Move window to the top half of screen   |
| `⇪` + `shift` + `→` | Move window to the right half of screen |
| `⇪` + `shift` + `↓` | Move window to the bottom half          |
| `⇪` + `shift` + `←` | Move window to the left half            |

### Quadrant Corners

| Shortcut        | Description                            |
| --------------- | -------------------------------------- |
| `⇪` + `e` | Move window to the top-left corner     |
| `⇪` + `r` | Move window to the top-right corner    |
| `⇪` + `a` | Move window to the bottom-left corner  |
| `⇪` + `s` | Move window to the bottom-right corner |

### Percentage Sides

| Shortcut            | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `⇪` + `[`           | Move window to left percentage of screen              |
| `⇪` + `d`           | Move window to right percentage of screen             |
| `⇪` + `fhift` + `[` | Move window to opposite of left percentage of screen  |
| `⇪` + `shift` + `]` | Move window to opposite of right percentage of screen |

### Percentage Top/Bottom

| Shortcut            | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `⇪` + `<`           | Move window to top percentage of screen                |
| `⇪` + `>`           | Move window to bottom percentage of screen             |
| `⇪` + `shift` + `<` | Move window to opposite of top percentage of screen    |
| `⇪` + `shift` + `>` | Move window to opposite of bottom percentage of screen |

### Maximize Window

| Shortcut      | Description                               |
| ------------- | ----------------------------------------- |
| `⇪` + `space` | Maximize current window.   |

### Resize Window

| Shortcut  | Description                  |
| --------- | ---------------------------- |
| `⇪` + `-` | Make the window smaller      |
| `⇪` + `+` | Make the window bigger.      |

### Center

| Shortcut                 | Description                  |
| ------------------------ | ---------------------------- |
| `⇪` + `shift` + `c`      | Center the window            |
| `⇪` + `shift` + `c`, `c` | Center and resize the window |

> Double-tap `c` (within `DOUBLE_KEY_INTERVAL`) to also resize the window.

### Move Window to Screen

| Shortcut      | Description                                |
| ------------- | ------------------------------------------ |
| `⇪` + `←`  | Move focused window to screen on the left  |
| `⇪` + `→` | Move focused window to screen on the right |

### Move Window to Space

> ⚠️ Not working on desktop... possibly this only works when there's only one screen.

| Shortcut  | Description                           |
| --------- | ------------------------------------- |
| `⇪` + `e` | Move focused window to previous space |
| `⇪` + `r` | Move focused window to next space     |

> Please note: Uncheck "Automatically rearrange Spaces based on most recent use" in `System Preferences > Mission Control` to enable this feature.

### Move Mouse Focus to Screen

| Shortcut  | Description                         |
| --------- | ----------------------------------- |
| `⇪` + `d` | Move mouse focus to previous screen |
| `⇪` + `f` | Move mouse focus to next screen     |

## Move Mouse Focus to Center of Screen

| Shortcut                | Description                          |
| ----------------------- | ------------------------------------ |
| `⇪` + `shift` + `space` | Move mouse focus to center of screen |

### Focus Window in Current Screen

| Shortcut              | Description                             |
| --------------------- | --------------------------------------- |
| `⇪` + `tab`           | Focus next window in current screen     |
| `⇪` + `shift` + `tab` | Focus previous window in current screen |

### App Shortcuts

| Shortcut  | Description         |
| --------- | ------------------- |
| `⇪` + `1` | Open app shortcut 1 |
| `⇪` + `2` | Open app shortcut 2 |
| `⇪` + `3` | Open app shortcut 3 |
| `⇪` + `4` | Open app shortcut 4 |
| `⇪` + `5` | Open app shortcut 5 |
| `⇪` + `6` | Open app shortcut 6 |

> You can configure which apps these shortcuts open in the config file. To disable any of them, just set it to an empty string.

### Quit Application

To quit an application, hold down `cmd` and hit `q` twice rapidly (within 250 milliseconds by default).

> You can add apps you don't want to quit to the array in the `QUIT_BLACKLIST` constant in the config file. Be sure and leave 'Finder' in this array since Finder is a special app within macOS that can't be quit.
>
> If you like, you can also configure the double key interval in the `DOUBLE_KEY_INTERVAL` constant from the default of 250 milliseconds.

## Development

For development purposes, you may optionally install the node modules to enable ESLint.

```sh
yarn
```
