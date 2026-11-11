import type { StyleId } from "@/lib/style";

export const business = {
  name: "Moderne Bouw",
  person: "Hussein",
  role: "Aannemer",
  city: "Emmen",
  province: "Drenthe",
  street: "Boslaan 20K",
  postal: "7822 EN",
  phoneDisplay: "06 87747711",
  phoneTel: "+31687747711",
  whatsapp: "https://wa.me/31687747711",
  maps: "https://www.google.com/maps/search/?api=1&query=Boslaan+20K%2C+7822+EN+Emmen",
} as const;

export const hours = [
  {
    days: "Maandag – vrijdag",
    time: "07:30 – 17:30",
    schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "17:30",
  },
  {
    days: "Zaterdag",
    time: "08:00 – 13:00, op afspraak",
    schemaDays: ["Saturday"],
    opens: "08:00",
    closes: "13:00",
  },
  {
    days: "Zondag",
    time: "Gesloten",
    schemaDays: [] as string[],
    opens: "",
    closes: "",
  },
] as const;

export const nav = [
  { href: "/diensten", label: "Diensten" },
  { href: "/stijlen", label: "Stijlen" },
  { href: "/over", label: "Over Hussein" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappHref(message?: string) {
  if (!message) return business.whatsapp;
  return `${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Hallo Hussein, ik wil graag een opname plannen voor een klus in of rond Emmen.";

export type ServiceGroup = "afwerking" | "ruimtes" | "techniek";

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroup;
  short: string;
  lede: string;
  image: string;
  alt: string;
  points: string[];
  note?: string;
};

export const groups: { id: ServiceGroup; title: string; text: string }[] = [
  {
    id: "afwerking",
    title: "Afwerking",
    text: "Het werk dat een ruimte pas af maakt: verf, wanden, vloeren, naden en hout dat nog een keer mee kan.",
  },
  {
    id: "ruimtes",
    title: "Ruimtes",
    text: "Keukens, badkamers, deuren en standaard ramen. Geplaatst, aangesloten en netjes opgeleverd.",
  },
  {
    id: "techniek",
    title: "Techniek en montage",
    text: "Water, afvoer, klein elektrisch werk, sloop en montage. Als onderdeel van de klus, niet als losse belofte.",
  },
];

export const services: Service[] = [
  {
    slug: "schilderwerk",
    title: "Schilderwerk",
    group: "afwerking",
    short: "Binnenwerk met strakke randen en een kamer die weer bewoonbaar aanvoelt.",
    lede: "Muren, plafonds en houtwerk. Hussein dekt af voordat er een kwast aan te pas komt, schildert nauwkeurig en laat de ruimte opgeruimd achter.",
    image: "/images/schilderwerk.jpg",
    alt: "Sfeerbeeld van een muur die egaal blauw wordt geschilderd met een roller.",
    points: [
      "Binnenschilderwerk van muren, plafonds en houtwerk",
      "Afplakken en afdekken voordat het werk begint",
      "Strakke randen en een gelijkmatige dekking",
      "Oplevering waarbij de kamer weer netjes is",
    ],
  },
  {
    slug: "gipsplaten",
    title: "Gipsplaten",
    group: "afwerking",
    short: "Wanden en plafonds die recht staan en klaar zijn voor verf.",
    lede: "Een nieuwe indeling, een voorzetwand of een plafond. Gipsplaten worden strak gezet, naden netjes afgewerkt, zodat de volgende laag erop kan.",
    image: "/images/gipsplaten.jpg",
    alt: "Sfeerbeeld van een wand die glad wordt afgewerkt met een pleisterspaan.",
    points: [
      "Scheidingswanden en voorzetwanden",
      "Plafonds in bestaande kamers",
      "Naden en schroefgaten klaar voor verdere afwerking",
      "Recht werken, ook als de rest van het huis al bewoond is",
    ],
  },
  {
    slug: "laminaat",
    title: "Laminaat",
    group: "afwerking",
    short: "Een vloer die vlak ligt en schoon wordt opgeleverd.",
    lede: "Laminaat leggen is precisiewerk aan de randen. Ondervloer, aansluiting op deuren en plinten, en een vloer die u daarna weer kunt belopen.",
    image: "/images/laminaat.jpg",
    alt: "Sfeerbeeld van een lichte houten vloer in een rustige hal met een witte deur.",
    points: [
      "Laminaat in woon- en slaapkamers",
      "Aansluiten op dorpels en bestaande deuren",
      "Plinten en afwerking langs de kant",
      "Zaagstof opgeruimd, niet in de hoeken achtergelaten",
    ],
  },
  {
    slug: "kitwerk",
    title: "Kitwerk",
    group: "afwerking",
    short: "Naden die strak zijn en dicht blijven.",
    lede: "Kit is het verschil tussen bijna af en echt af. Hussein snijdt naden langs sanitair, keukenblad, kozijn en plint, en vervangt kit die loslaat.",
    image: "/images/kitwerk.jpg",
    alt: "Sfeerbeeld van een afgewerkte badkamer met glaswand, wastafel en strakke naden.",
    points: [
      "Sanitair, douche en wastafel",
      "Keukenbladen en aansluitingen op de wand",
      "Kozijnen, plinten en kieren",
      "Oude kit verwijderen en opnieuw zetten",
    ],
  },
  {
    slug: "houtreparatie",
    title: "Houtreparatie",
    group: "afwerking",
    short: "Rot en beschadigd hout hersteld, klaar voor verf.",
    lede: "Kozijnen, dorpels en betimmering die nog niet vervangen hoeven te worden. Repareren, schuren en daarna meenemen in het schilderwerk.",
    image: "/images/hout.jpg",
    alt: "Sfeerbeeld van handen die een stuk hout aftekenen op een werkbank.",
    points: [
      "Houtrot en beschadigingen",
      "Kozijnen, dorpels en betimmering",
      "Herstel dat meegenomen wordt in het schilderwerk",
      "Kleine reparaties zonder meteen alles te vervangen",
    ],
  },
  {
    slug: "keukens",
    title: "Keukens",
    group: "ruimtes",
    short: "Montage, aansluiten en afwerken tot de laatste plint.",
    lede: "Een keuken is pas af als de fronten recht hangen, het water doet wat het moet doen en de naden dicht zijn. Hussein monteert, sluit aan en denkt mee.",
    image: "/images/keukens.jpg",
    alt: "Sfeerbeeld van een lichte keuken met witte kasten, kookplaat en stenen blad.",
    points: [
      "Montage van keukens",
      "Aansluiten op water en afvoer",
      "Stellen van fronten",
      "Kitwerk langs blad en wand",
    ],
    note: "Nieuw groepenkastwerk hoort bij een elektricien. Klein aansluitwerk binnenshuis kan Hussein meenemen in de klus.",
  },
  {
    slug: "badkamers",
    title: "Badkamers",
    group: "ruimtes",
    short: "Sanitair plaatsen, aansluiten en waterdicht afwerken.",
    lede: "Sanitair, leidingen en kit in één hand. De badkamer wordt schoon opgeleverd, met het water waar het hoort.",
    image: "/images/badkamers.jpg",
    alt: "Sfeerbeeld van een witte badkamer met wastafel, toilet en lambrisering.",
    points: [
      "Plaatsen en aansluiten van sanitair",
      "Water- en afvoerleidingen",
      "Kitwerk langs bad, douche en wastafel",
      "Afwerking zodat de ruimte weer gebruiksklaar is",
    ],
  },
  {
    slug: "deuren",
    title: "Deuren",
    group: "ruimtes",
    short: "Binnendeuren hangen en stellen tot ze rustig sluiten.",
    lede: "Een deur moet dichtvallen zonder te slepen. Hussein hangt en stelt deuren zodat ze recht in het kozijn zitten en blijven werken.",
    image: "/images/deuren.jpg",
    alt: "Sfeerbeeld van een wit binnendeurkozijn met scharnier.",
    points: [
      "Plaatsen en afhangen van binnendeuren",
      "Stellen van scharnieren en sloten",
      "Aansluiten op bestaand kozijnwerk",
      "Montage die ook na een paar weken nog klopt",
    ],
  },
  {
    slug: "ramen",
    title: "Ramen",
    group: "ruimtes",
    short: "Standaard ramen plaatsen en rondom afwerken.",
    lede: "Standaard ramen, geplaatst en aangesloten op het bestaande werk. Een raam dat sluit, met kit waar het de wand of de gevel raakt.",
    image: "/images/ramen.jpg",
    alt: "Sfeerbeeld van een eethoek met grote ramen op de tuin.",
    points: [
      "Plaatsen van standaard ramen",
      "Aansluiten op bestaand kozijnwerk",
      "Afwerking rond het raam",
      "Kitwerk op de naad",
    ],
    note: "Het gaat om standaard ramen, niet om een volledige pui of maatwerkgevel.",
  },
  {
    slug: "leidingen",
    title: "Water en afvoer",
    group: "techniek",
    short: "Leidingwerk voor keuken, badkamer en bijkeuken.",
    lede: "Water erin, afvoer eruit, zonder lekken en zonder een spoor van de klus op de vloer. Hussein werkt de leidingen weg waar de situatie dat toelaat.",
    image: "/images/leidingen.jpg",
    alt: "Sfeerbeeld van handen die een waterleiding onder een aanrecht aandraaien.",
    points: [
      "Waterleidingen",
      "Afvoerleidingen",
      "Aansluitingen voor keuken, badkamer en bijkeuken",
      "Weggewerkt waar dat in de bestaande situatie kan",
    ],
  },
  {
    slug: "elektra",
    title: "Klein elektrisch werk",
    group: "techniek",
    short: "Aansluitwerk binnenshuis, naast de grotere klus.",
    lede: "Een lamp, een punt, de apparaten bij een keuken. Klein elektrisch aansluitwerk binnenshuis, als onderdeel van de verbouwing.",
    image: "/images/elektra.jpg",
    alt: "Sfeerbeeld van een hanglamp, passend bij klein elektrisch aansluitwerk.",
    points: [
      "Klein aansluitwerk binnenshuis",
      "Aansluiten rond keuken en verbouwing",
      "Netjes weggewerkt",
      "Afgestemd op wat de klus echt nodig heeft",
    ],
    note: "De groepenkast, nieuwe groepen en het werk van een erkend installateur blijven buiten deze dienst.",
  },
  {
    slug: "sloopwerk",
    title: "Sloopwerk",
    group: "techniek",
    short: "Uitbreken met beleid, zodat de rest blijft staan.",
    lede: "Een keuken, een wand of een vloer die weg moet. Hussein breekt uit wat weg moet, beschermt wat blijft, en laat de ruimte achter om in verder te werken.",
    image: "/images/sloopwerk.jpg",
    alt: "Sfeerbeeld van een woning in verbouwing, met gestript stucwerk en puin.",
    points: [
      "Uitbreken van keukens, badkamers en betimmering",
      "Verwijderen van vloeren en wanden",
      "Beschermen van wat blijft zitten",
      "Ruimte achtergelaten zodat de volgende stap kan beginnen",
    ],
    note: "Afvoer van puin spreken we vooraf af. Er staat niet standaard een container klaar.",
  },
  {
    slug: "montage",
    title: "Montage",
    group: "techniek",
    short: "In elkaar zetten, ophangen en vastzetten.",
    lede: "Kasten, interieur en onderdelen die gemonteerd moeten worden. Recht, stevig, en zonder beschadigde muren.",
    image: "/images/montage.jpg",
    alt: "Sfeerbeeld van handen die een scharnier in een wit kozijn vastzetten.",
    points: [
      "Montage van meubels en interieuronderdelen",
      "Ophangen en vastzetten",
      "Stellen tot het recht staat",
      "Verpakking en restmateriaal meegenomen uit de kamer",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(slug: string) {
  const current = getService(slug);
  if (!current) return [];
  const same = services.filter((service) => service.group === current.group && service.slug !== slug);
  const rest = services.filter((service) => service.group !== current.group && service.slug !== slug);
  return [...same, ...rest].slice(0, 3);
}

export const styleChoices: {
  id: StyleId;
  label: string;
  image: string;
  alt: string;
}[] = [
  {
    id: "modern",
    label: "Modern",
    image: "/images/stijl-modern.jpg",
    alt: "Sfeerbeeld van een lichte moderne woonkamer met hoge ramen.",
  },
  {
    id: "klassiek",
    label: "Klassiek",
    image: "/images/stijl-klassiek.jpg",
    alt: "Sfeerbeeld van een warme woonkamer met hout, leer en hoge ramen.",
  },
  {
    id: "landelijk",
    label: "Landelijk",
    image: "/images/stijl-landelijk.jpg",
    alt: "Sfeerbeeld van een landelijke keuken met houten stoelen en witte kasten.",
  },
];

export const steps = [
  {
    title: "U stuurt een bericht",
    text: "Een paar regels over de klus zijn genoeg. WhatsApp of het formulier, wat u het prettigst vindt.",
  },
  {
    title: "Opname bij u thuis",
    text: "Hussein komt langs, kijkt zelf en denkt mee. U zit nergens aan vast tot u een prijs en een planning afspreekt.",
  },
  {
    title: "Een heldere afspraak",
    text: "Wat er gebeurt, wanneer het gebeurt, en voor welke prijs. Dat ligt vast voordat het werk begint.",
  },
  {
    title: "Netjes opgeleverd",
    text: "Hij werkt zelf, ruimt op en geeft garantie op de werkzaamheden. Dezelfde persoon van het eerste bericht tot de laatste naad.",
  },
] as const;

export const promises = [
  {
    title: "Eén aanspreekpunt",
    text: "Geen balie en geen wisselende ploeg. U spreekt Hussein, en Hussein doet het werk.",
  },
  {
    title: "Nauwkeurig",
    text: "Randen, naden en de staat waarin de kamer wordt achtergelaten. Daar wordt hij op beoordeeld.",
  },
  {
    title: "Op tijd",
    text: "Opdrachtgevers noemen de oplevering als iets wat klopt. De planning is onderdeel van de afspraak.",
  },
  {
    title: "Meedenkend",
    text: "Hij neemt tijd voor de klus en denkt mee voordat hij begint, niet pas als het misgaat.",
  },
  {
    title: "Garantie",
    text: "Op de werkzaamheden die hij oplevert. Geen kleine lettertjes op deze site, wel een vakman die er zelf voor staat.",
  },
  {
    title: "Particulier en zakelijk",
    text: "Een deur, een badkamer of een grotere verbouwing. Vanuit Emmen, in Drenthe.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Uitstekende service en zeer hoge professionaliteit. Al het werk was nauwkeurig en de oplevering gebeurde op tijd. Ik raad aan om met hen samen te werken.",
    source: "Werkspot",
    when: "2 weken geleden",
    name: "Opdrachtgever via Werkspot",
    featured: true,
  },
  {
    quote:
      "Wat is dit goed gedaan !! Een rustige , nette jongen. Werkt netjes en laat het perfect achter.. kortom algeheel positief !!",
    source: "Werkspot",
    when: "een maand geleden",
    name: "Opdrachtgever via Werkspot",
    featured: true,
  },
  {
    quote:
      "10 out of 10! Mooi werk geleverd en zeer meedenkend en klantvriendelijk! Rustige man die tijd neemt voor je klus",
    source: "Werkspot",
    when: "een maand geleden",
    name: "Opdrachtgever via Werkspot",
    featured: true,
  },
  {
    quote:
      "Hussein is een vakman die op relatieve jonge leeftijd al veel ervaring heeft en veel heeft gezien.",
    source: "Werkspot",
    when: "4 dagen geleden",
    name: "Opdrachtgever via Werkspot",
    featured: true,
  },
] as const;

export const shortReviews = [
  { name: "Nataliya Love", text: "Mooi", source: "Google" },
  { name: "فيديو الامير", text: "", source: "Google" },
  { name: "A Fraay", text: "", source: "Google" },
] as const;

export const faqs = [
  {
    q: "Komt Hussein eerst kijken?",
    a: "Ja. Na een bericht plant hij een opname. U zit nergens aan vast tot u een prijs en een planning afspreekt.",
  },
  {
    q: "Werkt hij met een ploeg?",
    a: "Nee. Moderne Bouw is Hussein. Dezelfde persoon neemt op, werkt en levert op.",
  },
  {
    q: "Doet hij ook kleine klussen?",
    a: "Ja. Een deur, kitwerk, een reparatie of een vloer. Kleine klussen zijn welkom, net als een badkamer of keuken.",
  },
  {
    q: "Geeft hij garantie?",
    a: "Ja, op de werkzaamheden die hij oplevert.",
  },
  {
    q: "Werkt hij in het weekend?",
    a: "Zaterdag van 08:00 tot 13:00, op afspraak. Zondag is hij gesloten. WhatsApp mag daarbuiten; hij antwoordt de eerstvolgende werkdag.",
  },
  {
    q: "In welke plaatsen werkt hij?",
    a: "Hij is gevestigd aan de Boslaan in Emmen en komt langs in Emmen en de rest van Drenthe.",
  },
] as const;
