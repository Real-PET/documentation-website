# Player

Instance of [Entity](/docs/client/lua-api/entity). All [Living](/docs/client/lua-api/living) and [Character](/docs/client/lua-api/character) functions are available as well.

Player functions are accessible to all entities, but will throw if the entity is not a Player.

### `Battle.Player.from(entity)`

Returns the entity passed in if the entity is a player, otherwise returns `nil`.

### `player:input_has(input_query)`

- `input_query`
  - `Input.Held.*`
  - `Input.Pressed.*`
    - `Left`
    - `Right`
    - `Down`
    - `Use`
    - `Special`
    - `Shoot`
    - `FaceLeft`
    - `FaceRight`
    - `LeftShoulder`
    - `RightShoulder`
    - `EndTurn`
    - `Ready`

Returns true if `input_query` matches the player's current input state.

### `player:set_fully_charged_color(color)`

- `color`: [Color](/docs/client/lua-api/sprite#color)

Sets the color of the fully charged sprite.

### `player:set_charge_position(x, y)`

Sets the offset of the fully charged sprite.

### `player:slide_when_moving(bool?)`

When `true`, the player will slide to tiles and continue using the `PLAYER_IDLE` state.

When `false`, the player will teleport to tiles and animate with the `PLAYER_MOVE` state.

### `player:create_form()`

Returns a new [PlayerForm](#playerform).

Can be used up to five times before throwing.

### `player:get_augment(package_id)`

Returns an [Augment](#augment) or nil if the player doesn't have an augment with that `package_id`.

### `player:get_augments()`

Returns a list of [Augments](#augment)

### `player:boost_augment(package_id, level_increment)`

If the level before boosting is 0, the [Augment](#augment) is initialized.

If the level after boosting is 0, the Augment's delete callback is called and the Augment is removed.

### `player:boost_max_health(health)`

- `health`: integer

Adds the `health` value to the max health.

If it is the player's health is greater than the new max health it will be reduced to the new max health.

### `player:get_attack_level()`

Returns the player's total attack level, a combination of `boost_attack_level` and [Augment](#augment) boosts.

### `player:boost_attack_level(increment)`

- `increment`: integer

Adds the `increment` value to the attack level. The attack level can only be boosted by five through this method.

### `player:get_rapid_level()`

Returns the player's total rapid level, a combination `boost_rapid_level` and [Augment](#augment) boosts.

### `player:boost_rapid_level(increment)`

- `increment`: integer

Adds the `increment` value to the rapid level. The rapid level can only be boosted by five through this method.

### `player:get_charge_level()`

Returns the player's total charge level, a combination `boost_charge_level` and [Augment](#augment) boosts.

### `player:boost_charge_level(increment)`

- `increment`: integer

Adds the `increment` value to the charge level. The charge level can only be boosted by five through this method.

### `player:calculate_default_charge_time()`

Returns the amount of time in game frames, the `Shoot` button would need to be held for a fully charged attack if the [player.calculate_charge_time](#playercalculate_charge_time) function was not set.

### `player:calculate_charge_time()`

Returns the amount of time in game frames, the `Shoot` button should be held for a fully charged attack.

### `player.calculate_charge_time_func = function(self)`

Should return the amount of time in game frames, the `Shoot` button should be held for a fully charged attack.

### `player.normal_attack_func = function(self)`

Should return a [CardAction](/docs/client/lua-api/card-action)

### `player.charged_attack_func = function(self)`

Should return a [CardAction](/docs/client/lua-api/card-action)

### `player.special_attack_func = function(self)`

Should return a [CardAction](/docs/client/lua-api/card-action)

## PlayerForm

Created through [player:create_form()](#playercreate_form)

### `player_form:set_mugshot_texture_path(path)`

- `path`: file path relative to script file, use values returned from `Engine.load_texture()` for better performance.

This texture is used for the form selection menu and emotions.

### `player_form.on_activate_func = function(self, player)`

Called when the form is activated, the player's appearance should be modified here.

### `player_form.on_deactivate_func = function(self, player)`

Called when the form is deactivated, the player's appearance should be reverted here.

### `player_form.on_update_func = function(self, player)`

Called after [player.on_update_func](#playernormal_attack_func--functionself) when this form is active.

### `player_form.calculate_charge_time_func = function(self, player)`

Overrides [player.calculate_charge_time_func](#playercalculate_charge_time_func--functionself) when this form is active.

Return nil to fallback to the player's implementation.

### `player_form.normal_attack_func = function(self, player)`

Overrides [player.normal_attack_func](#playernormal_attack_func--functionself) when this form is active.

Return nil to fallback to the player's implementation.

### `player_form.charged_attack_func = function(self, player)`

Overrides [player.charged_attack_func](#playercharged_attack_func--functionself) when this form is active.

Return nil to fallback to the player's implementation.

### `player_form.special_attack_func = function(self, player)`

Overrides [player.special_attack_func](#playerspecial_attack_func--functionself) when this form is active.

Return nil to fallback to the player's implementation.

## Augment

### `augment:get_id()`

Returns the package id of the augment.

### `augment:get_level()`

Returns an integer.

### `augment:get_owner()`

Returns an [Entity](/docs/client/lua-api/entity)

### `augment.calculate_charge_time_func = function(self)`

Overrides [player.calculate_charge_time_func](#playercalculate_charge_time_func--functionself) also overrides the active form's override.

### `augment.normal_attack_func = function(self)`

Overrides [player.normal_attack_func](#playernormal_attack_func--functionself) also overrides the active form's override.

Return nil to fallback to the player's implementation.

### `augment.charged_attack_func = function(self)`

Overrides [player.charged_attack_func](#playercharged_attack_func--functionself) also overrides the active form's override.

Return nil to fallback to the player's implementation.

### `augment.special_attack_func = function(self)`

Overrides [player.special_attack_func](#playerspecial_attack_func--functionself) also overrides the active form's override.

Return nil to fallback to the player's implementation.

### `augment.on_delete_func = function(self)`

Called when the player is deleted or when this augment's level is boosted to <= 0.