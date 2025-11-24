# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy source files
COPY . .

# Build application
RUN npm run build

# Remove development dependencies
RUN npm prune --production --legacy-peer-deps


# Stage 2: Production
FROM node:18-alpine

WORKDIR /usr/src/app

# Set NODE_ENV
ENV NODE_ENV production

# Copy from build stage
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package*.json ./

# Expose API port
EXPOSE 3000

# Use non-root user for better security
USER node

# Start the application
CMD ["node", "dist/main"]