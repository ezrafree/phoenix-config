# Phoenix Config

My config for [Phoenix](https://github.com/kasper/phoenix).

This is a fairly customized/modified version of [danshan/.phoenix.js](https://gist.github.com/danshan/a2039396cfa19ec2379a19feacf05dc0) with inspirations taken from [fabiospampinato/phoenix](https://github.com/fabiospampinato/phoenix).

## Install Prerequisites

Install Phoenix

```sh
brew install --cask phoenix
```

Allow Phoenix in your system preferences

> System Preferences → Security & Privacy → Accessibility

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

> Please note: By default the `hyper` key is the <kbd>CAPS LOCK</kbd> key, remapped to send <kbd>control</kbd> + <kbd>option</kbd> + <kbd>command</kbd>. This can be changed to your preference.

### Halves

| Shortcut            | Description                             |
| ------------------- | --------------------------------------- |
| `hyper` + `shift` + `↑` | Move window to the top half of screen   |
| `hyper` + `shift` + `→` | Move window to the right half of screen |
| `hyper` + `shift` + `↓` | Move window to the bottom half          |
| `hyper` + `shift` + `←` | Move window to the left half            |

### Quadrant Corners

| Shortcut        | Description                            |
| --------------- | -------------------------------------- |
| `hyper` + `e` | Move window to the top-left corner     |
| `hyper` + `r` | Move window to the top-right corner    |
| `hyper` + `a` | Move window to the bottom-left corner  |
| `hyper` + `s` | Move window to the bottom-right corner |

### Percentage Sides

| Shortcut            | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `hyper` + `[`           | Move window to left percentage of screen              |
| `hyper` + `d`           | Move window to right percentage of screen             |
| `hyper` + `shift` + `[` | Move window to opposite of left percentage of screen  |
| `hyper` + `shift` + `]` | Move window to opposite of right percentage of screen |

### Percentage Top/Bottom

| Shortcut  | Description                                |
| --------- | ------------------------------------------ |
| `hyper` + `↑` | Move window to top percentage of screen    |
| `hyper` + `↓` | Move window to bottom percentage of screen |

### Maximize Window

| Shortcut      | Description                               |
| ------------- | ----------------------------------------- |
| `hyper` + `space` | Maximize current window.   |

### Resize Window

| Shortcut  | Description                  |
| --------- | ---------------------------- |
| `hyper` + `-` | Make the window smaller      |
| `hyper` + `+` | Make the window bigger.      |

### Center

| Shortcut                 | Description                  |
| ------------------------ | ---------------------------- |
| `hyper` + `shift` + `c`      | Center the window            |
| `hyper` + `shift` + `c`, `c` | Center and resize the window |

> Double-tap `c` (within `DOUBLE_KEY_INTERVAL`) to also resize the window.

### Move Window to Screen

| Shortcut      | Description                                |
| ------------- | ------------------------------------------ |
| `hyper` + `←`  | Move focused window to screen on the left  |
| `hyper` + `→` | Move focused window to screen on the right |

### Move Window to Space

> ⚠️ Not working on desktop... possibly this only works when there's only one screen.

| Shortcut  | Description                           |
| --------- | ------------------------------------- |
| `hyper` + `e` | Move focused window to previous space |
| `hyper` + `r` | Move focused window to next space     |

> Please note: Uncheck "Automatically rearrange Spaces based on most recent use" in `System Preferences > Mission Control` to enable this feature.

### Move Mouse Focus to Screen

| Shortcut  | Description                         |
| --------- | ----------------------------------- |
| `hyper` + `d` | Move mouse focus to previous screen |
| `hyper` + `f` | Move mouse focus to next screen     |

## Move Mouse Focus to Center of Screen

| Shortcut                | Description                          |
| ----------------------- | ------------------------------------ |
| `hyper` + `shift` + `space` | Move mouse focus to center of screen |

### Focus Window in Current Screen

| Shortcut              | Description                             |
| --------------------- | --------------------------------------- |
| `hyper` + `tab`           | Focus next window in current screen     |
| `hyper` + `shift` + `tab` | Focus previous window in current screen |

### App Shortcuts

| Shortcut  | Description         |
| --------- | ------------------- |
| `hyper` + `1` | Open app shortcut 1 |
| `hyper` + `2` | Open app shortcut 2 |
| `hyper` + `3` | Open app shortcut 3 |
| `hyper` + `4` | Open app shortcut 4 |
| `hyper` + `5` | Open app shortcut 5 |
| `hyper` + `6` | Open app shortcut 6 |

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
