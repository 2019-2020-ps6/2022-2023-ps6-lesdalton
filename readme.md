# Le statut de la livraison:
  ### Étape 1 : Done
  ### Étape 2 : Done
  ### Étape 3 : Done
  ### Étape 4 : Commencée mais avec un problème de chargement des images
# Les healthchecks:

##    Healthcheck for service "Front":
      test: [ "CMD", "curl", "-f", "http://localhost:8080" ]
      ---> Description :
        * PORT : 8080
        * Cela définit la commande de test du healthcheck. Ici, il exécute la commande curl -f http://localhost:8080,
          qui envoie une requête HTTP GET à l'adresse http://localhost:8080 pour vérifier si le service est accessible.
          L'option -f de curl indique de retourner une erreur si la requête échoue.

      # interval: 30s
          ---> Description :
        * Cela spécifie l'intervalle de temps entre les vérifications successives du healthcheck.
          Dans ce cas, le healthcheck sera effectué toutes les 30 secondes.
      
    
      # timeout: 10s
      ---> Description :
        * Cela définit le délai d'attente maximum pour chaque vérification du healthcheck.
          Si la vérification prend plus de 10 secondes, elle sera considérée comme échouée.
    
    
      # retries: 3
      ---> Description :
        * Cela indique le nombre de tentatives de vérification en cas d'échec.
          Si le healthcheck échoue, il sera répété jusqu'à 3 fois.
    
##    Healthcheck for service "Back":
 
        # test: [ "CMD", "curl", "-f", "http://localhost:8000" ]
        ---> Description :
          * PORT : 8000
          * Cela définit la commande de test du healthcheck. Ici, il exécute la commande curl -f http://localhost:8000,
          qui envoie une requête HTTP GET à l'adresse http://localhost:8000 pour vérifier si le service est accessible.
          L'option -f de curl indique de retourner une erreur si la requête échoue.

        # interval: 30s
        ---> Description :
          * Cela spécifie l'intervalle de temps entre les vérifications successives du healthcheck.
          Dans ce cas, le healthcheck sera effectué toutes les 30 secondes.

        # timeout: 10s
        --------
        ---> Description :
          * Cela définit le délai d'attente maximum pour chaque vérification du healthcheck.
          Si la vérification prend plus de 10 secondes, elle sera considérée comme échouée.

        # retries: 3

        ---> Description :
          * Cela indique le nombre de tentatives de vérification en cas d'échec.
          Si le healthcheck échoue, il sera répété jusqu'à 3 fois.

# L'utilisateur avec lequel chaque service tourne :
  Tous les services tournent avec l'utilisateur root sauf e2e qui tourne avec l'utilisateur pwuser

----------------

# Explication sur les services :
  * **Pour docker-compose.yml :**
    * Service "front"
      Ce service représente l'application front-end.
      Il est construit à partir du répertoire "../front-end" en utilisant le fichier Dockerfile.
      L'application front-end est accessible via le port 8080 de l'hôte.
      Pour accéder à l'application, utilisez l'URL suivante : http://localhost:8080

    * Service "back"

        Ce service représente l'application back-end.
        Il est construit à partir du répertoire "../back-end".
        L'application back-end expose le port 8000 de l'hôte.
        Pour accéder à l'application back-end, utilisez l'URL suivante : http://localhost:8000

    * Volumes

        Un volume nommé "backend-volume" est utilisé par le service "back" pour stocker les données de la base de données.
        Le volume utilise un pilote local pour stocker les données localement.
  

  * **Pour docker-compose-e2e.yml :**
    * Service "front"
      Ce service représente l'application front-end.
      Il est construit à partir du répertoire "../front-end" en utilisant le fichier Dockerfile.
      L'application front-end est accessible via le port 8080 de l'hôte.
      le front est accessible depuis l'URL : http://front:8080 dans le network **ps6-network**

    * Service "back"

        Ce service représente l'application back-end.
        Il est construit à partir du répertoire "../back-end".
        L'application back-end expose le port 8000 de l'hôte.
        le front est accessible depuis l'URL : http://back:9428 dans le network **ps6-network**
      

    * Volumes

        Un volume nommé "backend-volume" est utilisé par le service "back" pour stocker les données de la base de données.
        Le volume utilise un pilote local pour stocker les données localement.
  
    * Service "e2e"

      Ce service est utilisé pour les tests end-to-end (e2e) de l'application.
      Il est construit à partir du répertoire "../front-end" en utilisant le fichier Dockerfile-e2e.
      Ce service dépend des services "front" et "back" pour son fonctionnement.
      Des volumes sont configurés pour stocker les résultats des tests et les rapports générés.
    * Réseau

      Les services "front", "back" et "proxy" sont connectés au réseau "ps6-network", ce qui permet aux services de communiquer entre eux.
   * **Pour docker-compose-proxy.yml :**

      * Service "front"

        Ce service représente l'application front-end.
        Il est construit à partir du répertoire "../front-end" en utilisant le fichier Dockerfile.
        L'application front-end utilise un environnement de type "proxy".
        Ce service dépend du service "back" pour son fonctionnement.
        Le service "front" est connecté au réseau **ps6-network**.
        Ce service est accessible depuis l'URL : http://localhost/front/

      * Service "back"

        Ce service représente l'application back-end.
        Il est construit à partir du répertoire "../back-end" en utilisant le fichier Dockerfile.
        L'application back-end expose le port 9428 de l'hôte.
        Le service "back" est connecté au réseau **ps6-network**.
        Ce service est accessible depuis l'URL : http://localhost/back/

      * Service "proxy"

        Ce service représente un conteneur de proxyfication (Apache) pour gérer les règles de proxyfication.
        Il est construit à partir du répertoire courant en utilisant le fichier Dockerfile-proxy.
        Le service "proxy" expose le port 80 de l'hôte.
        Ce service dépend des services "back" et "front" pour son fonctionnement.
        Le service "proxy" est connecté au réseau **ps6-network**.

      * Volumes

        Le volume "backend-volume" est utilisé par le service "back" pour stocker les données de la base de données.

      * Réseau

        Les services **front**, **back** et **proxy** sont connectés au réseau **ps6-network**, ce qui permet aux services de communiquer entre eux.
