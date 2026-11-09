# Step 1: Base Image Node.js
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency definition files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code & public assets
COPY . .

# Build Next.js application
RUN npm run build

# Step 2: Production Runner Image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5050

# Copy built assets & dependencies from builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose port 5050
EXPOSE 5050

# Start Next.js server di port 5050
CMD ["npm", "run", "start"]
