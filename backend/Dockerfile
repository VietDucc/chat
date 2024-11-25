# syntax=docker/dockerfile:1.4

FROM node:lts-buster-slim AS development

# Thiet lap thu muc lam viec o trong container
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY . /usr/src/app

EXPOSE 3001

CMD ["node", "index.js"]

FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

# Tao nguoi dung va nhom 
RUN <<EOF
useradd -s /bin/bash -m vscode 
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD ["node", "index.js"]