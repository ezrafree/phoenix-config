# Phoenix Config

My config for [Phoenix](https://github.com/kasper/phoenix).

This is a fairly customized/modified version of [danshan/.phoenix.js](https://gist.github.com/danshan/a2039396cfa19ec2379a19feacf05dc0) with inspirations taken from [fabiospampinato/phoenix](https://github.com/fabiospampinato/phoenix).

## Install Prerequisites

Install Phoenix

```sh
brew cask install phoenix
```

Allow Phoenix in your system preferences

```none
System Preferences > Security & Privacy > Accessibility
```

### Install Karabiner

Download and install Karabiner-Elements from [pqrs.org/osx/karabiner/](https://pqrs.org/osx/karabiner/)

Create a `~/.config/phoenix/config/karabiner.json` and add the following contents:

[gist.github.com/ezrafree/06bee291bdcf69a542878dd0651715a1](https://gist.github.com/ezrafree/06bee291bdcf69a542878dd0651715a1)

## Install Instructions

> Note: Whenever Phoenix is running and doesn't find a config, it will create an empty config file at `~/.phoenix.js`. Make sure Phoenix is not running when you clone this repo down, and if you find your config isn't taking effect, check to see if you have an empty file at `~/.phoenix.js`. If you do, make sure Phoenix isn't running, delete the file, and run Phoenix again. This should allow it to pick up your config at at `~/.config/phoenix`.

Clone to your `~/.config/phoenix` directory

```sh
git clone https://github.com/ezrafree/phoenix-config ~/.config/phoenix
# or
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

| Shortcut  | Description                            |
| --------- | -------------------------------------- |
| `⇪` + `e` | Move window to the top-left corner     |
| `⇪` + `r` | Move window to the top-right corner    |
| `⇪` + `d` | Move window to the bottom-left corner  |
| `⇪` + `f` | Move window to the bottom-right corner |

### Percentage Sides

| Shortcut            | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `⇪` + `[`           | Move window to left percentage of screen              |
| `⇪` + `]`           | Move window to right percentage of screen             |
| `⇪` + `shift` + `[` | Move window to opposite of left percentage of screen  |
| `⇪` + `shift` + `]` | Move window to opposite of right percentage of screen |

### Expand

| Shortcut      | Description                               |
| ------------- | ----------------------------------------- |
| `⇪` + `space` | Toggle window expansion to fill the space |

### Center

| Shortcut            | Description                  |
| ------------------- | ---------------------------- |
| `⇪` + `x`           | Center the window            |
| `⇪` + `shift` + `x` | Center and resize the window |

### Move Window to Screen

| Shortcut      | Description                                |
| ------------- | ------------------------------------------ |
| `⇪` + `left`  | Move focused window to screen on the left  |
| `⇪` + `right` | Move focused window to screen on the right |

### Move Window to Space

| Shortcut  | Description                           |
| --------- | ------------------------------------- |
| `⇪` + `q` | Move focused window to previous space |
| `⇪` + `w` | Move focused window to next space    |

> Please note: Uncheck "Automatically rearrange Spaces based on most recent use" in `System Preferences > Mission Control` to enable this feature.

### Move Mouse Focus to Screen

| Shortcut  | Description                         |
| --------- | ----------------------------------- |
| `⇪` + `a` | Move mouse focus to previous screen |
| `⇪` + `s` | Move mouse focus to next screen     |

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

> You can configure which apps these shortcuts open in the config file. To disable any of them, just set it to an empty string.

### Quit Application

To quit an application, hold down `cmd` and hit `q` twice rapidly (within 250 milliseconds by default).

> You can add apps you don't want to quit to the array in the `QUIT_BLACKLIST` constant in the config file. Be sure and leave 'Finder' in this array since Finder is a special app within macOS that can't be quit.
>
> If you like, you can also configure the double key interval in the `DOUBLE_KEY_INTERVAL` constant from the default of 250 milliseconds.

## Skip Built-In Display

This feature is still somewhat experimental and is not enabled by default. It skips the built-in display when moving a window across your external monitors (assuming they are side-by-side). It also enables using the up and down arrows to move windows between the built-in display and the external monitors.

To enable it, set `SKIP_BUILTIN_DISPLAY` to `true` in the config and set the `BUILTIN_DISPLAY_WIDTH` and `EXTERNAL_DISPLAY_WIDTH` values.

### Move Window to Built-In Display

When you've enabled the `SKIP_BUILTIN_DISPLAY` feature, additional shortcuts are enabled that may be used to toggle moving a window between the built-in display and the external monitors.

| Shortcut     | Description                                          |
| ------------ | ---------------------------------------------------- |
| `⇪` + `up`   | Send the focused window to the main external display |
| `⇪` + `down` | Send the focused window to the built-in display      |

## Development

For development purposes, you may optionally install the node modules to enable ESLint.

```sh
yarn
```

## Known Issues

If the computer was already booted up without external monitors connected and you then connect external monitors to it, the monitors will be in the reverse order. Currently, the only known solution is to reboot.
