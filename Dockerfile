LABEL authors="cedric"

# Utilise l'image officielle de Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port utilisé par Next.js
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
