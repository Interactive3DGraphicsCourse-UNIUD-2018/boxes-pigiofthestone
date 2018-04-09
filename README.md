# Tower Bridge animato DA CORREGGERE

![Image from Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/1920px-Tower_Bridge_London_Feb_2006.jpg)

##ATTENZIONE
Per far girare il codice Tower Bridge.html è necessario utilizzare un Web server come Xampp o simili.

## Idee iniziali
Le mie idee iniziali sono state molteplici ma sono state tutte scartate a causa o del poco tempo disponibile o per l'eccessiva mole di lavoro da dedicarci. Inizialmente ho pensato ad un cubo di Rubik auto-risolvente o risolvibile dall'utente ma mamma [Google](https://www.google.com/doodles/rubiks-cube) c'aveva gia pensato. Poi ho pensato di creare un piccolo mondo Pokémon con alcuni dei personaggi animati ma anche questa idea è stata scartata. Infine spulciando un po' su [Google Poly](https://poly.google.com/) ho trovato [questa barchetta](https://poly.google.com/view/0C28iix4FPm) che mi ha fatto venire l'ispirazione. Ho deciso così di creare una barchetta che naviga su di un fiume e di utilizzare un ponte levatoio per eseguire l'animazione. Ho preso spunto dal [Tower Bridge](https://it.wikipedia.org/wiki/Tower_Bridge) di Londra per il ponte e poi ho deciso di aggiungerci anche un'automobile che passasse sopra il ponte.

## Disegni preliminari e prima stesura del codice

Ho iniziato il progetto facendo qualche schizzo preliminare per avere un'idea degli ingombri spaziali.
![Sketch barca](https://github.com/Interactive3DGraphicsCourse-UNIUD-2018/boxes-pigiofthestone/blob/master/sketches/Document_2.jpg)
Ho disegnato poi lo scenario e il ponte levatoio.
![Sketch ponte e terreno](https://github.com/Interactive3DGraphicsCourse-UNIUD-2018/boxes-pigiofthestone/blob/master/sketches/Document_3.jpg)
(https://github.com/Interactive3DGraphicsCourse-UNIUD-2018/boxes-pigiofthestone/blob/master/sketches/Document_4.jpg)
(https://github.com/Interactive3DGraphicsCourse-UNIUD-2018/boxes-pigiofthestone/blob/master/sketches/Document_5.jpg)
(https://github.com/Interactive3DGraphicsCourse-UNIUD-2018/boxes-pigiofthestone/blob/master/sketches/Document_6.jpg)
(https://github.com/Interactive3DGraphicsCourse-UNIUD-2018/boxes-pigiofthestone/blob/master/sketches/Document_7.jpg)
(https://github.com/Interactive3DGraphicsCourse-UNIUD-2018/boxes-pigiofthestone/blob/master/sketches/Document_8.jpg)

Ho iniziato scrivendo il codice della barca e del ponte, poi mi sono concentrato sull'animazione del ponte levatoio.
Finito di scrivere il grosso degli oggetti in scena mi sono concentrato sulla creazione della heightmap. Ho trovato molto difficoltoso creare la heightmap, visto che incappavo in continui errori.

## Correzione del codice e revisioni
Finito di scrivere il codice di partenza mi sono concentrato per sistemare alcuni problemi:
- ho aggiustato la rotazione delle piattaforme che "uscivano" dal loro asse di rotazione
- ho scalato tutti gli oggetti principali in base alla grandezza della nuova heightmap
- ho aggiustato l'animazione dell'auto. Ora si ferma prima che il ponte si alzi
- ho creato una heightmap mia con un editor di immagini 
