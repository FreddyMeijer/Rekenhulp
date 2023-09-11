## Rekenhulp
De rekenhulp is tot stand gekomen ten behoeve van rekenonderwijs op IKC de Meerpaal in Zoetermeer. De opdrachtomschrijving is als volgt:

1. De sommen komen uit de tafels van 1 tot en met 12
2. De tafels lopen van 1 tot en met 12. Het laagste getal is 0 en het hoogste is 144 (12*12)
3. Er moet een mogelijkheid zijn om te rekenen met rest.
4. De code moet het mogelijk maken om te kiezen voor vermenigvuldigen, delen of een mix.
5. De code moet het mogelijk maken om de som te geven (`a + b = x` waarbij x uitgerekend moet worden) of het antwoord en een van de variabelen (`a + b = x` waarbij b onbekend is)

#### Bediening naar andere kant
De bediening van de rekenhulp zit links. Als je het prettiger vindt om de bediening rechts te hebben, kan je dat doen door deze code uit main.css aan te passen:

```css
.dashboard{
    position: absolute;
    bottom: 25px;
    left: 10px;
}
```
naar:

```css
.dashboard{
    position: absolute;
    bottom: 25px;
    right: 10px;
}
```