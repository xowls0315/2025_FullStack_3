const data = [
  {
    color: "#ff731c",
    company: "Voonyx",
    university: "University of Chieti",
    paragraph: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#37ec1c",
    company: "Npath",
    university: "Sevastopol National Technical University",
    paragraph:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#4562f1",
    company: "Flipopia",
    university: "Southwest Missouri State University - West Plains",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#062064",
    company: "Zazio",
    university: "School of Slavonic and East European Studies, University of London",
    paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#5e6531",
    company: "Topicblab",
    university: "An-Najah National University",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    color: "#547ed7",
    company: "Jaloo",
    university: "University of Health Sciences",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#2995c3",
    company: "Flashspan",
    university: "Dublin City University",
    paragraph: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#6e0a51",
    company: "Tekfly",
    university: "Rockhurst College",
    paragraph: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  { color: "#c69891", company: "InnoZ", university: "Baku State University", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#3db8f5",
    company: "Mydo",
    university: "Université de Lubumbashi",
    paragraph: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#6048a5",
    company: "Blogtags",
    university: "Canisius College",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  { color: "#15a61b", company: "Aibox", university: "Pharos International University", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#bb3c0f",
    company: "Brainlounge",
    university: "Washington State University, Spokane",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  { color: "#09ca3a", company: "Oyondu", university: "Fitchburg State College", paragraph: "Phasellus in felis. Donec semper sapien a libero. Nam dui." },
  {
    color: "#fc984b",
    company: "Podcat",
    university: "American Jewish University",
    paragraph:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#4af325",
    company: "Yambee",
    university: "Phillips-Universität Marburg",
    paragraph: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#57164f",
    company: "Edgeify",
    university: "Siberian Academy of Public Services",
    paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#9ef983",
    company: "Wordware",
    university: "Greenville College",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  { color: "#80b23a", company: "Dabvine", university: "Aikoku Gakuen University", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#89fb91",
    company: "Jaxspan",
    university: "Ecole Nationale Supérieure d'Ingénieurs en Mécanique et Energétique de Valenciennes",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#dee5e8",
    company: "Twitterbeat",
    university: "Gondar University",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#d85934",
    company: "Photojam",
    university: "Marymount Manhattan College",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#ab37e7",
    company: "Kwimbee",
    university: "Mary Washington College",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#7d2268",
    company: "Meedoo",
    university: "Tokyo University of Art and Design",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#ad0f86",
    company: "Thoughtsphere",
    university: "Michigan Technological University",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#ea1259",
    company: "Zoomcast",
    university: "Thammasat University",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#0051f0",
    company: "Realcube",
    university: "Armed Forces Academy of General Milan Rastislav Štefánik",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#65ee60",
    company: "Yodoo",
    university: "University of Papua New Guinea",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#5d808a",
    company: "Wikivu",
    university: "Imam Sadiq University",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#20a318",
    company: "Brainsphere",
    university: "Kyungsung University",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#268a23",
    company: "Yodoo",
    university: "Instituto Politécnico de Viana do Castelo",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  {
    color: "#e3e465",
    company: "Fivechat",
    university: "Universidad Pedagógica Veracruzana",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#5f5e5b",
    company: "Meevee",
    university: "Fachhochschule Augsburg",
    paragraph: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#9eb470",
    company: "Quimba",
    university: "Technological University (West Yangon)",
    paragraph: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#336793",
    company: "Meeveo",
    university: "Université Quisqueya",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#d137d5",
    company: "Minyx",
    university: "Campus Bio-Medico University of Rome",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#2a425a",
    company: "Flashset",
    university: "Indiana University-Purdue University at Indianapolis",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#aa70d2",
    company: "Kamba",
    university: "Blackburn College",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#fc3d90",
    company: "Trudeo",
    university: "Central Mindanao University",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#55ee22",
    company: "Cogilith",
    university: "Seattle University",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#571d06",
    company: "Topicshots",
    university: "Shukutoku University",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#f4b8aa",
    company: "Devify",
    university: "University of Mustansiriyah",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#c151d2",
    company: "Meeveo",
    university: "Warsaw School of Social Psychology",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#c99b55",
    company: "Twitterlist",
    university: "Ecole Européen des Affaires",
    paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#8bfc7d",
    company: "Feedspan",
    university: "American University of Antigua",
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#537576",
    company: "Lajo",
    university: "Warner Pacific College",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  { color: "#5ddc9e", company: "Fatz", university: "Muadzam Shah Polytechnic", paragraph: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris." },
  {
    color: "#478cf5",
    company: "Reallinks",
    university: "Medical Academy Ludwik Rydygier in Bydgoszcz",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#fbd390",
    company: "Twitterbeat",
    university: "University of Saint La Salle",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#3f38d7",
    company: "Leenti",
    university: "Northern Arizona University",
    paragraph:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#5099aa",
    company: "Jatri",
    university: "National Taitung Teachers College",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#1407e2",
    company: "Yadel",
    university: "Berean University of the Assemblies of God",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  { color: "#1dcef8", company: "Divanoodle", university: "Karwan Institute of Higher Education", paragraph: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio." },
  {
    color: "#bb07c7",
    company: "Meeveo",
    university: "Heartland Baptist Bible College",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  { color: "#447fb3", company: "Jabbersphere", university: "Afeka Tel Aviv Academic College of Engineering", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#59d714",
    company: "Mydeo",
    university: "University of Ilorin",
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#b6cc70",
    company: "JumpXS",
    university: "State University of New York College of Technology at Farmingdale",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#f348ae",
    company: "Gevee",
    university: "Nanzan University",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#7b58ac",
    company: "Tazz",
    university: "Karlstad University",
    paragraph: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#503858",
    company: "Talane",
    university: "St. Petersburg State Electrotechnical University",
    paragraph: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#439262",
    company: "Zoonoodle",
    university: "Kolej Universiti Insaniah",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#85da5c",
    company: "Meedoo",
    university: "Gemsville Technical University",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#89b7f1",
    company: "Quinu",
    university: "Franklin College Switzerland",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  { color: "#98bacb", company: "Gigabox", university: "Vladimir State University", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  { color: "#dae455", company: "Snaptags", university: "Shandong University of Technology", paragraph: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh." },
  {
    color: "#e7a399",
    company: "Rhyloo",
    university: "University of Madras",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#5bbeb8",
    company: "Brightdog",
    university: "Fachhochschule Niederrhein",
    paragraph: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#35937c",
    company: "Oozz",
    university: "Universidad Motolinía del Pedegral",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#721177",
    company: "Realmix",
    university: "Multimedia University",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#c19cf9",
    company: "Tagchat",
    university: "Universidad Autónoma de Madrid",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#0c3657",
    company: "Janyx",
    university: "Azerbaijan Toursim Institute",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#e0328a",
    company: "Voonder",
    university: "University of Shiga Prefecture",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#48ca4a",
    company: "Rhycero",
    university: "Al-Zaiem Al-Azhari University",
    paragraph: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#2ca94e",
    company: "Dabtype",
    university: "Universidad Técnica del Norte",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#f7e3ff",
    company: "Yabox",
    university: "Bila Cerkva State Agrarian University",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#5a7b74",
    company: "Lajo",
    university: "Tianjin University of Finance & Economics",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#e71428",
    company: "Roomm",
    university: "California State University, Channel Islands",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#b34437",
    company: "Flashspan",
    university: "Monash University, Malaysia Campus",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#bcd990",
    company: "Trudeo",
    university: "Evangelische Fachhochschule Berlin, Fachhochschule für Sozialarbeit und Sozialpädagogik",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#a9dda3",
    company: "Meembee",
    university: "Ecole Nationale Supérieure de Physique de Marseille",
    paragraph: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  { color: "#40de49", company: "Gabtype", university: "Mohan Lal Sukhadia University", paragraph: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh." },
  {
    color: "#0616f1",
    company: "Kanoodle",
    university: "Universidad Nacional de la Patagonia Austral",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  { color: "#e656a3", company: "Oyonder", university: "Andrew Jackson University", paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus." },
  {
    color: "#fb9635",
    company: "Shuffledrive",
    university: "Mennonite College of Nursing",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#60e99b",
    company: "Kamba",
    university: "University of Charleston",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#daa92f",
    company: "Snaptags",
    university: "Le Moyne College",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#ddf8d7",
    company: "Jaxnation",
    university: "City University of New York, Queens College",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#8b6c99",
    company: "Rhynoodle",
    university: "Jazan University",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#3a9008",
    company: "Babbleset",
    university: "Sarajevo Film Academy",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#5c2280",
    company: "Roodel",
    university: "Puntland State University",
    paragraph: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  { color: "#65794b", company: "Edgeclub", university: "Shokei College", paragraph: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus." },
  {
    color: "#c67ab6",
    company: "Trunyx",
    university: "Lakshmibai National Institute of Physical Education",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#250e32",
    company: "Mynte",
    university: "University of Chieti",
    paragraph: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#edfc0e",
    company: "Livefish",
    university: "Liceo de Cagayan University",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#90450d",
    company: "Voonte",
    university: "University of Eldoret",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#4e4a21",
    company: "Quinu",
    university: "New York Instiute of Technology",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#dde843",
    company: "Eire",
    university: "Tartu Health Care College",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#44b41b",
    company: "JumpXS",
    university: "Georgia College & State University",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#740944",
    company: "Layo",
    university: "Gujarat Technological University Ahmedabad",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#ad4db0",
    company: "Linkbuzz",
    university: "Universidad Catolica del Maule",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  { color: "#7db07d", company: "Skinix", university: "California State University, Long Beach", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#ab0cf2",
    company: "Mudo",
    university: "Jagannath University",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#1dd4ad",
    company: "Flipopia",
    university: "Mongolian State University of Agriculture",
    paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#21151e",
    company: "Bubblebox",
    university: "Turkish Military Academy",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#0f96ed",
    company: "Kwimbee",
    university: "Universidad Privada de Santa Cruz de la Sierra",
    paragraph: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#d5a016",
    company: "Avavee",
    university: "Universitas Darma Persada",
    paragraph: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#8379dd",
    company: "Camimbo",
    university: "Helwan University",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    color: "#08c1d3",
    company: "Youspan",
    university: "California Western School of Law",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  { color: "#664c16", company: "Topicware", university: "Instituto Politécnico de Setúbal", paragraph: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat." },
  { color: "#b8f94f", company: "Rhybox", university: "Universität Potsdam", paragraph: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus." },
  {
    color: "#52d58a",
    company: "Eazzy",
    university: "East-West University, Mohakhali",
    paragraph:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  { color: "#46adbb", company: "Mynte", university: "Technical University in Zvolen", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  { color: "#aeb6aa", company: "Meevee", university: "Hong Bang University International", paragraph: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum." },
  {
    color: "#0b6f7a",
    company: "Jaxspan",
    university: "Belarussian State Technological University",
    paragraph: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  { color: "#1f7db8", company: "Blogtags", university: "State University of New York College at Purchase", paragraph: "Phasellus in felis. Donec semper sapien a libero. Nam dui." },
  {
    color: "#39c9c1",
    company: "Flipbug",
    university: "Université de Liège",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  { color: "#0339a2", company: "Leenti", university: "University of California, San Francisco", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#584276",
    company: "Gigaclub",
    university: "American InterContinental University Online",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#923721",
    company: "Rhyloo",
    university: "British Columbia Open University",
    paragraph: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#39bac2",
    company: "Topicstorm",
    university: 'University for Information Science and Technology  "St. Paul The Apostle" ',
    paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#0b0f73",
    company: "Brightbean",
    university: "Bluffton College",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#fe0bbf",
    company: "Kwideo",
    university: "Charter Oak State College",
    paragraph:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { color: "#f389d9", company: "Kimia", university: "Hainan University", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#2c6b3f",
    company: "Demimbu",
    university: "Chukyo Women's University",
    paragraph: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#3d6128",
    company: "Fliptune",
    university: "Ecole des Hautes Etudes Commerciales du Nord",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#b33f98",
    company: "Buzzbean",
    university: "Ecole Nationale des Sciences Géographiques",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#897304",
    company: "Realmix",
    university: "Universitas Indonusa Esa Unggul",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  { color: "#4c59f7", company: "Kaymbo", university: "Salem International University", paragraph: "Sed ante. Vivamus tortor. Duis mattis egestas metus." },
  {
    color: "#31fd5d",
    company: "Rhybox",
    university: "Institut des Hautes Etudes de Management",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#f62869",
    company: "Voomm",
    university: "Instituto Superior D. Afonso III - INUAF",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#acaf5a",
    company: "Skinte",
    university: "Kandahar University",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  { color: "#5fb7d4", company: "Voolith", university: "Koyasan University", paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem." },
  {
    color: "#c34166",
    company: "Bluejam",
    university: "Universidad Católica Boliviana, La Paz",
    paragraph: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#5e6e42",
    company: "Npath",
    university: "University of Gadarif",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#43e38e",
    company: "Photospace",
    university: "Southwest Jiaotong University",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#c683d5",
    company: "Abatz",
    university: "Ashkelon Academic College",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#a0fd43",
    company: "Photobug",
    university: "Philander Smith College",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#7f92b5",
    company: "Plambee",
    university: "Institut National des Sciences Appliquées de Toulouse",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#870ae5",
    company: "Fivebridge",
    university: "Mekelle University",
    paragraph: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  { color: "#4c90a2", company: "DabZ", university: "Eureka College", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#bbcb0f",
    company: "Skyba",
    university: "Institute of Latin American Studies, University of London",
    paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#481693",
    company: "Shufflester",
    university: "Nova Scotia Agricultural College",
    paragraph: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#d709c5",
    company: "Jabbersphere",
    university: "Fachhochschule Salzburg",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#2ec80d",
    company: "Kazio",
    university: "Yamagata University",
    paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#3ae3be",
    company: "InnoZ",
    university: "University of Western Macedonia",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#d26f4a",
    company: "Jaxnation",
    university: "Northern Alberta Institute of Technology",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#950dcf",
    company: "Pixoboo",
    university: "Ulyanovsk State Agricultural Academy",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#5a7a62",
    company: "Skyndu",
    university: "Lithuania Christian College",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#072393",
    company: "Bluejam",
    university: 'Universidad Distral "Francisco José de Caldas"',
    paragraph: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#1bca27",
    company: "Eamia",
    university: "Shanghai Lixin University of Commerce",
    paragraph:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    color: "#99195d",
    company: "Eadel",
    university: "Altai State Technical University",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#abf025",
    company: "Kare",
    university: "Shandong University of Science and Technology",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#34e670",
    company: "Gabtune",
    university: "Akademie der bildenden Künste Wien",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
  {
    color: "#4a7965",
    company: "Einti",
    university: "Indiana Institute of Technologyy",
    paragraph:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#3f7a68",
    company: "Jatri",
    university: "Universidad de Artes, Ciencias y Comunicación",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#90d8bc",
    company: "Gigaclub",
    university: "Universidade Salgado de Oliveira",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#e1479b",
    company: "Livetube",
    university: "Uzhgorod National University",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#510362",
    company: "Devcast",
    university: "Iwate University",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#c5ed5b",
    company: "Trunyx",
    university: "Women's University in Africa",
    paragraph:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    color: "#5286c6",
    company: "Brightdog",
    university: "Institute of Advanced Legal Studies, University of London",
    paragraph: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  { color: "#95de22", company: "Brainsphere", university: "October 6 university", paragraph: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet." },
  {
    color: "#370181",
    company: "Muxo",
    university: "Harrington Institute of Interior Design",
    paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#57e5d2",
    company: "Fiveclub",
    university: "National Military Academy of Afghanistan",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  { color: "#c8a981", company: "Tagcat", university: "East-West University", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#0779e5",
    company: "Skimia",
    university: "North Eastern Hill University",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#e631e0",
    company: "Jaxnation",
    university: "Korea National University of Physical Education",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  { color: "#e117c4", company: "Voonder", university: "China Three Gorges University", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#3b25e1",
    company: "Youbridge",
    university: "Universidad Internacional de Andalucía",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#8aee8b",
    company: "Jaxbean",
    university: "Technological Education Institute of Thessaloniki",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#078d37",
    company: "Devshare",
    university: "Ecole Nationale des Travaux Publics de l'Etat",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#dfbef4",
    company: "Youspan",
    university: "Université Panthéon-Sorbonne (Paris I)",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#fc0e69",
    company: "Meeveo",
    university: "Anhui Technical College of Water Resources and Hydroelectric Power",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#9b0ea5",
    company: "Divavu",
    university: "Universidad Politécnica de El Salvador",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#1d6aa6",
    company: "Meembee",
    university: "Izhevsk State Technical University",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  { color: "#849fbc", company: "Tavu", university: "Technological University (Pyay)", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#bd9c0f",
    company: "Brainsphere",
    university: "Marymount University",
    paragraph: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#9b7406",
    company: "Riffpath",
    university: "Daiichi College of Pharmaceutical Sciences",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#68fa68",
    company: "Oyoyo",
    university: "Christian Brothers University",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#6a44cd",
    company: "Ooba",
    university: "City University",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#567a4f",
    company: "Skipstorm",
    university: 'University Institute of Teacher Training "Suor Orsola Benincasa"',
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  { color: "#8c4828", company: "Wikizz", university: "University of South Carolina - Union", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#4b0a62",
    company: "Mydo",
    university: "Zia-ud-Din Medical University",
    paragraph: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#bfa1ad",
    company: "Skyndu",
    university: "Dongduk Women's University",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#808ca1",
    company: "Vipe",
    university: "Eindhoven University of Technology",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#3c09a1",
    company: "Skipfire",
    university: "Anhui University of Finance and Economics",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#a0371a",
    company: "Jaxnation",
    university: "Universitas Trilogi",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#3f5324",
    company: "Rhyzio",
    university: "Darul Quran Islamic College University",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#2c52ca",
    company: "Linklinks",
    university: "Midway College",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#c2e83e",
    company: "Yabox",
    university: "Botho University",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#753cd3",
    company: "Flipopia",
    university: "Cornell University",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  { color: "#2a7032", company: "Skimia", university: "Islamic Azad University, Shiraz", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#d6c892",
    company: "Linkbridge",
    university: "Ecole Normale Supérieure de Fontenay-Saint Cloud",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#4a44a2",
    company: "Mydeo",
    university: "Barkatullah University",
    paragraph: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#f0227f",
    company: "Realbuzz",
    university: "Sadra University",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#eadfa4",
    company: "Mynte",
    university: "European Carolus Magnus University",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#03bf4c",
    company: "Flipopia",
    university: "Universiti Malaysia Perlis",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#3cfafa",
    company: "Digitube",
    university: "Islamic University of Technology",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#27ceb9",
    company: "Topiclounge",
    university: "University of the Sunshine Coast",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#a58a5a",
    company: "Abata",
    university: "University of Education Hradec Kralove",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#dbb76b",
    company: "Voonyx",
    university: "Alabama Agricultural and Mechanical University",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  { color: "#7e7a4d", company: "Leexo", university: "Universidad de Santiago de Compostela", paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus." },
  { color: "#6f7523", company: "Trupe", university: "Lander University", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#2d00c7",
    company: "Cogidoo",
    university: "Hebei Agricultural University",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#6eb21a",
    company: "Janyx",
    university: "Tumkur University",
    paragraph: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#994b0d",
    company: "Quamba",
    university: "Kirikkale University",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#0ff9c3",
    company: "Brainsphere",
    university: "Islamic Azad University, Maybod",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#e7a077",
    company: "Skaboo",
    university: "Tripura University",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#c727f9",
    company: "Browsebug",
    university: "Stetson University",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  { color: "#c06c25", company: "Wordify", university: "Hanover College", paragraph: "Phasellus in felis. Donec semper sapien a libero. Nam dui." },
  {
    color: "#c2063e",
    company: "BlogXS",
    university: "University of Oradea",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#8ccb29",
    company: "Riffpath",
    university: "University of Witwatersrand",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#8ef5f5",
    company: "Pixoboo",
    university: "Dalanj University",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  { color: "#2d8a30", company: "Realpoint", university: "University of Kentucky", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#771b81",
    company: "Tazz",
    university: "Hyupsung University",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#82f033",
    company: "Jaxworks",
    university: "DeVry Institute of Technology, Phoenix",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#d25a17",
    company: "Jaxspan",
    university: "Universidad Isaac Newton",
    paragraph: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#4d9eed",
    company: "Quatz",
    university: "North South University",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#76988c",
    company: "Dabvine",
    university: "Senshu University",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#95015e",
    company: "Devpoint",
    university: "Norwegian University of Sport and Physical Education",
    paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#a906fc",
    company: "Twitternation",
    university: "Vladivostock State University of Economics",
    paragraph: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#ae22f6",
    company: "Yoveo",
    university: "Chinese University of Hong Kong",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#efa20d",
    company: "Realcube",
    university: "South Florida Bible College & Theological Seminary",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#dc91b3",
    company: "InnoZ",
    university: "West Virginia School of Osteopathic Medicine",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#10ed64",
    company: "Zoomcast",
    university: "Kanto Gakuin University",
    paragraph: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#caa1bc",
    company: "Jabberstorm",
    university: "Omsk State Pedagogical University",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#645f12",
    company: "Wikizz",
    university: "Medizinische Universität Wien",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#8d3850",
    company: "Vidoo",
    university: "Université Paul Valéry (Montpellier III)",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#b9f2ef",
    company: "Eidel",
    university: "Université Rennes II - Haute-Bretagne",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#bb8204",
    company: "Kare",
    university: "Universitas Syiah Kuala",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#f92fcb",
    company: "Twimbo",
    university: "Winthrop University",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#016a91",
    company: "Wikivu",
    university: "Jingdezhen China Institute",
    paragraph: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#ea711b",
    company: "Livetube",
    university: "Millikin University",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#ce7506",
    company: "Buzzdog",
    university: "Universidad Catolica de La Santísima Concepción",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#b874cc",
    company: "Buzzdog",
    university: "Deen Dayal Upadhyay Gorakhpur University",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#157bae",
    company: "Kwinu",
    university: "Hogeschool Inholland",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#98cee6",
    company: "BlogXS",
    university: "Technical University of Koszalin",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#c692b0",
    company: "Trudeo",
    university: "Universidad Católica Tecnológica del Cibao",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#40716d",
    company: "Oodoo",
    university: "Matn University",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#ecff34",
    company: "Demimbu",
    university: "Bard College",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#8f63ff",
    company: "Skaboo",
    university: "Korea National University of Arts",
    paragraph: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#215545",
    company: "Browseblab",
    university: "Rivier College",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#f7e347",
    company: "Realbuzz",
    university: "Hainan University",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#c0805a",
    company: "Fatz",
    university: "European Institute of Education",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#24679c",
    company: "Avavee",
    university: "Hijiyama University",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#465d1b",
    company: "Roombo",
    university: "Universitas Ma Chung",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#0bc93f",
    company: "Yodoo",
    university: "Bergische Universität Gesamthochschule Wuppertal",
    paragraph: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  { color: "#2e35a6", company: "Edgeclub", university: "Northeast Normal University", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#b1b084",
    company: "Buzzbean",
    university: "Jacobs University Bremen",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#e8c70c",
    company: "Tagpad",
    university: "University of Bialystok",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#4afcd8",
    company: "Gabvine",
    university: "Gordon Conwell Theological Seminary",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#c81e08",
    company: "Oloo",
    university: "Tashkent State Agrarian University",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#ac126c",
    company: "Twinder",
    university: "Moshi University College of Cooperative and Business Studies",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  { color: "#5b48f1", company: "Meemm", university: "Institue of Historical Research, University of London", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#c149d7",
    company: "Skyble",
    university: "Manuel L. Quezon University",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#3cbe71",
    company: "Zoozzy",
    university: 'Universitatea de Vest "Vasile Goldi&#351;" ',
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#08547c",
    company: "Dazzlesphere",
    university: "Pontificia Università della Santa Croce",
    paragraph:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#1565fe",
    company: "Voonyx",
    university: "University of the Philippines Los Banos",
    paragraph:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#1ad78b",
    company: "Topicware",
    university: "Tanta University",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#809aa4",
    company: "Twiyo",
    university: "Chongqing University of Technology",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#9c5a2d",
    company: "Skipfire",
    university: "Universidad Nacional de Quilmes",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#662b11",
    company: "Blogtag",
    university: "COMSATS Institute of Information Technology",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  { color: "#08a439", company: "Wordtune", university: "Sibelius Academy", paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus." },
  { color: "#7d9659", company: "Mynte", university: "Centro Universitário Claretiano", paragraph: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet." },
  {
    color: "#5f3593",
    company: "Devshare",
    university: "College of St. Joseph",
    paragraph: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#7feb5e",
    company: "Tagpad",
    university: "Moscow State University of Railway Transport",
    paragraph: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#3c88cc",
    company: "Voonix",
    university: "St. Matthews University",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#ad503b",
    company: "Gabvine",
    university: "Sanno University",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#cd7031",
    company: "Abatz",
    university: "Fundación Universitaria Manuela Beltrán",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#1492ad",
    company: "Reallinks",
    university: "Universidad Mexicana del Noreste",
    paragraph: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    color: "#0f0cc2",
    company: "Mydeo",
    university: "Arab Open University",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#aa4efb",
    company: "Topicstorm",
    university: "Institut National Polytechnique de Toulouse",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#3d8613",
    company: "Bluezoom",
    university: "Islamic Azad University, Falavarjan ",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  { color: "#a845df", company: "Tagcat", university: "Universitas Negeri Medan", paragraph: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet." },
  {
    color: "#b6e834",
    company: "Tambee",
    university: "Lupane State University",
    paragraph: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#c5f43f",
    company: "JumpXS",
    university: "The Art Institutes International San Francisco",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#f5cf55",
    company: "Myworks",
    university: "Université du Havre",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#fb7aaf",
    company: "Flashspan",
    university: "University of Dundee",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  { color: "#cc038e", company: "Youopia", university: "Islamic Azad University, Aliabad ", paragraph: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet." },
  { color: "#a95e17", company: "Jaxspan", university: "Istanbul University", paragraph: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh." },
  {
    color: "#2f8a1b",
    company: "Meetz",
    university: "Fachhochschule Deggendorf",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#18120e",
    company: "Fivebridge",
    university: "Universidade de Nova Iguaçu",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#942978",
    company: "Gabtype",
    university: "International School of Management in Prešov",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#ecdc14",
    company: "Zoombeat",
    university: "Warburg Institute, University of London",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  { color: "#5ce6bb", company: "Oyondu", university: "University of Central Punjab", paragraph: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum." },
  {
    color: "#13fc29",
    company: "Meeveo",
    university: "Perlis Islamic Higher Learning Institute",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  { color: "#37ea50", company: "Kimia", university: "Iranian Academy of Persian Language and Literature", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#781f7c",
    company: "Quatz",
    university: "Central Institute of Higher Tibetan Studies",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#e96229",
    company: "Tagcat",
    university: "Beder University",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#60cd15",
    company: "Skibox",
    university: "Cranbrook Academy of Art",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  { color: "#fcd11a", company: "Babbleset", university: "Universidad Surcolombiana", paragraph: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat." },
  {
    color: "#cc2771",
    company: "Topiczoom",
    university: "Maine Maritime Academy",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#8bcbd7",
    company: "Camimbo",
    university: "Universidad Abierta Para Adultos",
    paragraph: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#12a334",
    company: "Skivee",
    university: "National Institute of Development Administration",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#83ee14",
    company: "Skyndu",
    university: "Regis University",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#5ea921",
    company: "Vimbo",
    university: "University College Bahrain",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#9ed05f",
    company: "Fivechat",
    university: "Afe Babalola University",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#f38f87",
    company: "Yozio",
    university: "Livingstone College",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#65e592",
    company: "Wikido",
    university: "Thi Qar University",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#5a28ba",
    company: "Aimbo",
    university: "Meijo University",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#688667",
    company: "Vipe",
    university: "National American University, Roseville",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#bf6d2a",
    company: "Linkbridge",
    university: "Emmanuel College Georgia",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#b31f0a",
    company: "Mycat",
    university: "Aichi University",
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#a1705b",
    company: "Quimba",
    university: 'Free University "Maria Santissima Assunta"',
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#92897c",
    company: "Tagtune",
    university: "Universidad Católica Santa María La Antigua",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  { color: "#0362b4", company: "Zoozzy", university: "Dohto University", paragraph: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat." },
  {
    color: "#4f2994",
    company: "Wordtune",
    university: "Universidad Abierta y a Distancia de Panama",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#27a114",
    company: "Youspan",
    university: "University of Sarajevo",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#8fd67e",
    company: "Skalith",
    university: "Russian-Armenian (Slavonic) State University",
    paragraph: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#69b213",
    company: "Flipbug",
    university: "Ecole Européenne de Chimie, Polymères et Matériaux de Strasbourg",
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#01ef56",
    company: "Oyope",
    university: "Universidade Federal de São Carlos",
    paragraph:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#d74a55",
    company: "Jabbertype",
    university: "Johnson State College",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#012cd3",
    company: "Meevee",
    university: "Universidad de San Pedro Sula",
    paragraph: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#07f35d",
    company: "Shufflester",
    university: "State Pedagogical University in Kryvyi Rih",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#ec70ec",
    company: "Browsebug",
    university: "City University of New York, College of Staten Island",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#5863f5",
    company: "Meembee",
    university: "Oregon College of Arts and Crafts",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  { color: "#690e64", company: "Ainyx", university: "Kean University of New Jersey", paragraph: "Sed ante. Vivamus tortor. Duis mattis egestas metus." },
  {
    color: "#a648d5",
    company: "Zoozzy",
    university: "University of Notre Dame Australia",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#e6247f",
    company: "Eabox",
    university: "New York Institute of Technology",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#3a5842",
    company: "Skibox",
    university: "Astrahan State Medical Academy",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#99cbff",
    company: "Eare",
    university: "Savannah College of Art and Design",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  { color: "#270f46", company: "Blogspan", university: "University of Pitesti", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#a261cf",
    company: "Skinte",
    university: "UCSI University",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#6b0530",
    company: "Mynte",
    university: "Avicenna International College",
    paragraph: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#bd2333",
    company: "Feedfire",
    university: "Science University of Tokyo in Yamaguchi",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#926421",
    company: "Tavu",
    university: "Paktia University",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#6b01aa",
    company: "Fadeo",
    university: "University of Veterinary Science",
    paragraph: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#49dcdf",
    company: "Tambee",
    university: "Universidad Ricardo Palma",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  { color: "#a82076", company: "Talane", university: "International University School of Medicine (IUSOM)", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#0801b5",
    company: "Vipe",
    university: "University of Palermo",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#a9f8d2",
    company: "Flashspan",
    university: "Missouri Valley College",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#a8348a",
    company: "Yombu",
    university: "Universitas Jember",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#def1b6",
    company: "Eare",
    university: "Maharaja Ganga Singh University, Bikaner",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#81758b",
    company: "Yoveo",
    university: "Olive-Harvey College",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#dba0f0",
    company: "Twitterbeat",
    university: "Universidad del Norte",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#b6a3bc",
    company: "Rhycero",
    university: "North West Frontier Province Agricultural University",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#927875",
    company: "Brightbean",
    university: "East-Siberian State University of Technology",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#c3a876",
    company: "Flashspan",
    university: "Evangelische Hochschule für Soziale Arbeit Dresden (FH)",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#0dd1e8",
    company: "Vinte",
    university: "Johnson & Wales University, Charleston",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#7630cc",
    company: "Browsezoom",
    university: "Hyogo University",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#e88656",
    company: "Quimba",
    university: "Universidade Tecnica de Lisboa",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#7a47d1",
    company: "Reallinks",
    university: "Universidade do Estado do Rio de Janeiro",
    paragraph: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#755bb6",
    company: "Dabfeed",
    university: "Universitas Klabat",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#3a4792",
    company: "Wikizz",
    university: "American Business & Technology University",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#03a6e2",
    company: "Realcube",
    university: "Universidad Autónoma del Carmen",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#0f698c",
    company: "Topicblab",
    university: "Hachinohe Institute of Technology",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#f80da2",
    company: "Kwimbee",
    university: "International College",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#792d24",
    company: "Mynte",
    university: "College of Aeronautics",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#6bc2ab",
    company: "Einti",
    university: "Latvian University of Agriculture",
    paragraph: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#3cc294",
    company: "Rhybox",
    university: "Kagoshima Women's College",
    paragraph: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#701482",
    company: "Latz",
    university: "Universidad Privada Franz Tamayo (UNIFRANZ)",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#ca5276",
    company: "Dynava",
    university: "Jiangsu University of Science and Technology",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#748ced",
    company: "Vipe",
    university: "Bengal Engineering College",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#7c233f",
    company: "Browsetype",
    university: "San Francisco State University",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#04d60d",
    company: "Einti",
    university: "Alsadrain University",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#6d0cfe",
    company: "Fadeo",
    university: "College of the Holy Cross",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#d14c4e",
    company: "Flipopia",
    university: "Lviv National University Ivan Franko",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#97042d",
    company: "Wordtune",
    university: "University of Hydraulic Electric Engineering",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#3a5ce8",
    company: "Twitternation",
    university: "Laikipia University",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#7499ea",
    company: "Tavu",
    university: "Hakuoh University",
    paragraph:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#d37284",
    company: "Avamba",
    university: "University of Santo Tomas",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#18dc36",
    company: "Flipopia",
    university: "Western University",
    paragraph: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    color: "#2e1e42",
    company: "Bubbletube",
    university: "Auckland University of Technology",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#c1706d",
    company: "Divape",
    university: "Higher School of Economics",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#62f9b4",
    company: "Kazio",
    university: "Universidad Autónoma de Baja California",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#4625a6",
    company: "Meembee",
    university: "University of Applied Sciences Basel (FHBB )",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#f9061c",
    company: "Photobug",
    university: "Deutsche Sporthochschule Köln",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#4539a1",
    company: "Lajo",
    university: "Medizinische Hochschule Hannover",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#a940da",
    company: "Rhynyx",
    university: "Kwangwoon University",
    paragraph: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#261a2c",
    company: "Quire",
    university: "Esztergom Theological College",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#29360a",
    company: "Dynabox",
    university: "Universidad de Granma",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#4e8908",
    company: "Cogidoo",
    university: "Stavropol State University",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#f8c46e",
    company: "Thoughtmix",
    university: "Kerala Agricultural University",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#372301",
    company: "Tagopia",
    university: "Kyushu Institute of Design",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#1d8313",
    company: "Zoovu",
    university: "Institut des hautes études économiques et commerciales",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#a2c699",
    company: "Kwilith",
    university: "Open University of Sri Lanka",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#c9e8e8",
    company: "Twitterworks",
    university: "Mesa State College",
    paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#0d0437",
    company: "Roodel",
    university: "London Metropolitan University",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#b8bf46",
    company: "Trudeo",
    university: "Universidade Regional Integrada do Alto Uruguai e das Missões",
    paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  { color: "#346ade", company: "Wordware", university: "Miyazaki University", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#d37b4d",
    company: "Photobean",
    university: "University of Tennessee - Martin",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#b7f66f",
    company: "Tagpad",
    university: "Kyoto University",
    paragraph: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#0127d7",
    company: "Trudoo",
    university: "The Chicago School of Professional Psychology",
    paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  { color: "#1c325e", company: "Feedfire", university: "Willamette University", paragraph: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio." },
  {
    color: "#6b045e",
    company: "Teklist",
    university: "Heilongjiang August 1st Reclamation University",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#715683",
    company: "Plajo",
    university: "United States Naval Academy",
    paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#78e8b1",
    company: "Lajo",
    university: "Western Delta University",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#1cc912",
    company: "Babbleblab",
    university: "Universidad Lasallista Benavente",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  { color: "#2ca780", company: "Twimm", university: "Fachhochschule Erfurt", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#687d95",
    company: "Ailane",
    university: "Ecole pour les Etudes et la Recherche en Informatique et Electronique",
    paragraph: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#ec5f50",
    company: "Thoughtmix",
    university: 'Academy of Music "Georghe Dima" Cluj-Napoca',
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#bcf5c8",
    company: "Rhynoodle",
    university: "Universidad de La Salle, Bajío",
    paragraph: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#6c98c4",
    company: "Yodoo",
    university: "Arkansas State University, Newport",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#6a2607",
    company: "Avamm",
    university: "Gifu Pharmaceutical University",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#a3a996",
    company: "Wikizz",
    university: "Universidad de Atacama",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#bb3d90",
    company: "Edgeclub",
    university: "Bauchi State University, Gadau",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#30e42b",
    company: "Quire",
    university: "National Chi Nan University",
    paragraph: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  { color: "#f3f8e0", company: "Tekfly", university: "University of Arkansas for Medical Sciences", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#c6fb29",
    company: "Abata",
    university: "Hebei University of Technology",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#709019",
    company: "Flashdog",
    university: "University of Northern Washington",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#36120c",
    company: "Oyoba",
    university: "Zahedan University of Medical Sciences",
    paragraph: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#a0aebb",
    company: "Jamia",
    university: "Islamic Azad University, Lahijan",
    paragraph: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#9f234c",
    company: "Skimia",
    university: "Handelshochschule Leipzig",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#be5fe4",
    company: "Demivee",
    university: "New York Institute of Technology",
    paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#ddb4aa",
    company: "Dynava",
    university: "Chongju University",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#f06da1",
    company: "Eire",
    university: "Gunma University",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#cbe7af",
    company: "Ailane",
    university: "Boise Bible College",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#2b924d",
    company: "Zoonder",
    university: 'Universidad Técnica "Federico Santa María"',
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#e410b0",
    company: "Jaxnation",
    university: "University of Cape Town",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#fc5fdd",
    company: "Photospace",
    university: "Hue University of Agriculture and Forestry ",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#70974e",
    company: "Gigashots",
    university: "Shanghai TieDao University",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#361d02",
    company: "Rhycero",
    university: "The Union Institute",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#4f5cc4",
    company: "Mudo",
    university: "University of Swaziland",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    color: "#8feed3",
    company: "Camimbo",
    university: "Ecole Supérieure de Commerce de Grenoble",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  { color: "#9ba2a5", company: "Jabbersphere", university: "University of Development Alternative", paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem." },
  {
    color: "#d9bb19",
    company: "Babbleopia",
    university: "Medaille College",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#8143b0",
    company: "Skippad",
    university: "Perm State Pedagogical University",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#ecd8b7",
    company: "Yakijo",
    university: "Mayo Graduate School",
    paragraph: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#18ef02",
    company: "Twitterbridge",
    university: "Pomona College",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#94919e",
    company: "Skipstorm",
    university: "St. Luke' s College of Nursing",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#20c65d",
    company: "Skajo",
    university: "Miyagi University of Education",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#a537e1",
    company: "Omba",
    university: "Universidad de Morón",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#79d908",
    company: "Jayo",
    university: "Universidad Autónoma de Nuevo León",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#896758",
    company: "Eayo",
    university: "Columbus University",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#e38ef6",
    company: "Voonder",
    university: "International Hotel Management Institute",
    paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#046f7e",
    company: "Jayo",
    university: "Ferrum College",
    paragraph: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#f4e076",
    company: "Yakijo",
    university: "Universidade Federal de Juiz de Fora",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#20fd24",
    company: "Oozz",
    university: "Kawasaki University of Medical Care",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#780195",
    company: "Kanoodle",
    university: "Grace Bible College",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#b86d58",
    company: "Muxo",
    university: "Minsk State Linguistic University",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#ebbb21",
    company: "Yozio",
    university: "Eastern Oregon University",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#8811a9",
    company: "Kaymbo",
    university: "Augustana University College",
    paragraph:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#e62ce5",
    company: "Brainsphere",
    university: "Universitas Terbuka Indonesia",
    paragraph: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#12876f",
    company: "Omba",
    university: "Northwest University",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#7af0b1",
    company: "Skippad",
    university: "École Nationale Supérieure d'Ingénieurs de Constructions Aéronautiques",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#592834",
    company: "Yata",
    university: "Tohwa University",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#800478",
    company: "Zoozzy",
    university: "Université d'Aix-Marseille III",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#852b89",
    company: "Rhybox",
    university: "Universidad de Valparaiso",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#54630b",
    company: "Skinix",
    university: "Pontificia Universidad Catolica de Puerto Rico",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#c0e2d9",
    company: "Oyonder",
    university: "United Nations University",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#395c2d",
    company: "Bubblebox",
    university: "United Business Institute",
    paragraph: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#5d7584",
    company: "Jaxspan",
    university: "Texila American University",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  { color: "#045b5c", company: "Gigazoom", university: "Tokushima University", paragraph: "In congue. Etiam justo. Etiam pretium iaculis justo." },
  { color: "#85f3ed", company: "Dynava", university: "Universidad César Vallejo", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#489a80",
    company: "Twiyo",
    university: "St. Joseph University Beirut",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#f1c3e9",
    company: "Shufflester",
    university: 'University of Roma "La Sapienza"',
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#56fe76",
    company: "Blogpad",
    university: "Perak Islamic College",
    paragraph: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#235585",
    company: "Tazz",
    university: "Hartwick College",
    paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#e9c8f5",
    company: "Izio",
    university: "Georg-Simon-Ohm-Fachhochschule Nürnberg",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#466f89",
    company: "Photolist",
    university: "University of Luxemburg",
    paragraph:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  { color: "#bbb487", company: "Twimbo", university: "Arab European University", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#5fa401",
    company: "Blogspan",
    university: "Pakistan Virtual University",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#262772",
    company: "Tagcat",
    university: "Ohio University - Eastern",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#0c5a8a",
    company: "Realbridge",
    university: "University of Limpopo",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#9e4b41",
    company: "Voomm",
    university: "California State University, Fullerton",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#276034",
    company: "Gevee",
    university: "Russian Academy of Theatre Arts",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#33c9c3",
    company: "BlogXS",
    university: "Tomakomai Komazawa University",
    paragraph:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#d59b63",
    company: "Brightdog",
    university: "Kazan State University of Technology",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  { color: "#2227be", company: "Brightdog", university: "American World University", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#39e80c",
    company: "Jabberbean",
    university: "Washington Bible College",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#2224bd",
    company: "Feedmix",
    university: "Gansu University of Technology",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#43fe85",
    company: "Yamia",
    university: "Lycoming College",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#1636b6",
    company: "Babbleopia",
    university: "National School of Political and Administrative Studies Bucharest",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#e7a63e",
    company: "Brainbox",
    university: "Northeast Forest University",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#c99ad3",
    company: "Kazu",
    university: "Universidade Federal do Rio de Janeiro",
    paragraph:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#661137",
    company: "Thoughtblab",
    university: "Shanghai Medical University",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#07870e",
    company: "Thoughtmix",
    university: "Tenri University",
    paragraph: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#6ac147",
    company: "Devify",
    university: "Palm Beach State College",
    paragraph:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  { color: "#674b99", company: "Trudoo", university: "Simmons College", paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus." },
  {
    color: "#4b5077",
    company: "Ailane",
    university: "The Petroleum Institute",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#77b866",
    company: "Roombo",
    university: "Minhaj University Lahore",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#7be7d3",
    company: "Realmix",
    university: "University of Belize",
    paragraph: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  { color: "#c0eed8", company: "Riffpath", university: "Instituto Politécnico Nacional, Campus Guanajuato", paragraph: "In congue. Etiam justo. Etiam pretium iaculis justo." },
  {
    color: "#4fd742",
    company: "Flashpoint",
    university: "Hemchandracharay North Gujarat University",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  { color: "#2945f7", company: "Fivechat", university: "Sherman College of Straight Chiropractic", paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem." },
  {
    color: "#3965d4",
    company: "Voonder",
    university: "Medical Academy in Wroclaw",
    paragraph: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#f5b2ff",
    company: "Jaxbean",
    university: "Fukuoka Prefectural University",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#4dff00",
    company: "Digitube",
    university: "Tehran University of Medical Sciences",
    paragraph:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#2afd3b",
    company: "Riffpath",
    university: "Govind Ballabh Pant University of Agriculture and Technology",
    paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#cb650d",
    company: "Trudeo",
    university: "Philadelphia College of Bible",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#e02071",
    company: "Geba",
    university: "Staatlich anerkannte Fachhochschule für Kunsttherapie",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#8b5abb",
    company: "Jabbercube",
    university: "Private Fachhochschule Göttingen",
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#328e8c",
    company: "Realcube",
    university: "Taganrog State University of Radioengineering",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#e7b499",
    company: "Tagopia",
    university: "Hamline University",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  { color: "#c99c5b", company: "Skipstorm", university: "University of Wyoming", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#f2f006",
    company: "Yakitri",
    university: "Port Dickson Polytechnic",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#f6de2d",
    company: "Roomm",
    university: "Southeastern College of the Assemblies of God",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#88c453",
    company: "Thoughtstorm",
    university: "Université de Technologie de Compiègne",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#a0b7c6",
    company: "Cogidoo",
    university: "Institute of Teachers Education, Tengku Ampuan Afzan",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#6ea2b0",
    company: "Dynazzy",
    university: "Huazhong University of Science and Technology",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#8a4b15",
    company: "Thoughtsphere",
    university: "California State Polytechnic University - Pomona",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#cbc690",
    company: "Abatz",
    university: "Greensboro College",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#5142f0",
    company: "Innojam",
    university: "Zanjan University of Medical Sciences",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#d9ac85",
    company: "Eazzy",
    university: "Universität Salzburg",
    paragraph:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#8c8f47",
    company: "Edgetag",
    university: "University of Akureyri",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#19ccac",
    company: "Voomm",
    university: "North Dakota State University",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#bbe6d8",
    company: "Bluezoom",
    university: "Makerere University",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#a5bdad",
    company: "Edgewire",
    university: "Engineering College of Aarhus",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#fe4331",
    company: "Tagtune",
    university: "Bu Ali Sina University",
    paragraph:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#62ce27",
    company: "Fadeo",
    university: "Université de Savoie",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  { color: "#3be0e7", company: "Topicware", university: "Jiaying University", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#9a1910",
    company: "Dynabox",
    university: "Virginia Wesleyan College",
    paragraph:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#5069f1",
    company: "Dabvine",
    university: "Ecole Supérieure de Commerce et Management",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#75cb76",
    company: "Oba",
    university: "Minot State University",
    paragraph:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#189ee3",
    company: "Twitterworks",
    university: "Institute of Teachers Education, Technical Education ",
    paragraph: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#59df33",
    company: "Pixonyx",
    university: "Fachhochschule der Wirtschaft",
    paragraph: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#9616e5",
    company: "Divanoodle",
    university: "Iran University of Science and Technology Tehran",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#5bf223",
    company: "Youfeed",
    university: "Ferdowsi University of Mashhad",
    paragraph: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#39bb57",
    company: "Quimba",
    university: "Nagoya University",
    paragraph:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#622d59",
    company: "Kwimbee",
    university: "Middlebury College",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#7f8dbd",
    company: "Youopia",
    university: "Universidade Lusiada",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#1c8ca7",
    company: "Npath",
    university: "Universidad Nacional de la Amazonía Peruana",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#b3d224",
    company: "Brainverse",
    university: "Dhaka University of Engineering and Technology",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  { color: "#292e8a", company: "BlogXS", university: "San Jose State University", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#a75863",
    company: "Brainsphere",
    university: "Universidad de Cienfuegos",
    paragraph:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#d7bec4",
    company: "Photospace",
    university: "University of Washington, Tacoma",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  { color: "#0eb8cd", company: "Realfire", university: "Seattle University", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#b121e5",
    company: "Zoombox",
    university: "Universidad Tecnológica América",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  { color: "#226aea", company: "Zoomzone", university: "University of Medicine and Pharmacy of Targu Mures", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#238108",
    company: "Chatterpoint",
    university: "Sultan Ismail Petra International Islamic College",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  { color: "#43306b", company: "Browsezoom", university: "Naresuan University", paragraph: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum." },
  {
    color: "#bda1b9",
    company: "Photobug",
    university: "Institute of Clinical Social Work",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#210132",
    company: "Vinder",
    university: "College for Creative Studies",
    paragraph: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  { color: "#55d5fb", company: "Bubblemix", university: "Southern New Hampshire University", paragraph: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum." },
  { color: "#2edd4c", company: "Twitterwire", university: "Instituto Mauá de Tecnologia", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  { color: "#32ce4f", company: "Oyondu", university: "Comilla University", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#719f1e",
    company: "Quimba",
    university: "Belarussian State Technological University",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#351ab4",
    company: "Abata",
    university: "Northwestern Oklahoma State University",
    paragraph: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#5dc097",
    company: "Eidel",
    university: "University of Kashmir",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#cd569d",
    company: "Realpoint",
    university: "Royal Danish Academy of Fine Arts, School of Visual Art",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#a314bd",
    company: "Voonix",
    university: "Delaware Valley College",
    paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#2918fd",
    company: "Ozu",
    university: "Crichton College",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { color: "#6abbd4", company: "Realmix", university: "Rasmussen College, Florida Campuses", paragraph: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio." },
  {
    color: "#9b83f0",
    company: "Skyba",
    university: "Moscow State University of Culture",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#72e9c4",
    company: "Fivechat",
    university: "Tokyo Women's Medial College",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#2880b8",
    company: "Flipopia",
    university: "Université Val-de-Marne (Paris XII)",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  {
    color: "#b34234",
    company: "Gigabox",
    university: "Miyazaki Prefectural Nursing University",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#a25969",
    company: "Rhynyx",
    university: "Pennsylvania State University - Lehigh Valley",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#0915d5",
    company: "Shufflester",
    university: "Ibaraki Christian College",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#38517a",
    company: "Jaxworks",
    university: "Greenville College",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#d03cce",
    company: "Skyndu",
    university: "Curry College",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#e9e08f",
    company: "Skidoo",
    university: "Université Kongo",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#633067",
    company: "Yodo",
    university: "Universitas Muhammadiyah Sumatra Utara",
    paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#bf7079",
    company: "Browsetype",
    university: "Ecole Supérieure de Chimie Organique et Minérale",
    paragraph: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#59018e",
    company: "Photolist",
    university: "Sogang University",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  { color: "#dca7c4", company: "Zoozzy", university: "Nanhua University", paragraph: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris." },
  {
    color: "#765602",
    company: "Abata",
    university: "Rasmussen College",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#993a07",
    company: "Agimba",
    university: "Tokyo Kasei University",
    paragraph: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#413eec",
    company: "Ntag",
    university: "Universidad Católica de Colombia",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#208955",
    company: "Podcat",
    university: "Texas Wesleyan University",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#5c1830",
    company: "Mudo",
    university: "Chiang Mai Rajabhat University",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#c300d2",
    company: "Topicblab",
    university: "Università Pontifcia Salesiana",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#9bd326",
    company: "Bubblebox",
    university: "Université de Cergy-Pontoise",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#5a66cc",
    company: "Vinder",
    university: "University of the South",
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#424fb3",
    company: "Jetwire",
    university: "Al Ghurair University",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#d6fad8",
    company: "Dabvine",
    university: "Johnson & Wales University, Charleston",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#089e78",
    company: "Wordware",
    university: "Hochschule für Internationales Management",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#9ed6e2",
    company: "Skilith",
    university: "Ecole Nationale Vétérinaire de Lyon",
    paragraph: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#4fdf96",
    company: "Mudo",
    university: "Valahia University of Targoviste",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#ec536f",
    company: "Jaxspan",
    university: "Universidad Amazonica de Pando",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#841393",
    company: "Reallinks",
    university: "Universidade Federal Rural do Rio de Janeiro",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#5612c9",
    company: "Youspan",
    university: "University of Calabar",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#0094d4",
    company: "Jabberbean",
    university: "Université de Tunis",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#a5d522",
    company: "Dynava",
    university: "American Indian College",
    paragraph:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { color: "#4cc333", company: "Flashspan", university: "Riga Technical University", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#2858e1",
    company: "Twinte",
    university: "Fachhochschule Regensburg",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#0caa47",
    company: "Dabjam",
    university: "St. John's College Maryland",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#2858d4",
    company: "Aivee",
    university: "University of Auckland",
    paragraph:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    color: "#1ec127",
    company: "Ntags",
    university: "Universidad Pedagogica Nacional",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#425650",
    company: "Blogtag",
    university: "College of St. Joseph",
    paragraph: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#8f7304",
    company: "Tekfly",
    university: "National University of Kaohsiung",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#212e81",
    company: "Gabtype",
    university: "HWP - Hamburger Universität für Wirtschaft und Politik",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#7db814",
    company: "Demimbu",
    university: "Hebrew University of Jerusalem",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#c9b5d7",
    company: "Trunyx",
    university: "St. Joseph's College New York",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#03f992",
    company: "Demimbu",
    university: "Divine Word University",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#a00edf",
    company: "Mycat",
    university: "University of Lucknow",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#aedf58",
    company: "Bubblebox",
    university: "Chinhoyi University of Technology",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#2d5af6",
    company: "Tanoodle",
    university: "College of St. Scholastica",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#569afe",
    company: "Meembee",
    university: "Raghebe Esfahani University",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#08dd18",
    company: "Izio",
    university: "Oakland City University",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#67c0ac",
    company: "Blogspan",
    university: "Roanoke Bible College",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#930596",
    company: "Voonder",
    university: "Southwest Missouri State University - West Plains",
    paragraph:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#247f2e",
    company: "Meemm",
    university: "Oregon Institute of Technology",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#bd9389",
    company: "Mybuzz",
    university: "University of Medicine and Pharmacy of Iasi",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#1feea7",
    company: "Jatri",
    university: "Central South Forestry University",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  { color: "#77c072", company: "Janyx", university: "Philippine Military Academy", paragraph: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede." },
  {
    color: "#4f203e",
    company: "Divavu",
    university: "Universidad Autónoma de Zacatecas",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#9eb34c",
    company: "Kaymbo",
    university: "Universidad Interamericana de Puerto Rico, San Germán",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#499b15",
    company: "Skimia",
    university: "Vanderbilt University",
    paragraph: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  { color: "#1cb52d", company: "Oodoo", university: "Xihua University", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#ce9218",
    company: "Twinder",
    university: "Ukrainian Academy of Pharmacy",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#053249",
    company: "Eadel",
    university: "Universidad Tecnológica de El Salvador",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#5f2063",
    company: "Flipbug",
    university: "Himachal Pradesh University",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#4aee3c",
    company: "Quamba",
    university: "Ho Chi Minh City University of Medicine and Pharmacy",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#d3353a",
    company: "Bluezoom",
    university: "Thomas More College",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  { color: "#38d49a", company: "Rhycero", university: "Business School Lausanne (BSL)", paragraph: "Sed ante. Vivamus tortor. Duis mattis egestas metus." },
  {
    color: "#f06e0c",
    company: "Yodel",
    university: "Universitas Pesantren Darul Ulum Jombang",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { color: "#713071", company: "Quimm", university: "University of Winnipeg", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#e7adab",
    company: "Abatz",
    university: "University of Minnesota - Crookston",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#84a15f",
    company: "Browsebug",
    university: "Abfi Institute Perbanas Jakarta",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#51bffb",
    company: "Chatterbridge",
    university: "Kent State University - East Liverpool",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#8a58e1",
    company: "Dynazzy",
    university: "Maxim Gorky Institute of Literature",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#68cd1e",
    company: "Yoveo",
    university: "Gifu University for Education and Languages",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#772ed5",
    company: "Mudo",
    university: "United International University",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#eef444",
    company: "Browsedrive",
    university: "Ecole Centrale d'Electronique - ECE",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#a38475",
    company: "Riffpedia",
    university: "Nagpur University",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#1afcd9",
    company: "Ntags",
    university: "Universitas Ma Chung",
    paragraph: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#2498bb",
    company: "Jaxworks",
    university: "Universidad de Oriente",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  { color: "#7e72cb", company: "Miboo", university: "Eastern Conservatory of Music", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#8226f4",
    company: "Jabberstorm",
    university: 'Instituto Nacional de Educación Física "General Manuel Belgrano"',
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#dc6ad1",
    company: "Cogidoo",
    university: "State University of New York College at Potsdam",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#95abd2",
    company: "Trupe",
    university: "Tierärztliche Hochschule Hannover",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  { color: "#72c36e", company: "Eidel", university: "Webster University, Thailand", paragraph: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet." },
  {
    color: "#1c4da1",
    company: "Feedfish",
    university: "Parwan University",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#afb395",
    company: "Mydo",
    university: "Yelets State University",
    paragraph:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#806305",
    company: "Gabcube",
    university: "Universidad del Azuay",
    paragraph: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#a8d253",
    company: "Yata",
    university: "Glion Institute of Higher Education",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#2030e1",
    company: "Photobug",
    university: "Imam Khomeini International University",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#c0eceb",
    company: "Eayo",
    university: "Belarusian-Russian University",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#e853e4",
    company: "Photobug",
    university: "Arab Open University",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#3832c9",
    company: "Skalith",
    university: "Hebei University of Science and Technology",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  { color: "#ebf1f6", company: "Tagtune", university: "Universitas Indonusa Esa Unggul", paragraph: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio." },
  {
    color: "#8e9af3",
    company: "Eadel",
    university: 'Universidad Tecnológica del Choco "Diego Luis Cordoba"',
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#fa0dff",
    company: "Trudoo",
    university: "Fachhochschule Merseburg",
    paragraph:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#9b0777",
    company: "Jaxworks",
    university: "Rabindra Bharati University",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#67980c",
    company: "Tagtune",
    university: "Stevens Institute of Technology",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#763838",
    company: "Rhyloo",
    university: "University of Sindh",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { color: "#565116", company: "Dynabox", university: "Universidade Fernando Pessoa", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#5dcd55",
    company: "Quatz",
    university: "International Institute for Population Sciences",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#61268b",
    company: "Photobug",
    university: "Texas A&M University - Galveston",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#d304bf",
    company: "Edgeclub",
    university: "Universidad Autónoma de Zacatecas",
    paragraph: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#e8d27e",
    company: "Twitternation",
    university: "Kyoto Seika University",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#0f8bbe",
    company: "Zoomcast",
    university: "European University",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#d1100d",
    company: "Meejo",
    university: "University of Sannio",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#45c52b",
    company: "Kaymbo",
    university: "Fordham University",
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#ef2da2",
    company: "Devcast",
    university: "Islamic Azad University, Tehran Science & Research Branch",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#4650cf",
    company: "Meembee",
    university: "Shih Chien University",
    paragraph:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#58d7d4",
    company: "Yamia",
    university: "Seijo University",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#4c2de6",
    company: "Mudo",
    university: "Universidad Academia de Humanismo Cristiano",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  { color: "#4598df", company: "Demizz", university: "Fort Lewis College", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#b1c472",
    company: "Realbridge",
    university: "Monash University, Malaysia Campus",
    paragraph:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  { color: "#22bbad", company: "Bubblemix", university: "PTPL College", paragraph: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede." },
  {
    color: "#030904",
    company: "Twitterwire",
    university: "Eastern Michigan University",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#62823f",
    company: "Ntag",
    university: "Universidad Valle del Grijalva",
    paragraph: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#abf453",
    company: "Edgeclub",
    university: "Université Paris Sud (Paris XI)",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#767d7a",
    company: "Feednation",
    university: "Asia Pacific Institute of Information Technology Pakistan (APIIT PAK)",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  { color: "#180e58", company: "Realfire", university: "Shiga University of Medical Science", paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem." },
  {
    color: "#474368",
    company: "Kare",
    university: "St. Edwards University",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#4928f5",
    company: "Vimbo",
    university: "Hokkaido Tokai University",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#6b7d7e",
    company: "Kwimbee",
    university: "Hebron University",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#305ddf",
    company: "Eabox",
    university: "Otemae University",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#935c4f",
    company: "Linktype",
    university: "Beppu University",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#7e5b8c",
    company: "Skyba",
    university: "Ecole Nationale Supérieure d'Agronomie de Montpellier",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#0181ad",
    company: "Gevee",
    university: "University of North Texas Health Science Center at Fort Worth",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#4b172b",
    company: "Buzzshare",
    university: "Akademia Podlaska",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#840494",
    company: "Shuffledrive",
    university: "Weber State University",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#dd097a",
    company: "Fivespan",
    university: "Hallym University",
    paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  { color: "#784fb2", company: "Vitz", university: "Universidad Bicentenaria de Aragua", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#4e07a7",
    company: "Centizu",
    university: "Wayland Baptist University",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#561414",
    company: "Midel",
    university: "Tripura University",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#7a729f",
    company: "Zoomlounge",
    university: "Ecole Nationale Supérieure d'Agronomie de Rennes",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#bd42ff",
    company: "Quimm",
    university: "Ontario College of Art and Design",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#26a642",
    company: "Blogspan",
    university: "Houston Baptist University",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { color: "#996765", company: "Dabjam", university: "Guangdong University of Technology", paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem." },
  {
    color: "#664ecc",
    company: "Bubblebox",
    university: "Fielding Institute",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#3a36c8",
    company: "Mybuzz",
    university: "Multimedia University of Kenya",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#1adecb",
    company: "Bubbletube",
    university: "Arts, Sciences and Technology University",
    paragraph:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#fd677e",
    company: "Layo",
    university: "Jaypee Institute of Information Technology",
    paragraph:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#304120",
    company: "Voonyx",
    university: "Belarusian-Russian University",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#5ff416",
    company: "Midel",
    university: "Université de Skikda",
    paragraph: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#7abd48",
    company: "Topicware",
    university: "Institue of Technology, Tralee",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#0564a4",
    company: "Photobug",
    university: "Stenden University",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#5f2c4a",
    company: "Trupe",
    university: "Nanjing Normal University",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#14cbbe",
    company: "Demizz",
    university: "Sojourner-Douglass College",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#0a0100",
    company: "Katz",
    university: "Yunnan Normal University",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#ad2e58",
    company: "Rhynyx",
    university: "Ecole Supérieure des Sciences et Technologie de l'Ingénieur de Nancy",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#e1ac37",
    company: "Skinder",
    university: "Aichi Gakusen University",
    paragraph: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#399569",
    company: "Oyoloo",
    university: "Université de Caen Basse Normandie",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#9b1428",
    company: "Aimbu",
    university: "Universidad Fray Luca Paccioli",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#f5b14e",
    company: "Zoozzy",
    university: "Kanazawa College of Art",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#ea5610",
    company: "Shufflebeat",
    university: "Technical University in Zvolen",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#518cdc",
    company: "Leenti",
    university: "Institute of Management and Technical Studies ",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  { color: "#8bceeb", company: "Twinder", university: "Universidad Adventista de Colombia", paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst." },
  {
    color: "#6f34bc",
    company: "Devshare",
    university: "Mazandaran University of Medical Science",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#4e1422",
    company: "Gabtype",
    university: "Universidade do Grande Rio",
    paragraph:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#7d7af1",
    company: "Mynte",
    university: "Nanjing University of Chemical Technology",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#3929d5",
    company: "Yombu",
    university: "Escuela de Administración de Negocios",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#ab8c2a",
    company: "Tanoodle",
    university: "Technical University of Rzeszow",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  { color: "#a2db6f", company: "Skiptube", university: "Eastern Asia University", paragraph: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede." },
  { color: "#b9e890", company: "Katz", university: "Central Ostrobothnia University of Applied Sciences", paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus." },
  {
    color: "#c7452f",
    company: "Twitterbridge",
    university: "Wirtschaftsuniversität Wien",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#c8ed7e",
    company: "Skilith",
    university: "University Institute of Architecture Venice",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#86677b",
    company: "Centizu",
    university: "Karnataka State Open University",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  { color: "#365961", company: "Skynoodle", university: "Palmer College of Chiropractic", paragraph: "In congue. Etiam justo. Etiam pretium iaculis justo." },
  {
    color: "#ccba33",
    company: "Meedoo",
    university: "Voronezh State Medical Academy",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#73e4b1",
    company: "Avamm",
    university: "Fachhochschule Düsseldorf",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#b87e30",
    company: "Reallinks",
    university: "Balikesir University",
    paragraph: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#766fd6",
    company: "Topdrive",
    university: "Osaka University of Foreign Studies",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#7efe19",
    company: "Vimbo",
    university: "Universiti Sains Malaysia",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#4641ee",
    company: "Skimia",
    university: "Lampang College of Commerce and Technology",
    paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#92ded5",
    company: "Chatterpoint",
    university: "International Academy of  Merchandising and Design Tampa",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#44002a",
    company: "Mita",
    university: "University of Groningen",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
  {
    color: "#4c70f5",
    company: "Gigaclub",
    university: "Tokyo International University",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#2f445c",
    company: "Demimbu",
    university: "Mondragon Univertsitatea",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#454239",
    company: "Skyble",
    university: "Holar University College",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#cf7fb4",
    company: "Plajo",
    university: "Naresuan University",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#ec55bf",
    company: "Ntags",
    university: "Wuhan Technical University of Surveying and Mapping",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#021f7f",
    company: "Vitz",
    university: "University of Chester",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#59e4db",
    company: "Brightbean",
    university: "Technological University (Taunggyi)",
    paragraph: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#18f2e2",
    company: "Plambee",
    university: "Johore Bharu Primeir Polytechnic",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#efac66",
    company: "Skalith",
    university: "Dr. Babasaheb Ambedkar Technological University",
    paragraph: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#1cb8ed",
    company: "Quatz",
    university: "The Illinois Institute of Art-Chicago",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#14b067",
    company: "Flipstorm",
    university: "Japanese Red Cross College of Nursing",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#bcf437",
    company: "Blogtags",
    university: "Kampala International University",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#ba2488",
    company: "Jetpulse",
    university: "Perm State Academy of Agriculture",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#12e86c",
    company: "Jabbersphere",
    university: "Agricultural University of Norway",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#2abf59",
    company: "Agivu",
    university: "Université Bordeaux I",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#b2ce5e",
    company: "Wikivu",
    university: "Universidade Federal da Bahia",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#564c38",
    company: "Fivespan",
    university: "Tougaloo College",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#c4487d",
    company: "Brainsphere",
    university: "University of Wales, Aberystwyth",
    paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#921da4",
    company: "Myworks",
    university: "University of Bolton",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#be94c7",
    company: "Photofeed",
    university: "Birla Institute of Technology, Ranchi",
    paragraph: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#907c6b",
    company: "Jayo",
    university: "TaiChung Healthcare and Management University",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#fb4473",
    company: "Linklinks",
    university: "University of Advancing Technology (UAT)",
    paragraph: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  { color: "#d65598", company: "Lazzy", university: "Institute of Finance", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#1d8280",
    company: "Meezzy",
    university: "St. Peter's College",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#d39723",
    company: "Quatz",
    university: "Technical University of Poznan",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
  {
    color: "#64ebc5",
    company: "Browsecat",
    university: "Richmond University - The American International University in London",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  { color: "#78b8c8", company: "Zooveo", university: "Islamic Azad University, Hamedan", paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus." },
  { color: "#59d05f", company: "Jaxbean", university: "University of Bunkyo", paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst." },
  {
    color: "#7afaee",
    company: "Mita",
    university: "University of Montana Western",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  { color: "#8a7e33", company: "Zoovu", university: "Eastern Nazarene College", paragraph: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh." },
  {
    color: "#f3ab7c",
    company: "Buzzdog",
    university: "Polytechnic Institute of Turin",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#b8b96f",
    company: "Cogibox",
    university: "DEI Bachelor & Master Degrees",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#162657",
    company: "Centimia",
    university: "Ecole Supérieure d'Agriculture d'Angers",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  { color: "#13973b", company: "Pixope", university: "Taipei Medical College", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#b4fafe",
    company: "Realmix",
    university: "La Sierra University",
    paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  { color: "#fb4c39", company: "Topicshots", university: "Delaware State University", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#b6b3c6",
    company: "Thoughtworks",
    university: "Universidade de Itaúna",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#c8fdb1",
    company: "Gabcube",
    university: "University of Melbourne",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  { color: "#8cc817", company: "Vipe", university: "University of Turin", paragraph: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum." },
  {
    color: "#183181",
    company: "Yodel",
    university: "Guangdong Polytechnic Normal University",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#b8a55f",
    company: "Edgepulse",
    university: "St. John's University",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#e7b685",
    company: "Brainbox",
    university: "Banking University of Ho Chi Minh City",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#1217c8",
    company: "Twinder",
    university: "St. John's Seminary",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  { color: "#5f4ba7", company: "Topicware", university: "Yantai University", paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst." },
  {
    color: "#17564c",
    company: "Skyndu",
    university: "University of Arizona",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  { color: "#f12bb3", company: "Mycat", university: "Pontificia Universidad Católica Madre y Maestra (PUCMM)", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#56dd65",
    company: "Livetube",
    university: "Katholieke Universiteit Leuven",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#851b63",
    company: "JumpXS",
    university: "Universität Hildesheim",
    paragraph:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#257e3f",
    company: "Vitz",
    university: "Universidad Nacional de Guinea Ecuatorial",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#f5c9f9",
    company: "Quire",
    university: "National Yang Ming Medical College",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#c06996",
    company: "Bubblemix",
    university: "Universidad Tecnológica del Sur",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#6052bf",
    company: "Jaxbean",
    university: "Allahabad University",
    paragraph: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  {
    color: "#a79fe9",
    company: "Meevee",
    university: "Universidad Católica de Honduras",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#21c7a2",
    company: "Jaloo",
    university: "Kent State University - Stark",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    color: "#8f140a",
    company: "Bubblemix",
    university: "Institut National Polytechnique de Lorraine",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#6bc4d3",
    company: "Janyx",
    university: "Osaka College of Music",
    paragraph: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#903864",
    company: "Gabtune",
    university: "Université Stendhal (Grenoble III)",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#2de50a",
    company: "Feedfire",
    university: "University of New Haven",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#fb774c",
    company: "Gigazoom",
    university: "Maxim Gorky Institute of Literature",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#534eb4",
    company: "Rhyzio",
    university: "Kazan State University of Medicine",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#780021",
    company: "Twitterwire",
    university: "Universidad Nacional de Villa María",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#e4c0ea",
    company: "Twinder",
    university: "Universidad Peruana de Ciencias Aplicadas",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#c677c1",
    company: "Quimm",
    university: "Ruhr-Universität Bochum",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#15f873",
    company: "Twinte",
    university: "Southwestern Assemblies of God University",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#4bfe14",
    company: "Yodel",
    university: "Université de La Rochelle",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#789059",
    company: "Vipe",
    university: "School for International Training",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#09c278",
    company: "Rhynyx",
    university: "University of Pittsburgh at Greensburg",
    paragraph: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#a9f8da",
    company: "Realcube",
    university: "Baikal National University of Economics and Law",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#29dd2e",
    company: "Miboo",
    university: "Morioka College",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#38c3c0",
    company: "Miboo",
    university: "Hertie School of Governance",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#359895",
    company: "Mycat",
    university: "Asia Pacific Institute of Information Technology (APIIT)",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  {
    color: "#40567c",
    company: "Tekfly",
    university: "Istanbul Kultur University",
    paragraph: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#bf59c6",
    company: "Yakitri",
    university: "United Business Institute",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#61023e",
    company: "Oyoloo",
    university: "North Carolina Central University",
    paragraph: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#9e6c84",
    company: "Yata",
    university: "American InterContinental University - Ft. Lauderdale",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#a4eb6f",
    company: "Tambee",
    university: "Rajamangala University of Technology, Phra Nakhon",
    paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  { color: "#385cc0", company: "Edgeblab", university: "University of New Hampshire", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#f35df9",
    company: "Yata",
    university: "Rasmussen College, Minnesota Campuses",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#f4fcd6",
    company: "Camido",
    university: "Mennonite College of Nursing",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#ce9191",
    company: "Vidoo",
    university: "Islamic Azad University, Falavarjan ",
    paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  { color: "#37bd08", company: "Devpulse", university: "Ionian University Corfu", paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus." },
  {
    color: "#7df865",
    company: "Feedspan",
    university: "Rakuno Gakuen University",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  {
    color: "#713230",
    company: "Photofeed",
    university: "Alagappa University",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#241dc1",
    company: "Yambee",
    university: "Universidad San Ignacio de Loyola",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#ed6ef1",
    company: "Quamba",
    university: "University of Chemical Technology and Metallurgy",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#c004fa",
    company: "Thoughtbeat",
    university: "Reformed Church University",
    paragraph:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#88229e",
    company: "Topicblab",
    university: "Ecole Nationale Supérieur de Géologie de Nancy",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#42da84",
    company: "Skyble",
    university: "Petronas Technology University",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#a04c46",
    company: "Tavu",
    university: "Central Christian College of the Bible",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#2dbe3a",
    company: "Devbug",
    university: "Technical University of Szczecin",
    paragraph: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  { color: "#bd38a9", company: "Skippad", university: "Saybrook Institute", paragraph: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus." },
  { color: "#685b73", company: "Wordtune", university: "Hannibal-Lagrange College", paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst." },
  {
    color: "#e53fd7",
    company: "Minyx",
    university: "Ecole Supérieure d'Ingénieurs en Génie Electrique",
    paragraph: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#420e23",
    company: "Riffpedia",
    university: "Liaquat University of Medical & Health Sciences Jamshoro",
    paragraph: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#2454f6",
    company: "Feednation",
    university: "Aquinas College",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#b4a42b",
    company: "Zoozzy",
    university: "Pacific University",
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#4853f5",
    company: "Blogtag",
    university: "Universidad de San Pedro Sula",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#ea8b10",
    company: "Wikizz",
    university: "Parwan University",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#e8e77e",
    company: "Skyba",
    university: "Universidade Federal de Lavras",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#e91069",
    company: "Topicstorm",
    university: "University of the South Pacific",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#137916",
    company: "Aivee",
    university: "Stillman College",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#d7fb22",
    company: "Feedspan",
    university: "LICCSAL Business College",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#44017b",
    company: "Edgeclub",
    university: "Sabzevar Teacher Training University",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#e6f9a8",
    company: "Aimbo",
    university: "Indiana University of Pennsylvania",
    paragraph:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#3b5665",
    company: "Skyba",
    university: "Fairfield University",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#dea443",
    company: "Photobug",
    university: "Mills Grae University",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#15584a",
    company: "Nlounge",
    university: "Aletheia University",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#66283f",
    company: "Fivechat",
    university: "Virginia Wesleyan College",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#18a258",
    company: "Divavu",
    university: "Nayanova University",
    paragraph:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#a5f8fe",
    company: "Digitube",
    university: "Zabol University",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    color: "#0c7023",
    company: "Voonix",
    university: "Gediz University",
    paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#008abc",
    company: "Jaxworks",
    university: "Yorker International University, Athens",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#8f1d5c",
    company: "Browsecat",
    university: "Paine College",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#76c426",
    company: "BlogXS",
    university: "Heilongjiang August 1st Reclamation University",
    paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#c1f6bc",
    company: "Voomm",
    university: "Universidad Hispanoamericana",
    paragraph: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#f82b42",
    company: "Voolith",
    university: "Universidad Mariano Egaña",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#7a88a4",
    company: "Voonyx",
    university: "East Ukrainian National University",
    paragraph: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#260712",
    company: "Devbug",
    university: "Dr. Babasaheb Ambedkar Marathwada Universtiy",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    color: "#75b463",
    company: "Mydeo",
    university: "King Khaled University",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#86b1ee",
    company: "Wordpedia",
    university: "Nordic School of Public Health",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#3e94bd",
    company: "Realfire",
    university: "Universidad Nacional de Río Cuarto",
    paragraph: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    color: "#c42443",
    company: "Ooba",
    university: "Altai State Technical University",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  },
  {
    color: "#b46fd2",
    company: "Topicshots",
    university: "Universidad Nacional del Centro del Perú",
    paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#b364c0",
    company: "Skipfire",
    university: 'Universidad "Juan Agustín Maza"',
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#86e10c",
    company: "Mycat",
    university: "Dhurakijpundit University",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#26ef7a",
    company: "Zooveo",
    university: "Lead City University of Ibadan",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#1338cb",
    company: "Youbridge",
    university: "Universidad La Salle Cuernavaca",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#e5dfb3",
    company: "InnoZ",
    university: "Huafan University",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  { color: "#61bd37", company: "Shufflester", university: "Catholic University in Zimbabwe", paragraph: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh." },
  {
    color: "#3d3729",
    company: "JumpXS",
    university: "Universidad Gabriela Mistral",
    paragraph:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#1f25f3",
    company: "Cogibox",
    university: "Bohai University",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#47bad2",
    company: "Photobug",
    university: 'Universidad Nacional Experimental "Simón Rodriguez"',
    paragraph:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#dd6e91",
    company: "Topiclounge",
    university: "Université de Thiès",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#35ad39",
    company: "Edgepulse",
    university: "Université de Lomé",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    color: "#9a34e5",
    company: "Linklinks",
    university: "Universidad Andina Simón Bolivar",
    paragraph: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#f46924",
    company: "Rhyzio",
    university: "Sunmoon University",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  { color: "#183d71", company: "Eimbee", university: "Daiichi University of Economics", paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem." },
  {
    color: "#3aa2d0",
    company: "Zoovu",
    university: "George Mason University",
    paragraph: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#6c756e",
    company: "Skinte",
    university: "Universidad Tecnológica de los Andes de Apurímac",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#86568a",
    company: "Podcat",
    university: "Université René Descartes (Paris V)",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#cfd1c8",
    company: "Riffwire",
    university: "Toyama Prefectural University",
    paragraph: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#aeea36",
    company: "Realcube",
    university: "ABTI American University of Nigeria",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#05d41f",
    company: "Chatterbridge",
    university: "Oral Roberts University",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#1da4b0",
    company: "Oyondu",
    university: "Corporación Universitaria de la Costa (UNICOSTA)",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#7b0ad3",
    company: "Janyx",
    university: "Kung Shan Institute of Technology",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#181c47",
    company: "Dynabox",
    university: "South-East Asia University",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  { color: "#e5e449", company: "Yotz", university: "Technische Universität Dresden", paragraph: "Sed ante. Vivamus tortor. Duis mattis egestas metus." },
  {
    color: "#5d6afd",
    company: "Trilia",
    university: "Canisius College",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#6c3235",
    company: "Devify",
    university: "University of South Carolina - Sumter",
    paragraph:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  { color: "#f5b59c", company: "Ozu", university: "Universidad Ulises Francisco Espaillat", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#1fd37d",
    company: "Zooxo",
    university: "Josai University",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  { color: "#828a5c", company: "Yodel", university: "Universidade Católica de Petrópolis", paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus." },
  {
    color: "#3446ad",
    company: "Tazz",
    university: "Universitas Dian Nuswantoro",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#603ec9",
    company: "Jazzy",
    university: "Université Kofi Annan",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#ae6857",
    company: "Oloo",
    university: "University of Dammam",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#9a9a38",
    company: "Jabberstorm",
    university: "National University of Ireland, Maynooth",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    color: "#cba4e8",
    company: "Blogspan",
    university: "University of Toronto",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  { color: "#64764e", company: "Skipstorm", university: "Université de Buéa", paragraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus." },
  { color: "#cd9cfb", company: "Topdrive", university: 'Universidad Centroamericana "José Simeón Canas"', paragraph: "In congue. Etiam justo. Etiam pretium iaculis justo." },
  {
    color: "#777bd5",
    company: "Talane",
    university: "Birzeit University",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#e829e9",
    company: "Ntag",
    university: "Galatasaray University",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#b9a618",
    company: "Livepath",
    university: "Lucerne University of Applied Sciences and Arts ",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#563dfa",
    company: "Aivee",
    university: "Dong-A University",
    paragraph: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#bbd48e",
    company: "Podcat",
    university: "Central Academy of  Fine Art",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#cc15f6",
    company: "Tagchat",
    university: "Universidad Tecnológica Equinoccial",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#2d1558",
    company: "Demivee",
    university: "Grove City College",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#a56571",
    company: "Twinte",
    university: "Wheeling Jesuit University",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#7200f3",
    company: "Edgewire",
    university: "Tajik Agrarian University",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#c6c0b6",
    company: "Devify",
    university: "Universidad Cristóbal Colón",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#3b12d4",
    company: "Twimbo",
    university: "University of Nis",
    paragraph:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#982513",
    company: "Cogilith",
    university: "Voronezh State Academy of Technology",
    paragraph: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  { color: "#4f326d", company: "Quamba", university: "Université du Sud, Toulon et Var", paragraph: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum." },
  {
    color: "#bf345c",
    company: "Blogtag",
    university: "University College Bahrain",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#177c9a",
    company: "Midel",
    university: "Fairmont State College",
    paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#fa250e",
    company: "Feedmix",
    university: "Royal Holloway and Bedford New College",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#739d14",
    company: "Quire",
    university: "Royal Military Academy",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#5f2660",
    company: "Dabfeed",
    university: "B. R. Ambedkar Bihar University",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#851626",
    company: "Blogtags",
    university: "Universidad Central de Bayamón",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#1d11c5",
    company: "Tazzy",
    university: "Tsuda College",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    color: "#b9f3c1",
    company: "Skinder",
    university: "Adamawa State University",
    paragraph:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#17011a",
    company: "Centizu",
    university: "University of Bucharest",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  { color: "#f0a8ef", company: "Midel", university: "Aga Khan University", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#3599cb",
    company: "Jabberbean",
    university: "National School of Political and Administrative Studies Bucharest",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  {
    color: "#f4e1f1",
    company: "Yotz",
    university: "Chiba University",
    paragraph:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    color: "#e10408",
    company: "Oloo",
    university: "Fachhochschule Bielefeld",
    paragraph:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#e6ff39",
    company: "Vimbo",
    university: "The World Islamic Sciences & Education University",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#c52240",
    company: "Yabox",
    university: "Universidade Católica de Salvador",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#5a42ca",
    company: "Youtags",
    university: "Jiwaji University",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  { color: "#1f2804", company: "Riffpedia", university: "University of Northeastern Philippines", paragraph: "In congue. Etiam justo. Etiam pretium iaculis justo." },
  {
    color: "#25f4e4",
    company: "Gigazoom",
    university: "Institut Commercial de Nancy",
    paragraph: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { color: "#21a68c", company: "Skaboo", university: "Nagasaki Prefectural University", paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus." },
  {
    color: "#8a15a9",
    company: "Brightdog",
    university: "Jumeira University",
    paragraph:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  { color: "#989391", company: "Katz", university: "University of Northern Iowa", paragraph: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem." },
  {
    color: "#8e3c6a",
    company: "Meevee",
    university: "Technological Education Institute of Heraklion",
    paragraph: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#a72f11",
    company: "Oyonder",
    university: "East West University",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  },
  { color: "#ffd2bf", company: "Thoughtbeat", university: "Ohio State University - Lima", paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus." },
  {
    color: "#747bc0",
    company: "Linktype",
    university: "Florida Christian College",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#9fa879",
    company: "Abatz",
    university: "Dohto University",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#b25aee",
    company: "Skippad",
    university: "Darul Ihsan University",
    paragraph: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#59723b",
    company: "Kazu",
    university: "Nizhny Novgorod State Technical University",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#f8b0a7",
    company: "Voonyx",
    university: "Saint Ferdinand College",
    paragraph:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    color: "#3f1699",
    company: "Skinder",
    university: "International Burch University",
    paragraph: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  { color: "#6b8008", company: "Snaptags", university: "Universidad Iberoamericana", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#4a85f1",
    company: "Yakidoo",
    university: "National Museum Institute of History of Art, Conservation and Museology",
    paragraph:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#c0bc64",
    company: "Vinder",
    university: "Karwan Institute of Higher Education",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    color: "#795c4e",
    company: "Dynazzy",
    university: "Francis Marion University",
    paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  { color: "#cf0632", company: "Meejo", university: "Central Institute of Fisheries Education", paragraph: "Fusce consequat. Nulla nisl. Nunc nisl." },
  {
    color: "#fd6a09",
    company: "Trilia",
    university: "Elmira College",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  { color: "#e9e705", company: "Gabvine", university: "University of Aleppo", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#b513f3",
    company: "Flashpoint",
    university: "International Higher School for Advanced Studies Trieste",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#daa7e6",
    company: "Feednation",
    university: "Florida Community College at Jacksonville",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#b3a422",
    company: "Ooba",
    university: "Universidade Metropolitana de Santos",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    color: "#fe8890",
    company: "Edgepulse",
    university: "Lagos State Polytechnic",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#936c8b",
    company: "Gigaclub",
    university: "Institut d'Etudes Politiques de Paris (Sciences Po)",
    paragraph:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    color: "#c94097",
    company: "Fanoodle",
    university: "Dickinson College",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    color: "#c375fb",
    company: "Shuffletag",
    university: "Universitas Negeri Malang",
    paragraph:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#79b6fe",
    company: "Avavee",
    university: "International College of the Cayman Islands",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  },
  { color: "#04832b", company: "Wordware", university: "Universidad Católica de Santa María", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#eacfe6",
    company: "Skidoo",
    university: "Bunka Women's University",
    paragraph:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#93c4ff",
    company: "Dabjam",
    university: 'Sofia University "St. Kliment Ohridski"',
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#5940dd",
    company: "Leexo",
    university: "University of Pittsburgh",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#b6debd",
    company: "Zoombox",
    university: "Mississippi State University",
    paragraph:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    color: "#a65618",
    company: "Kimia",
    university: "Universidad Peruana Union",
    paragraph: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    color: "#bc3904",
    company: "Ozu",
    university: "John Carroll University",
    paragraph: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#3059e8",
    company: "Eare",
    university: "PTPL College",
    paragraph:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#611e7e",
    company: "Geba",
    university: "University “Pavaresia” Vlore",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#fa3c27",
    company: "Buzzbean",
    university: "Francis Marion University",
    paragraph:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    color: "#2cf51d",
    company: "Devshare",
    university: "Northwest Normal University Lanzhou",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#4b94ed",
    company: "Oodoo",
    university: "Leon Kozminski Academy of Entrepreneurship and Mangement",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  { color: "#cf6ba3", company: "Livefish", university: "Politeknik Negeri Bandung", paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit." },
  {
    color: "#cab55d",
    company: "Realblab",
    university: "China USA Business University",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#be2443",
    company: "Mybuzz",
    university: "Universidade Metropolitana de Santos",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#983799",
    company: "Lajo",
    university: "Instituto Tecnológico de Celaya",
    paragraph:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  { color: "#bebe4a", company: "Agivu", university: "University College of Cape Breton", paragraph: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst." },
  {
    color: "#03de65",
    company: "Twitterlist",
    university: "Indian Institute of Technology, Roorkee",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#30b420",
    company: "Podcat",
    university: "Tibet Agricultural and Animal Husbandry College",
    paragraph: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  { color: "#2629ac", company: "Rhynyx", university: "Royal Military College of Canada", paragraph: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi." },
  {
    color: "#53e267",
    company: "Thoughtsphere",
    university: "Texas A&M University - Corpus Christi",
    paragraph: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    color: "#cdf2a8",
    company: "Mydeo",
    university: "South China University",
    paragraph:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#db6249",
    company: "Quimba",
    university: "Ecole Nationale des Ponts et Chausees",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#d2d383",
    company: "Gabspot",
    university: "Nirma University",
    paragraph:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    color: "#c5cbb1",
    company: "Kazio",
    university: "Instituto Superior D. Afonso III - INUAF",
    paragraph:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  },
  {
    color: "#6e7f35",
    company: "Feedfish",
    university: "Southern Alberta Institute of Technology",
    paragraph:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    color: "#7660fa",
    company: "Shufflebeat",
    university: "Fred Hutchinson Cancer Research Center",
    paragraph:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  { color: "#175aab", company: "Janyx", university: "Kwassui Women's College", paragraph: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh." },
  {
    color: "#5d605d",
    company: "Janyx",
    university: "University of Pitesti",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  { color: "#ba79a5", company: "Digitube", university: "Technical University of Crete", paragraph: "In congue. Etiam justo. Etiam pretium iaculis justo." },
  {
    color: "#3a9dca",
    company: "Yodoo",
    university: "Sree Sankaracharya University of Sanskrit",
    paragraph:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    color: "#0c1c71",
    company: "Tanoodle",
    university: "Universidad Iberoamericana de Ciencia y Tecnologia",
    paragraph:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#ea1021",
    company: "Twiyo",
    university: "Fachhochschule Osnabrück",
    paragraph: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    color: "#c303eb",
    company: "Centizu",
    university: "Jagannath University",
    paragraph: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#ee9a2c",
    company: "Ooba",
    university: "Universidad Autónoma de Chiapas",
    paragraph:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#ada1be",
    company: "Agivu",
    university: "Alabama Agricultural and Mechanical University",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#f95fc0",
    company: "Yambee",
    university: "Huaqiao University Quanzhuo",
    paragraph:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    color: "#3d8240",
    company: "Npath",
    university: "Elmhurst College",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#60cd44",
    company: "Feedbug",
    university: "Qurtuba University of Science and Infromation Technology",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#1beb12",
    company: "Buzzshare",
    university: "Seokyeong University",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#a744d8",
    company: "DabZ",
    university: "National Fisheries University",
    paragraph:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#95eace",
    company: "Ozu",
    university: "Fachhochschule für Wirtschaft Berlin",
    paragraph:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#ced43d",
    company: "Ooba",
    university: "Universidad del Turabo",
    paragraph: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#e6a19f",
    company: "Tambee",
    university: "Universidad de San Andres",
    paragraph:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#c53a4b",
    company: "Quinu",
    university: "Baghdad College of Pharmacy",
    paragraph: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    color: "#19f6cc",
    company: "Centidel",
    university: "Universitat Pompeu Fabra",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#73b7ac",
    company: "Twinte",
    university: "Showa Women's University",
    paragraph:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  {
    color: "#01ac5d",
    company: "Yakijo",
    university: "Yangtze Normal University",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
  {
    color: "#54d9e3",
    company: "Abata",
    university: "École Nationale Supérieure d'Ingénieurs de Constructions Aéronautiques",
    paragraph:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#235889",
    company: "Twiyo",
    university: "Universidade Federal de Ouro Preto",
    paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#a3629b",
    company: "Feedfish",
    university: "Shonan Institute of Technology",
    paragraph:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#ad9ed8",
    company: "Jazzy",
    university: "University of Toledo",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    color: "#e0f94a",
    company: "Miboo",
    university: "Bellarmine College",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    color: "#6a544a",
    company: "Feedspan",
    university: "State University of New York College at Potsdam",
    paragraph:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#b00285",
    company: "Youbridge",
    university: "Instituto Politécnico de Beja",
    paragraph:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    color: "#f6fc03",
    company: "Lajo",
    university: "University of Texas Health Center at Tyler",
    paragraph:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    color: "#37839d",
    company: "Blogtag",
    university: "La Roche College",
    paragraph:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    color: "#82ef45",
    company: "Eadel",
    university: "Fachhochschule Pur",
    paragraph:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  { color: "#496339", company: "Aivee", university: "Fachhochschule Nordhessen", paragraph: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus." },
  {
    color: "#c55fd4",
    company: "Cogilith",
    university: "Bar-Ilan University",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    color: "#40a914",
    company: "Realfire",
    university: "University of Guyana",
    paragraph: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    color: "#9add37",
    company: "Browsetype",
    university: "Higher Colleges of Technology",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    color: "#85bd0d",
    company: "Gabtune",
    university: "Kazan State University",
    paragraph:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#90e385",
    company: "Pixope",
    university: "Meiji College of Pharmacy",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    color: "#fca052",
    company: "Twitterwire",
    university: "Delft University of Technology",
    paragraph: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    color: "#7b5c3e",
    company: "Edgeify",
    university: "Bharati Vidyapeeth University",
    paragraph: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    color: "#8c844a",
    company: "Wikido",
    university: "Universidad Tecnologica de la Mixteca",
    paragraph:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    color: "#d200d2",
    company: "Dynabox",
    university: "Université Catholique de l' Ouest",
    paragraph:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    color: "#c06341",
    company: "Jaxbean",
    university: "Universidade Tecnica de Angola",
    paragraph:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    color: "#8f4fab",
    company: "Jaxbean",
    university: "FAE Business School - Faculdade de Administração e Economia",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  },
  {
    color: "#f2b399",
    company: "Yadel",
    university: "L.N. Gumilyov Eurasian National University",
    paragraph:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    color: "#6e6827",
    company: "Topiclounge",
    university: "Kyrgyz State University of Construction, Transportation and Architecture",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    color: "#104206",
    company: "Dabtype",
    university: "Fountain University",
    paragraph:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#f0dbd1",
    company: "Teklist",
    university: "Bauman Moscow State Technical University",
    paragraph: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  { color: "#cd67ea", company: "Buzzster", university: "American Military University", paragraph: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi." },
  {
    color: "#43360b",
    company: "Feedfish",
    university: "Universidad de la República",
    paragraph:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    color: "#5a3bb2",
    company: "Flipopia",
    university: "Surgut State University",
    paragraph:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    color: "#ca18e4",
    company: "Katz",
    university: "Brac University",
    paragraph:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    color: "#9baf72",
    company: "Skibox",
    university: "Les Roches International School of Hotel Management",
    paragraph:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    color: "#1aafa6",
    company: "Skilith",
    university: "All India Institute of Medical Sciences",
    paragraph:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    color: "#64051a",
    company: "Photobean",
    university: "Targu-Mures University of Theatre",
    paragraph: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    color: "#3143ba",
    company: "Riffpedia",
    university: "Kalamazoo College",
    paragraph:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  },
];

const user_gridColumn = prompt("그리드 열 갯수 설정");

const section = document.createElement("section");
section.style.display = "grid";
section.style.gridTemplateColumns = `repeat(${user_gridColumn}, 1fr)`;
document.body.appendChild(section);

data.forEach((v) => {
  const article = document.createElement("article");
  article.style.display = "flex";
  article.style.flexDirection = "column";
  article.style.justifyContent = "center";
  article.style.alignItems = "center";
  article.style.padding = "100px";
  section.appendChild(article);

  const h3 = document.createElement("h3");
  h3.style.color = v.color;
  h3.innerText = v.company;
  article.appendChild(h3);

  const span = document.createElement("span");
  span.innerText = v.university;
  article.appendChild(span);

  const p = document.createElement("p");
  p.innerText = v.paragraph;
  article.appendChild(p);
});
