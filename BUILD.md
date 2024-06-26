## Building for Windows using Docker

To build for Windows using a linux machine, use the following command to build an .exe.

```bash
docker run --rm -it -v .:/project electronuserland/builder:wine /bin/bash -c "yarn && yarn build -w"
```
