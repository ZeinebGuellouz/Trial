export const destinations = [
  {
    id: 'hammamet',
    title: 'Hammamet',
    description: 'Plages dorées, hôtels de charme et ambiance méditerranéenne relaxante.',
    image:
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'tozeur',
    title: 'Tozeur',
    description: 'Oasis, palmeraies et aventures sahariennes au sud tunisien.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'djerba',
    title: 'Djerba',
    description: 'Île authentique, culture locale et resorts en bord de mer.',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
  }
];

export const offers = [
  {
    id: 'oasis-tozeur-premium',
    destination: 'Tozeur',
    type: 'Aventure',
    title: 'Évasion Oasis Premium',
    shortDescription: '3 nuits à Tozeur avec excursion 4x4 et coucher de soleil dans le désert.',
    description:
      'Un circuit pensé pour les amoureux de nature et de découvertes. Entre oasis, médina et dunes, profitez d\'un voyage équilibré entre détente et aventure.',
    price: 'À partir de 890 TND',
    priceRange: '890 - 1250 TND',
    includes: ['Hôtel 4★', 'Transport climatisé', 'Petit-déjeuner', 'Excursion désert 4x4'],
    image:
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'sejour-djerba-relax',
    destination: 'Djerba',
    type: 'Plage',
    title: 'Séjour Relax à Djerba',
    shortDescription: '5 jours en formule semi-pension dans un hôtel en bord de mer.',
    description:
      'Reposez-vous au rythme de l\'île de Djerba. Plages turquoise, gastronomie locale et moments bien-être pour un séjour sans stress.',
    price: 'À partir de 1190 TND',
    priceRange: '1190 - 1650 TND',
    includes: ['Hôtel 5★', 'Transfert aéroport', 'Semi-pension', 'Sortie en bateau'],
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'weekend-hammamet',
    destination: 'Hammamet',
    type: 'Culture',
    title: 'Week-end Chic à Hammamet',
    shortDescription: 'Escapade 2 nuits entre spa, médina et dîner gastronomique.',
    description:
      'Idéal pour une pause courte mais raffinée. Découvrez les meilleures adresses de Hammamet et profitez d\'un service premium.',
    price: 'À partir de 620 TND',
    priceRange: '620 - 920 TND',
    includes: ['Hôtel boutique', 'Petit-déjeuner', 'Accès spa', 'Visite guidée de la médina'],
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

export const testimonials = [
  {
    name: 'Sarra B.',
    quote: 'Organisation parfaite et équipe toujours disponible. Notre voyage à Djerba était superbe.'
  },
  {
    name: 'Youssef M.',
    quote: 'Très bon rapport qualité-prix, on a adoré l\'expérience désert à Tozeur.'
  },
  {
    name: 'Inès K.',
    quote: 'Agence sérieuse, conseils personnalisés et suivi rapide sur WhatsApp.'
  }
];
