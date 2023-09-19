Campominato DOM
===
## Consegna

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).

1. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

**Attenzione:** 
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

2. In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

3. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba, fare visulaizzare tutte le bombe in gliglia e congelare la griglia.

**BONUS:**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


## Procedimento

1. salvo in un array 16 numeri casuali nel range della difficoltà, facendo il controllo sullunicità del numero estratto ;

1. creo un array di elementi (quadrati);

1. quando clicco verifico se l'id del quadrato cliccato è incluso nell' array bombe, se si aggiungo al quadrato la classe bomba e accendo un flag di fine gioco, se no incremento un counter per aumentare il punteggio;

1. controllo il flag di fine gioco, se è true disattivo la griglia e accendo tutte le bombe scorrendo l'array di elementi.
Stampo in pagina il messaggio hai perso e il totale del punteggio;
