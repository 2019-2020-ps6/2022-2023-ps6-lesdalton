Le statut de la livraison:
    Étape 1 : Done
    Étape 2 : Done
    Étape 3 : Done
    Étape 4 : Commencée mais avec un problème de chargement des images

Les healthchecks:

    Healthcheck for service "Front":
      # test: [ "CMD", "curl", "-f", "http://localhost:8080" ]
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
    
    Healthcheck for service "Back":
 
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
