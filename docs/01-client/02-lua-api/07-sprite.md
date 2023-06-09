# Sprite

### `sprite:create_node()`

Returns a new child Sprite instance that renders relative to the parent sprite's origin.

### `sprite:remove_node(sprite)`

Deletes the passed sprite if it's a child of the parent.

### `sprite:texture()`

Returns the path to the sprite's texture.

### `sprite:set_texture(path)`

Use values returned from [Resources.load_texture()](/client/lua-api/resources#resourcesload_texturepath) for better performance.

### `sprite:palette()`

Returns the path to the sprite's palette or `nil`.

### `sprite:set_palette(path)`

Sets the palette for the texture to reference.

Palettes are 256x1 images. Colors on the sprite's texture will be remapped by taking the red value of the texture to grab a color from the palette.

Use values returned from [Resources.load_texture()](/client/lua-api/resources#resourcesload_texturepath) for better performance.

### `sprite:visible()`

Returns true if the sprite is visible.

### `sprite:set_visible(visible)`

### `sprite:reveal()`

Same as `sprite:set_visible(true)`

### `sprite:hide()`

Same as `sprite:set_visible(false)`

### `sprite:layer()`

Returns an integer used for sorting during render.

### `sprite:set_layer(layer)`

- `layer`: integer, negative values render in front of the parent sprite.

Used for sorting during render.

### `sprite:offset()`

Returns a table with `x` and `y` keys, represents the parent relative offset.

### `sprite:set_offset(x, y)`

Sets the parent relative offset.

### `sprite:origin()`

Returns a table with `x` and `y` keys.

### `sprite:set_origin(x, y)`

Sets the origin, [Animations](/client/lua-api/animation) will overwrite this value.

### `sprite:scale()`

Returns a table with `x` and `y` keys.

### `sprite:set_scale(x, y)`

Sets the scale of the sprite.

### `sprite:size()`

Returns a table with `x` and `y` keys, representing the size of the sprite. Scale is accounted.

### `sprite:set_size(x, y)`

Sets the size of the sprite, updates the scale.

### `sprite:width()`

Returns the width of the sprite, scale is acounted.

### `sprite:set_width(width)`

Sets the width of the sprite, updates the scale.

### `sprite:height()`

Returns the height of the sprite, scale is acounted.

### `sprite:set_height(height)`

Sets the height of the sprite, updates the scale.

### `sprite:color()`

Returns a [Color](#color)

### `sprite:set_color(color)`

- `color`: [Color](#color)

The color will be reset to black at the start of the next frame for root sprites.

### `sprite:color_mode()`

Returns the color mode.

### `sprite:set_color_mode(color_mode)`

- `color_mode`
  - `ColorMode.Additive` each pixel will be added by the sprite's color, alpha will be multiplied.
  - `ColorMode.Multiply` each pixel will be multiplied by the sprite's color.

The color mode will be reset to `ColorMode.Additive` at the start of the next frame for root sprites.

### `sprite:never_flip(never_flip?)`

Prevents player team from flipping the sprite.

### `sprite:use_root_shader(enable?)`

Temporarily adopts the color, color mode, and palette of the root sprite during render.

## Color

Colors are tables with an `r`, `g`, `b`, and `a` key, with each value set to a 0-255 integer.

There's a global table named `Color` with helpers for making new color tables.

### `Color.new(r, g, b, a?)`

Each component is a 0-255 value, `a` defaults to 255.

Returns a color.

### `Color.mix(color_a, color_b, progress)`

A `progress` of 0.0 will return a table with the same values as `color_a`.

A `progress` of 1.0 will return a table with the same values as `color_b`.

Other values of `progress` will linearly interpolate each component between `color_a` and `color_b`.

Returns a color.

## SyncNode

SyncNodes are a sprite animation pair that sync settings, state, and progress with an entity's root animation.

### `sync_node:sprite()`

Returns a reference to the sync node's sprite.

### `sync_node:animation()`

Returns a reference to the sync node's [Animation](/client/lua-api/animation)
