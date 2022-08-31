FROM --platform=arm64 ubuntu

# The port that your application listens to.
EXPOSE 3005
# Prefer not to run as root.
RUN useradd -ms /bin/bash deno
USER deno

WORKDIR /home/deno

ENV PATH="${PATH}:."
COPY deno deno


# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY deps.ts .
COPY build build
COPY server.sh .
COPY server.ts .

# These steps will be re-run upon each file change in your working directory:
# ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
# RUN /home/deno/deno cache main.ts

RUN ls -R
ENTRYPOINT [ "sh", "server.sh"]