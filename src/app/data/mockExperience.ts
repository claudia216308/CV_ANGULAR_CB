import { Experience } from "../modele/experience";

export const LIST_EXPERIENCE: Experience[] = [
    {
        title: 'Développement Scala',
        society: 'IDEMIA (Mission pour AlterSolutions)',
        time: '',
        descriptionPoste: 'Maintenance applicative et évolutive d’une application gérant le workflow de création et de personnalisation de documents officiels (pièces d’identité, permis de conduire...)',
        realisation: [
            "Participation au développement des différents modules de personalisation (renouvellement des certificats, créations des pins, gestion du stock ...)",
            "Création / Gestion des services REST et SOAP pour communiquer avec des API externes",
            "Création de fichiers PDF pour le suivi, l’envoi et la sécurisation (enveloppes de pins sécurisées) des documents créés"
        ],
        listeTechnos: 'Scala, Play!, SQLServer, Jenkins',
        dateBegin: 'Février 2019',
        dateEnd: 'Mars 2020'
    },
    {
        title: 'Développement Fullstack Java/Angular ',
        society: 'Enedis (Mission pour AlterSolutions)',
        time: '',
        descriptionPoste: 'Maintenance applicative et évolutive d’un SI à destination des agents Enedis\nParticipation au développement de l’IHM pour les collectivités locales\nGestion des services REST pour communiquer avec des SI externes\nEcriture de tests unitaires pour augmenter la couverture de test du code existant',
        listeTechnos: 'Java, Hibernate, Spring, Angular',
        realisation:[],
        dateBegin: 'Septembre 2018',
        dateEnd: 'Février 2019'
    },
    {
        title: 'Développement Java/J2EE chez ACA',
        society: 'Arthaud Courthéoux et Associés, Paris',
        time: 'Après un an de contrat de professionalisation, je suis aujourd\'hui en CDI',
        descriptionPoste: 'Participation au développement d’un interpréteur comptable \nUtilisation des méthodes agiles \nRédaction des tests (Junit, PowerMock)s',
        listeTechnos: 'Java, Spring, Angular, Hibernate, MongoDB, PostgreSQL, Oracle...',
        realisation:[],
        dateBegin: 'Juillet 2016',
        dateEnd: 'Août 2018'
    },
    {
        title: 'Applications Android pour l\'immobilier (Stage)',
        society: 'Société Techis4Help, Paris',
        time: '',
        descriptionPoste: 'Etablissement d’un cahier des charges pour la nouvelle application (C to C) de la société, puis développement d’un prototype.',
        listeTechnos: 'Android, PHP, MySQL',
        realisation: [],
        dateBegin: 'Janvier 2016',
        dateEnd: 'Mai 2016'
    }
];