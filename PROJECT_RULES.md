# DEAL NS — obavezna pravila rada

## KRITIČNO UPOZORENJE

**NE KORISTITI NETLIFY NI POD KOJIM USLOVIMA.**

Za DEAL NS je zabranjeno koristiti Netlify za:
- produkciju,
- preview,
- testiranje,
- fallback,
- backup,
- privremeni hosting,
- deployment ili bilo kakvu pomoćnu varijantu.

Pre bilo kakve izmene, testa ili deploymenta na ovom projektu prvo proveriti ovo pravilo.

Dozvoljena arhitektura projekta: **GitHub Pages + GitHub + Supabase** i postojeći GitHub backup/fallback mehanizmi.

Ako neki zadatak nije moguće uraditi u toj arhitekturi, zaustaviti se i ne uvoditi Netlify kao alternativu.
