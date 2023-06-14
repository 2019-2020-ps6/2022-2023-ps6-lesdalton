# Utilisez une image Node.js comme image de base
FROM node:16.16.0-alpine as build

# Définissez le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copiez package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install --no-cache

# Copiez le reste du code de l'application dans le répertoire de travail
COPY . .

# Build de l'application
RUN npm run build:production

# Utilisez une image Nginx pour le déploiement
FROM nginx:1.21.0

# Copiez les fichiers de build de l'application dans le répertoire par défaut de Nginx
COPY --from=build /app/dist/front-end /usr/share/nginx/html

# Exposez le port 80 pour accéder à l'application
EXPOSE 80

# Démarrez Nginx lors du lancement du conteneur
CMD ["nginx", "-g", "daemon off;"]
