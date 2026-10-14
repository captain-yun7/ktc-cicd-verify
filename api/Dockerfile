FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx
COPY . .
USER 1000
EXPOSE 3000
HEALTHCHECK CMD wget -q -O /dev/null http://127.0.0.1:3000/api/health || exit 1
CMD ["node", "app.js"]
