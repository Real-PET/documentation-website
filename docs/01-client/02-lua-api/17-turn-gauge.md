# TurnGauge

### `TurnGauge.progress()`

Returns the turn gauge's progress as a value between 0 and 1.

Same as `TurnGauge.time() / TurnGauge.max_time()`

### `TurnGauge.time()`

Returns the turn gauge's progress in elapsed frames.

### `TurnGauge.max_time()`

Returns the total elapsed frames required to end a turn.

### `TurnGauge.set_time(time)`

Sets the turn gauge's progress in elapsed frames.

### `TurnGauge.set_max_time(time)`

Sets the total elapsed frames required to end a turn.

### `TurnGauge.reset_max_time()`

Sets the total elapsed frames required to end a turn to the default (512).
