# Resources

### `Resources.load_texture(path)`

- `path`: file path relative to script file

Caches the texture and returns a normalized path for faster access.

Should be used in global scope for better performance.

### `Resources.load_audio(path)`

- `path`: file path relative to script file

Caches the audio and returns a normalized path for faster access.

Should be used in global scope for better performance.

### `Resources.play_audio(path, audio_priority?)`

- `path`: file path relative to script file, use values returned from `Resources.load_audio()` for better performance.

Plays a sound with the specified priority.

### `Resources.play_music(path, loops?, start_ms?, end_ms?)`

- `path`: file path relative to script file, use values returned from `Resources.load_audio()` for better performance.

Plays audio stored at `path` as music. Loops by default.
