# Diagnostika Opera Browser Connector

## 1. Zjisteny stav

- Instalace Opery nalezena v `C:\Users\Adelka\AppData\Local\Programs\Opera`.
- Spustitelny soubor: `C:\Users\Adelka\AppData\Local\Programs\Opera\opera.exe`.
- Zjistena verze z `opera.exe`: `133.0.5932.34`.
- Produktovy nazev ve Windows: `Opera Internet Browser`.
- Profil Opery nalezen v `C:\Users\Adelka\AppData\Roaming\Opera Software\Opera Stable`.
- Podle cesty profilu jde o stabilni Operu, ne o Opera GX ani Developer kanal.
- Opera byla v dobe kontroly spustena.
- V instalacnim adresari zustavaji i starsi slozky verzi, aktualne pouzivany `opera.exe` ale hlasi `133.0.5932.34`.
- Z uzivatelskeho popisu jsou v nastaveni videt a zapnute:
  - Opera AI,
  - navrhy AI ve vyskakovacim okne pri zvyrazneni textu,
  - ChatGPT v postranni liste.
- Z uzivatelskeho popisu nejsou videt:
  - Browser Connector,
  - Allow AI connection.
- V lokalnim profilu byla nalezena konfigurace `earlybird` s prazdnym seznamem `flags`, tedy bez jasne aktivnich Early Bird flagu.
- V ctenych lokalnich konfiguracich nebyl nalezen jednoznacny zaznam pro `Browser Connector`, `Allow AI connection`, `AI Services` nebo `MCP`.
- Pri lokalni kontrole nebylo mozne spolehlive overit prihlaseni k Opera uctu. Lokalne nebyl v beznem Chromium profilu videt prihlaseny Google/Chromium ucet, ale to neni totaz co Opera ucet.
- Aktualnost Opery nebyla definitivne overena proti oficialnimu aktualizacnimu serveru. Je potreba overit primo v Opere pres `opera://about` nebo `opera://update`.

Poznamka ke zdrojum: verejne dohledana sekundarni zprava z dubna 2026 popisuje Browser Connector jako funkci pro Opera One a Opera GX v rezimu Early Bird, aktivovanou v nastaveni pod AI Services. Oficialni stranka Opery s presnou dostupnosti nebyla pri rychlem overeni nalezena, proto je nutne brat dostupnost podle kanalu jako pravdepodobnou, ne definitivne potvrzenou.

Zdroj: [Cinco Dias / El Pais, 17. 4. 2026](https://cincodias.elpais.com/smartlife/lifestyle/2026-04-17/opera-nueva-funcion-ia-browser-connector.html)

## 2. Problem

Nejpravdepodobnejsi pricina je, ze aktualni Opera ma zapnutou beznou AI integraci a ChatGPT v postranni liste, ale nema dostupnou nebo povolenou samostatnou funkci Browser Connector.

ChatGPT v postranni liste neznamena, ze je aktivni Browser Connector. Postranni lista pouze otevre ChatGPT uvnitr Opery. Browser Connector je samostatne opravneni, ktere musi byt v Opere videt a povolene jako pripojeni pro AI.

Podle dostupnych informaci muze byt Browser Connector omezeny na:

- konkretni kanal Opery,
- konkretni verzi Opera One nebo Opera GX,
- Early Bird / experimentalni AI funkce,
- prihlaseny Opera ucet,
- postupny rollout podle uctu, regionu nebo serverove konfigurace.

Jestlize v nastaveni neni videt `Browser Connector` ani `Allow AI connection`, ChatGPT nema co pripojit a vraci chybu:

```text
Browser not connected. Make sure to enable "Allow AI connection" in the "Browser Connector" and sign in with your Opera account.
```

## 3. Rozdil mezi ChatGPT v postranni liste a Browser Connector

`ChatGPT v postranni liste` znamena, ze Opera umi otevrit ChatGPT v bocnim panelu. Je to prakticky zkratka nebo integrovane okno pro ChatGPT.

`Browser Connector` je jina vrstva. Povoluje ChatGPT pristup k informacim z prohlizece, typicky k otevrenym tabum, obsahu aktualni stranky a screenshotum. Proto vyzaduje zvlastni souhlas v Opere a prihlaseni k Opera uctu.

Z hlediska bezpecnosti je to vyznamny rozdil. Postranni lista je jen aplikace ChatGPT v prohlizeci, zatimco Browser Connector dava ChatGPT opravnenejsi kontext z prohlizece.

## 4. Doporučeny postup zprovozneni

1. Otevri Operu a prejdi na:

   ```text
   opera://about
   ```

2. Nech Operu zkontrolovat aktualizace. Pokud nabidne aktualizaci, proved ji a Operu restartuj.

3. Po restartu otevri nastaveni Opery:

   ```text
   opera://settings
   ```

4. V nastaveni postupne vyhledej tyto vyrazy:

   ```text
   Browser Connector
   Allow AI connection
   AI Services
   Early Bird
   Experimental AI features
   MCP
   ChatGPT
   Aria
   ```

5. Pokud existuje sekce `AI Services`, otevri ji a hledej polozku `Browser Connector`.

6. Pokud existuje polozka `Browser Connector`, zapni:

   ```text
   Allow AI connection
   ```

7. Otevri nastaveni uctu v Opere a over, ze jsi prihlaseny k Opera uctu. Hledej ikonu profilu nebo sekci synchronizace / Opera account.

8. Pokud je dostupne `Early Bird` nebo experimentalni AI funkce, zapni je pouze tehdy, pokud jsou jasne popsane jako AI / Browser Connector / MCP souvisejici. Potom Operu restartuj.

9. Po restartu znovu zkontroluj `opera://settings` a vyhledej `Browser Connector`.

10. Teprve kdyz je v Opere zapnute `Allow AI connection`, vrat se do ChatGPT a zkus Opera Browser Connector znovu.

Volitelna kontrola pres flags:

1. Otevri:

   ```text
   opera://flags
   ```

2. Vyhledej:

   ```text
   AI
   Browser Connector
   MCP
   Early Bird
   ChatGPT
   ```

3. Men jen flagy, ktere zjevne patri k AI / Browser Connectoru. Nemen nahodne sitove, bezpecnostni ani renderingove flagy.

4. Po zmene flagu Operu restartuj.

## 5. Co zkusit, kdyz polozka stale neni videt

1. Znovu over aktualizaci Opery pres `opera://about`.

2. Over prihlaseni k Opera uctu. Chybova hlaska ChatGPT vyslovne zminuje prihlaseni.

3. Zkus zapnout `Early Bird`, pokud je v aktualni Opere dostupny.

4. Pokud stabilni Opera stale Browser Connector nenabizi, vyzkousej aktualni Opera One z oficialniho webu Opery.

5. Pokud Opera One Stable funkci stale nema, vyzkousej Opera GX nebo Developer kanal, idealne jen jako oddeleny test. Neprepisuj rucne stavajici profil.

6. Pri testu jineho kanalu pouzij novy nebo oddeleny profil a nejdrive over, zda se v nastaveni objevi `Browser Connector` / `Allow AI connection`.

7. Pokud se funkce neobjevi ani v aktualnim kanalu s Early Bird, je pravdepodobne rizeni serverovym rolloutem, regionem, uctem nebo docasnou nedostupnosti funkce.

8. Neprepisuj rucne soubory profilu Opery. Bez presne znalosti schema nastaveni a serverovych flagu by to bylo krehke a mohlo by to poskodit profil.

## 6. Nahradni workflow bez connectoru

Pokud Browser Connector nelze zprovoznit, audit lokalniho webu jde provest bez nej. Pro lokalni web je vhodne nepouzivat `file://`, ale spustit jednoduchy lokalni server.

Postup pres Python:

```powershell
cd C:\CodexWorkspace\20-websites\codex_navrh
python -m http.server 8000 --bind 127.0.0.1
```

Potom otevri:

```text
http://127.0.0.1:8000/
```

Alternativy:

- ve VS Code pouzit Live Server,
- spustit projektovy dev server, pokud existuje,
- otevrit web pres `localhost` misto `file://`.

Screenshoty pro audit lze dodat rucne:

- desktop: napr. 1440 px sirka,
- tablet: napr. 768 px sirka,
- mobil: napr. 390 px sirka.

Automatizovany audit lze udelat pres Playwright nebo Puppeteer. Pokud uz je Playwright dostupny, priklad postupu:

```powershell
cd C:\CodexWorkspace\20-websites\codex_navrh
python -m http.server 8000 --bind 127.0.0.1
```

V jinem terminalu lze spustit skript, ktery otevre `http://127.0.0.1:8000/` v ruznych viewportech a ulozi screenshoty. Pokud Playwright neni nainstalovany, instalace vyzaduje stazeni zavislosti a je vhodne ji potvrdit predem.

Prakticky dopad: i bez Browser Connectoru lze pokracovat v upravach webu, jen se misto primeho propojeni s otevrenymi taby pouziji screenshoty, lokalni server a automatizovane testovani.

## 7. Otevrena rizika

- Browser Connector nemusi byt dostupny ve stabilni verzi Opery.
- Funkce muze byt dostupna jen v Opera One, Opera GX, Developer kanalu nebo Early Bird rezimu.
- Funkce muze vyzadovat prihlaseni k Opera uctu.
- Funkce muze byt rizena serverovym rolloutem a nemusi se zobrazit vsem uzivatelum najednou.
- ChatGPT Browser Connector nemusi podporovat `file://` stranky, i kdyz bude spojeni s Operou jinak funkcni.
- Lokalni vyhledani v konfiguraci Opery neni definitivni dukaz neexistence funkce, protoze cast nastaveni muze byt v binarnich souborech, remote flazich nebo serverove konfiguraci.
- Zapnuti Browser Connectoru zvysuje rozsah dat, ke kterym muze mit AI nastroj pristup. Je potreba zapinat ho vedome a pouze tam, kde je to zadouci.

## Kontrola

Overeno:

- Opera je nainstalovana v `C:\Users\Adelka\AppData\Local\Programs\Opera`.
- Aktivni `opera.exe` hlasi verzi `133.0.5932.34`.
- Profil odpovida `Opera Stable`.
- Opera byla pri kontrole spustena.
- V lokalni konfiguraci byl nalezen prazdny seznam Early Bird flagu.
- V ctenych lokalnich konfiguracich nebyla nalezena jasna polozka `Browser Connector` / `Allow AI connection`.
- Uzivatel vidi bezne AI volby a ChatGPT v postranni liste, ale nevidi Browser Connector.

Nebyl mozny overit:

- zda je Opera podle oficialniho updateru uplne aktualni,
- zda je uzivatel prihlaseny k Opera uctu,
- zda je Browser Connector dostupny po serverovem rolloutu pro konkretni Opera ucet,
- zda aktualni ChatGPT connector podporuje lokalni `file://` stranky,
- zda by se polozka objevila v Opera GX nebo Developer kanalu.

Nejpravdepodobnejsi dalsi krok:

Otevrit `opera://about`, aktualizovat a restartovat Operu, prihlasit se k Opera uctu, zapnout dostupne Early Bird / AI Services volby a v `opera://settings` vyhledat `Browser Connector` nebo `Allow AI connection`. Pokud se polozka stale nezobrazi, otestovat Opera GX nebo Developer kanal s oddelenym profilem a mezitim pokracovat v auditu webu pres lokalni server `http://127.0.0.1:8000/`.
