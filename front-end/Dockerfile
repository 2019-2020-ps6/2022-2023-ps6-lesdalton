# Étape de construction : construction de l'application Node.js
FROM node:14 as build
WORKDIR /app

# Copier les fichiers de package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Étape d'hébergement : utiliser Nginx pour héberger le site statique
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80 pour accéder au site
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]