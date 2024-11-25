# syntax=docker/dockerfile:1.4

# Base image
FROM node:lts-buster-slim AS base

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application code
COPY . .

# Expose the development port for Vite
EXPOSE 5173

# Command to start Vite in development mode
CMD ["npm", "run", "dev"]

# Development stage
FROM base AS development

# Install additional tools for development
RUN apt-get update && apt-get install -y --no-install-recommends git

# Create a non-root user for development
RUN useradd -s /bin/bash -m vscode && \
    groupadd docker && \
    usermod -aG docker vscode

# Command to start Vite with development settings
CMD ["npm", "run", "dev"]
