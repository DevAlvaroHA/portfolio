# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --no-frozen-lockfile

# Copy source files
COPY . .

# Build application for production
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /usr/src/app

# Set NODE_ENV
ENV NODE_ENV production

# Copy necessary files from build stage
COPY --from=build /usr/src/app/next.config.mjs ./
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Use non-root user for better security
USER node

# Start the application
CMD ["npm", "start"]